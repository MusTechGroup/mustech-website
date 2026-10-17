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
    "How MusTech Group operates four platforms with one founder and specialised AI agents built on Google Antigravity and Claude, governed by strict human verification and Singapore PDPA compliance.",
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
      "MusTech Group operates as a registered Singapore technology holding entity, building privacy-first mobile applications and civic digital infrastructure with Google Antigravity and Claude.",
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
              How a solo founder runs four live platforms simultaneously using enterprise data governance, Google Antigravity, and Claude.
            </p>
          </Reveal>

          {/* 1. Operating Model & Governance (Beefed-Up 01 · Solo Founder + AI Agents) */}
          <Reveal delayMs={80} className="mb-12">
            <div
              id="governance"
              className="editorial-panel bg-white border border-black/10 p-8 sm:p-10 lg:p-12 scroll-mt-28"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-8 border-b border-black/10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-1.5">
                    Autonomous Engineering &amp; Guardrails
                  </p>
                  <h2 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)]">
                    Built with Antigravity &amp; Claude
                  </h2>
                </div>
                <Link
                  href="/jumpstart"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:opacity-75 transition-opacity shrink-0"
                >
                  <span>Taught live in MusTech Jumpstart</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Beefed-Up Feature Block: 01 · Solo Founder + AI Agents */}
              <div className="bg-[var(--brand-bg)]/60 border border-black/10 p-6 sm:p-8 lg:p-10 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2">
                      The Solo Founder OS
                    </span>
                    <h3 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
                      01 · Solo Founder + AI Agents
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/85 leading-relaxed mb-4">
                      MusTech Group operates <strong>Saalihat</strong>, <strong>jenazah.sg</strong>, <strong>TaraBase</strong>, and <strong>MusTech Jumpstart</strong> with one founder directing a coordinated fleet of AI agents inside <strong>Google Antigravity</strong> and <strong>Claude</strong>.
                    </p>
                    <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/80 leading-relaxed">
                      Rather than treating AI as a chatbot, our workspace is wired as an autonomous engineering and operations organisation where agents execute specialised roles under strict architectural laws, and every release decision routes back to the founder.
                    </p>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white border border-black/10 p-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Multi-Agent Role Separation</span>
                      </div>
                      <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed">
                        Dedicated agents handle full-stack TypeScript and SQL development, mosque poster OCR pipelines, UI performance audits, and adversarial security testing in parallel.
                      </p>
                    </div>

                    <div className="bg-white border border-black/10 p-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>4-Stage Production Gates</span>
                      </div>
                      <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed">
                        Every feature passes four mandatory checkpoints: Schema &amp; Failure Contract, Database-Enforced Rules, Defensive Implementation, and an Adversarial Audit before shipping.
                      </p>
                    </div>

                    <div className="bg-white border border-black/10 p-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Strict Workspace Isolation</span>
                      </div>
                      <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed">
                        Hard routing laws separate internal operations consoles from public websites, ensuring an agent working on internal tooling can never accidentally deploy to a public domain.
                      </p>
                    </div>

                    <div className="bg-white border border-black/10 p-5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Founder-in-the-Loop Sign-Off</span>
                      </div>
                      <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed">
                        Agents prepare database migrations, code diffs, and verified event queues, while final production deployments, schema changes, and speaker merges require explicit founder approval.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Companion Governance Pillars: 02 & 03 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base text-[var(--color-primary-dark)]/80 leading-relaxed">
                <div className="border border-black/10 p-6 sm:p-8 bg-white">
                  <h3 className="font-brand text-xl sm:text-2xl font-bold text-[var(--color-primary-dark)] mb-3">
                    02 · Human-Verified Religious &amp; Civic Data
                  </h3>
                  <p className="mb-3">
                    AI is never allowed to guess religious scholars, mosque schedules, or emergency bereavement contacts. In Saalihat, extracted mosque event posters are cross-checked against Singapore&apos;s Asatizah Recognition Scheme (ARS) directory before going live.
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--color-primary-dark)]/70">
                    Uncertain speaker matches are held in an admin review queue with full audit snapshots, and missing contact details are stored as blank rather than filled with placeholder text.
                  </p>
                </div>

                <div className="border border-black/10 p-6 sm:p-8 bg-white">
                  <h3 className="font-brand text-xl sm:text-2xl font-bold text-[var(--color-primary-dark)] mb-3">
                    03 · PDPA Stewardship &amp; Cost Discipline
                  </h3>
                  <p className="mb-3">
                    We adhere strictly to the Singapore Personal Data Protection Act (PDPA) with zero third-party advertising SDKs, row-level database security on every multi-tenant table, and local-first device storage wherever possible.
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--color-primary-dark)]/70">
                    Before invoking any AI vision or language model, our pipelines run deterministic lookups and SHA-256 optical hash caches so we never repeat paid API calls or waste compute.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 2. Founder & Executive Background (No Redundant ACRA/Email Block) */}
          <Reveal delayMs={140} className="mb-20">
            <div
              id="credentials"
              className="editorial-panel bg-white border border-black/10 p-8 sm:p-10 lg:p-12 scroll-mt-28"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-8 border-b border-black/10 mb-8">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-black/10 bg-[#233219]/10 shrink-0">
                  <Image
                    src="/brand/founder.jpg"
                    alt="Taufiq Rashid, Founder of MusTech Group"
                    fill
                    priority
                    sizes="112px"
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-1">
                    Founder &amp; Data Analytics Lead
                  </p>
                  <h2 className="font-brand text-3xl sm:text-4xl font-bold text-[var(--color-primary-dark)]">
                    Taufiq Rashid
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base text-[var(--color-primary-dark)]/80 leading-relaxed max-w-4xl">
                <p>
                  Taufiq brings over a decade of enterprise data analytics and strategic leadership across global institutions, currently driving regional data initiatives across APAC at WPP Media alongside prior experience at Google, LVMH (Sephora), and OCBC Bank.
                </p>
                <p>
                  Combining deep experience in large-scale analytics with commercial business strategy, he founded MusTech Group to build mission-driven software that solves civic and community challenges. He is also an academic consultant across Singapore Management University (SMU), ESSEC Business School, the University of Hong Kong (HKU), and City University of Hong Kong (CityU).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-black/10 pt-6 mt-8 text-sm text-[var(--color-primary-dark)]/75">
                <div>
                  <p className="font-semibold text-[var(--color-primary-dark)] mb-1">
                    Enterprise Leadership
                  </p>
                  <p>WPP Media · Google · LVMH · OCBC Bank</p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-primary-dark)] mb-1">
                    Academic Affiliations
                  </p>
                  <p>SMU · ESSEC Business School · HKU · CityU</p>
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
                  Learn how we set up Antigravity and Claude to run a full software company and deploy the same operating system for your venture.
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
