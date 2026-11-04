"use client";

import { useEffect, useRef, useState } from "react";
import { useExample } from "@/components/JumpstartExamples";
import type { Example } from "@/lib/jumpstartExamples";
import { reducedMotion } from "@/lib/motion";

// Stage 1: the skill picks the request up. 2: the records it reads. 3: what it found. 4: the questions for the founder.
type Stage = 0 | 1 | 2 | 3 | 4;

/** Remounts on every switch, so each example starts from an empty request. */
export default function JumpstartDemo() {
  const { example } = useExample();
  return <DeskRun key={example.id} example={example} />;
}

function DeskRun({ example }: { example: Example }) {
  const { desk } = example;
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
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

  // Type the request, then bring in the skill, the records it reads, what it found, and the questions.
  useEffect(() => {
    if (!started) return;
    const reduce = reducedMotion();
    const timers: number[] = [];
    timers.push(
      window.setTimeout(() => {
        setPicked(null);
        setDecision(null);
        if (reduce) {
          setChars(desk.ask.length);
          setStage(4);
        } else {
          setChars(0);
          setStage(0);
        }
      }, 0)
    );
    if (reduce) return () => timers.forEach(clearTimeout);

    let i = 0;
    const type = window.setInterval(() => {
      i += 3;
      setChars(Math.min(i, desk.ask.length));
      if (i >= desk.ask.length) {
        window.clearInterval(type);
        timers.push(window.setTimeout(() => setStage(1), 300));
        timers.push(window.setTimeout(() => setStage(2), 900));
        timers.push(window.setTimeout(() => setStage(3), 1700));
        timers.push(window.setTimeout(() => setStage(4), 2600));
      }
    }, 28);
    return () => {
      window.clearInterval(type);
      timers.forEach(clearTimeout);
    };
  }, [started, desk.ask]);

  const typing = started && chars < desk.ask.length;
  const btn = (on: boolean, alt = false) =>
    `px-3 min-h-[44px] text-xs font-bold uppercase tracking-wider border transition-colors ${
      on
        ? alt
          ? "bg-[#efe9d8] text-[#111] border-[#efe9d8]"
          : "bg-[#f5cb1d] text-[#111] border-[#f5cb1d]"
        : "border-white/30 text-[#efe9d8] hover:border-white/70"
    }`;
  const label = "text-[11px] uppercase tracking-[0.2em] text-[#efe9d8]/55";
  const fade = (on: boolean) => `transition-all duration-500 ${on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`;

  return (
    <div ref={rootRef} className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/15 border border-white/15 text-sm leading-relaxed text-[#efe9d8]">
      {/* The founder's AI tool, at the desk */}
      <div className="js-swap lg:col-span-5 bg-[#0b0b0a] flex flex-col">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 sm:px-6 py-2.5" aria-hidden="true">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </span>
          <span className="ml-2 font-mono text-[11px] text-[#efe9d8]/50 truncate">your AI tool · {example.person.toLowerCase()}-hq</span>
        </div>
        <div className="p-4 sm:p-6 flex-1">
          <p className={`${label} mb-2`}>You ask, at your desk</p>
          <p className="min-h-[4.5rem] text-base sm:text-lg font-semibold">
            <span className="sr-only">{desk.ask}</span>
            <span aria-hidden="true">
              {desk.ask.slice(0, chars)}
              <span
                className={`inline-block w-[0.5em] h-[1.1em] align-text-bottom bg-[#f5cb1d] ml-0.5 ${
                  typing || chars === 0 ? "" : "animate-pulse"
                }`}
              />
            </span>
          </p>

          <div className={`mt-4 ${fade(stage >= 1)}`}>
            <p className="font-mono text-xs text-[#efe9d8]/70">
              Using the <span className="bg-[#f5cb1d] text-[#111] px-1 font-semibold">{desk.skill}</span> skill
            </p>
          </div>
          <ul className="mt-3 space-y-1.5 font-mono text-xs text-[#efe9d8]/60">
            {desk.reads.map((r, i) => (
              <li key={r} className={fade(stage >= 2)} style={{ transitionDelay: `${i * 160}ms` }}>
                <span className="text-[#f5cb1d]" aria-hidden="true">→ </span>Reading {r}
              </li>
            ))}
          </ul>
        </div>
        {/* Fills the tall left column on desktop with the rule this panel runs under. */}
        <p className={`border-t border-white/10 px-4 sm:px-6 py-3 text-xs text-[#efe9d8]/60 ${fade(stage >= 2)}`}>
          <span className="font-semibold text-[#efe9d8]/85">Reads, then asks.</span> It changes nothing until you answer, and it never sends, pays, or publishes on its own.
        </p>
      </div>

      {/* What comes back */}
      <div className="js-swap lg:col-span-7 bg-[#0b0b0a] p-4 sm:p-6">
        <p className={`${label} mb-2`}>What it found, quoted from your records</p>

        <ul className="divide-y divide-white/10 border-y border-white/10">
          {desk.findings.map((f, i) => (
            <li key={f.label} className={`py-2 ${fade(stage >= 3)}`} style={{ transitionDelay: `${i * 160}ms` }}>
              <span className="font-semibold">{f.label}</span>
              <span className="text-[#efe9d8]/65"> · </span>
              <mark className="bg-[#f5cb1d] text-[#111] px-1 font-semibold">&ldquo;{f.quote}&rdquo;</mark>
              <span className="text-[#efe9d8]/55"> · {f.note}</span>
            </li>
          ))}
        </ul>
        {desk.footer && <p className={`mt-2 text-xs italic text-[#efe9d8]/60 ${fade(stage >= 3)}`}>{desk.footer}</p>}

        <div className={`mt-4 space-y-3 ${fade(stage >= 4)}`}>
          <div className="border border-white/20 p-3 sm:p-4">
            <p className={`${label} !text-[#f5cb1d] mb-1`}>Needs you</p>
            <p>{desk.input.ask}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {desk.input.options.map((o) => (
                <button key={o} type="button" onClick={() => setPicked(o)} aria-pressed={picked === o} className={btn(picked === o)}>
                  {o}
                </button>
              ))}
            </div>
            {picked && (
              <p role="status" className="mt-2 text-xs text-[#efe9d8]/65">
                Filed: {picked}. {desk.input.filed}
              </p>
            )}
          </div>

          <div className="border border-[#f5cb1d] p-3 sm:p-4">
            <p className={`${label} !text-[#f5cb1d] mb-1`}>Your call</p>
            <p>{desk.decide.ask}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <button type="button" onClick={() => setDecision("yes")} aria-pressed={decision === "yes"} className={btn(decision === "yes")}>
                {desk.decide.yesLabel}
              </button>
              <button type="button" onClick={() => setDecision("hold")} aria-pressed={decision === "hold"} className={btn(decision === "hold", true)}>
                Hold
              </button>
            </div>
            {decision && <p role="status" className="mt-2 text-xs text-[#efe9d8]/65">{decision === "yes" ? desk.decide.yes : desk.decide.hold}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
