"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [logoDocked, setLogoDocked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

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
      if (pathname === "/philosophy") {
        setIsDarkSection(true);
        return;
      }
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

  const showTopLogo = !isHome || logoDocked;

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

          {/* Desktop Navigation — Portfolio, Jumpstart, Governance, Philosophy, Privacy */}
          <nav
            className={`hidden md:flex items-center divide-x ${
              isDarkSection
                ? "divide-white/20 border-white/20 bg-white/5"
                : "divide-black/10 border-black/10 bg-white/60"
            } border backdrop-blur-md`}
          >
            <Link
              href="/portfolio"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                isDarkSection ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/jumpstart"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                isDarkSection
                  ? "hover:bg-white/10 text-[#f8df98]"
                  : "hover:bg-black/5 text-[#814038]"
              }`}
            >
              <span>Jumpstart</span>
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                isDarkSection ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
            >
              Governance
            </Link>
            <Link
              href="/philosophy"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                isDarkSection ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
            >
              Philosophy
            </Link>
            <Link
              href="/privacy-policy"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                isDarkSection ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 opacity-60" />
              Privacy
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/portfolio#saalihat"
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border ${
                isDarkSection
                  ? "bg-[#f8df98] text-[#192412] border-[#f8df98] hover:bg-white hover:border-white"
                  : "bg-[var(--color-primary-dark)] text-white border-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)]"
              }`}
            >
              <span>Explore Saalihat</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-3 border min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors ${
                isDarkSection
                  ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                  : "border-black/10 bg-white/80 text-[var(--color-primary-dark)] hover:bg-black/5"
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

      {/* Mobile menu dropdown — Portfolio, Jumpstart, Governance, Philosophy, Privacy */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className={`md:hidden px-4 pt-3 pb-6 border-b mt-2 shadow-lg ${
            isDarkSection
              ? "bg-[#192412] border-white/10 text-white"
              : "bg-[var(--brand-bg)] border-black/10 text-[var(--color-primary-dark)]"
          }`}
        >
          <div className="flex flex-col divide-y divide-black/5">
            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 text-sm font-bold tracking-wide uppercase hover:bg-black/5 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/jumpstart"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-3 text-sm font-bold tracking-wide uppercase hover:bg-black/5 transition-colors ${
                isDarkSection ? "text-[#f8df98]" : "text-[#814038]"
              }`}
            >
              Jumpstart
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 text-sm font-bold tracking-wide uppercase hover:bg-black/5 transition-colors"
            >
              Governance
            </Link>
            <Link
              href="/philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 text-sm font-bold tracking-wide uppercase hover:bg-black/5 transition-colors"
            >
              Philosophy
            </Link>
            <Link
              href="/privacy-policy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-3 text-sm font-bold tracking-wide uppercase hover:bg-black/5 transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 opacity-70" />
              Privacy
            </Link>
            <div className="pt-4 mt-2 border-t border-black/5">
              <Link
                href="/portfolio#saalihat"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-5 py-3 bg-[var(--color-primary-dark)] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors hover:bg-[var(--color-primary)]"
              >
                Explore Saalihat
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
