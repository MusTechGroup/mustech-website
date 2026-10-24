"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { EXAMPLES, type Example } from "@/lib/jumpstartExamples";
import { reducedMotion } from "@/lib/motion";

const BUILD_MS = 750;

interface ExampleState {
  /** The business whose content is on screen. It trails `active` while a new one is being built. */
  example: Example;
  /** The business picked in the toggle. */
  active: string;
  building: boolean;
  /** Changes on every rebuild, so keyed content starts again from nothing. */
  epoch: number;
  set: (id: string) => void;
}

const Ctx = createContext<ExampleState | null>(null);

export function ExampleProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(EXAMPLES[0].id as string);
  const [shown, setShown] = useState(EXAMPLES[0].id as string);
  const [building, setBuilding] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const timer = useRef<number>(0);
  const example = EXAMPLES.find((e) => e.id === shown) ?? EXAMPLES[0];

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // Every switch clears the whole section and builds it again, so each business reads as set up from scratch.
  const set = (id: string) => {
    if (id === active) return;
    setActive(id);
    setBuilding(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(
      () => {
        setShown(id);
        setEpoch((n) => n + 1);
        setBuilding(false);
      },
      reducedMotion() ? 0 : BUILD_MS
    );
  };

  return <Ctx.Provider value={{ example, active, building, epoch, set }}>{children}</Ctx.Provider>;
}

export function useExample() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useExample needs an ExampleProvider");
  return c;
}

/** Wraps a section body. While a new business is built it keeps its size, hides the old content, and shows a progress bar. */
export function Rebuild({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { building, epoch, active } = useExample();
  const name = EXAMPLES.find((e) => e.id === active)?.person ?? "";
  return (
    <div className={`relative ${className}`}>
      <div key={epoch} className={building ? "invisible" : ""} aria-hidden={building}>
        {children}
      </div>
      {building && (
        <div role="status" className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-white/10 text-center px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#efe9d8]/60">Setting up {name}&rsquo;s business</p>
          <span className="block h-px w-48 max-w-full bg-white/15 overflow-hidden">
            <span className="js-build block h-full bg-[#f5cb1d]" style={{ animationDuration: `${BUILD_MS}ms` }} />
          </span>
        </div>
      )}
    </div>
  );
}

/** Three-way switch with a sliding marker. Shared by every section that shows the example. */
export function ExampleToggle({ label = "Pick an example business" }: { label?: string }) {
  const { active, set } = useExample();
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [marker, setMarker] = useState({ left: 4, width: 0 });

  useEffect(() => {
    const measure = () => {
      const b = wrapRef.current?.querySelector<HTMLElement>('[aria-pressed="true"]');
      if (b) setMarker({ left: b.offsetLeft, width: b.offsetWidth });
    };
    const raf = requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    wrapRef.current?.querySelectorAll("button").forEach((b) => ro.observe(b));
    document.fonts?.ready.then(measure);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [active]);

  return (
    <div ref={wrapRef} role="group" aria-label={label} className="relative inline-flex border border-white/25 p-1 gap-1 max-w-full">
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 bg-[#f5cb1d] transition-[left,width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ left: marker.left, width: marker.width }}
      />
      {EXAMPLES.map((e) => (
        <button
          key={e.id}
          type="button"
          aria-pressed={active === e.id}
          onClick={() => set(e.id)}
          className={`relative z-10 px-5 min-h-[44px] text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
            active === e.id ? "text-[#111]" : "text-[#efe9d8] hover:text-[#f5cb1d]"
          }`}
        >
          {e.tab}
        </button>
      ))}
    </div>
  );
}

/** Text from the selected example, re-animated when the example changes. */
export function ExampleText({ field }: { field: "role" | "blurb" }) {
  const { example } = useExample();
  return (
    <span key={example.id} className="js-swap inline-block">
      {example[field]}
    </span>
  );
}

/** The sentence under the "what you leave with" heading, written for the selected example. */
export function ExampleDepartments() {
  const { example } = useExample();
  const names = example.departments.slice(0, 4).map((d) => d.name.toLowerCase());
  const list = `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
  return (
    <span key={example.id} className="js-swap inline">
      {example.person} gets {example.installed} departments, including {list}.
    </span>
  );
}
