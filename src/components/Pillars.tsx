import { Lock, HeartHandshake, Code2 } from "lucide-react";

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 relative overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent" />
      <div className="absolute -left-[200px] top-[20%] w-[500px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary-dark)] tracking-tight mb-6">
            Values & Technology
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-8">
            Our approach to building software is governed by a deep sense of responsibility and ethical data stewardship. We are rooted in three foundational principles:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="px-6 py-5 rounded-2xl bg-[var(--brand-bg)] border border-[var(--color-primary)]/20 shadow-sm flex flex-col items-center text-center">
              <span className="font-brand text-xl font-bold text-[var(--color-primary-dark)] mb-2">Amanah</span>
              <span className="text-xs text-[var(--color-primary-dark)]/70 font-medium">Sacred Trust. Engineering with ethical data stewardship and absolute privacy.</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-[var(--brand-bg)] border border-[var(--color-primary)]/20 shadow-sm flex flex-col items-center text-center">
              <span className="font-brand text-xl font-bold text-[var(--color-primary-dark)] mb-2">Tijarah</span>
              <span className="text-xs text-[var(--color-primary-dark)]/70 font-medium">Ethical Enterprise. Building sustainable businesses without compromising principles.</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-[var(--brand-bg)] border border-[var(--color-primary)]/20 shadow-sm flex flex-col items-center text-center">
              <span className="font-brand text-xl font-bold text-[var(--color-primary-dark)] mb-2">Mizan</span>
              <span className="text-xs text-[var(--color-primary-dark)]/70 font-medium">Balance. Creating tools that elevate habits rather than demanding endless attention.</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Box 1: Architecture */}
          <div className="glass-panel p-8 sm:p-10 hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 group rounded-[2rem]">
            <div className="w-14 h-14 rounded-2xl bg-[var(--brand-bg)] border border-[var(--color-primary)]/10 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lock className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-2">
              Architecture
            </h3>
            <p className="text-[var(--color-primary-dark)]/70 leading-relaxed text-sm sm:text-base">
              We engineer our platforms with ethical data stewardship at the foundation. We commit to using data responsibly, transparently, and exclusively to provide direct value back to the community we serve.
            </p>
          </div>

          {/* Box 2: Modern Engineering */}
          <div className="glass-panel p-8 sm:p-10 hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 group rounded-[2rem]">
            <div className="w-14 h-14 rounded-2xl bg-[var(--brand-bg)] border border-[var(--color-primary)]/10 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-2">
              Modern Engineering
            </h3>
            <p className="text-[var(--color-primary-dark)]/70 leading-relaxed text-sm sm:text-base">
              We leverage cutting-edge AI architectures and modern engineering pipelines to build sustainable, scalable infrastructure that effectively solves systemic problems.
            </p>
          </div>

          {/* Box 3: Community-First Impact */}
          <div className="glass-panel p-8 sm:p-10 hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all duration-300 group rounded-[2rem]">
            <div className="w-14 h-14 rounded-2xl bg-[var(--brand-bg)] border border-[var(--color-primary)]/10 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <HeartHandshake className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-2">
              Community-First Impact
            </h3>
            <p className="text-[var(--color-primary-dark)]/70 leading-relaxed text-sm sm:text-base">
              Success is measured by the balance we bring to our users' lives. We build tools that quietly elevate spiritual habits and community bonds, designed to serve as a companion rather than demanding constant attention.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
