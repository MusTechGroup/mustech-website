import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[var(--brand-bg)] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Centered Typography */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--color-primary)] mb-6 border border-black/10 px-4 py-1.5">
            Singapore · Ethical Digital Infrastructure
          </div>
          <h1 className="font-brand text-5xl sm:text-7xl lg:text-[7.5rem] font-bold tracking-tight text-[var(--color-primary-dark)] leading-[1.05] mb-8">
            A Global Ethical<br />Tech Collective.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-primary-dark)]/80 font-sans leading-relaxed max-w-3xl">
            MusTech Group builds purposeful digital tools for the global Muslim community. Under our <strong>Tayyib Architecture</strong> framework—a standard for ethical, non-addictive software design—every product is engineered for utility, data privacy, and meaningful habits.
          </p>
        </div>

        {/* Scroll Indicator - Static Footnote */}
        <div className="flex justify-center mt-8 border-t border-black/10 pt-8">
          <Link
            href="#saalihat"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-primary-dark)]/60 hover:text-[var(--color-primary)] transition-colors"
          >
            <span>See Saalihat in Action</span>
            <ArrowDown className="w-4 h-4" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
