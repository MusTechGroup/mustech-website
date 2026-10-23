"use client";

import { useState } from "react";
import { useExample } from "@/components/JumpstartExamples";
import { STANDUPS, type Example, type StandupItem } from "@/lib/jumpstartExamples";

/** Remounts on every switch, so each example starts with a fresh morning list. */
export default function JumpstartStandup() {
  const { example } = useExample();
  return <Standup key={example.id} example={example} items={STANDUPS[example.id]} />;
}

const KIND_LABEL = { decide: "Decide", input: "Input", notify: "Notify" } as const;

function Standup({ example, items }: { example: Example; items: StandupItem[] }) {
  const [done, setDone] = useState<Record<number, number>>({});
  const open = items.filter((it, i) => it.kind !== "notify" && done[i] === undefined).length;
  const reads = items.filter((it) => it.kind === "notify").length;
  const more = Math.max(0, example.installed - example.departments.length);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[14rem_1fr] border border-white/15 bg-[#0b0b0a]">
      {/* Departments */}
      <aside className="hidden lg:block border-r border-white/15 p-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#efe9d8]/55 mb-4">Departments</p>
        <ul className="space-y-2.5 text-sm text-[#efe9d8]/80">
          {example.departments.map((d) => (
            <li key={d.name} className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${d.level === "Level 2" ? "bg-[#f5cb1d]" : "bg-[#efe9d8]/50"}`} />
              {d.name}
            </li>
          ))}
          {more > 0 && <li className="text-[#efe9d8]/50 pl-3.5">and {more} more</li>}
        </ul>
      </aside>

      {/* The morning list */}
      <div className="p-5 sm:p-8 min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-white/15 pb-5">
          <p aria-live="polite" className="font-brand font-bold text-2xl sm:text-3xl text-[#efe9d8] leading-tight js-swap">
            {open > 0 ? (
              <>
                {open} {open === 1 ? "thing needs" : "things need"} you.
              </>
            ) : (
              <>All clear. Nothing needs you.</>
            )}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-[#efe9d8]/55">Tuesday, 8:00 · {reads} to read</p>
        </div>

        <ul>
          {items.map((it, i) => {
            const resolved = done[i] !== undefined;
            return (
              <li
                key={i}
                className="js-swap relative grid grid-cols-1 sm:grid-cols-[5.5rem_1fr] gap-x-5 gap-y-2 py-4 border-b border-white/10"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                {it.red && !resolved && <span aria-hidden="true" className="absolute left-0 top-4 bottom-4 w-0.5 bg-[#e5484d] -ml-5 sm:-ml-8" />}
                <span
                  className={`self-start inline-flex justify-center px-2 py-1 text-[11px] font-bold uppercase tracking-wider ${
                    it.kind === "decide"
                      ? "bg-[#f5cb1d] text-[#111]"
                      : it.kind === "input"
                        ? "border border-[#efe9d8]/60 text-[#efe9d8]"
                        : "text-[#efe9d8]/50 border border-white/10"
                  }`}
                >
                  {KIND_LABEL[it.kind]}
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-[#efe9d8]/50 mb-1 flex flex-wrap items-center gap-x-3">
                    {it.dept}
                    {it.red && !resolved && <span className="text-[#ff8a8e] font-semibold">{it.red}</span>}
                  </p>
                  <p className={`text-sm sm:text-base leading-relaxed ${resolved || it.kind === "notify" ? "text-[#efe9d8]/65" : "text-[#efe9d8]"}`}>
                    {it.text}
                  </p>
                  {it.actions && !resolved && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {it.actions.map((a, n) => (
                        <button
                          key={a}
                          type="button"
                          onClick={() => setDone((d) => ({ ...d, [i]: n }))}
                          className={`px-4 min-h-[44px] text-xs font-bold uppercase tracking-wider border transition-colors ${
                            n === 0 ? "border-[#f5cb1d] text-[#f5cb1d] hover:bg-[#f5cb1d] hover:text-[#111]" : "border-white/30 text-[#efe9d8] hover:border-white/70"
                          }`}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  )}
                  {resolved && it.actions && (
                    <p role="status" className="mt-2 text-xs text-[#efe9d8]/55">
                      {it.actions[done[i]]}. {it.logged}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-xs text-[#efe9d8]/50">Red is shown, never blocking. The work carries on either way.</p>
      </div>
    </div>
  );
}
