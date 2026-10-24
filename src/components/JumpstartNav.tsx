"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { onScrollFrame } from "@/lib/motion";

const LINKS = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/jumpstart", label: "Jumpstart" },
  { href: "/about", label: "Governance" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/privacy-policy", label: "Privacy" },
];

/**
 * The Jumpstart page header. Same MusTech logo, position, and links as the site header, without the boxes.
 * It inverts against whatever is behind it, so it stays readable over both light and dark scenes.
 */
export default function JumpstartNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return onScrollFrame(() => {
      const y = window.scrollY;
      return () => setScrolled(y > 20);
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white pointer-events-none transition-all duration-300 max-md:bg-[#050504]/90 max-md:backdrop-blur max-md:border-b max-md:border-white/10 md:mix-blend-difference ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <Link href="/" aria-label="MusTech Group Home" className="flex items-center justify-self-start">
            <Image
              src="/brand/mustech-emblem-trim.png"
              alt="MusTech Group Emblem"
              width={387}
              height={277}
              className="h-11 sm:h-12 w-auto object-contain brightness-0 invert"
              priority
            />
          </Link>

          <nav aria-label="Main" className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={l.href === "/jumpstart" ? "page" : undefined}
                className="group relative py-2 text-[11px] font-bold uppercase tracking-[0.25em]"
              >
                {l.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    l.href === "/jumpstart" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="js-mobile-nav"
            className="md:hidden col-start-3 justify-self-end min-h-[44px] px-1 text-[11px] font-bold uppercase tracking-[0.25em]"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="js-mobile-nav" aria-label="Main" className="md:hidden pointer-events-auto max-h-[calc(100vh-4.5rem)] overflow-y-auto px-4 sm:px-6 pb-8 pt-2 flex flex-col">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 border-t border-white/30 font-brand text-3xl font-bold"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
