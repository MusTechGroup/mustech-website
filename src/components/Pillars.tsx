import Link from "next/link";
import { Lock, HeartHandshake, Code2, ArrowUpRight } from "lucide-react";

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 relative overflow-hidden bg-[var(--brand-bg)] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col items-start mb-16 pb-8 border-b border-black/10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4 block">The MusTech Philosophy</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-end">
            <h2 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary-dark)] tracking-tight">
              Values & Foundation
            </h2>
            <p className="text-lg text-[var(--color-primary-dark)]/80 font-sans max-w-xl lg:justify-self-end leading-relaxed">
              Our approach to building software is governed by a deep sense of responsibility and ethical data stewardship. We engineer with purpose, ensuring everything we build is rooted in three foundational principles.
            </p>
          </div>
        </div>

        {/* 3 Principles (Amanah, Tijarah, Mizan) in Strict Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5 mb-16 sm:mb-24 border-b border-black/5 pb-12 sm:pb-16">
          <div className="flex flex-col py-6 md:p-8 md:pl-0">
            <span className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-1">Amanah</span>
            <span className="text-xs uppercase font-semibold tracking-wider text-[var(--color-primary)] mb-3">Sacred Trust</span>
            <span className="text-sm sm:text-base text-[var(--color-primary-dark)]/85 leading-relaxed">Absolute data privacy, zero ad-tracking, and complete transparency in how systems operate.</span>
          </div>
          <div className="flex flex-col py-6 md:p-8">
            <span className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-1">Tijarah</span>
            <span className="text-xs uppercase font-semibold tracking-wider text-[var(--color-primary)] mb-3">Ethical Enterprise</span>
            <span className="text-sm sm:text-base text-[var(--color-primary-dark)]/85 leading-relaxed">Commercially sustainable ventures built without predatory monetisation or user exploitation.</span>
          </div>
          <div className="flex flex-col py-6 md:p-8 md:pr-0">
            <span className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-1">Mizan</span>
            <span className="text-xs uppercase font-semibold tracking-wider text-[var(--color-primary)] mb-3">Equilibrium</span>
            <span className="text-sm sm:text-base text-[var(--color-primary-dark)]/85 leading-relaxed">Software engineered to elevate spiritual and civic habits, not capture infinite user attention.</span>
          </div>
        </div>

        {/* Architectural Pillars - Editorial Layout */}
        <div className="flex flex-col editorial-panel p-0 border border-black/5">
          
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-stretch border-b border-black/5">
            <div className="lg:w-1/3 p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col justify-center items-start bg-white">
              <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-primary)] mb-4 sm:mb-6" />
              <h3 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-2">
                Data Sovereignty &amp; Privacy
              </h3>
            </div>
            <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white/40">
              <p className="text-[var(--color-primary-dark)]/85 leading-relaxed text-base sm:text-lg">
                We build systems where user data is minimised by default. Information is stored locally whenever possible, never brokered to third parties, and protected under stringent Singapore PDPA standards.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row items-stretch border-b border-black/5">
            <div className="lg:w-1/3 p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col justify-center items-start bg-white">
              <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-primary)] mb-4 sm:mb-6" />
              <h3 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-2">
                Resilient Modern Engineering
              </h3>
            </div>
            <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white/40">
              <p className="text-[var(--color-primary-dark)]/85 leading-relaxed text-base sm:text-lg">
                We utilise high-performance cloud pipelines, intelligent data scraping, and edge-native architectures to transform unstructured civic information into fast, accessible tools.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-1/3 p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col justify-center items-start bg-white">
              <HeartHandshake className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-primary)] mb-4 sm:mb-6" />
              <h3 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-2">
                Civic &amp; Community Purpose
              </h3>
            </div>
            <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white/40">
              <p className="text-[var(--color-primary-dark)]/85 leading-relaxed text-base sm:text-lg">
                Success is measured by genuine utility. Every line of code exists to solve systemic fragmentation, empower grassroots organisations, and provide dignity to the people we serve.
              </p>
            </div>
          </div>

        </div>

        {/* Full Manifesto Link */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Link
            href="/philosophy"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-black/10 hover:border-black/30 text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Read Full Tayyib Architecture Manifesto</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-primary)]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
