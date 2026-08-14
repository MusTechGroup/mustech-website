import { Lock, HeartHandshake, Code2 } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/5 mb-24 border-b border-black/5 pb-16">
          <div className="flex flex-col px-4 py-8 md:p-8 md:pl-0">
            <span className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-4">Amanah <span className="text-base font-sans font-normal text-[var(--color-primary-dark)]/60 ml-2">(Sacred Trust)</span></span>
            <span className="text-base text-[var(--color-primary-dark)]/80 leading-relaxed">Absolute data privacy, zero ad-tracking, and complete transparency in how systems operate.</span>
          </div>
          <div className="flex flex-col px-4 py-8 md:p-8">
            <span className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-4">Tijarah <span className="text-base font-sans font-normal text-[var(--color-primary-dark)]/60 ml-2">(Ethical Enterprise)</span></span>
            <span className="text-base text-[var(--color-primary-dark)]/80 leading-relaxed">Commercially sustainable ventures built without predatory monetization or user exploitation.</span>
          </div>
          <div className="flex flex-col px-4 py-8 md:p-8 md:pr-0">
            <span className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-4">Mizan <span className="text-base font-sans font-normal text-[var(--color-primary-dark)]/60 ml-2">(Equilibrium)</span></span>
            <span className="text-base text-[var(--color-primary-dark)]/80 leading-relaxed">Software engineered to elevate spiritual and civic habits, not capture infinite user attention.</span>
          </div>
        </div>

        {/* Architectural Pillars - Editorial Layout */}
        <div className="flex flex-col editorial-panel p-0 border border-black/5">
          
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-stretch border-b border-black/5">
            <div className="lg:w-1/3 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col justify-center items-start bg-white">
              <Lock className="w-8 h-8 text-[var(--color-primary)] mb-6" />
              <h3 className="font-brand text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
                Data Sovereignty & Privacy
              </h3>
            </div>
            <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center bg-white/40">
              <p className="text-[var(--color-primary-dark)]/80 leading-relaxed text-lg sm:text-xl">
                We build systems where user data is minimised by default. Information is stored locally whenever possible, never brokered to third parties, and protected under stringent Singapore PDPA standards.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row items-stretch border-b border-black/5">
            <div className="lg:w-1/3 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col justify-center items-start bg-white">
              <Code2 className="w-8 h-8 text-[var(--color-primary)] mb-6" />
              <h3 className="font-brand text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
                Resilient Modern Engineering
              </h3>
            </div>
            <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center bg-white/40">
              <p className="text-[var(--color-primary-dark)]/80 leading-relaxed text-lg sm:text-xl">
                We utilize high-performance cloud pipelines, intelligent data scraping, and edge-native architectures to transform unstructured civic information into fast, accessible tools.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="lg:w-1/3 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col justify-center items-start bg-white">
              <HeartHandshake className="w-8 h-8 text-[var(--color-primary)] mb-6" />
              <h3 className="font-brand text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
                Civic & Community Purpose
              </h3>
            </div>
            <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center bg-white/40">
              <p className="text-[var(--color-primary-dark)]/80 leading-relaxed text-lg sm:text-xl">
                Success is measured by genuine utility. Every line of code exists to solve systemic fragmentation, empower grassroots organisations, and provide dignity to the people we serve.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
