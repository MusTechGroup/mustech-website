"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsDarkSection(entry.isIntersecting);
        });
      },
      { rootMargin: "-10% 0px -90% 0px" }
    );
    const darkSection = document.getElementById("saalihat");
    if (darkSection) observer.observe(darkSection);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkSection
          ? "bg-[#0e1117]/95 backdrop-blur-xl border-b border-white/10 text-white py-2"
          : scrolled
            ? "bg-[var(--brand-bg)]/95 backdrop-blur-xl border-b border-black/10 shadow-sm py-2"
            : "bg-transparent py-4 text-[var(--color-primary-dark)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name - Editorial Scaled */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/Logo_Large_ClearBg.png"
                alt="MusTech Group Emblem"
                width={64}
                height={64}
                className={`object-contain transition-all duration-300 ${isDarkSection ? "brightness-0 invert opacity-90" : ""}`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center divide-x ${isDarkSection ? 'divide-white/20 border-white/20 bg-white/5' : 'divide-black/10 border-black/10 bg-white/60'} border backdrop-blur-md`}>
            <Link
              href="/#about"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${isDarkSection ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            >
              About
            </Link>
            <Link
              href="/#saalihat"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${isDarkSection ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            >
              Portfolio
            </Link>
            <Link
              href="/#pillars"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${isDarkSection ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            >
              Philosophy
            </Link>
            <Link
              href="/#credentials"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${isDarkSection ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            >
              Corporate Entity
            </Link>
            <Link
              href="/home/privacy-policy"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${isDarkSection ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
            >
              <ShieldCheck className="w-3.5 h-3.5 opacity-60" />
              Privacy
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#saalihat"
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border ${isDarkSection ? 'bg-white text-black border-white hover:bg-transparent hover:text-white' : 'bg-[var(--color-primary-dark)] text-white border-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)]'}`}
            >
              <span>Explore Saalihat</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 border transition-colors ${isDarkSection ? 'border-white/20 bg-white/10 text-white hover:bg-white/20' : 'border-black/10 bg-white/80 text-[var(--color-primary-dark)] hover:bg-black/5'}`}
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

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className={`md:hidden px-4 pt-4 pb-6 border-b mt-2 ${isDarkSection ? 'bg-[#0e1117] border-white/10 text-white' : 'bg-[var(--brand-bg)] border-black/10 text-[var(--color-primary-dark)]'}`}>
          <div className="flex flex-col gap-1 divide-y divide-black/5">
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-bold tracking-wide uppercase hover:bg-black/5 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#saalihat"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-bold tracking-wide uppercase hover:bg-black/5 transition-colors"
            >
              Portfolio (Saalihat)
            </Link>
            <Link
              href="/#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-bold tracking-wide uppercase hover:bg-black/5 transition-colors"
            >
              Philosophy
            </Link>
            <Link
              href="/#credentials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-bold tracking-wide uppercase hover:bg-black/5 transition-colors"
            >
              Corporate Entity (ACRA)
            </Link>
            <Link
              href="/home/privacy-policy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-bold tracking-wide uppercase hover:bg-black/5 transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 opacity-70" />
              Privacy Policy
            </Link>
            <div className="pt-4 mt-2">
              <Link
                href="/#saalihat"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[var(--color-primary-dark)] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors hover:bg-[var(--color-primary)]"
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
