"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { EXAMPLES, type Example } from "@/lib/jumpstartExamples";

interface ExampleState {
  example: Example;
  set: (id: string) => void;
}

const Ctx = createContext<ExampleState | null>(null);

export function ExampleProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState(EXAMPLES[0].id as string);
  const example = EXAMPLES.find((e) => e.id === id) ?? EXAMPLES[0];
  return <Ctx.Provider value={{ example, set: setId }}>{children}</Ctx.Provider>;
}

export function useExample() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useExample needs an ExampleProvider");
  return c;
}

/** Three-way switch with a sliding marker. Shared by every section that shows the example. */
export function ExampleToggle({ label = "Pick an example business" }: { label?: string }) {
  const { example, set } = useExample();
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
  }, [example.id]);

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
          aria-pressed={example.id === e.id}
          onClick={() => set(e.id)}
          className={`relative z-10 px-5 min-h-[44px] text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
            example.id === e.id ? "text-[#111]" : "text-[#efe9d8] hover:text-[#f5cb1d]"
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
