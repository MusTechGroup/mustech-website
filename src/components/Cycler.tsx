"use client";

import { useEffect, useState, type ReactNode } from "react";

// One block of a one-pager that shows its items one at a time, in a fixed space.
// It moves on by itself every few seconds, stops while the reader points at it or tabs into it, and never moves
// for someone who asked their computer for less motion. Every item stays one press away on the numbered tabs.
export default function Cycler({
  label,
  tabs,
  items,
  every = 6000,
  tone = "light",
}: {
  label: string;
  tabs: string[];
  items: ReactNode[];
  every?: number;
  tone?: "light" | "dark";
}) {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setStill(q.matches);
    set();
    q.addEventListener("change", set);
    return () => q.removeEventListener("change", set);
  }, []);

  useEffect(() => {
    if (held || still) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % items.length), every);
    return () => window.clearTimeout(t);
  }, [i, held, still, every, items.length]);

  const on = tone === "dark" ? "bg-[#fdfaf0] text-[#233219]" : "bg-[#233219] text-[#fdfaf0]";
  const off =
    tone === "dark"
      ? "text-[#fdfaf0]/70 hover:text-[#fdfaf0] border-[#fdfaf0]/25"
      : "text-[#233219]/65 hover:text-[#233219] border-[#233219]/20";

  return (
    <div
      className="flex flex-col h-full"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      <div role="tablist" aria-label={label} className="flex flex-wrap gap-1.5">
        {tabs.map((t, n) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={n === i}
            onClick={() => setI(n)}
            className={`min-h-[30px] px-2 border text-[10.5px] font-bold uppercase tracking-[0.08em] transition-colors ${
              n === i ? `${on} border-transparent` : off
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      {/* Every item sits in the same grid cell, so the block keeps the height of its tallest item and never jumps. */}
      <div className="grid flex-1 mt-4" aria-live={held ? "polite" : "off"}>
        {items.map((it, n) => (
          <div
            key={tabs[n]}
            role="tabpanel"
            aria-hidden={n !== i}
            className={`[grid-area:1/1] transition-opacity duration-500 ease-out ${
              n === i ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}
