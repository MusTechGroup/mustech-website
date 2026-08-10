"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--brand-bg)]/90 backdrop-blur-xl border-b border-[var(--color-primary-dark)]/10 shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name - Massively Enlarged */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/Logo_Large_ClearBg.png"
                alt="MusTech Group Emblem"
                width={192}
                height={192}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-white/40 border border-black/5 backdrop-blur-md">
            <Link
              href="/#about"
              className="px-4 py-2 text-sm text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] hover:bg-black/5 rounded-full transition-all duration-200 font-bold"
            >
              About
            </Link>
            <Link
              href="/#saalihat"
              className="px-4 py-2 text-sm text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 rounded-full transition-all duration-200 font-bold flex items-center gap-1.5"
            >
              Saalihat App
            </Link>
            <Link
              href="/#pillars"
              className="px-4 py-2 text-sm text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] hover:bg-black/5 rounded-full transition-all duration-200 font-bold"
            >
              Values & Tech
            </Link>
            <Link
              href="/#credentials"
              className="px-4 py-2 text-sm text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] hover:bg-black/5 rounded-full transition-all duration-200 font-bold"
            >
              Entity (ACRA)
            </Link>
            <Link
              href="/home/privacy-policy"
              className="px-4 py-2 text-sm text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] hover:bg-black/5 rounded-full transition-all duration-200 font-bold flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-primary-dark)]/60" />
              Privacy
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#saalihat"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] text-white text-sm font-bold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Learn More</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/50 border border-black/10 text-[var(--color-primary-dark)] hover:bg-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[var(--brand-bg)] border-b border-[var(--color-primary-dark)]/10 mt-3 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-2">
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-base font-bold text-[var(--color-primary-dark)] hover:bg-black/5 rounded-lg transition-colors"
            >
              About MusTech Group
            </Link>
            <Link
              href="/#saalihat"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-base font-bold text-[var(--color-primary-dark)] hover:bg-[var(--color-primary)]/10 rounded-lg transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                Saalihat Flagship App
              </span>
            </Link>
            <Link
              href="/#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-base font-bold text-[var(--color-primary-dark)] hover:bg-black/5 rounded-lg transition-colors"
            >
              Core Values & Technology
            </Link>
            <Link
              href="/#credentials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-base font-bold text-[var(--color-primary-dark)] hover:bg-black/5 rounded-lg transition-colors"
            >
              Corporate Entity (ACRA: 202609163C)
            </Link>
            <Link
              href="/home/privacy-policy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-base font-bold text-[var(--color-primary-dark)] hover:bg-black/5 rounded-lg transition-colors flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[var(--color-primary-dark)]/60" />
              Privacy Policy (Amanah Trust)
            </Link>
            <div className="pt-4 mt-2 border-t border-black/5">
              <Link
                href="/#saalihat"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--color-primary-dark)] text-white font-bold text-center shadow-md shadow-black/10"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
