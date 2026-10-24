"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { reducedMotion } from "@/lib/motion";

const JUMPSTART = "/jumpstart";
const norm = (p: string) => p.replace(/\/$/, "") || "/";

// Both pages stay visible while the page changes, thanks to the View Transitions API.
// The page you arrive on is revealed through a grid of squares laid over the page you leave, in both directions.
// Browsers without the API, and people who ask for reduced motion, get a normal navigation.

const COLS = 16;

interface Grid {
  cols: number;
  rows: number;
  w: number;
  h: number;
  /** When each square appears, 0 to 1. A diagonal sweep from the top left, scattered by chance. */
  at: number[];
}

function tileGrid(): Grid {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const cell = w / COLS;
  const rows = Math.ceil(h / cell);
  const at: number[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < COLS; c++) {
      const sweep = (c / COLS + r / rows) / 2;
      at.push(sweep * 0.45 + Math.random() * 0.55);
    }
  }
  return { cols: COLS, rows, w, h, at };
}

const FLASH = 0.14;

/**
 * Squares that have finished flashing show the new page, through an SVG mask.
 * Squares still flashing are painted on a canvas above both pages: dark first, then yellow.
 */
function paintTiles(g: Grid, t: number, canvas: HTMLCanvasElement | null, root: HTMLElement) {
  const cell = g.w / g.cols;
  const p = t * (1 + FLASH) * 1.05;
  const ctx = canvas?.getContext("2d");
  if (canvas && ctx) {
    if (canvas.width !== g.w || canvas.height !== g.h) {
      canvas.width = g.w;
      canvas.height = g.h;
    }
    ctx.clearRect(0, 0, g.w, g.h);
  }
  let full = "";
  g.at.forEach((when, i) => {
    const x = (i % g.cols) * cell;
    const y = Math.floor(i / g.cols) * cell;
    if (p >= when + FLASH) {
      const s = (cell + 0.6).toFixed(1);
      full += `M${x.toFixed(1)} ${y.toFixed(1)}h${s}v${s}h-${s}z`;
    } else if (p >= when && ctx) {
      ctx.fillStyle = p < when + FLASH / 2 ? "#050504" : "#f5cb1d";
      ctx.fillRect(x, y, cell + 0.6, cell + 0.6);
    }
  });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${g.w} ${g.h}" preserveAspectRatio="none"><path fill="#000" d="${full}"/></svg>`;
  root.style.setProperty("--vt-mask", `url("data:image/svg+xml,${encodeURIComponent(svg)}")`);
}

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const tilesRef = useRef<HTMLCanvasElement | null>(null);
  const pending = useRef<{ path: string; resolve: () => void } | null>(null);
  const busy = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    if (typeof document.startViewTransition !== "function") return;
    if (reducedMotion()) return;

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

    const play = () => {
      const ms = 900;
      const grid = tileGrid();
      root.animate([{ transform: "scale(1)" }, { transform: "scale(1.06)" }], {
        duration: ms,
        easing: "linear",
        fill: "both",
        pseudoElement: "::view-transition-old(root)",
      });
      return frames(ms, (t) => paintTiles(grid, t, tilesRef.current, root));
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
      if (there !== JUMPSTART && here !== JUMPSTART) return;

      e.preventDefault();
      if (busy.current) return;
      busy.current = true;
      paintTiles(tileGrid(), 0, tilesRef.current, root);
      root.dataset.vt = "tiles";
      const vt = document.startViewTransition(() => navigate(url.pathname + url.search + url.hash));
      vt.ready.then(play).catch(() => {});
      vt.finished
        .catch(() => {})
        .finally(() => {
          delete root.dataset.vt;
          root.style.removeProperty("--vt-mask");
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
    <>
      <canvas ref={tilesRef} id="js-tiles" aria-hidden="true" />
    </>
  );
}
