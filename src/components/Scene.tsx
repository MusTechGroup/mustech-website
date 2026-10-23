"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { clamp01, easeOut, onScrollFrame, reducedMotion } from "@/lib/motion";

interface SceneProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Label shown in the deck rail. */
  deck?: string;
}

/**
 * One scene of the page. It rises into view as a framed window that opens to full width,
 * and recedes into the dark as the next scene arrives. Progress is written to CSS variables.
 */
export default function Scene({ children, className = "", id, deck }: SceneProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;

    return onScrollFrame(() => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -vh || r.top > vh * 2) return;
      const hasNext = el.nextElementSibling?.classList.contains("js-scene") ?? false;
      const enter = easeOut(clamp01((vh - r.top) / (vh * 0.8)));
      const leave = hasNext ? clamp01((vh * 0.7 - r.bottom) / (vh * 0.6)) : 0;
      return () => {
        el.style.setProperty("--in", enter.toFixed(3));
        el.style.setProperty("--out", leave.toFixed(3));
      };
    });
  }, []);

  return (
    <section ref={ref} id={id} data-deck={deck} className={`js-scene ${className}`}>
      <div className="js-scene-inner">{children}</div>
    </section>
  );
}
