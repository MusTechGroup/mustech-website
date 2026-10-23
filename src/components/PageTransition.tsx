"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { easeOut, reducedMotion } from "@/lib/motion";

const JUMPSTART = "/jumpstart";
const norm = (p: string) => p.replace(/\/$/, "") || "/";

// Both layers stay visible while the page changes, thanks to the View Transitions API:
// going in, the page you leave breaks into pixels while Jumpstart sharpens up underneath;
// going out, Jumpstart swoops away through a convex lens while the next page zooms out into place.
// Browsers without the API, and people who ask for reduced motion, get a normal navigation.

const pxFilter = (id: string) => `
  <filter id="${id}" filterUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" color-interpolation-filters="sRGB">
    <feFlood x="0" y="0" width="1" height="1" data-r="flood"/>
    <feComposite width="1" height="1" data-r="size"/>
    <feTile result="t"/>
    <feComposite in="SourceGraphic" in2="t" operator="in"/>
    <feMorphology operator="dilate" radius="0" data-r="morph"/>
  </filter>`;

const FILTERS = `${pxFilter("js-px-old")}${pxFilter("js-px-new")}
  <filter id="js-fisheye" filterUnits="userSpaceOnUse" x="0" y="0" width="1" height="1" color-interpolation-filters="sRGB">
    <feImage x="0" y="0" width="1" height="1" preserveAspectRatio="none" result="map" data-r="map"/>
    <feDisplacementMap in="SourceGraphic" in2="map" scale="0" xChannelSelector="R" yChannelSelector="G" data-r="disp"/>
  </filter>`;

function bulgeMap(): string {
  const n = 128;
  const c = document.createElement("canvas");
  c.width = c.height = n;
  const ctx = c.getContext("2d");
  if (!ctx) return "";
  const img = ctx.createImageData(n, n);
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const nx = (x / (n - 1)) * 2 - 1;
      const ny = (y / (n - 1)) * 2 - 1;
      const f = 1 - Math.min(1, nx * nx + ny * ny);
      const i = (y * n + x) * 4;
      img.data[i] = 128 + 127 * -nx * f;
      img.data[i + 1] = 128 + 127 * -ny * f;
      img.data[i + 2] = 128;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return c.toDataURL();
}

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pending = useRef<{ path: string; resolve: () => void } | null>(null);
  const busy = useRef(false);

  useEffect(() => {
    const svg = svgRef.current;
    const root = document.documentElement;
    if (!svg || typeof document.startViewTransition !== "function") return;
    if (reducedMotion()) return;

    const q = (id: string, r: string) => svg.querySelector<SVGElement>(`#${id} [data-r="${r}"]`);
    const setRegion = () => {
      const w = String(window.innerWidth);
      const h = String(window.innerHeight);
      svg.querySelectorAll("filter").forEach((f) => {
        f.setAttribute("width", w);
        f.setAttribute("height", h);
      });
      const map = q("js-fisheye", "map");
      map?.setAttribute("width", w);
      map?.setAttribute("height", h);
      if (map && !map.getAttribute("href")) map.setAttribute("href", bulgeMap());
    };

    const pixelate = (id: string, cell: number) => {
      const c = Math.max(1, Math.round(cell));
      const half = Math.floor(c / 2);
      const flood = q(id, "flood");
      flood?.setAttribute("x", String(half));
      flood?.setAttribute("y", String(half));
      flood?.setAttribute("width", "1");
      flood?.setAttribute("height", "1");
      const size = q(id, "size");
      size?.setAttribute("width", String(c));
      size?.setAttribute("height", String(c));
      q(id, "morph")?.setAttribute("radius", String(half));
    };

    const frames = (ms: number, fn: (t: number) => void) =>
      new Promise<void>((done) => {
        const t0 = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - t0) / ms);
          fn(t);
          if (t < 1) requestAnimationFrame(tick);
          else done();
        };
        requestAnimationFrame(tick);
      });

    const play = (kind: "in" | "out") => {
      const old = "::view-transition-old(root)";
      const next = "::view-transition-new(root)";
      if (kind === "in") {
        const ms = 700;
        root.animate(
          [
            { transform: "scale(1)", opacity: 1 },
            { transform: "scale(1.12)", opacity: 1, offset: 0.45 },
            { transform: "scale(1.3)", opacity: 0 },
          ],
          { duration: ms, easing: "cubic-bezier(0.5, 0, 0.8, 0.5)", fill: "both", pseudoElement: old }
        );
        root.animate(
          [
            { transform: "scale(0.8)", opacity: 0 },
            { transform: "scale(0.92)", opacity: 1, offset: 0.5 },
            { transform: "scale(1)", opacity: 1 },
          ],
          { duration: ms, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)", fill: "both", pseudoElement: next }
        );
        return frames(ms, (t) => {
          pixelate("js-px-old", 1 + 9 * easeOut(Math.min(1, t / 0.6)));
          pixelate("js-px-new", 1 + 9 * (1 - easeOut(Math.min(1, t / 0.9))));
        });
      }
      const ms = 620;
      root.animate(
        [
          { transform: "scale(1)", opacity: 1 },
          { transform: "scale(0.7)", opacity: 1, offset: 0.55 },
          { transform: "scale(0.3)", opacity: 0 },
        ],
        { duration: ms, easing: "cubic-bezier(0.55, 0, 0.9, 0.45)", fill: "both", pseudoElement: old }
      );
      root.animate(
        [
          { transform: "scale(1.5)", opacity: 0 },
          { transform: "scale(1.2)", opacity: 1, offset: 0.4 },
          { transform: "scale(1)", opacity: 1 },
        ],
        { duration: ms, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)", fill: "both", pseudoElement: next }
      );
      const disp = q("js-fisheye", "disp");
      return frames(ms, (t) => disp?.setAttribute("scale", String(window.innerWidth * 0.7 * easeOut(t))));
    };

    const navigate = (href: string) =>
      new Promise<void>((resolve) => {
        pending.current = { path: norm(new URL(href, window.location.href).pathname), resolve };
        router.push(href);
        window.setTimeout(resolve, 3000);
      });

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const here = norm(window.location.pathname);
      const there = norm(url.pathname);
      if (there === here) return;
      const kind = there === JUMPSTART ? "in" : here === JUMPSTART ? "out" : null;
      if (!kind) return;

      e.preventDefault();
      if (busy.current) return;
      busy.current = true;
      setRegion();
      pixelate("js-px-old", 1);
      pixelate("js-px-new", 1);
      q("js-fisheye", "disp")?.setAttribute("scale", "0");
      root.dataset.vt = kind;
      const vt = document.startViewTransition(() => navigate(url.pathname + url.search + url.hash));
      vt.ready.then(() => play(kind)).catch(() => {});
      vt.finished
        .catch(() => {})
        .finally(() => {
          delete root.dataset.vt;
          busy.current = false;
        });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  useEffect(() => {
    const p = pending.current;
    if (!p || norm(pathname) !== p.path) return;
    pending.current = null;
    // Rendering is paused while the transition waits for the page, so use a timer, not animation frames.
    const t = window.setTimeout(() => p.resolve(), 90);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <svg ref={svgRef} aria-hidden="true" width="0" height="0" style={{ position: "absolute" }} dangerouslySetInnerHTML={{ __html: `<defs>${FILTERS}</defs>` }} />
  );
}
