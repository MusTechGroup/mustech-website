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

  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const isUserTouchingRef = useRef(false);

  const currentBrand = BRAND_LOGO_STATES[activeBrand];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Logo docking progress
      const logoProg = Math.min(1, Math.max(0, window.scrollY / 200));
      setScrollProgress(logoProg);

      // 2. Mobile sticky scroll: scrolling down drives horizontal track left-to-right
      const container = mobileContainerRef.current;
      const track = mobileTrackRef.current;
      if (!container || !track) return;

      const rect = container.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const totalDist = container.offsetHeight - viewportH;
      const scrolled = -rect.top + 80;

      if (scrolled >= 0 && scrolled <= totalDist) {
        const progress = Math.min(1, Math.max(0, scrolled / totalDist));
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (!isUserTouchingRef.current && maxScroll > 0) {
          track.scrollLeft = progress * maxScroll;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileTrackScroll = () => {
    const track = mobileTrackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;
    const itemWidth = track.scrollWidth / 4;
    const idx = Math.min(3, Math.max(0, Math.round(track.scrollLeft / itemWidth)));
    if (idx !== activeMobileIndex) {
      setActiveMobileIndex(idx);
      setActiveBrand(HERO_PANELS[idx].key);
    }
  };

  const scrollToMobileCard = (index: number) => {
    const track = mobileTrackRef.current;
    if (!track) return;
    const itemWidth = track.scrollWidth / 4;
    track.scrollTo({ left: index * itemWidth, behavior: "smooth" });
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

      {/* 2. Mobile Experience: Landscape Boxes with Dual Control
          - Swiping down vertically drives horizontal translation through cards 1 -> 4 before advancing to the next section.
          - Swiping sideways directly also snaps between cards. */}
      <div
        ref={mobileContainerRef}
        className="block lg:hidden relative h-[250vh] -mt-2 -mb-8"
      >
        <div className="sticky top-20 z-10 pt-2 pb-6 overflow-hidden">
          {/* Header Row with Step Indicator */}
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Ecosystem Showcase
            </span>
            <span className="text-xs font-semibold text-[var(--color-primary-dark)]/75">
              0{activeMobileIndex + 1} / 04
            </span>
          </div>

          {/* Horizontal Snap Track with Landscape Boxes */}
          <div
            ref={mobileTrackRef}
            onScroll={handleMobileTrackScroll}
            onTouchStart={() => {
              isUserTouchingRef.current = true;
            }}
            onTouchEnd={() => {
              setTimeout(() => {
                isUserTouchingRef.current = false;
              }, 300);
            }}
            className="flex flex-row gap-3.5 overflow-x-auto snap-x snap-mandatory scrollbar-none touch-pan-x px-4 py-2"
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
                  className={`group relative w-[85vw] max-w-[340px] h-52 shrink-0 snap-center rounded-2xl overflow-hidden border shadow-lg transition-all duration-300 active:scale-[0.98] ${
                    isActive
                      ? "border-black/30 ring-2 ring-[var(--color-primary)]/40"
                      : "border-black/15 opacity-90"
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
                  <Image
                    src={panel.image}
                    alt={panel.alt}
                    fill
                    sizes="340px"
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      panel.key === "saalihat"
                        ? "from-[#0e1117]/95 via-[#0e1117]/45 to-black/20"
                        : panel.key === "jenazah"
                          ? "from-[#192412]/95 via-[#192412]/45 to-black/20"
                          : panel.key === "tarabase"
                            ? "from-[#2a120f]/95 via-[#2a120f]/45 to-black/20"
                            : "from-[#053b47]/95 via-[#053b47]/45 to-transparent"
                    }`}
                  />

                  {/* Compact Floating App Preview on Top-Right */}
                  {panel.previewImage && (
                    <div
                      className={`absolute right-3.5 top-3.5 ${panel.previewAspect} rounded-lg overflow-hidden border border-white/25 shadow-xl ${
                        panel.key === "tarabase"
                          ? "w-24 bg-white"
                          : panel.key === "saalihat"
                            ? "w-16 bg-black"
                            : "w-14 bg-white"
                      }`}
                    >
                      <Image
                        src={panel.previewImage}
                        alt={panel.previewAlt || panel.name}
                        fill
                        sizes="100px"
                        className={
                          panel.key === "tarabase"
                            ? "object-cover"
                            : "object-cover object-top"
                        }
                      />
                    </div>
                  )}

                  {/* Bottom Landscape Card Details */}
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p
                        className={`font-brand text-2xl font-bold leading-tight ${
                          isTayyib ? "text-[#f8df98]" : "text-white"
                        }`}
                      >
                        {panel.name}
                      </p>
                      <p className="text-xs text-[#fdfaf0]/85 mt-1 truncate">
                        {panel.subtitle}
                      </p>
                    </div>

                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/25 bg-white/10 backdrop-blur-md"
                      style={{ color: panel.badgeHex }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Brand Color Line Accent */}
                  <span
                    className="absolute inset-x-0 bottom-0 h-1"
                    style={{ backgroundColor: panel.accent }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Pagination Pills & Gesture Prompt */}
          <div className="max-w-7xl mx-auto px-4 mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {HERO_PANELS.map((p, i) => (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => scrollToMobileCard(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    activeMobileIndex === i
                      ? "w-7 bg-[var(--color-primary-dark)]"
                      : "w-2 bg-black/20 hover:bg-black/40"
                  }`}
                  aria-label={`Jump to ${p.name}`}
                />
              ))}
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-primary-dark)]/50">
              Swipe or scroll down
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
