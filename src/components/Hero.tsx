"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
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

const HERO_PANELS = [
  {
    key: "saalihat" as BrandKey,
    name: "Saalihat",
    category: "Mobile Platform",
    subtitle: "Mosque & Lecture Directory",
    href: "#saalihat",
    image: "/editorial/turquoise-dome.jpg",
    alt: "Turquoise-domed mosque in golden afternoon light",
    accent: "#1c1f24",
    badgeHex: "#d5ad5b",
    previewImage: "/saalihat/clean-screen-1.png",
    previewAlt: "Saalihat Mosque Events Interface",
    previewAspect: "aspect-[1260/1980]",
    previewWidth: "w-20 sm:w-28",
  },
  {
    key: "jenazah" as BrandKey,
    name: "jenazah.sg",
    category: "Civic Utility",
    subtitle: "Bereavement & Funeral Rites",
    href: "#jenazah",
    image: "/editorial/juniper-sage.jpg",
    alt: "Calm juniper foliage and sage berries",
    accent: "#92ae94",
    badgeHex: "#f8df98",
    previewImage: "/ecosystem/jenazah/step-3-public-after.webp",
    previewAlt: "jenazah.sg Bereavement Coordination UI",
    previewAspect: "aspect-[780/1688]",
    previewWidth: "w-18 sm:w-24",
  },
  {
    key: "tarabase" as BrandKey,
    name: "TaraBase",
    category: "Commerce OS",
    subtitle: "Small-Batch Kitchen OS",
    href: "#tarabase",
    image: "/editorial/artisanal-batch-counter.jpg",
    alt: "Artisanal small-batch dessert counter with handwritten slate batch tags",
    accent: "#814038",
    badgeHex: "#f8df98",
    previewImage: "/ecosystem/tarabase/ui-paynow-counter.png",
    previewAlt: "TaraBase Live PayNow Counter UI",
    previewAspect: "aspect-[920/690]",
    previewWidth: "w-24 sm:w-32",
  },
  {
    key: "tayyib" as BrandKey,
    name: "Tayyib Architecture",
    category: "Core Philosophy",
    subtitle: "Amanah · Tijarah · Mizan",
    href: "/philosophy",
    image: "/editorial/cobalt-tile-arch.jpg",
    alt: "Traditional cobalt and turquoise glazed ceramic tile arch set in sunlit brick",
    accent: "#077d95",
    badgeHex: "#f8df98",
  },
];

export default function Hero() {
  const [activeBrand, setActiveBrand] = useState<BrandKey>("tayyib");
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const mobileTrackRef = useRef<HTMLDivElement>(null);

  const currentBrand = BRAND_LOGO_STATES[activeBrand];

  useEffect(() => {
    const handleScroll = () => {
      // Logo docking progress into top Navbar on scroll
      const logoProg = Math.min(1, Math.max(0, window.scrollY / 200));
      setScrollProgress(logoProg);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileTrackScroll = () => {
    const track = mobileTrackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    if (cards.length === 0) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;

    // Right-edge boundary check
    if (track.scrollLeft >= maxScroll - 16) {
      const lastIdx = cards.length - 1;
      if (lastIdx !== activeMobileIndex) {
        setActiveMobileIndex(lastIdx);
        setActiveBrand(HERO_PANELS[lastIdx].key);
      }
      return;
    }

    // Left-edge boundary check
    if (track.scrollLeft <= 16) {
      if (activeMobileIndex !== 0) {
        setActiveMobileIndex(0);
        setActiveBrand(HERO_PANELS[0].key);
      }
      return;
    }

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - trackCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeMobileIndex) {
      setActiveMobileIndex(closestIndex);
      setActiveBrand(HERO_PANELS[closestIndex].key);
    }
  };

  const scrollToMobileCard = (index: number) => {
    const track = mobileTrackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const target = cards[index];
    if (target) {
      const cardCenter = target.offsetLeft + target.offsetWidth / 2;
      const targetScrollLeft = cardCenter - track.clientWidth / 2;
      track.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-[var(--brand-bg)] border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Hero: Chameleon MusTech Logo on Left (docks into top Navbar on scroll), Headline & Copy on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
          <Reveal className="lg:col-span-5 flex items-center justify-center lg:justify-start" delayMs={0}>
            <div
              role="img"
              aria-label={`MusTech Group Emblem in ${currentBrand.label}`}
              className="w-56 h-40 sm:w-72 sm:h-52 md:w-88 md:h-64 lg:w-full lg:max-w-[440px] lg:h-76 transition-colors duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform origin-top-left"
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
              <h1 className="font-brand text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-primary-dark)] leading-[1.08] mb-4 sm:mb-5">
                A Global Ethical<br />Tech Collective.
              </h1>
            </Reveal>

            <Reveal delayMs={120}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--color-primary-dark)]/80 font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
                MusTech Group builds ethical digital infrastructure and mobile applications for the Muslim community. Governed by our <strong>Tayyib Architecture</strong> framework, our software is engineered for utility, data privacy, and lasting civic value.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 1. Desktop Experience: Expansive 4-Panel Interactive Accordion Strip */}
        <Reveal delayMs={160} direction="scale" className="hidden lg:block">
          <div
            className="flex flex-row gap-5 h-[460px]"
            onMouseLeave={() => setActiveBrand("tayyib")}
          >
            {HERO_PANELS.map((panel) => {
              const isTayyib = panel.key === "tayyib";
              return (
                <Link
                  key={panel.key}
                  href={panel.href}
                  onMouseEnter={() => setActiveBrand(panel.key)}
                  onFocus={() => setActiveBrand(panel.key)}
                  className={`group relative flex-1 hover:flex-[1.6] h-full overflow-hidden border border-black/10 transition-[flex,transform] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.99] ${
                    panel.key === "saalihat"
                      ? "bg-[#0e1117] text-white"
                      : panel.key === "jenazah"
                        ? "bg-[#233219] text-white"
                        : panel.key === "tarabase"
                          ? "bg-[#814038] text-white"
                          : "bg-[#077d95] text-white"
                  }`}
                >
                  <Image
                    src={panel.image}
                    alt={panel.alt}
                    fill
                    priority={panel.key === "saalihat"}
                    sizes="35vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      panel.key === "saalihat"
                        ? "from-[#0e1117]/95 via-[#0e1117]/35 to-black/10"
                        : panel.key === "jenazah"
                          ? "from-[#192412]/95 via-[#192412]/35 to-black/10"
                          : panel.key === "tarabase"
                            ? "from-[#2a120f]/95 via-[#2a120f]/35 to-black/10"
                            : "from-[#053b47]/95 via-[#053b47]/35 to-transparent"
                    }`}
                  />

                  {/* Floating Clean App Card Preview on Top-Right */}
                  {panel.previewImage && (
                    <div
                      className={`absolute right-4 top-4 ${panel.previewWidth} ${panel.previewAspect} rounded-lg overflow-hidden border border-white/25 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-1.5 group-hover:scale-105 ${
                        panel.key === "saalihat" ? "bg-black" : "bg-white"
                      }`}
                    >
                      <Image
                        src={panel.previewImage}
                        alt={panel.previewAlt || panel.name}
                        fill
                        sizes="160px"
                        className={
                          panel.key === "tarabase"
                            ? "object-cover"
                            : "object-cover object-top"
                        }
                      />
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-2">
                    <div className="min-w-0">
                      <p
                        className={`font-brand text-2xl font-bold leading-tight ${
                          isTayyib ? "text-[#f8df98]" : "text-white"
                        }`}
                      >
                        {panel.name}
                      </p>
                      <p className="text-sm text-[#fdfaf0]/85 mt-0.5 truncate">
                        {panel.subtitle}
                      </p>
                    </div>
                    <ArrowDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-1 ${
                        panel.key === "saalihat" ? "text-[#d5ad5b]" : "text-[#f8df98]"
                      }`}
                    />
                  </div>

                  <span
                    className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-x-100"
                    style={{ backgroundColor: panel.accent }}
                  />
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* 2. Mobile Experience: Substantial, Impactful Swipeable Cards with Zero Negative Space */}
      <div className="block lg:hidden relative mt-8 pt-6 border-t border-black/10">
        {/* Header Row with Step Indicator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between mb-3.5">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] block">
              Ecosystem Showcase
            </span>
            <p className="text-xs text-[var(--color-primary-dark)]/70 mt-0.5">
              Swipe across our active platforms
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-black/5 text-[var(--color-primary-dark)]">
            0{activeMobileIndex + 1} / 04
          </span>
        </div>

        {/* Horizontal Snap Track with Substantial Cards */}
        <div
          ref={mobileTrackRef}
          onScroll={handleMobileTrackScroll}
          className="flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none touch-pan-x px-4 sm:px-6 py-2"
        >
          {HERO_PANELS.map((panel, idx) => {
            const isActive = idx === activeMobileIndex;
            const isTayyib = panel.key === "tayyib";
            return (
              <Link
                key={panel.key}
                href={panel.href}
                onClick={() => {
                  setActiveMobileIndex(idx);
                  setActiveBrand(panel.key);
                }}
                className={`group relative w-[84vw] sm:w-[380px] max-w-[360px] sm:max-w-none h-[370px] sm:h-[400px] shrink-0 snap-center rounded-2xl overflow-hidden border shadow-xl transition-all duration-300 active:scale-[0.99] flex flex-col justify-between p-6 ${
                  isActive
                    ? "border-black/30 ring-2 ring-[var(--color-primary)]/50"
                    : "border-black/15 opacity-95"
                } ${
                  panel.key === "saalihat"
                    ? "bg-[#0e1117] text-white"
                    : panel.key === "jenazah"
                      ? "bg-[#233219] text-white"
                      : panel.key === "tarabase"
                        ? "bg-[#814038] text-white"
                        : "bg-[#077d95] text-white"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={panel.image}
                  alt={panel.alt}
                  fill
                  sizes="340px"
                  className="object-cover"
                />

                {/* Dark Gradient Overlay for high text contrast */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    panel.key === "saalihat"
                      ? "from-[#0e1117] via-[#0e1117]/65 to-black/25"
                      : panel.key === "jenazah"
                        ? "from-[#192412] via-[#192412]/65 to-black/25"
                        : panel.key === "tarabase"
                          ? "from-[#2a120f] via-[#2a120f]/65 to-black/25"
                          : "from-[#053b47] via-[#053b47]/65 to-transparent"
                  }`}
                />

                {/* Card Top: Category Badge & Floating Retina App Preview */}
                <div className="relative z-10 flex items-start justify-between gap-3">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md bg-black/40 border border-white/20 text-[#fdfaf0]">
                    {panel.category}
                  </span>

                  {panel.previewImage && (
                    <div
                      className={`relative ${panel.previewAspect} rounded-lg overflow-hidden border border-white/30 shadow-2xl ${
                        panel.key === "tarabase"
                          ? "w-28 bg-white"
                          : panel.key === "saalihat"
                            ? "w-20 bg-black"
                            : "w-18 bg-white"
                      }`}
                    >
                      <Image
                        src={panel.previewImage}
                        alt={panel.previewAlt || panel.name}
                        fill
                        sizes="120px"
                        className={
                          panel.key === "tarabase"
                            ? "object-cover"
                            : "object-cover object-top"
                        }
                      />
                    </div>
                  )}
                </div>

                {/* Card Bottom: Identity & Arrow Action */}
                <div className="relative z-10 pt-4 flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <p
                      className={`font-brand text-2xl sm:text-3xl font-bold leading-tight ${
                        isTayyib ? "text-[#f8df98]" : "text-white"
                      }`}
                    >
                      {panel.name}
                    </p>
                    <p className="text-xs sm:text-sm text-[#fdfaf0]/90 mt-1 line-clamp-2">
                      {panel.subtitle}
                    </p>
                  </div>

                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-white/30 bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
                    style={{ color: panel.badgeHex }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Brand Colour Line Accent */}
                <span
                  className="absolute inset-x-0 bottom-0 h-1.5"
                  style={{ backgroundColor: panel.accent }}
                />
              </Link>
            );
          })}
        </div>

        {/* Pagination Pills & Gesture Indicator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-3.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {HERO_PANELS.map((p, i) => (
              <button
                key={p.key}
                type="button"
                onClick={() => scrollToMobileCard(i)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  activeMobileIndex === i
                    ? "w-8 bg-[var(--color-primary-dark)]"
                    : "w-2.5 bg-black/20 hover:bg-black/40"
                }`}
                aria-label={`Jump to ${p.name}`}
              />
            ))}
          </div>
          <span className="text-[11px] font-medium text-[var(--color-primary-dark)]/60">
            Swipe left or right
          </span>
        </div>
      </div>
    </section>
  );
}
