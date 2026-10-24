"use client";

import { useEffect, useRef } from "react";
import { reducedMotion } from "@/lib/motion";

// A celestial sphere seen from inside: stars sit on a large sphere, nebulae drift between them,
// and the camera slowly yaws and bobs while leaning toward the pointer. No tunnel, no warp.
const CFG = { speed: 0.5, parallax: 1.6, nebulaOpacity: 0.9, fov: 780, zOffset: 1050 };
const BG = "#03050a";
const NEBULAE = [
  [36, 50, 132],
  [20, 66, 115],
  [58, 34, 108],
  [15, 80, 102],
].map((c, i) => {
  const a = (i / 4) * 6.283;
  return { x: Math.cos(a) * 950, y: ((i % 2) - 0.5) * 450, z: Math.sin(a) * 950, rad: 720, c };
});

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !ctx) return;
    const still = reducedMotion();
    let w = 0;
    let h = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;
    const cam = { x: 0, y: 0, tx: 0, ty: 0, yaw: 0, pitch: 0, tyaw: 0, tpitch: 0, cyaw: 0.35, cpitch: 0.18, croll: -0.22, t: 0 };

    const stars = Array.from({ length: window.innerWidth < 700 ? 650 : 1200 }, () => {
      const rad = 420 + Math.random() * 1450;
      const th = Math.random() * 6.283;
      const ph = Math.acos((Math.random() - 0.5) * 1.84);
      return {
        x: rad * Math.sin(ph) * Math.cos(th),
        y: rad * Math.cos(ph) * 0.82,
        z: rad * Math.sin(ph) * Math.sin(th),
        rad,
        r: 0.55 + Math.random() * 1.1,
        p: Math.random() * 6.28,
      };
    });

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      cx = w / 2;
      cy = h / 2;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (still) draw();
    };

    const project = (wx: number, wy: number, wz: number, pw: number) => {
      const yw = cam.cyaw + cam.yaw;
      const pt = cam.cpitch + cam.pitch;
      const rl = cam.croll;
      const cyw = Math.cos(yw);
      const syw = Math.sin(yw);
      const cp = Math.cos(pt);
      const sp = Math.sin(pt);
      const cr = Math.cos(rl);
      const sr = Math.sin(rl);
      const x1 = wx * cyw - wz * syw;
      const z1 = wz * cyw + wx * syw;
      const y2 = wy * cp - z1 * sp;
      const z2 = z1 * cp + wy * sp;
      const x3 = x1 * cr - y2 * sr;
      const y3 = y2 * cr + x1 * sr;
      const vz = z2 + CFG.zOffset;
      if (vz <= 90) return null;
      const s = CFG.fov / vz;
      return { sx: cx + (x3 - cam.x * pw) * s, sy: cy + (y3 - cam.y * pw) * s, s, vz };
    };

    function draw() {
      ctx!.fillStyle = BG;
      ctx!.fillRect(0, 0, w, h);
      for (const n of NEBULAE) {
        const p = project(n.x, n.y, n.z, 0.55);
        if (!p) continue;
        const r = n.rad * p.s;
        const g = ctx!.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r);
        g.addColorStop(0, `rgba(${n.c[0]},${n.c[1]},${n.c[2]},${0.18 * CFG.nebulaOpacity})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx!.fillStyle = g;
        ctx!.fillRect(p.sx - r, p.sy - r, r * 2, r * 2);
      }
      for (const st of stars) {
        const pw = 0.65 + (1 - Math.min(1, st.rad / 1800)) * 0.75;
        const p = project(st.x, st.y, st.z, pw);
        if (!p || p.sx < 0 || p.sx > w || p.sy < 0 || p.sy > h) continue;
        const a = Math.min(0.75, Math.max(0.04, (1 - (p.vz - 180) / 2600) * (0.8 + 0.2 * Math.sin(st.p))));
        ctx!.fillStyle = `rgba(220,232,255,${a})`;
        ctx!.beginPath();
        ctx!.arc(p.sx, p.sy, Math.max(0.45, st.r * p.s * 0.95), 0, 6.28);
        ctx!.fill();
      }
    }

    const step = () => {
      cam.t += 0.0014 * CFG.speed;
      cam.cyaw += 0.00022 * CFG.speed;
      cam.cpitch = 0.16 + Math.sin(cam.t * 0.7) * 0.08;
      const ax = Math.sin(cam.t) * 70;
      const ay = Math.cos(cam.t * 0.8) * 50;
      cam.x += (cam.tx + ax - cam.x) * 0.042;
      cam.y += (cam.ty + ay - cam.y) * 0.042;
      cam.yaw += (cam.tyaw - cam.yaw) * 0.042;
      cam.pitch += (cam.tpitch - cam.pitch) * 0.042;
      for (const st of stars) st.p += 0.012;
      draw();
      raf = requestAnimationFrame(step);
    };

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / w - 0.5) * 2;
      const ny = (e.clientY / h - 0.5) * 2;
      cam.tx = nx * 260 * CFG.parallax;
      cam.ty = ny * 190 * CFG.parallax;
      cam.tyaw = nx * 0.24 * CFG.parallax;
      cam.tpitch = -ny * 0.16 * CFG.parallax;
    };
    const onVisible = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !still) raf = requestAnimationFrame(step);
    };

    resize();
    window.addEventListener("resize", resize);
    if (still) {
      draw();
    } else {
      raf = requestAnimationFrame(step);
      window.addEventListener("mousemove", onMove, { passive: true });
      document.addEventListener("visibilitychange", onVisible);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="js-stars" />;
}
