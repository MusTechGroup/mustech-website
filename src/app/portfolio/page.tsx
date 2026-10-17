import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import AnimatedJenazahLogo from "@/components/AnimatedJenazahLogo";
import AnimatedTarabaseLogo from "@/components/AnimatedTarabaseLogo";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Product Ecosystem & Interactive Walkthroughs",
  description:
    "Explore interactive walkthroughs and interface architecture across the MusTech Group ecosystem: Saalihat, jenazah.sg, TaraBase, and MusTech Jumpstart.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/portfolio",
    siteName: "MusTech Group",
    title: "Product Ecosystem & Interactive Walkthroughs | MusTech Group",
    description:
      "Explore MusTech Group's digital ecosystem: Saalihat, jenazah.sg, TaraBase, and MusTech Jumpstart.",
    images: [
      {
        url: "/brand/Logo_Large_ClearBg.png",
        width: 1200,
        height: 630,
        alt: "MusTech Group Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Digital Ecosystem | MusTech Group",
    description:
      "Explore MusTech Group's digital ecosystem: Saalihat, jenazah.sg, TaraBase, and MusTech Jumpstart.",
    images: ["/brand/Logo_Large_ClearBg.png"],
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "MusTech Group Product Ecosystem & Portfolio",
  url: "https://www.mustechgroup.com/portfolio",
  description:
    "Digital applications and civic platforms engineered by MusTech Group under the Tayyib Architecture framework.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        position: 1,
        name: "Saalihat",
        operatingSystem: "iOS, Android",
        applicationCategory: "LifestyleApplication",
        description: "Islamic community lecture aggregator and mosque schedule in Singapore.",
        url: "https://www.mustechgroup.com/portfolio#saalihat",
      },
      {
        "@type": "WebSite",
        position: 2,
        name: "jenazah.sg",
        url: "https://jenazah.sg",
        description: "Stateless grief navigation and live funeral coordination platform for Singapore.",
      },
      {
        "@type": "WebSite",
        position: 3,
        name: "TaraBase",
        url: "https://tarabase.co",
        description: "Digital front-of-house, pre-orders, and PayNow verification for home-based food businesses.",
      },
      {
        "@type": "Course",
        position: 4,
        name: "MusTech Jumpstart",
        url: "https://www.mustechgroup.com/jumpstart",
        description: "Hands-on executive masterclass teaching founders how to architect and run bespoke agentic organisations.",
      },
    ],
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--brand-bg)] text-[var(--color-primary-dark)]">
      <JsonLd schema={portfolioSchema} />
      <Navbar />

      <main id="main-content" className="flex-grow pt-28 sm:pt-36">
        {/* Page Header */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-primary-dark)]/60 hover:text-[var(--color-primary)] active:translate-y-[1px] transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to MusTech Group Home</span>
              </Link>
            </div>

            <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-end pb-10 border-b border-black/10">
              <div className="lg:col-span-7">
                <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary-dark)] tracking-tight leading-[1.08]">
                  Product Architecture &amp; Interactive Walkthroughs
                </h1>
              </div>
              <p className="lg:col-span-5 text-base sm:text-lg text-[var(--color-primary-dark)]/75 font-sans leading-relaxed">
                Inspect live product workflows, interface screens, and architectural specifications across our consumer applications and civic web platforms.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Deep-Dive Product Directory */}
        <section className="pb-24 space-y-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

            {/* 01. Saalihat Interactive Walkthrough (Solid Dark #0e1117 Stage + Animated GIF/Video + Both Store Links) */}
            <Reveal>
              <div
                id="saalihat"
                className="bg-[#0e1117] text-white border border-black/15 p-8 sm:p-10 lg:p-12 scroll-mt-28 relative overflow-hidden"
              >
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                  <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
                    <div>
                      <div className="flex items-center gap-5 mb-8">
                        <Image
                          src="/saalihat/logo.jpg"
                          alt="Saalihat App Logo"
                          width={56}
                          height={56}
                          className="h-14 w-14 rounded-xl object-cover ring-1 ring-white/20 shrink-0"
                        />
                        <div>
                          <h2 className="font-brand text-3xl sm:text-4xl font-bold text-white leading-none">
                            Saalihat
                          </h2>
                          <p className="text-xs text-[#d5ad5b] mt-1.5">
                            iOS &amp; Android Mobile Platform
                          </p>
                        </div>
                      </div>

                      <p className="text-[#fdfaf0]/80 text-sm sm:text-base leading-relaxed mb-6">
                        Mosque lecture schedules and grassroots announcements often live inside scattered image posters and chat groups. Saalihat turns fragmented community updates into a fast, verified mobile directory with topic and category filtering.
                      </p>

                      <dl className="grid grid-cols-2 gap-4 py-5 border-y border-white/15 text-xs">
                        <div>
                          <dt className="text-[#fdfaf0]/60">Verification</dt>
                          <dd className="font-semibold text-white mt-0.5">ARS Directory Cross-Checked</dd>
                        </div>
                        <div>
                          <dt className="text-[#fdfaf0]/60">Telemetry</dt>
                          <dd className="font-semibold text-white mt-0.5">Zero Ad-SDKs · Local Bookmarks</dd>
                        </div>
                        <div>
                          <dt className="text-[#fdfaf0]/60">Coverage</dt>
                          <dd className="font-semibold text-white mt-0.5">Singapore Mosques</dd>
                        </div>
                        <div>
                          <dt className="text-[#fdfaf0]/60">Availability</dt>
                          <dd className="font-semibold text-[#d5ad5b] mt-0.5">Live on App Store &amp; Play</dd>
                        </div>
                      </dl>
                    </div>

                    {/* Both App Store & Google Play Buttons Clearly Visible on Dark Stage */}
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                        <a
                          href="https://apps.apple.com/sg/app/saalihat/id6760661366"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-3 px-5 py-3.5 bg-[#d5ad5b] hover:bg-white text-black text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-0.5 active:translate-y-[1px]"
                        >
                          <span className="text-lg leading-none"></span>
                          <span>Download on the App Store</span>
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.mustechgroup.saalihat"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-3 px-5 py-3.5 bg-white hover:bg-[#d5ad5b] text-black text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-0.5 active:translate-y-[1px]"
                        >
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 2.5v19l16-9.5z" />
                          </svg>
                          <span>Get it on Google Play</span>
                        </a>
                      </div>

                      <div className="hidden lg:flex items-center gap-6 pt-4 border-t border-white/15">
                        <div className="flex items-center gap-2.5">
                          <Image
                            src="/saalihat/apple-qr.jpg"
                            alt="QR code for iOS App Store"
                            width={48}
                            height={48}
                            className="w-12 h-12 object-cover"
                          />
                          <span className="text-[#fdfaf0]/60 text-xs">iOS QR</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Image
                            src="/saalihat/google-qr.jpg"
                            alt="QR code for Google Play"
                            width={48}
                            height={48}
                            className="w-12 h-12 object-cover"
                          />
                          <span className="text-[#fdfaf0]/60 text-xs">Android QR</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right 8 Columns: Aligned 3-Step Cards with Large Top Step Headers + Crisp Native Retina Screens */}
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
                    {/* 01. Live Animated Boomerang GIF/Video */}
                    <div className="group bg-[#151922] border border-white/15 hover:border-[#d5ad5b]/50 p-5 flex flex-col justify-between transition-colors duration-300">
                      <div className="pb-4 mb-4 border-b border-white/10 min-h-[7.5rem]">
                        <div className="flex items-baseline gap-2.5 mb-1.5">
                          <span className="font-brand text-2xl font-bold text-[#d5ad5b] leading-none">
                            01
                          </span>
                          <h3 className="font-brand text-lg font-bold text-white leading-snug">
                            Live Feed
                          </h3>
                        </div>
                        <p className="text-sm text-[#fdfaf0]/75 leading-relaxed">
                          Browse verified mosque events, lecture times, and prayer halls in real time.
                        </p>
                      </div>
                      <div className="relative aspect-[1260/1980] w-full overflow-hidden rounded-lg bg-black border border-white/10">
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
                            sizes="(max-width: 640px) 90vw, 260px"
                            className="object-contain"
                            unoptimized
                          />
                        </video>
                      </div>
                    </div>

                    {/* 02. Mosque & Event Directory (Clean Retina Crop — Masjid Sultan) */}
                    <div className="group bg-[#151922] border border-white/15 hover:border-[#d5ad5b]/50 p-5 flex flex-col justify-between transition-colors duration-300">
                      <div className="pb-4 mb-4 border-b border-white/10 min-h-[7.5rem]">
                        <div className="flex items-baseline gap-2.5 mb-1.5">
                          <span className="font-brand text-2xl font-bold text-[#d5ad5b] leading-none">
                            02
                          </span>
                          <h3 className="font-brand text-lg font-bold text-white leading-snug">
                            Mosque Directory
                          </h3>
                        </div>
                        <p className="text-sm text-[#fdfaf0]/75 leading-relaxed">
                          Inspect mosque schedules, verified locations, and upcoming lectures by venue.
                        </p>
                      </div>
                      <div className="relative aspect-[1260/1980] w-full overflow-hidden rounded-lg bg-black border border-white/10">
                        <Image
                          src="/saalihat/clean-screen-2.png"
                          alt="Saalihat Mosque Details View"
                          fill
                          sizes="(max-width: 640px) 90vw, 260px"
                          className="object-contain object-top"
                        />
                      </div>
                    </div>

                    {/* 03. Structured Topic & Category Filter (Clean Retina Crop) */}
                    <div className="group bg-[#151922] border border-white/15 hover:border-[#d5ad5b]/50 p-5 flex flex-col justify-between transition-colors duration-300">
                      <div className="pb-4 mb-4 border-b border-white/10 min-h-[7.5rem]">
                        <div className="flex items-baseline gap-2.5 mb-1.5">
                          <span className="font-brand text-2xl font-bold text-[#d5ad5b] leading-none">
                            03
                          </span>
                          <h3 className="font-brand text-lg font-bold text-white leading-snug">
                            Topic Taxonomy
                          </h3>
                        </div>
                        <p className="text-sm text-[#fdfaf0]/75 leading-relaxed">
                          Filter by Fiqh &amp; Aqidah, Seerah, Tasawwuf, or weekly Kuliah classes.
                        </p>
                      </div>
                      <div className="relative aspect-[1260/1980] w-full overflow-hidden rounded-lg bg-black border border-white/10">
                        <Image
                          src="/saalihat/clean-screen-3.png"
                          alt="Saalihat Topic and Category Taxonomy Filter"
                          fill
                          sizes="(max-width: 640px) 90vw, 260px"
                          className="object-contain object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 02. jenazah.sg Full-Width Video Walkthrough + 3-Step Rites Flow */}
            <Reveal>
              <div
                id="jenazah-deep-dive"
                className="editorial-panel bg-white border border-black/10 p-8 sm:p-10 lg:p-12 scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                  <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
                    <div>
                      <a
                        href="https://jenazah.sg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[7rem] items-center mb-8 hover:opacity-90 transition-opacity"
                      >
                        <AnimatedJenazahLogo />
                      </a>

                      <h2 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-4 leading-tight">
                        Stateless Grief Navigation &amp; Live Funeral Coordination
                      </h2>
                      <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/80 leading-relaxed mb-6">
                        Requires zero account creation during a bereavement emergency. The Next-of-Kin receives a private coordination link to update rites stages (Pending, Ghusl, Janazah, Burial) while generating a clean, bilingual community notice for WhatsApp.
                      </p>

                      <dl className="grid grid-cols-2 gap-4 py-5 border-y border-black/10 text-xs">
                        <div>
                          <dt className="text-[var(--color-primary-dark)]/55">Rites Flow</dt>
                          <dd className="font-semibold text-[var(--color-primary-dark)] mt-0.5">Ghusl · Solat · Burial</dd>
                        </div>
                        <div>
                          <dt className="text-[var(--color-primary-dark)]/55">Privacy</dt>
                          <dd className="font-semibold text-[var(--color-primary-dark)] mt-0.5">No Sign-Up · Stateless Token</dd>
                        </div>
                        <div>
                          <dt className="text-[var(--color-primary-dark)]/55">Languages</dt>
                          <dd className="font-semibold text-[var(--color-primary-dark)] mt-0.5">English &amp; Bahasa Melayu</dd>
                        </div>
                        <div>
                          <dt className="text-[var(--color-primary-dark)]/55">Status</dt>
                          <dd className="font-semibold text-[#4A5D3F] mt-0.5">Live Public Utility</dd>
                        </div>
                      </dl>
                    </div>

                    <a
                      href="https://jenazah.sg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#4A5D3F] hover:bg-[#233219] text-white text-sm font-semibold transition-colors"
                    >
                      <span>Launch jenazah.sg</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Right 8 Columns: Full-Scale Video Walkthrough + 3-Step Mobile Cards with Aligned Top Step Headers */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="aspect-video rounded-xl overflow-hidden border border-black/15 bg-[#FDFCF8] shadow-lg">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover block"
                      >
                        <source src="/jenazah/mustech_jenazah_preview.webm" type="video/webm" />
                      </video>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
                      <div className="border border-black/10 bg-[#FDFCF8] p-5 flex flex-col justify-between">
                        <div className="pb-4 mb-4 border-b border-black/10 min-h-[7.5rem]">
                          <div className="flex items-baseline gap-2.5 mb-1.5">
                            <span className="font-brand text-2xl font-bold text-[#4A5D3F] leading-none">
                              01
                            </span>
                            <h3 className="font-brand text-lg font-bold text-[var(--color-primary-dark)] leading-snug">
                              Enter What You Know
                            </h3>
                          </div>
                          <p className="text-sm text-[var(--color-primary-dark)]/75 leading-relaxed">
                            Start with just the name; add burial plot and mosque details later.
                          </p>
                        </div>
                        <div className="relative aspect-[780/1100] w-full overflow-hidden rounded border border-black/10 bg-white">
                          <Image
                            src="/ecosystem/jenazah/step-1-create.webp"
                            alt="Step 1 Create Funeral Notice"
                            fill
                            sizes="(max-width: 640px) 90vw, 240px"
                            className="object-contain object-top"
                          />
                        </div>
                      </div>

                      <div className="border border-black/10 bg-[#FDFCF8] p-5 flex flex-col justify-between">
                        <div className="pb-4 mb-4 border-b border-black/10 min-h-[7.5rem]">
                          <div className="flex items-baseline gap-2.5 mb-1.5">
                            <span className="font-brand text-2xl font-bold text-[#4A5D3F] leading-none">
                              02
                            </span>
                            <h3 className="font-brand text-lg font-bold text-[var(--color-primary-dark)] leading-snug">
                              Family Control Link
                            </h3>
                          </div>
                          <p className="text-sm text-[var(--color-primary-dark)]/75 leading-relaxed">
                            Private link for Waris Terdekat to update rites stages in real time.
                          </p>
                        </div>
                        <div className="relative aspect-[780/1100] w-full overflow-hidden rounded border border-black/10 bg-white">
                          <Image
                            src="/ecosystem/jenazah/step-2-family.webp"
                            alt="Step 2 Family Coordination View"
                            fill
                            sizes="(max-width: 640px) 90vw, 240px"
                            className="object-contain object-top"
                          />
                        </div>
                      </div>

                      <div className="border border-black/10 bg-[#FDFCF8] p-5 flex flex-col justify-between">
                        <div className="pb-4 mb-4 border-b border-black/10 min-h-[7.5rem]">
                          <div className="flex items-baseline gap-2.5 mb-1.5">
                            <span className="font-brand text-2xl font-bold text-[#4A5D3F] leading-none">
                              03
                            </span>
                            <h3 className="font-brand text-lg font-bold text-[var(--color-primary-dark)] leading-snug">
                              Community Notice
                            </h3>
                          </div>
                          <p className="text-sm text-[var(--color-primary-dark)]/75 leading-relaxed">
                            Shareable link on WhatsApp with live Solat Jenazah &amp; burial status.
                          </p>
                        </div>
                        <div className="relative aspect-[780/1100] w-full overflow-hidden rounded border border-black/10 bg-white">
                          <Image
                            src="/ecosystem/jenazah/step-3-public-after.webp"
                            alt="Step 3 Public Community Notice"
                            fill
                            sizes="(max-width: 640px) 90vw, 240px"
                            className="object-contain object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 03. TaraBase Full-Width Video Walkthrough + 4K Zoomed-In Kitchen Modules */}
            <Reveal>
              <div
                id="tarabase-deep-dive"
                className="editorial-panel bg-white border border-black/10 p-8 sm:p-10 lg:p-12 scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                  <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
                    <div>
                      <a
                        href="https://tarabase.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[7rem] items-center mb-8 hover:opacity-90 transition-opacity"
                      >
                        <AnimatedTarabaseLogo />
                      </a>

                      <h2 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-4 leading-tight">
                        Zero-Commission Operating System for Small-Batch Kitchens
                      </h2>
                      <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/80 leading-relaxed mb-6">
                        Replaces chaotic DM threads and manual spreadsheet tallies. Home bakers and small-batch makers configure their service days and batch caps once; buyers order via Telegram and pay directly via PayNow QR.
                      </p>

                      <dl className="grid grid-cols-2 gap-4 py-5 border-y border-black/10 text-xs">
                        <div>
                          <dt className="text-[var(--color-primary-dark)]/55">Order Channel</dt>
                          <dd className="font-semibold text-[var(--color-primary-dark)] mt-0.5">Dedicated Telegram Bot</dd>
                        </div>
                        <div>
                          <dt className="text-[var(--color-primary-dark)]/55">Settlement</dt>
                          <dd className="font-semibold text-[var(--color-primary-dark)] mt-0.5">Direct PayNow (0% Cut)</dd>
                        </div>
                        <div>
                          <dt className="text-[var(--color-primary-dark)]/55">Concurrency</dt>
                          <dd className="font-semibold text-[var(--color-primary-dark)] mt-0.5">Atomic Slot Locks</dd>
                        </div>
                        <div>
                          <dt className="text-[var(--color-primary-dark)]/55">Pop-Up Mode</dt>
                          <dd className="font-semibold text-[#814038] mt-0.5">Offline-Ready Stall Counter</dd>
                        </div>
                      </dl>
                    </div>

                    <a
                      href="https://tarabase.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#814038] hover:bg-[#5e2d27] text-white text-sm font-semibold transition-colors"
                    >
                      <span>Launch TaraBase</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Right 8 Columns: Full-Scale Video Walkthrough + 4K Modules with Aligned Top Step Headers */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="aspect-video rounded-xl overflow-hidden border border-black/15 bg-white shadow-lg">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover block"
                      >
                        <source src="/tarabase/mustech_tarabase_preview.webm" type="video/webm" />
                        <source src="/tarabase/mustech_tarabase_preview.mp4" type="video/mp4" />
                      </video>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
                      <div className="border border-black/10 bg-[#FAF8F5] p-5 flex flex-col justify-between">
                        <div className="pb-4 mb-4 border-b border-black/10 min-h-[6.5rem]">
                          <div className="flex items-baseline gap-2.5 mb-1.5">
                            <span className="font-brand text-2xl font-bold text-[#814038] leading-none">
                              01
                            </span>
                            <h3 className="font-brand text-lg font-bold text-[var(--color-primary-dark)] leading-snug">
                              Buyer Telegram Storefront
                            </h3>
                          </div>
                          <p className="text-sm text-[var(--color-primary-dark)]/75 leading-relaxed">
                            Buyers pick a service day and collection window directly inside Telegram without downloading an app.
                          </p>
                        </div>
                        <div className="relative aspect-[980/880] w-full overflow-hidden rounded border border-black/10 bg-white">
                          <Image
                            src="/ecosystem/tarabase/ui-telegram-storefront.png"
                            alt="TaraBase Buyer Telegram Storefront Preview"
                            fill
                            sizes="(max-width: 640px) 90vw, 380px"
                            className="object-contain object-top"
                          />
                        </div>
                      </div>

                      <div className="border border-black/10 bg-[#FAF8F5] p-5 flex flex-col justify-between">
                        <div className="pb-4 mb-4 border-b border-black/10 min-h-[6.5rem]">
                          <div className="flex items-baseline gap-2.5 mb-1.5">
                            <span className="font-brand text-2xl font-bold text-[#814038] leading-none">
                              02
                            </span>
                            <h3 className="font-brand text-lg font-bold text-[var(--color-primary-dark)] leading-snug">
                              Live Stall Counter
                            </h3>
                          </div>
                          <p className="text-sm text-[var(--color-primary-dark)]/75 leading-relaxed">
                            For bazaars and pop-ups: tap items, turn the tablet around, and generate a fixed-amount PayNow QR offline.
                          </p>
                        </div>
                        <div className="relative aspect-[920/690] w-full overflow-hidden rounded border border-black/10 bg-white">
                          <Image
                            src="/ecosystem/tarabase/ui-paynow-counter.png"
                            alt="TaraBase Live PayNow Stall Counter"
                            fill
                            sizes="(max-width: 640px) 90vw, 380px"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </section>

        {/* Bottom Philosophy & Jumpstart Bridge */}
        <section className="pb-24 bg-[var(--brand-bg)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-10 border-t border-black/10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-2">
                  MusTech Jumpstart Masterclass
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/75 leading-relaxed font-sans mb-4">
                  Learn how our engineering team builds and operates these platforms using our Solo Founder OS and defensive AI architecture.
                </p>
                <Link
                  href="/jumpstart"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary-dark)] hover:opacity-70 transition-opacity"
                >
                  <span>Explore MusTech Jumpstart</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div>
                <h3 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-2">
                  Built on Tayyib Architecture
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/75 leading-relaxed font-sans mb-4">
                  Every product in this portfolio adheres strictly to Amanah (sacred trust), Tijarah (ethical enterprise), and Mizan (equilibrium).
                </p>
                <Link
                  href="/philosophy"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary-dark)] hover:opacity-70 transition-opacity"
                >
                  <span>Read our philosophy manifesto</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
