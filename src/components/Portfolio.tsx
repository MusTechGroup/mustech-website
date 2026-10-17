import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import AnimatedJenazahLogo from "@/components/AnimatedJenazahLogo";
import AnimatedTarabaseLogo from "@/components/AnimatedTarabaseLogo";
import AnimatedJumpstartLogo from "@/components/AnimatedJumpstartLogo";
import Reveal from "@/components/Reveal";

export default function Portfolio() {
  return (
    <section id="saalihat" className="w-full">
      {/* Saalihat Flagship Showcase (Solid Dark Stage with Animated Boomerang GIF/Video) */}
      <div className="w-full bg-[#0e1117] py-20 sm:py-28 relative overflow-hidden text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Content Side */}
            <Reveal className="lg:col-span-6 flex flex-col justify-center" direction="left">
              <div className="flex items-center gap-5 mb-8">
                <Image
                  src="/saalihat/logo.jpg"
                  alt="Saalihat App Logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-xl object-cover ring-1 ring-white/15 shrink-0"
                />
                <h2 className="font-brand text-4xl sm:text-5xl font-bold leading-none tracking-tight text-white">
                  Saalihat
                </h2>
              </div>

              <p className="font-brand text-2xl sm:text-3xl text-[#d5ad5b] mb-4 leading-snug">
                Connecting Muslims in Singapore to verified mosque events and sacred knowledge.
              </p>
              <p className="text-[#fdfaf0]/80 text-base sm:text-lg leading-relaxed mb-8">
                Saalihat (صالحات) aggregates mosque lectures, charitable programmes, and community circles across Singapore into a single, verified schedule without advertising or behavioural tracking.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <a
                    href="https://apps.apple.com/sg/app/saalihat/id6760661366"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#d5ad5b] hover:bg-white text-black text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-0.5 active:translate-y-[1px] min-h-[44px]"
                  >
                    <span className="text-lg leading-none"></span>
                    <span>Download on iOS</span>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.mustechgroup.saalihat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#d5ad5b] hover:bg-white text-black text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-0.5 active:translate-y-[1px] min-h-[44px]"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 2.5v19l16-9.5z" />
                    </svg>
                    <span>Get it on Android</span>
                  </a>
                </div>
                
                {/* Desktop-only QR row */}
                <div className="hidden lg:flex items-center gap-8 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/saalihat/apple-qr.jpg"
                      alt="QR code to download Saalihat on the Apple App Store"
                      width={56}
                      height={56}
                      className="w-14 h-14 object-cover"
                    />
                    <span className="text-[#fdfaf0]/60 text-xs">Scan for iOS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/saalihat/google-qr.jpg"
                      alt="QR code to download Saalihat on Google Play"
                      width={56}
                      height={56}
                      className="w-14 h-14 object-cover"
                    />
                    <span className="text-[#fdfaf0]/60 text-xs">Scan for Android</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Visual Side: Center Animated Saalihat Boomerang GIF/Video Flanked by Clean Retina Screens with 3D Fan-Out on Hover */}
            <Reveal className="lg:col-span-6 relative w-full flex flex-col items-center justify-center py-6 lg:py-0" delayMs={150} direction="scale">
              <div className="group/phones relative flex items-center justify-center w-full max-w-lg cursor-pointer">
                {/* Left Secondary Floating Screen */}
                <div className="hidden sm:block w-44 -mr-8 opacity-85 scale-90 animate-float-slow z-0 border border-white/20 bg-[#0e1117] p-1.5 shadow-2xl rounded-xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/phones:-translate-x-4 group-hover/phones:-rotate-3 group-hover/phones:opacity-100">
                  <div className="relative aspect-[1260/1980] overflow-hidden rounded-lg bg-black">
                    <Image
                      src="/saalihat/clean-screen-1.png"
                      alt="Saalihat Upcoming Mosque Events Screen"
                      fill
                      sizes="200px"
                      className="object-contain object-top"
                    />
                  </div>
                </div>

                {/* Primary Center Animated Boomerang GIF/Video Mockup */}
                <div className="relative w-60 sm:w-64 border border-white/25 bg-[#0e1117] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.85)] z-10 rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/phones:scale-[1.04] group-hover/phones:border-[#d5ad5b]/60">
                  <div className="relative w-full aspect-[1096/2560] overflow-hidden rounded-xl bg-black">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      poster="/saalihat/clean-screen-1.png"
                      className="w-full h-full object-contain block"
                    >
                      <source src="/saalihat/saalihat_boomerang.webm" type="video/webm" />
                      <source src="/saalihat/saalihat_boomerang.mp4" type="video/mp4" />
                      <Image
                        src="/saalihat/saalihat_boomerang.gif"
                        alt="Saalihat App Live Animated Walkthrough"
                        fill
                        sizes="(max-width: 768px) 100vw, 280px"
                        className="object-contain"
                        unoptimized
                      />
                    </video>
                  </div>
                </div>

                {/* Right Secondary Floating Screen */}
                <div className="hidden sm:block w-44 -ml-8 opacity-85 scale-90 animate-float-reverse z-0 border border-white/20 bg-[#0e1117] p-1.5 shadow-2xl rounded-xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/phones:translate-x-4 group-hover/phones:rotate-3 group-hover/phones:opacity-100">
                  <div className="relative aspect-[1260/1980] overflow-hidden rounded-lg bg-black">
                    <Image
                      src="/saalihat/clean-screen-2.png"
                      alt="Saalihat Mosque Details Screen"
                      fill
                      sizes="200px"
                      className="object-contain object-top"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-8 text-[#fdfaf0]/60 text-xs">
                <span>Zero Ads</span>
                <span>·</span>
                <span>No Tracking</span>
                <span>·</span>
                <span>PDPA Compliant</span>
              </div>
            </Reveal>
            
          </div>
        </div>
      </div>

      {/* Concise Homepage Overview of Sister Platforms (Full Deep-Dive Lives on /portfolio) */}
      <div className="w-full bg-[var(--brand-bg)] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-black/10">
            <div>
              <h2 className="font-brand text-3xl sm:text-4xl font-bold text-[var(--color-primary-dark)] tracking-tight">
                Civic &amp; Commercial Platforms
              </h2>
              <p className="text-base text-[var(--color-primary-dark)]/75 mt-1">
                Web infrastructure for bereavement navigation, micro-merchant commerce, and AI operations.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:opacity-75 active:translate-y-[1px] transition-all shrink-0 group"
            >
              <span>View interactive walkthroughs &amp; full portfolio</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>

          {/* Concise 3-Column Executive Summary Grid — Solid Brand Identity Stages, Zero Pills & Aligned Headers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            
            {/* 1. jenazah.sg Concise Card */}
            <Reveal className="h-full">
              <div id="jenazah" className="editorial-panel relative bg-white border border-black/10 flex flex-col justify-between h-full overflow-hidden scroll-mt-28 group">
                {/* Constellation Sage Top Accent Bar */}
                <span className="absolute inset-x-0 top-0 h-1.5 bg-[#92ae94] z-20" />
                <div>
                  {/* Solid Brand Stage with Centered Logo (No Pill) */}
                  <a
                    href="https://jenazah.sg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-44 sm:h-52 w-full bg-[#FDFCF8] border-b border-black/10 flex items-center justify-center p-6 sm:p-8 transition-colors duration-300 group-hover:bg-[#92ae94]/10"
                  >
                    <AnimatedJenazahLogo />
                  </a>

                  {/* Centered Executive Summary Body with Aligned Header Height */}
                  <div className="p-6 sm:p-8 text-center">
                    <h3 className="font-brand text-xl sm:text-2xl font-bold text-[var(--color-primary-dark)] mb-3 leading-snug lg:min-h-[4rem] flex items-center justify-center">
                      Compassionate Bereavement Guidance
                    </h3>
                    <p className="text-[var(--color-primary-dark)]/80 leading-relaxed text-sm sm:text-base">
                      Provides Singaporean families with calm, step-by-step funeral rites coordination, mosque prayer logistics, and live WhatsApp community notices.
                    </p>
                  </div>
                </div>

                <a
                  href="https://jenazah.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 border-t border-black/10 flex items-center justify-center gap-2 text-sm font-semibold text-[#4A5D3F] bg-[#FDFCF8]/60 hover:bg-[#92ae94]/15 transition-colors min-h-[44px]"
                >
                  <span>Launch jenazah.sg</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Reveal>

            {/* 2. TaraBase Concise Card */}
            <Reveal delayMs={80} className="h-full">
              <div id="tarabase" className="editorial-panel relative bg-white border border-black/10 flex flex-col justify-between h-full overflow-hidden scroll-mt-28 group">
                {/* Constellation Clay Top Accent Bar */}
                <span className="absolute inset-x-0 top-0 h-1.5 bg-[#814038] z-20" />
                <div>
                  {/* Solid Brand Stage with Centered Logo (No Pill) */}
                  <a
                    href="https://tarabase.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-44 sm:h-52 w-full bg-[#FAF8F5] border-b border-black/10 flex items-center justify-center p-6 sm:p-8 transition-colors duration-300 group-hover:bg-[#814038]/[0.06]"
                  >
                    <AnimatedTarabaseLogo />
                  </a>

                  {/* Centered Executive Summary Body with Aligned Header Height */}
                  <div className="p-6 sm:p-8 text-center">
                    <h3 className="font-brand text-xl sm:text-2xl font-bold text-[var(--color-primary-dark)] mb-3 leading-snug lg:min-h-[4rem] flex items-center justify-center">
                      Zero-Commission Kitchen Operating System
                    </h3>
                    <p className="text-[var(--color-primary-dark)]/80 leading-relaxed text-sm sm:text-base">
                      Gives home bakers, cooks, and small-batch makers their own Telegram shop with daily batch limits and direct PayNow settlement with automated receipt checks.
                    </p>
                  </div>
                </div>

                <a
                  href="https://tarabase.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 border-t border-black/10 flex items-center justify-center gap-2 text-sm font-semibold text-[#814038] bg-[#FAF8F5]/60 hover:bg-[#814038]/10 transition-colors min-h-[44px]"
                >
                  <span>Explore TaraBase</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Reveal>

            {/* 3. MusTech Jumpstart Concise Card */}
            <Reveal delayMs={160} className="h-full">
              <div className="editorial-panel relative bg-white border border-black/10 flex flex-col justify-between h-full overflow-hidden group">
                {/* Constellation Teal Top Accent Bar */}
                <span className="absolute inset-x-0 top-0 h-1.5 bg-[#077d95] z-20" />
                <div>
                  {/* Solid Brand Stage with Centered Logo (No Pill) */}
                  <Link
                    href="/jumpstart"
                    className="relative h-44 sm:h-52 w-full bg-[#fdfaf0] border-b border-black/10 flex items-center justify-center p-6 sm:p-8 transition-colors duration-300 group-hover:bg-[#077d95]/[0.06]"
                  >
                    <AnimatedJumpstartLogo compact />
                  </Link>

                  {/* Centered Executive Summary Body with Aligned Header Height */}
                  <div className="p-6 sm:p-8 text-center">
                    <h3 className="font-brand text-xl sm:text-2xl font-bold text-[var(--color-primary-dark)] mb-3 leading-snug lg:min-h-[4rem] flex items-center justify-center">
                      Autonomous AI Masterclass for Founders
                    </h3>
                    <p className="text-[var(--color-primary-dark)]/80 leading-relaxed text-sm sm:text-base">
                      An executive programme where we pre-build a tailored AI organisation aligned to your venture and teach you how to run autonomous agentic workflows.
                    </p>
                  </div>
                </div>

                <Link
                  href="/jumpstart"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 border-t border-black/10 flex items-center justify-center gap-2 text-sm font-semibold text-[#077d95] bg-[#fdfaf0]/60 hover:bg-[#077d95]/10 transition-colors min-h-[44px]"
                >
                  <span>Explore Jumpstart</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}
