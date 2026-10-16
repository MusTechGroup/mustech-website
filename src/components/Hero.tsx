import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[var(--brand-bg)] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Typography */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-12 sm:mb-16">
          <h1 className="font-brand text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-[var(--color-primary-dark)] leading-[1.1] mb-6 sm:mb-8">
            A Global Ethical<br />Tech Collective.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-primary-dark)]/85 font-sans leading-relaxed max-w-3xl">
            MusTech Group builds ethical digital infrastructure and mobile applications for the global Muslim community. Governed by our <strong>Tayyib Architecture</strong> framework, our software is engineered for utility, data privacy, and lasting civic value.
          </p>
        </div>

        {/* Scroll Indicator - Static Footnote */}
        <div className="flex justify-center mt-6 sm:mt-8 border-t border-black/10 pt-6 sm:pt-8">
          <Link
            href="#saalihat"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--color-primary-dark)]/70 hover:text-[var(--color-primary)] transition-colors"
          >
            <span>Explore Portfolio</span>
            <ArrowDown className="w-4 h-4" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
