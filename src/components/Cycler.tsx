"use client";

import { useState, type ReactNode } from "react";

// Static tab switcher for the one-pager: clicking a tab shows that item immediately and stays put.
// No auto-rotation timer and no loading bar.
export default function Cycler({
  label,
  tabs,
  items,
}: {
  label: string;
  tabs: ReactNode[];
  items: ReactNode[];
  every?: number;
}) {
  const [i, setI] = useState(0);

  const tabClass = (on: boolean) =>
    `text-left border font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#077d95] ${
      on
        ? "bg-[#077d95] text-white border-[#077d95]"
        : "border-[#14181a]/20 text-[#14181a]/80 hover:text-[#14181a] hover:border-[#077d95]"
    }`;

  return (
    <div className="h-full min-w-0 flex flex-col">
      <div role="tablist" aria-label={label} className="flex flex-wrap gap-1.5 pb-3 border-b border-[#14181a]/12">
        {tabs.map((t, n) => (
          <button
            key={n}
            type="button"
            role="tab"
            aria-selected={n === i}
            onClick={() => setI(n)}
            className={`${tabClass(n === i)} min-h-[34px] px-3 text-sm`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="min-w-0 flex-1 mt-4" role="tabpanel">
        {items[i]}
      </div>
    </div>
  );
}
