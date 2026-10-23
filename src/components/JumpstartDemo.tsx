"use client";

import { useEffect, useRef, useState } from "react";
import { useExample } from "@/components/JumpstartExamples";
import type { Example } from "@/lib/jumpstartExamples";
import { reducedMotion } from "@/lib/motion";

type Stage = 0 | 1 | 2 | 3;

/** Remounts on every switch, so each example starts from a clean, empty note. */
export default function JumpstartDemo() {
  const { example } = useExample();
  return <DemoRun key={example.id} example={example} />;
}

function DemoRun({ example }: { example: Example }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [run, setRun] = useState(0);
  const [chars, setChars] = useState(0);
  const [stage, setStage] = useState<Stage>(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [decision, setDecision] = useState<"yes" | "hold" | null>(null);

  // Start once the demo scrolls into view.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Type the note, then bring in the read-back, the questions, and the decision. Restarts when the example or run changes.
  useEffect(() => {
    if (!started) return;
    const reduce = reducedMotion();
    const timers: number[] = [];
    timers.push(
      window.setTimeout(() => {
        setPicked(null);
        setDecision(null);
        if (reduce) {
          setChars(example.note.length);
          setStage(3);
        } else {
          setChars(0);
          setStage(0);
        }
      }, 0)
    );
    if (reduce) return () => timers.forEach(clearTimeout);

    let i = 0;
    const type = window.setInterval(() => {
      i += 6;
      setChars(Math.min(i, example.note.length));
      if (i >= example.note.length) {
        window.clearInterval(type);
        timers.push(window.setTimeout(() => setStage(1), 250));
        timers.push(window.setTimeout(() => setStage(2), 1100));
        timers.push(window.setTimeout(() => setStage(3), 1700));
      }
    }, 22);
    return () => {
      window.clearInterval(type);
      timers.forEach(clearTimeout);
    };
  }, [started, run, example.note]);

  const typing = started && chars < example.note.length;
  const btn = (on: boolean, alt = false) =>
    `px-4 min-h-[44px] text-xs font-bold uppercase tracking-wider border transition-colors ${
      on
        ? alt
          ? "bg-[#efe9d8] text-[#111] border-[#efe9d8]"
          : "bg-[#f5cb1d] text-[#111] border-[#f5cb1d]"
        : "border-white/30 text-[#efe9d8] hover:border-white/70"
    }`;

  return (
    <div ref={rootRef} className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/15 border border-white/15">
      {/* What the founder types */}
      <div className="js-swap lg:col-span-5 bg-[#0b0b0a] p-5 sm:p-8 flex flex-col">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#efe9d8]/55 mb-4">You type, the way you talk</p>
        <p className="text-base sm:text-lg leading-relaxed text-[#efe9d8] min-h-[11rem]">
          <span className="sr-only">{example.note}</span>
          <span aria-hidden="true">
            {example.note.slice(0, chars)}
            <span
              className={`inline-block w-[0.5em] h-[1.1em] align-text-bottom bg-[#f5cb1d] ml-0.5 ${
                typing || chars === 0 ? "" : "animate-pulse"
              }`}
            />
          </span>
        </p>
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          className="mt-auto self-start pt-6 text-[11px] uppercase tracking-[0.2em] text-[#efe9d8]/60 hover:text-[#f5cb1d] transition-colors min-h-[44px]"
        >
          Run it again
        </button>
      </div>

      {/* What comes back */}
      <div className="js-swap lg:col-span-7 bg-[#0b0b0a] p-5 sm:p-8 min-h-[26rem]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#efe9d8]/55 mb-4">What it heard, in your own words</p>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {example.readback.map((r, i) => (
            <li
              key={r.who}
              className={`py-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 transition-all duration-500 ${
                stage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: `${i * 220}ms` }}
            >
              <span className="font-brand font-bold text-[#efe9d8] text-base sm:text-lg">{r.who}</span>
              <span className="text-sm text-[#efe9d8]/65">{r.what}</span>
              <mark className="bg-[#f5cb1d] text-[#111] px-1.5 text-xs sm:text-sm font-semibold">&ldquo;{r.quote}&rdquo;</mark>
              <span className="text-xs text-[#efe9d8]/55">{r.rest}</span>
            </li>
          ))}
        </ul>
        <p className={`mt-2 text-xs text-[#efe9d8]/55 transition-opacity duration-500 ${stage >= 1 ? "opacity-100" : "opacity-0"}`}>
          Your words are quoted, not tidied up. Read it, then confirm.
        </p>

        <div className={`mt-6 space-y-3 transition-all duration-500 ${stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
          <div className="border border-white/20 p-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#f5cb1d] mb-2">Needs you</p>
            <p className="text-sm sm:text-base text-[#efe9d8]">{example.input.ask}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {example.input.options.map((o) => (
                <button key={o} type="button" onClick={() => setPicked(o)} aria-pressed={picked === o} className={btn(picked === o)}>
                  {o}
                </button>
              ))}
            </div>
            {picked && (
              <p role="status" className="mt-3 text-xs text-[#efe9d8]/65">
                Filed: {picked}. {example.input.filed}
              </p>
            )}
          </div>

          <div className={`border border-[#f5cb1d] p-4 transition-all duration-500 ${stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#f5cb1d] mb-2">Your call</p>
            <p className="text-sm sm:text-base text-[#efe9d8]">{example.decide.ask}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button type="button" onClick={() => setDecision("yes")} aria-pressed={decision === "yes"} className={btn(decision === "yes")}>
                Yes, draft it
              </button>
              <button type="button" onClick={() => setDecision("hold")} aria-pressed={decision === "hold"} className={btn(decision === "hold", true)}>
                Hold
              </button>
            </div>
            {decision && <p role="status" className="mt-3 text-xs text-[#efe9d8]/65">{decision === "yes" ? example.decide.yes : example.decide.hold}</p>}
          </div>

          <p className="text-xs text-[#efe9d8]/55 pt-1">{example.notify}</p>
        </div>
      </div>
    </div>
  );
}
