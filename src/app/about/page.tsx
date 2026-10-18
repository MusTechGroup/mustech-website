import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Governance & Leadership",
  description:
    "How MusTech Group runs Saalihat, jenazah.sg, and TaraBase with one founder, AI tools, and a person signing off every release.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/about",
    siteName: "MusTech Group",
    title: "Governance & Leadership | MusTech Group",
    description:
      "A registered Singapore technology holding company building privacy-first mobile applications and civic digital services.",
    images: [
      {
        url: "/brand/Logo_Large_ClearBg.png",
        width: 1200,
        height: 630,
        alt: "MusTech Group Governance & Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Governance & Leadership | MusTech Group",
    description:
      "Registered Singapore technology holding entity building ethical mobile applications and civic digital infrastructure.",
    images: ["/brand/Logo_Large_ClearBg.png"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Governance & Leadership | MusTech Group",
  url: "https://www.mustechgroup.com/about",
  description:
    "MusTech Group is a registered Singapore technology holding entity specialising in ethical digital infrastructure, mobile applications, and community platforms.",
  mainEntity: {
    "@type": "Corporation",
    name: "MusTech Group",
    legalName: "MusTech Group Pte. Ltd.",
    identifier: "202609163C",
    taxID: "202609163C",
    url: "https://www.mustechgroup.com",
    logo: "https://www.mustechgroup.com/brand/Logo_Large_ClearBg.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Singapore",
      addressCountry: "SG",
    },
    founder: {
      "@type": "Person",
      name: "Taufiq Rashid",
      jobTitle: "Founder & Data Analytics Lead",
      image: "https://www.mustechgroup.com/brand/founder.jpg",
      description:
        "Over a decade of enterprise data analytics and strategic leadership across APAC at WPP Media, Google, LVMH, and OCBC Bank. Academic consultant across SMU, ESSEC, HKU, and CityU.",
    },
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--brand-bg)] text-[var(--color-primary-dark)]">
      <JsonLd schema={aboutSchema} />
      <Navbar />

      <main id="main-content" className="flex-grow pt-28 sm:pt-36 pb-24">
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

          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pt-8 border-t border-black/10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-2">
                Operating Model &amp; Leadership
              </p>
              <h1 className="font-brand text-4xl sm:text-5xl font-bold text-[var(--color-primary-dark)] tracking-tight leading-tight">
                Governance &amp; How We Work
              </h1>
            </div>
            <p className="text-base text-[var(--color-primary-dark)]/75 leading-relaxed max-w-xl">
              How one founder runs three live products, with a person responsible for every release.
            </p>
          </Reveal>

          {/* 1. Operating Model & Governance: Homogeneous Presentation with Mobile Swipe Boxes */}
          <Reveal delayMs={80} className="mb-12">
            <div
              id="governance"
              className="editorial-panel bg-white border border-black/10 p-5 sm:p-10 lg:p-12 scroll-mt-28"
            >
              {/* Top Banner Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-10 border-b border-black/10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-1.5">
                    How We Work
                  </p>
                  <h2 className="font-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary-dark)]">
                    One Founder, AI Tools, Human Sign-Off
                  </h2>
                </div>
                <Link
                  href="/jumpstart"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:opacity-75 transition-opacity shrink-0"
                >
                  <span>Taught in MusTech Jumpstart</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Subsection A: The 4 Operating Model Checkpoints */}
              <div className="mb-12">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] block">
                      In Practice
                    </span>
                    <h3 className="font-brand text-xl sm:text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                      How We Build and Check Our Work
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--color-primary-dark)]/70 max-w-md">
                    AI tools draft and test. A person decides what ships.
                  </p>
                </div>

                {/* 4 Cards: Swipeable Track on Mobile (< md:), 4-Col Grid on Desktop (md:+) */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-3 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 touch-pan-x items-stretch">
                  {/* Card 1 */}
                  <div className="bg-[var(--brand-bg)]/50 border border-black/10 p-5 sm:p-6 flex flex-col justify-between w-[78vw] max-w-[280px] md:w-auto md:max-w-none shrink-0 snap-start md:shrink">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/10">
                        <span className="font-brand text-lg font-bold text-[var(--color-primary)]">
                          01
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]/60 bg-black/5 px-2 py-0.5 rounded">
                          Roles
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Clear Jobs</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--color-primary-dark)]/80 leading-relaxed">
                        Each AI tool gets one clear job, such as writing code, reading mosque posters, or testing for weak spots, so its work is easy to check.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[var(--brand-bg)]/50 border border-black/10 p-5 sm:p-6 flex flex-col justify-between w-[78vw] max-w-[280px] md:w-auto md:max-w-none shrink-0 snap-start md:shrink">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/10">
                        <span className="font-brand text-lg font-bold text-[var(--color-primary)]">
                          02
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]/60 bg-black/5 px-2 py-0.5 rounded">
                          Checks
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Checked Before Release</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--color-primary-dark)]/80 leading-relaxed">
                        Every change is checked before it goes live: what it should do, what could go wrong, and whether it works.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[var(--brand-bg)]/50 border border-black/10 p-5 sm:p-6 flex flex-col justify-between w-[78vw] max-w-[280px] md:w-auto md:max-w-none shrink-0 snap-start md:shrink">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/10">
                        <span className="font-brand text-lg font-bold text-[var(--color-primary)]">
                          03
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]/60 bg-black/5 px-2 py-0.5 rounded">
                          Safety
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Kept Apart</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--color-primary-dark)]/80 leading-relaxed">
                        Internal tools and public websites are kept apart, so work on one cannot change the other by accident.
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-[var(--brand-bg)]/50 border border-black/10 p-5 sm:p-6 flex flex-col justify-between w-[78vw] max-w-[280px] md:w-auto md:max-w-none shrink-0 snap-start md:shrink">
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/10">
                        <span className="font-brand text-lg font-bold text-[var(--color-primary)]">
                          04
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]/60 bg-black/5 px-2 py-0.5 rounded">
                          Amanah
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Founder Sign-Off</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--color-primary-dark)]/80 leading-relaxed">
                        AI tools prepare changes. The founder approves every release, every database change, and every merge of speaker records.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile swipe helper */}
                <div className="flex md:hidden items-center justify-between mt-2 pt-2 border-t border-black/10 text-xs text-[var(--color-primary-dark)]/60">
                  <span className="font-medium text-[var(--color-primary)]">Checkpoints 01 - 04</span>
                  <span>Swipe horizontally →</span>
                </div>
              </div>

              {/* Subsection B: The 3 Core Governance Pillars */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] block">
                      Governance Pillars
                    </span>
                    <h3 className="font-brand text-xl sm:text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                      Three Commitments
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--color-primary-dark)]/70 max-w-md">
                    How we protect community trust, religious information, and personal data across our products.
                  </p>
                </div>

                {/* 3 Homogeneous Pillar Cards: Swipeable Track on Mobile (< md:), 3-Col Grid on Desktop (md:+) */}
                <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-3 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 touch-pan-x items-stretch">
                  {/* Pillar 01 */}
                  <div className="bg-[var(--brand-bg)]/40 border border-black/10 p-5 sm:p-6 flex flex-col justify-between w-[78vw] max-w-[300px] md:w-auto md:max-w-none shrink-0 snap-start md:shrink">
                    <div>
                      <div className="pb-3 mb-3 border-b border-black/10 flex items-center justify-between">
                        <span className="font-brand text-lg font-bold text-[var(--color-primary)]">
                          01
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]/60 bg-black/5 px-2 py-0.5 rounded">
                          Operating Model
                        </span>
                      </div>
                      <h4 className="font-brand text-lg sm:text-xl font-bold text-[var(--color-primary-dark)] mb-2.5">
                        One Founder, Human Sign-Off
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--color-primary-dark)]/80 leading-relaxed mb-3">
                        MusTech Group runs <strong>Saalihat</strong>, <strong>jenazah.sg</strong>, and <strong>TaraBase</strong>, and teaches <strong>MusTech Jumpstart</strong>. One founder directs the work, uses AI tools for drafting and testing, and approves every release personally.
                      </p>
                      <p className="text-xs text-[var(--color-primary-dark)]/70 leading-relaxed">
                        AI tools save time on routine work. They never decide what goes live.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 02 */}
                  <div className="bg-[var(--brand-bg)]/40 border border-black/10 p-5 sm:p-6 flex flex-col justify-between w-[78vw] max-w-[300px] md:w-auto md:max-w-none shrink-0 snap-start md:shrink">
                    <div>
                      <div className="pb-3 mb-3 border-b border-black/10 flex items-center justify-between">
                        <span className="font-brand text-lg font-bold text-[var(--color-primary)]">
                          02
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]/60 bg-black/5 px-2 py-0.5 rounded">
                          Accuracy
                        </span>
                      </div>
                      <h4 className="font-brand text-lg sm:text-xl font-bold text-[var(--color-primary-dark)] mb-2.5">
                        Checked by a Person
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--color-primary-dark)]/80 leading-relaxed mb-3">
                        We do not let AI guess names, schedules, or contact details. Mosque event information is checked against Singapore&apos;s Asatizah Recognition Scheme (ARS) before it goes live.
                      </p>
                      <p className="text-xs text-[var(--color-primary-dark)]/70 leading-relaxed">
                        Uncertain matches wait for a person to review them, and missing details are left blank rather than invented.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 03 */}
                  <div className="bg-[var(--brand-bg)]/40 border border-black/10 p-5 sm:p-6 flex flex-col justify-between w-[78vw] max-w-[300px] md:w-auto md:max-w-none shrink-0 snap-start md:shrink">
                    <div>
                      <div className="pb-3 mb-3 border-b border-black/10 flex items-center justify-between">
                        <span className="font-brand text-lg font-bold text-[var(--color-primary)]">
                          03
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]/60 bg-black/5 px-2 py-0.5 rounded">
                          Privacy
                        </span>
                      </div>
                      <h4 className="font-brand text-lg sm:text-xl font-bold text-[var(--color-primary-dark)] mb-2.5">
                        Only What Each Product Needs
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--color-primary-dark)]/80 leading-relaxed mb-3">
                        We use no third-party advertising and never sell personal data. Saalihat keeps bookmarks and preferences on your phone.
                      </p>
                      <p className="text-xs text-[var(--color-primary-dark)]/70 leading-relaxed">
                        Saalihat and TaraBase each publish a privacy policy that states what they store.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile swipe helper */}
                <div className="flex md:hidden items-center justify-between mt-2 pt-2 border-t border-black/10 text-xs text-[var(--color-primary-dark)]/60">
                  <span className="font-medium text-[var(--color-primary)]">Governance Pillars 01 - 03</span>
                  <span>Swipe horizontally →</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 2. Founder & Executive Background (Prominent Portrait + Academic Consultant) */}
          <Reveal delayMs={140} className="mb-20">
            <div
              id="credentials"
              className="editorial-panel bg-white border border-black/10 p-5 sm:p-10 lg:p-12 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                {/* Large Dignified Portrait */}
                <div className="lg:col-span-5 flex flex-col">
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-full min-h-[380px] sm:min-h-[460px] w-full rounded-xl overflow-hidden border border-black/10 bg-[#233219]/10 shadow-sm">
                    <Image
                      src="/brand/founder.jpg"
                      alt="Taufiq Rashid, Founder of MusTech Group"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 460px"
                      className="object-cover object-[center_20%]"
                    />
                  </div>
                </div>

                {/* Editorial Bio & Credentials */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="pb-6 border-b border-black/10 mb-6">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-2">
                        Founder &amp; Data Analytics Lead
                      </p>
                      <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary-dark)] tracking-tight">
                        Taufiq Rashid
                      </h2>
                    </div>

                    <div className="space-y-4 text-base text-[var(--color-primary-dark)]/85 leading-relaxed">
                      <p>
                        Taufiq brings over a decade of enterprise data analytics and strategic leadership across global institutions, currently driving regional data initiatives across APAC at WPP Media alongside prior experience at Google, LVMH (Sephora), and OCBC Bank.
                      </p>
                      <p>
                        Combining deep experience in large-scale analytics with commercial business strategy, he founded MusTech Group to build mission-driven software that solves civic and community challenges across Singapore.
                      </p>
                      <p>
                        In <strong>MusTech Jumpstart</strong>, he teaches how MusTech Group is run, in plain language and with real examples.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-black/10 pt-6 mt-8 text-sm">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1.5">
                        Enterprise Leadership
                      </p>
                      <p className="font-medium text-[var(--color-primary-dark)] leading-relaxed">
                        WPP Media · Google · LVMH · OCBC Bank
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-1.5">
                        Academic Consultant
                      </p>
                      <p className="font-medium text-[var(--color-primary-dark)] leading-relaxed">
                        SMU · ESSEC Business School · HKU · CityU
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Ecosystem Navigation Bridge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-black/10">
            <Link
              href="/jumpstart"
              className="group flex flex-col justify-between"
            >
              <div>
                <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-2">
                  MusTech Jumpstart Masterclass
                </h3>
                <p className="text-sm text-[var(--color-primary-dark)]/75 leading-relaxed font-sans mb-4">
                  Learn the working methods behind our products and apply them to your own venture.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary-dark)] group-hover:opacity-70 transition-opacity">
                <span>Explore Jumpstart</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/portfolio"
              className="group flex flex-col justify-between"
            >
              <div>
                <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-2">
                  Explore All Platforms
                </h3>
                <p className="text-sm text-[var(--color-primary-dark)]/75 leading-relaxed font-sans mb-4">
                  View Saalihat, jenazah.sg, TaraBase, and MusTech Jumpstart in our complete product portfolio showcase.
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary-dark)] group-hover:opacity-70 transition-opacity">
                <span>View portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
