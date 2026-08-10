import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Soft Light Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Main Headline */}
          <h1 className="font-brand text-4xl sm:text-6xl lg:text-[5rem] font-bold tracking-tight text-[var(--color-primary-dark)] max-w-5xl leading-[1.1] mb-8">
            A Global Ethical Tech Collective
          </h1>

          {/* Subheading - User's Exact Copy */}
          <p className="max-w-3xl text-base sm:text-lg md:text-xl text-[var(--color-primary-dark)] font-sans leading-relaxed mb-12">
            MusTech Group is a global ethical tech collective. We build digital tools designed to serve and uplift the Muslim community. Everything we create is governed by what we call <strong>"Tayyib Architecture"</strong>: building holistic, ethical products designed for purposeful engagement, not endless scrolling.
          </p>

          {/* Action Button */}
          <div className="flex justify-center w-full mb-20">
            <Link
              href="#pillars"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] text-white font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Learn More</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

          {/* About Saalihat - Featured App Section */}
          <div className="w-full max-w-5xl text-left bg-white border border-black/5 rounded-[2rem] p-8 sm:p-12 shadow-xl shadow-black/5 relative overflow-hidden group">
            {/* Decorative element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl group-hover:bg-[var(--color-primary)]/10 transition-colors duration-500" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* App Icon / Visual */}
              <div className="md:col-span-3 flex justify-center md:justify-start">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 bg-[var(--brand-bg)] rounded-[2rem] border border-black/5 shadow-inner flex items-center justify-center p-6">
                  <Image
                    src="/saalihat/logo.jpg"
                    alt="Saalihat App Icon"
                    width={100}
                    height={100}
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Saalihat Copy */}
              <div className="md:col-span-9">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-wider mb-4 border border-[var(--color-primary)]/20">
                  Flagship Community Platform
                </div>
                <h2 className="font-brand text-3xl sm:text-4xl font-bold text-[var(--color-primary-dark)] mb-4">
                  Saalihat
                </h2>
                <p className="text-base sm:text-lg text-[var(--color-primary-dark)]/90 leading-relaxed">
                  Saalihat is our flagship community platform, designed to help Singaporean Muslims discover local mosque events, find community, and build beautiful spiritual habits. Born from a spur-of-the-moment conversation about how events at mosques are buried by proximity — Saalihat exists to close that gap.
                </p>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
