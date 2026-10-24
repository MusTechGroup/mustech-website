"use client";

import { useEffect, useState } from "react";
import { onScrollFrame } from "@/lib/motion";

interface Deck {
  id: string;
  label: string;
}

/** Fixed rail on the right edge: one tick per scene, the current one lit. */
export default function DeckRail() {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-deck]"));
    const list = els.map((el, i) => ({ id: el.id || `deck-${i}`, label: el.dataset.deck ?? "" }));
    els.forEach((el, i) => {
      if (!el.id) el.id = list[i].id;
    });
    const raf0 = requestAnimationFrame(() => setDecks(list));

    const stop = onScrollFrame(() => {
      const mid = window.innerHeight * 0.5;
      let cur = 0;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= mid) cur = i;
      });
      return () => {
        setActive(cur);
      };
    });
    return () => {
      cancelAnimationFrame(raf0);
      stop();
    };
  }, []);

  return (
    <>
      <nav aria-label="Page sections" className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4 mix-blend-difference text-white">
        {decks.map((d, i) => (
          <a key={d.id} href={`#${d.id}`} className="group flex items-center justify-end gap-3 text-[10px] uppercase tracking-[0.25em]">
            <span className={`transition-all duration-300 ${active === i ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 group-hover:opacity-70 group-hover:translate-x-0"}`}>
              {String(i + 1).padStart(2, "0")} {d.label}
            </span>
            <span className={`block h-px transition-all duration-500 bg-white ${active === i ? "w-10" : "w-4 opacity-60"}`} />
          </a>
        ))}
      </nav>
    </>
  );
}
