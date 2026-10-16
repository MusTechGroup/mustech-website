import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import AnimatedJenazahLogo from "@/components/AnimatedJenazahLogo";
import AnimatedTarabaseLogo from "@/components/AnimatedTarabaseLogo";
import AnimatedJumpstartLogo from "@/components/AnimatedJumpstartLogo";

export const metadata: Metadata = {
  title: "Product Ecosystem & Digital Platforms",
  description:
    "Explore the MusTech Group digital ecosystem: Saalihat (verified community lectures & mosque schedule), jenazah.sg (bereavement care), TaraBase (micro-merchant commerce), and MusTech Jumpstart (executive masterclass).",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/portfolio",
    siteName: "MusTech Group",
    title: "Product Ecosystem & Digital Platforms | MusTech Group",
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
        description: "Islamic community lecture aggregator and mosque schedule in Southeast Asia.",
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

const LOGO_COLUMN =
  "md:w-1/3 bg-white px-6 py-8 md:px-8 md:py-10 flex flex-col items-center justify-center gap-4 border-b md:border-b-0 md:border-r border-black/5 overflow-visible";
const LOGO_LINK =
  "flex h-24 md:h-28 items-center justify-center hover:opacity-95 transition-opacity group relative overflow-visible";
const LOGO_CAPTION =
  "text-[var(--color-primary-dark)]/60 text-xs font-semibold uppercase tracking-wider text-center whitespace-nowrap";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--brand-bg)] text-[var(--color-primary-dark)]">
      <JsonLd schema={portfolioSchema} />
      <Navbar />

      <main id="main-content" className="flex-grow pt-28 sm:pt-36">
        {/* Page Header */}
        <section className="pb-16 sm:pb-20 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-primary-dark)]/60 hover:text-[var(--color-primary)] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to MusTech Group Home</span>
              </Link>
            </div>

            <div className="flex flex-col items-start pb-8 border-b border-black/10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4 block">
                Ecosystem &amp; Platforms
              </span>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-end">
                <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary-dark)] tracking-tight">
                  Our Digital Ecosystem
                </h1>
                <p className="text-lg text-[var(--color-primary-dark)]/80 font-sans max-w-xl lg:justify-self-end leading-relaxed">
                  Every application in the MusTech ecosystem is built to solve fragmented civic challenges, empower grassroots communities, and uphold sovereign data privacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Immersive Saalihat Section (Site-within-a-site) */}
        <section id="saalihat" className="w-full bg-[#0e1117] py-16 sm:py-24 lg:py-28 relative overflow-hidden text-white border-y border-white/10 scroll-mt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c49a45]/5 to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              {/* Content Side */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d5ad5b] mb-4">
                  Flagship Mobile Platform
                </span>
                
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/saalihat/logo.jpg"
                    alt="Saalihat App Logo"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-xl object-cover ring-1 ring-white/15"
                  />
                  <h2 className="font-brand text-4xl sm:text-5xl font-bold leading-none tracking-tight text-white">
                    Saalihat
                  </h2>
                </div>

                <h3 className="font-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-[#d5ad5b] mb-4 leading-tight">
                  Connecting Muslims to verified community events and sacred knowledge.
                </h3>
                <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8">
                  Saalihat (صالحات) aggregates mosque lectures, charitable programmes, and community circles across Southeast Asia into a single, verified schedule. Engineered for absolute privacy, it helps believers cultivate lasting spiritual habits without advertising, behavioural tracking, or data brokering.
                </p>
                
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <a
                      href="https://apps.apple.com/sg/app/saalihat/id6760661366"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#d5ad5b] hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all group min-h-[44px]"
                    >
                      <span className="text-xl leading-none"></span>
                      <span>Download on iOS</span>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.mustechgroup.saalihat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#d5ad5b] hover:bg-white text-black text-xs font-bold uppercase tracking-wider transition-all group min-h-[44px]"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 2.5v19l16-9.5z"/>
                      </svg>
                      <span>Get it on Android</span>
                    </a>
                  </div>
                  
                  <div className="hidden sm:flex items-center gap-8 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-white/20 bg-white/5">
                        <Image
                          src="/saalihat/apple-qr.jpg"
                          alt="QR code to download Saalihat on the Apple App Store"
                          width={72}
                          height={72}
                          className="w-18 h-18 object-cover"
                        />
                      </div>
                      <span className="text-zinc-400 text-xs font-medium">Scan for iOS</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-white/20 bg-white/5">
                        <Image
                          src="/saalihat/google-qr.jpg"
                          alt="QR code to download Saalihat on Google Play"
                          width={72}
                          height={72}
                          className="w-18 h-18 object-cover"
                        />
                      </div>
                      <span className="text-zinc-400 text-xs font-medium">Scan for Android</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="lg:col-span-6 relative w-full flex flex-col items-center justify-center py-6 lg:py-0">
                <div className="relative w-60 sm:w-72 border border-white/20 bg-[#0e1117] p-2 shadow-2xl">
                  <div className="relative w-full aspect-[1096/2560] border border-white/10 overflow-hidden bg-black">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      poster="/saalihat/Screenshot_1.png"
                      className="w-full h-full object-contain block"
                    >
                      <source src="/saalihat/saalihat_boomerang.webm" type="video/webm" />
                      <source src="/saalihat/saalihat_boomerang.mp4" type="video/mp4" />
                      <Image
                        src="/saalihat/saalihat_boomerang.gif"
                        alt="Saalihat App Live Demo"
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-contain"
                        unoptimized
                      />
                    </video>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mt-4 text-zinc-400 text-xs font-medium">
                  <span>Zero Ads</span>
                  <span>·</span>
                  <span>No Tracking</span>
                  <span>·</span>
                  <span>PDPA Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem & Platforms Section */}
        <section className="w-full bg-[var(--brand-bg)] py-16 sm:py-20 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Jenazah.sg Panel */}
            <div className="editorial-panel p-0 flex flex-col md:flex-row items-stretch md:min-h-[16rem]">
              <div className={LOGO_COLUMN}>
                <a href="https://jenazah.sg" target="_blank" rel="noopener noreferrer" className={LOGO_LINK}>
                  <AnimatedJenazahLogo priority />
                </a>
                <p className={LOGO_CAPTION}>Bereavement Care</p>
              </div>
              <div className="md:w-2/3 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white/30">
                <h3 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-3">
                  Compassionate Guidance for Bereaved Families
                </h3>
                <p className="text-[var(--color-primary-dark)]/85 leading-relaxed font-sans text-base mb-6">
                  When a loved one passes, grieving families face immense emotional distress alongside urgent administrative steps. <a href="https://jenazah.sg" target="_blank" rel="noopener noreferrer" className="font-bold text-[#4A5D3F] hover:underline underline-offset-4">jenazah.sg</a> provides Singaporean families with calm, step-by-step guidance: from official death registration via LifeSG to funeral arrangements, mosque coordination, and community notices.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#4A5D3F]">
                    Active in Singapore
                  </div>
                  <a
                    href="https://jenazah.sg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4A5D3F] hover:underline underline-offset-4 min-h-[44px]"
                  >
                    <span>Visit jenazah.sg</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* TaraBase Panel */}
            <div className="editorial-panel p-0 flex flex-col md:flex-row items-stretch md:min-h-[16rem]">
              <div className={LOGO_COLUMN}>
                <a href="https://tarabase.co" target="_blank" rel="noopener noreferrer" className={LOGO_LINK}>
                  <AnimatedTarabaseLogo priority />
                </a>
                <p className={LOGO_CAPTION}>Micro-Merchant Commerce</p>
              </div>
              <div className="md:w-2/3 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white/30">
                <h3 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-3">
                  Digital Front-of-House for Home-Based Businesses
                </h3>
                <p className="text-[var(--color-primary-dark)]/85 leading-relaxed font-sans text-base mb-6">
                  Home-based food creators face chaotic chat-based order fragmentation and payment verification friction. <a href="https://tarabase.co" target="_blank" rel="noopener noreferrer" className="font-bold text-[#814038] hover:underline underline-offset-4">TaraBase</a> provides automated capacity slotting, kitchen production scheduling, and instant PayNow payment verification.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#814038]">
                    Pilot Kitchens Active
                  </div>
                  <a
                    href="https://tarabase.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#814038] hover:underline underline-offset-4 min-h-[44px]"
                  >
                    <span>Visit TaraBase</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* MusTech Jumpstart Panel */}
            <div className="editorial-panel p-0 flex flex-col md:flex-row items-stretch md:min-h-[16rem]">
              <div className={LOGO_COLUMN}>
                <Link href="/jumpstart" className={LOGO_LINK}>
                  <AnimatedJumpstartLogo compact priority />
                </Link>
                <p className={LOGO_CAPTION}>Founder Masterclass</p>
              </div>
              <div className="md:w-2/3 p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white/30">
                <h3 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-3">
                  Autonomous Organisation &amp; AI Masterclass
                </h3>
                <p className="text-[var(--color-primary-dark)]/85 leading-relaxed font-sans text-base mb-6">
                  We pre-build a tailored AI organisation aligned directly to your venture&apos;s operational needs. <Link href="/jumpstart" className="font-bold text-[#814038] hover:underline underline-offset-4">MusTech Jumpstart</Link> teaches founders how to deploy autonomous agentic workflows, custom LLM systems, and cost-controlled operations.
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#814038]">
                    Inaugural Cohort Registering
                  </div>
                  <Link
                    href="/jumpstart"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors group min-h-[44px]"
                  >
                    <span>Explore Masterclass</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom Philosophy Bridge */}
        <section className="py-16 bg-[var(--brand-bg)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="editorial-panel p-6 sm:p-8 md:p-12 border border-black/10 bg-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] mb-2 block">
                  Governing Architecture
                </span>
                <h3 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-2">
                  Built on the Tayyib Architecture Framework
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/80 leading-relaxed font-sans max-w-2xl">
                  Every product in this portfolio adheres strictly to Amanah (sacred trust), Tijarah (ethical enterprise), and Mizan (equilibrium).
                </p>
              </div>
              <Link
                href="/philosophy"
                className="px-6 py-3.5 min-h-[44px] flex items-center justify-center bg-[var(--color-primary-dark)] text-white hover:bg-[var(--color-primary)] text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
              >
                Read Philosophy
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
