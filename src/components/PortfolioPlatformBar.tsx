"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

interface PlatformSlot {
  id: string;
  label: string;
  href: string;
  color: string;
  isRoute?: boolean;
}

const PLATFORM_SLOTS: PlatformSlot[] = [
  {
    id: "saalihat",
    label: "Saalihat",
    href: "#saalihat",
    color: "#b88924",
  },
  {
    id: "jenazah-deep-dive",
    label: "jenazah.sg",
    href: "#jenazah-deep-dive",
    color: "#4A5D3F",
  },
  {
    id: "tarabase-deep-dive",
    label: "TaraBase",
    href: "#tarabase-deep-dive",
    color: "#814038",
  },
  {
    id: "jumpstart",
    label: "MusTech Jumpstart",
    href: "/jumpstart",
    color: "#077d95",
    isRoute: true,
  },
];

export default function PortfolioPlatformBar() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [cursorRect, setCursorRect] = useState<{
    left: number;
    width: number;
    visible: boolean;
  }>({ left: 0, width: 0, visible: false });

  const targetIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

  const syncCursor = useCallback(() => {
    const el = itemRefs.current[targetIdx];
    if (!el) return;
    setCursorRect({
      left: el.offsetLeft,
      width: el.offsetWidth,
      visible: true,
    });
  }, [targetIdx]);

  useEffect(() => {
    syncCursor();
    window.addEventListener("resize", syncCursor, { passive: true });
    return () => window.removeEventListener("resize", syncCursor);
  }, [syncCursor]);

  useEffect(() => {
    const handleScroll = () => {
      const anchorY = 180;
      const sectionIds = ["saalihat", "jenazah-deep-dive", "tarabase-deep-dive"];
      let current = 0;
      sectionIds.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= anchorY) {
          current = idx;
        }
      });
      setActiveIdx(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeColor = PLATFORM_SLOTS[targetIdx]?.color ?? "#077d95";

  return (
    <div className="flex items-center gap-3 overflow-x-auto scrollbar-none pb-4 mb-6 sm:mb-12 border-b border-black/10">
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-primary-dark)]/55 shrink-0">
        Platforms
      </span>

      <div
        role="navigation"
        aria-label="Portfolio platforms"
        onMouseLeave={() => setHoveredIdx(null)}
        className="relative inline-flex items-center p-1 rounded-md border border-[#233219]/15 bg-[#f4ecd8]/90 shadow-[inset_0_1px_2px_rgba(35,50,25,0.06)] shrink-0"
      >
        {/* Gliding selection frame + crisp 4px top pointer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1 bottom-1 rounded-[4px] bg-[#fdfaf0] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{
            left: cursorRect.left,
            width: cursorRect.width,
            opacity: cursorRect.visible ? 1 : 0,
            boxShadow: `inset 0 0 0 1.5px ${activeColor}, 0 2px 6px rgba(35,50,25,0.08)`,
          }}
        >
          <span
            className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4.5px] transition-colors duration-200"
            style={{ borderTopColor: activeColor }}
          />
        </div>

        {PLATFORM_SLOTS.map((slot, idx) => {
          const isFocused = targetIdx === idx;
          const sharedClass = `relative z-10 px-3.5 py-1.5 min-h-[36px] flex items-center gap-2 text-xs font-semibold tracking-wide transition-colors duration-150 shrink-0 ${
            isFocused ? "text-[#233219]" : "text-[#233219]/70"
          }`;

          const content = (
            <>
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-xs transition-transform duration-200 motion-reduce:transition-none"
                style={{
                  backgroundColor: slot.color,
                  transform: isFocused
                    ? "rotate(45deg) scale(1.15)"
                    : "rotate(0deg) scale(0.85)",
                  opacity: isFocused ? 1 : 0.55,
                }}
              />
              <span>{slot.label}</span>
            </>
          );

          if (slot.isRoute) {
            return (
              <Link
                key={slot.id}
                href={slot.href}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onFocus={() => setHoveredIdx(idx)}
                onBlur={() => setHoveredIdx(null)}
                className={sharedClass}
              >
                {content}
              </Link>
            );
          }

          return (
            <a
              key={slot.id}
              href={slot.href}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              onClick={() => setActiveIdx(idx)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onFocus={() => setHoveredIdx(idx)}
              onBlur={() => setHoveredIdx(null)}
              aria-current={activeIdx === idx ? "location" : undefined}
              className={sharedClass}
            >
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
}
