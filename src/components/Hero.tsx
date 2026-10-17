"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Reveal from "@/components/Reveal";

type BrandKey = "tayyib" | "saalihat" | "jenazah" | "tarabase";

const BRAND_LOGO_STATES: Record<
  BrandKey,
  { hex: string; label: string; domain: string }
> = {
  tayyib: {
    hex: "#077d95",
    label: "MusTech Teal",
    domain: "Tayyib Architecture",
  },
  saalihat: {
    hex: "#1c1f24",
    label: "Charcoal Black",
    domain: "Saalihat",
  },
  jenazah: {
    hex: "#92ae94",
    label: "Solace Sage",
    domain: "jenazah.sg",
  },
  tarabase: {
    hex: "#814038",
    label: "Artisanal Clay",
    domain: "TaraBase",
  },
};

export default function Hero() {
  const [activeBrand, setActiveBrand] = useState<BrandKey>("tayyib");
  const [scrollProgress, setScrollProgress] = useState(0);
  const currentBrand = BRAND_LOGO_STATES[activeBrand];

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(1, Math.max(0, window.scrollY / 200));
      setScrollProgress(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-[var(--brand-bg)] border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Hero: Oversized Chameleon MusTech Logo on Left (docks into top Navbar on scroll), Headline & Copy on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <Reveal className="lg:col-span-5 flex items-center justify-center lg:justify-start" delayMs={0}>
            <div
              role="img"
              aria-label={`MusTech Group Emblem in ${currentBrand.label}`}
              className="w-72 h-52 sm:w-88 sm:h-64 md:w-[400px] md:h-72 lg:w-full lg:max-w-[460px] lg:h-80 transition-colors duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform origin-top-left"
              style={{
                backgroundColor: currentBrand.hex,
                WebkitMaskImage: "url('/brand/Logo_Large_ClearBg.png')",
                maskImage: "url('/brand/Logo_Large_ClearBg.png')",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                transform: `translate3d(0, ${-scrollProgress * 96}px, 0) scale(${1 - scrollProgress * 0.72})`,
                opacity: 1 - scrollProgress * 0.95,
              }}
            />
          </Reveal>

          <div className="lg:col-span-7 text-center lg:text-left">
            <Reveal delayMs={70}>
              <h1 className="font-brand text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--color-primary-dark)] leading-[1.06] mb-5">
                A Global Ethical<br />Tech Collective.
              </h1>
            </Reveal>

            <Reveal delayMs={120}>
              <p className="text-base sm:text-lg md:text-xl text-[var(--color-primary-dark)]/80 font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
                MusTech Group builds ethical digital infrastructure and mobile applications for the Muslim community. Governed by our <strong>Tayyib Architecture</strong> framework, our software is engineered for utility, data privacy, and lasting civic value.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Interactive 4-Panel Photographic & Product Strip (Hovering Changes Top MusTech Logo Colour) */}
        <Reveal delayMs={160} direction="scale">
          <div
            className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:h-[460px]"
            onMouseLeave={() => setActiveBrand("tayyib")}
          >
            
            {/* 1. Saalihat — Charcoal / Black Brand State */}
            <Link
              href="#saalihat"
              onMouseEnter={() => setActiveBrand("saalihat")}
              onFocus={() => setActiveBrand("saalihat")}
              className="group relative flex-1 lg:hover:flex-[1.6] h-80 lg:h-full overflow-hidden bg-[#0e1117] text-white border border-black/10 transition-[flex,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.99]"
            >
              <Image
                src="/editorial/turquoise-dome.jpg"
                alt="Turquoise-domed mosque in golden afternoon light"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117]/95 via-[#0e1117]/35 to-black/10" />

              {/* Floating Clean App Card on Top-Right */}
              <div className="absolute right-4 top-4 w-28 sm:w-32 aspect-[1260/1980] rounded-lg overflow-hidden border border-white/25 bg-black shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1.5 group-hover:scale-105">
                <Image
                  src="/saalihat/clean-screen-1.png"
                  alt="Saalihat Upcoming Mosque Events Interface"
                  fill
                  sizes="140px"
                  className="object-cover object-top"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-brand text-2xl font-bold text-white leading-tight">Saalihat</p>
                  <p className="text-sm text-[#fdfaf0]/85 mt-0.5 truncate">Mosque &amp; Lecture Directory</p>
                </div>
                <ArrowDown className="w-4 h-4 text-[#d5ad5b] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-1" />
              </div>

              <span className="absolute inset-x-0 bottom-0 h-1.5 bg-[#1c1f24] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100" />
            </Link>

            {/* 2. jenazah.sg — Sage (#92ae94) Brand State */}
            <Link
              href="#jenazah"
              onMouseEnter={() => setActiveBrand("jenazah")}
              onFocus={() => setActiveBrand("jenazah")}
              className="group relative flex-1 lg:hover:flex-[1.6] h-80 lg:h-full overflow-hidden bg-[#233219] text-white border border-black/10 transition-[flex,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.99]"
            >
              <Image
                src="/editorial/juniper-sage.jpg"
                alt="Calm juniper foliage and sage berries"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#192412]/95 via-[#192412]/35 to-black/10" />

              {/* Floating Bereavement Notice UI Preview */}
              <div className="absolute right-4 top-4 w-24 sm:w-28 aspect-[780/1688] rounded-lg overflow-hidden border border-white/25 bg-[#FDFCF8] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1.5 group-hover:scale-105">
                <Image
                  src="/ecosystem/jenazah/step-3-public-after.webp"
                  alt="jenazah.sg Bereavement Coordination UI"
                  fill
                  sizes="120px"
                  className="object-cover object-top"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-brand text-2xl font-bold text-white leading-tight">jenazah.sg</p>
                  <p className="text-sm text-[#fdfaf0]/85 mt-0.5 truncate">Bereavement &amp; Funeral Rites</p>
                </div>
                <ArrowDown className="w-4 h-4 text-[#f8df98] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-1" />
              </div>

              <span className="absolute inset-x-0 bottom-0 h-1.5 bg-[#92ae94] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100" />
            </Link>

            {/* 3. TaraBase — Clay (#814038) Brand State */}
            <Link
              href="#tarabase"
              onMouseEnter={() => setActiveBrand("tarabase")}
              onFocus={() => setActiveBrand("tarabase")}
              className="group relative flex-1 lg:hover:flex-[1.6] h-80 lg:h-full overflow-hidden bg-[#814038] text-white border border-black/10 transition-[flex,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.99]"
            >
              <Image
                src="/editorial/artisanal-batch-counter.jpg"
                alt="Artisanal small-batch dessert counter with handwritten slate batch tags"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a120f]/95 via-[#2a120f]/35 to-black/10" />

              {/* Floating 4K PayNow Counter UI Preview */}
              <div className="absolute right-4 top-4 w-32 sm:w-36 aspect-[920/690] rounded-lg overflow-hidden border border-white/25 bg-[#FAF8F5] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1.5 group-hover:scale-105">
                <Image
                  src="/ecosystem/tarabase/ui-paynow-counter.png"
                  alt="TaraBase Live PayNow Counter UI"
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-brand text-2xl font-bold text-white leading-tight">TaraBase</p>
                  <p className="text-sm text-[#fdfaf0]/85 mt-0.5 truncate">Small-Batch Kitchen OS</p>
                </div>
                <ArrowDown className="w-4 h-4 text-[#f8df98] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-1" />
              </div>

              <span className="absolute inset-x-0 bottom-0 h-1.5 bg-[#814038] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100" />
            </Link>

            {/* 4. Tayyib Architecture — MusTech Teal (#077d95) Brand State */}
            <Link
              href="#philosophy"
              onMouseEnter={() => setActiveBrand("tayyib")}
              onFocus={() => setActiveBrand("tayyib")}
              className="group relative flex-1 lg:hover:flex-[1.6] h-80 lg:h-full overflow-hidden bg-[#077d95] text-white border border-black/10 transition-[flex,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.99]"
            >
              <Image
                src="/editorial/cobalt-tile-arch.jpg"
                alt="Traditional cobalt and turquoise glazed ceramic tile arch set in sunlit brick"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#053b47]/95 via-[#053b47]/35 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-brand text-2xl font-bold text-[#f8df98] leading-tight">Tayyib Architecture</p>
                  <p className="text-sm text-[#fdfaf0]/85 mt-0.5 truncate">Amanah · Tijarah · Mizan</p>
                </div>
                <ArrowDown className="w-4 h-4 text-[#f8df98] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-1" />
              </div>

              <span className="absolute inset-x-0 bottom-0 h-1.5 bg-[#077d95] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100" />
            </Link>

          </div>
        </Reveal>
        
      </div>
    </section>
  );
}
