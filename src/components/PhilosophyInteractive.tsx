"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const CORE_CARDS = [
  {
    number: "01",
    title: "Amanah",
    subtitle: "Data Sovereignty",
    invariant: "Zero Ad-SDKs · Local Storage First",
    summary:
      "User data stays on your device whenever possible and is never tracked, profiled, or sold.",
  },
  {
    number: "02",
    title: "Tijarah",
    subtitle: "Honest Commerce",
    invariant: "0% Platform Cut · Direct PayNow",
    summary:
      "Sustainable software built on fair value exchange, with zero marketplace commissions or dark patterns.",
  },
  {
    number: "03",
    title: "Mizan",
    subtitle: "Human Equilibrium",
    invariant: "Fast Utility · Zero Infinite Feeds",
    summary:
      "Quiet tools that deliver the schedule, funeral notice, or order sheet you need and get out of your way.",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Amanah",
    subtitle: "Data Sovereignty & Privacy",
    invariant: "Zero 3rd-Party SDKs · Local Storage First",
    description:
      "Bookmarks and preferences stay on your device by default, protected under strict Singapore PDPA standards with zero advertising SDKs and zero behavioural tracking.",
  },
  {
    number: "02",
    title: "Tijarah",
    subtitle: "Ethical Enterprise",
    invariant: "0% Platform Cut · Direct PayNow Settlement",
    description:
      "Platforms earn their keep by solving real operational bottlenecks for merchants and families - never through predatory marketplace cuts or dark patterns.",
  },
  {
    number: "03",
    title: "Mizan",
    subtitle: "Human Equilibrium",
    invariant: "Sub-2s Task Completion · Zero Infinite Feeds",
    description:
      "Quiet, finite interfaces built to respect human time. Our tools deliver the verified mosque schedule, funeral notice, or kitchen order sheet you need and return you to real life.",
  },
  {
    number: "04",
    title: "Resilient Engineering",
    subtitle: "Verified Civic Directories",
    invariant: "ARS Cross-Checked · Atomic SQL Ledgers",
    description:
      "Mosque lecture schedules and community announcements often live inside scattered posters and chat groups. We build reliable extraction pipelines and human-verified directories that make community knowledge accessible.",
  },
  {
    number: "05",
    title: "Civic Purpose",
    subtitle: "Everyday Service",
    invariant: "Funeral Rites · Home Kitchens · Mosque Kuliah",
    description:
      "Success is measured in moments that matter: helping a family coordinate final rites with dignity, giving a home baker a zero-commission storefront, or connecting congregants to a verified mosque Kuliah.",
  },
];

export default function PhilosophyInteractive() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main id="main-content" className="flex-grow">
      {/* 1. Top Section: Tayyib Architecture — Standardised on Warm Cream Background */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-[var(--brand-bg)] text-[var(--color-primary-dark)] border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-primary-dark)]/60 hover:text-[var(--color-primary)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to MusTech Group Home</span>
            </Link>
          </div>

          {/* Section Header */}
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6 pb-8 mb-10 border-t border-b border-black/10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-2">
                Tayyib Architecture
              </p>
              <h1 className="font-brand text-4xl sm:text-5xl font-bold text-[var(--color-primary-dark)] tracking-tight leading-tight">
                The MusTech Philosophy
              </h1>
            </div>
            <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/75 leading-relaxed max-w-xl">
              Every product we build is governed by foundational commitments around data privacy, commercial honesty, and respect for human attention.
            </p>
          </Reveal>

          {/* 3 Core Commitment Cards (Cream Context) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_CARDS.map((pillar, idx) => (
              <Reveal
                key={pillar.title}
                delayMs={idx * 80}
                direction="scale"
                className="h-full"
              >
                <div
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className="group h-full border border-black/10 bg-white p-7 sm:p-8 flex flex-col justify-between cursor-pointer shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1.5 hover:border-[var(--color-primary)] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-baseline justify-between pb-4 mb-5 border-b border-black/10">
                      <span className="font-brand text-2xl font-bold text-[var(--color-primary)]">
                        {pillar.number}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]/60">
                        {pillar.subtitle}
                      </span>
                    </div>

                    <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {pillar.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/80 leading-relaxed mb-6">
                      {pillar.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/10 text-xs font-semibold text-[var(--color-primary)]">
                    {pillar.invariant}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Middle Section: Architectural Invariants — Immersive Deep Olive Jewel Section */}
      <section
        id="philosophy"
        className="py-20 sm:py-28 bg-[#233219] text-[#fdfaf0] border-b border-white/10 shadow-inner scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Sticky Rail with Unique Architectural & Botanical Photography */}
            <Reveal className="lg:col-span-5 lg:sticky lg:top-28" direction="left">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f8df98] mb-2">
                Architectural Invariants
              </p>
              <h2 className="font-brand text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                Five Principles in Practice
              </h2>
              <p className="text-sm sm:text-base text-[#fdfaf0]/80 leading-relaxed mb-6">
                Select or hover over each principle to inspect the engineering guardrail that enforces it across our platforms.
              </p>

              {/* Layered High-Resolution Photographic Composition */}
              <div className="space-y-4">
                <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/15 bg-black/30 shadow-2xl group">
                  <Image
                    src="/editorial/courtyard-fountain.jpg"
                    alt="Scalloped stone courtyard fountain in dappled sunlight"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#192412]/95 via-[#192412]/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#fdfaf0]/90">
                      <span className="font-brand text-base font-bold text-[#f8df98]">
                        {PRINCIPLES[activeIndex].title} · {PRINCIPLES[activeIndex].subtitle}
                      </span>
                      <span className="text-[11px] text-[#fdfaf0]/70">
                        0{activeIndex + 1} / 05
                      </span>
                    </div>
                    <p className="text-xs text-[#fdfaf0]/85 font-medium">
                      {PRINCIPLES[activeIndex].invariant}
                    </p>
                    {/* Animated Progress Indicator Across the 5 Principles */}
                    <div className="grid grid-cols-5 gap-1.5 pt-1">
                      {PRINCIPLES.map((p, i) => (
                        <button
                          key={p.title}
                          type="button"
                          aria-label={`Select ${p.title}`}
                          onClick={() => setActiveIndex(i)}
                          className={`h-1 transition-all duration-300 ${
                            i === activeIndex
                              ? "bg-[#f8df98]"
                              : "bg-white/20 hover:bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 items-stretch">
                  <div className="col-span-8 relative aspect-[4/3] overflow-hidden border border-white/15 bg-black/30 group">
                    <Image
                      src="/editorial/geometric-garden.jpg"
                      alt="Geometric courtyard boxwood garden hedges"
                      fill
                      sizes="(max-width: 1024px) 65vw, 310px"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#192412]/70 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-[11px] font-medium text-[#fdfaf0]/90">
                      Mizan · Geometric Order
                    </span>
                  </div>
                  <div className="col-span-4 relative overflow-hidden border border-white/15 bg-black/30 group">
                    <Image
                      src="/editorial/artisan-storefront.jpg"
                      alt="Independent textile merchant display shelves"
                      fill
                      sizes="150px"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#192412]/75 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] font-medium text-[#fdfaf0]/90 leading-tight">
                      Tijarah · Craft
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right List — Interactive Hover Choreography & Pop-Up Reveal */}
            <div className="lg:col-span-7 divide-y divide-white/15 border-t border-white/15 lg:border-t-0">
              {PRINCIPLES.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <Reveal
                    key={item.title}
                    delayMs={idx * 70}
                    className="first:pt-0"
                  >
                    <div
                      onMouseEnter={() => setActiveIndex(idx)}
                      onFocus={() => setActiveIndex(idx)}
                      onClick={() => setActiveIndex(idx)}
                      tabIndex={0}
                      className={`relative py-8 px-4 sm:px-6 -mx-4 sm:-mx-6 cursor-pointer grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-baseline transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                        isActive
                          ? "bg-[#192412] translate-x-1 shadow-lg"
                          : "hover:bg-white/[0.03] opacity-75 hover:opacity-100"
                      }`}
                    >
                      {/* Left Custard Active Bar */}
                      <span
                        className={`absolute left-0 inset-y-4 w-1 bg-[#f8df98] transition-transform duration-300 origin-top ${
                          isActive ? "scale-y-100" : "scale-y-0"
                        }`}
                      />
                      <div className="sm:col-span-4 flex items-baseline gap-3">
                        <span className="font-brand text-lg font-bold text-[#f8df98]">
                          {item.number}
                        </span>
                        <div>
                          <h3
                            className={`font-brand text-2xl font-bold transition-colors duration-300 ${
                              isActive ? "text-[#f8df98]" : "text-white"
                            }`}
                          >
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#fdfaf0]/65 mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="sm:col-span-8">
                        <p className="text-base text-[#fdfaf0]/85 leading-relaxed mb-2">
                          {item.description}
                        </p>
                        <p className="text-xs font-medium text-[#f8df98]/90">
                          {item.invariant}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Section: Explore Ecosystem — Standardised on Warm Cream Background */}
      <section className="py-16 sm:py-24 bg-[var(--brand-bg)] text-[var(--color-primary-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-1">
              Ecosystem Navigation
            </p>
            <h2 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)]">
              Explore the MusTech Ecosystem
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delayMs={60}>
              <Link
                href="/portfolio"
                className="group h-full border border-black/10 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-md"
              >
                <div>
                  <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    Explore Ecosystem in Action
                  </h3>
                  <p className="text-sm text-[var(--color-primary-dark)]/75 leading-relaxed font-sans mb-6">
                    See how Tayyib Architecture powers Saalihat, jenazah.sg, TaraBase, and MusTech Jumpstart in production.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)]">
                  <span>View portfolio</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>

            <Reveal delayMs={120}>
              <Link
                href="/about"
                className="group h-full border border-black/10 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-md"
              >
                <div>
                  <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    Governance &amp; How We Work
                  </h3>
                  <p className="text-sm text-[var(--color-primary-dark)]/75 leading-relaxed font-sans mb-6">
                    Learn how a solo founder and specialised AI agents built on Google Antigravity and Claude enforce these principles in production.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)]">
                  <span>Read governance</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
