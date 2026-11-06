"use client";

import { useEffect, useState, type ReactNode } from "react";

// One block of a one-pager that shows its items one at a time, in a fixed space.
// It moves on by itself (a thin line under the tabs fills to show when), stops while the reader points at it or
// tabs into it, and never moves for someone who asked their computer for less motion. Every item stays one press
// away on the tabs.
export default function Cycler({
  label,
  tabs,
  items,
  every = 6000,
}: {
  label: string;
  tabs: ReactNode[];
  items: ReactNode[];
  every?: number;
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

  const tabClass = (on: boolean) =>
    `text-left border transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#077d95] ${
      on ? "bg-[#233219] text-[#fdfaf0] border-[#233219]" : "border-[#233219]/20 text-[#233219]/70 hover:text-[#233219] hover:border-[#233219]/45"
    }`;

  return (
    <div
      className="h-full min-w-0 flex flex-col"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      <div>
        <div role="tablist" aria-label={label} className="flex flex-wrap gap-1.5">
          {tabs.map((t, n) => (
            <button
              key={n}
              type="button"
              role="tab"
              aria-selected={n === i}
              onClick={() => setI(n)}
              className={`${tabClass(n === i)} min-h-[34px] px-2.5 text-sm`}
            >
              {t}
            </button>
          ))}
        </div>
        {/* The timer: fills while the block waits to move on; empty while held, and restarts with the wait. */}
        {!still && (
          <div className="mt-2 h-[2px] bg-[#233219]/10 overflow-hidden" aria-hidden="true">
            <div
              key={`${i}-${held}`}
              className={`h-full bg-[#077d95] origin-left ${held ? "scale-x-0" : "animate-[cycler-fill_linear_forwards]"}`}
              style={{ animationDuration: `${every}ms` }}
            />
          </div>
        )}
      </div>
      {/* Every item sits in the same grid cell, so the block keeps the height of its tallest item and never jumps. */}
      <div className="grid grid-cols-1 min-w-0 flex-1 mt-4">
        {items.map((it, n) => (
          <div
            key={n}
            role="tabpanel"
            aria-hidden={n !== i}
            className={`[grid-area:1/1] min-w-0 transition-opacity duration-500 ease-out ${
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
