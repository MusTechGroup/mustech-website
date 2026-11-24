"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  {
    href: "/portfolio",
    label: "Portfolio",
    slotLight: "#077d95",
    slotDark: "#5fd0e8",
  },
  {
    href: "/jumpstart",
    label: "Jumpstart",
    slotLight: "#814038",
    slotDark: "#f8df98",
  },
  {
    href: "/about",
    label: "Governance",
    slotLight: "#233219",
    slotDark: "#92ae94",
  },
  {
    href: "/philosophy",
    label: "Philosophy",
    slotLight: "#9c7216",
    slotDark: "#f8df98",
  },
  {
    href: "/privacy-policy",
    label: "Privacy",
    slotLight: "#4a664c",
    slotDark: "#92ae94",
  },
];

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [logoDocked, setLogoDocked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  const activeIdx = NAV_LINKS.findIndex((l) => isLinkActive(pathname, l.href));
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [cursorRect, setCursorRect] = useState<{
    left: number;
    width: number;
    visible: boolean;
  }>({ left: 0, width: 0, visible: false });

  const targetIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

  const syncCursor = useCallback(() => {
    if (targetIdx < 0) {
      setCursorRect((prev) => (prev.visible ? { ...prev, visible: false } : prev));
      return;
    }
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
  }, [syncCursor, pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setLogoDocked(y > 170);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkDarkSections = () => {
      const darkIds = ["saalihat", "philosophy"];
      const navHeight = 64;
      const isOverDark = darkIds.some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= navHeight && rect.bottom >= navHeight;
      });
      setIsDarkSection(isOverDark);
    };

    checkDarkSections();
    window.addEventListener("scroll", checkDarkSections, { passive: true });
    window.addEventListener("resize", checkDarkSections, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkDarkSections);
      window.removeEventListener("resize", checkDarkSections);
    };
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  const showTopLogo = !isHome || logoDocked;
  const activeColor =
    targetIdx >= 0
      ? isDarkSection
        ? NAV_LINKS[targetIdx].slotDark
        : NAV_LINKS[targetIdx].slotLight
      : isDarkSection
        ? "#f8df98"
        : "#077d95";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkSection
          ? "bg-[#192412]/95 backdrop-blur-xl border-b border-white/10 text-white py-2"
          : scrolled
            ? "bg-[var(--brand-bg)]/95 backdrop-blur-xl border-b border-black/10 shadow-sm py-2"
            : "bg-transparent py-4 text-[var(--color-primary-dark)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name - Hidden initially on homepage until big Hero logo docks on scroll */}
          <Link
            href="/"
            aria-label="MusTech Group Home"
            className={`flex items-center gap-4 group transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left ${
              showTopLogo
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-125 pointer-events-none"
            }`}
          >
            <div className="relative flex items-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/mustech-emblem-trim.png"
                alt="MusTech Group Emblem"
                width={387}
                height={277}
                className={`h-11 sm:h-12 w-auto object-contain transition-all duration-300 ${
                  isDarkSection ? "brightness-0 invert opacity-90" : ""
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation: RPG Select gliding cursor tray */}
          <nav
            aria-label="Main"
            onMouseLeave={() => setHoveredIdx(null)}
            className={`relative hidden md:flex items-center p-1 rounded-md border transition-colors duration-300 ${
              isDarkSection
                ? "bg-[#121b0d]/85 border-white/15"
                : "bg-[#f4ecd8]/90 border-[#233219]/15 shadow-[inset_0_1px_2px_rgba(35,50,25,0.06)]"
            }`}
          >
            {/* Gliding selection frame + crisp 4px top pointer */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1 bottom-1 rounded-[4px] transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{
                left: cursorRect.left,
                width: cursorRect.width,
                opacity: cursorRect.visible ? 1 : 0,
                backgroundColor: isDarkSection
                  ? "rgba(248, 223, 152, 0.14)"
                  : "#fdfaf0",
                boxShadow: isDarkSection
                  ? `inset 0 0 0 1.5px ${activeColor}, 0 2px 10px rgba(0,0,0,0.25)`
                  : `inset 0 0 0 1.5px ${activeColor}, 0 2px 6px rgba(35,50,25,0.08)`,
              }}
            >
              <span
                className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4.5px] transition-colors duration-200"
                style={{ borderTopColor: activeColor }}
              />
            </div>

            {NAV_LINKS.map((link, idx) => {
              const isCurrent = isLinkActive(pathname, link.href);
              const isFocused = targetIdx === idx;
              const slotColor = isDarkSection ? link.slotDark : link.slotLight;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onFocus={() => setHoveredIdx(idx)}
                  onBlur={() => setHoveredIdx(null)}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`relative z-10 px-3.5 py-1.5 flex items-center gap-2 text-[12px] font-semibold tracking-wide transition-colors duration-150 ${
                    isDarkSection
                      ? isFocused
                        ? "text-white"
                        : "text-white/70"
                      : isFocused
                        ? "text-[#233219]"
                        : "text-[#233219]/70"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-xs transition-transform duration-200 motion-reduce:transition-none"
                    style={{
                      backgroundColor: slotColor,
                      transform: isFocused
                        ? "rotate(45deg) scale(1.15)"
                        : "rotate(0deg) scale(0.85)",
                      opacity: isFocused ? 1 : 0.55,
                    }}
                  />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA: Machined-key tactile press */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/portfolio#saalihat"
              className={`group inline-flex items-center gap-2 px-4 py-2 rounded-md text-[12px] font-bold tracking-wide border transition-all duration-150 active:translate-y-[2px] active:shadow-none ${
                isDarkSection
                  ? "bg-[#f8df98] text-[#192412] border-[#f8df98] shadow-[0_2px_0_0_rgba(248,223,152,0.35)] hover:bg-[#fdfaf0]"
                  : "bg-[#233219] text-[#fdfaf0] border-[#233219] shadow-[0_2px_0_0_#077d95] hover:bg-[#2c3f20]"
              }`}
            >
              <span>Explore Saalihat</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-md border min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ${
                isDarkSection
                  ? "border-white/20 bg-[#121b0d]/85 text-white hover:bg-white/15"
                  : "border-[#233219]/15 bg-[#f4ecd8]/90 text-[#233219] hover:bg-[#ebe1c7]"
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown: Matching Constellation diamond pips & active slot highlight */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className={`md:hidden px-4 pt-3 pb-6 border-b mt-2 shadow-lg ${
            isDarkSection
              ? "bg-[#192412] border-white/10 text-white"
              : "bg-[var(--brand-bg)] border-[#233219]/12 text-[#233219]"
          }`}
        >
          <div
            className={`flex flex-col gap-1 p-1.5 rounded-md border ${
              isDarkSection
                ? "bg-[#121b0d]/80 border-white/12"
                : "bg-[#f4ecd8]/75 border-[#233219]/12"
            }`}
          >
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(pathname, link.href);
              const slotColor = isDarkSection ? link.slotDark : link.slotLight;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`min-h-[44px] px-3.5 py-2.5 rounded-[4px] flex items-center justify-between text-sm font-semibold tracking-wide transition-colors ${
                    active
                      ? isDarkSection
                        ? "bg-[#f8df98]/15 text-white"
                        : "bg-[#fdfaf0] text-[#233219] shadow-xs"
                      : isDarkSection
                        ? "text-white/80 active:bg-white/10"
                        : "text-[#233219]/80 active:bg-[#fdfaf0]/80"
                  }`}
                  style={
                    active
                      ? { boxShadow: `inset 0 0 0 1.5px ${slotColor}` }
                      : undefined
                  }
                >
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="w-2 h-2 rounded-xs shrink-0"
                      style={{
                        backgroundColor: slotColor,
                        transform: active ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    />
                    <span>{link.label}</span>
                  </span>
                  {active && (
                    <span
                      aria-hidden="true"
                      className="text-[10px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: slotColor }}
                    >
                      Active
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-3.5">
            <Link
              href="/portfolio#saalihat"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full min-h-[46px] flex items-center justify-center gap-2 px-5 py-3 rounded-md text-xs font-bold tracking-wide text-center transition-all active:translate-y-[2px] active:shadow-none ${
                isDarkSection
                  ? "bg-[#f8df98] text-[#192412] shadow-[0_2px_0_0_rgba(248,223,152,0.35)]"
                  : "bg-[#233219] text-[#fdfaf0] shadow-[0_2px_0_0_#077d95]"
              }`}
            >
              <span>Explore Saalihat</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
