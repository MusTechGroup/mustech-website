import type { Metadata } from "next";
import Link from "next/link";
import { Lock, Code2, HeartHandshake, ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Tayyib Architecture & Values",
  description:
    "Our approach to building software is governed by ethical data stewardship and the Tayyib Architecture framework: Amanah (Sacred Trust), Tijarah (Ethical Enterprise), and Mizan (Equilibrium).",
  alternates: {
    canonical: "/philosophy",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/philosophy",
    siteName: "MusTech Group",
    title: "Tayyib Architecture & Values | MusTech Group",
    description:
      "Software engineered for utility, dignity, and sacred trust. Learn about MusTech Group's Tayyib Architecture principles.",
    images: [
      {
        url: "/brand/Logo_Large_ClearBg.png",
        width: 1200,
        height: 630,
        alt: "MusTech Group Philosophy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tayyib Architecture & Philosophy | MusTech Group",
    description:
      "Software engineered for utility, dignity, and sacred trust under the Tayyib Architecture framework.",
    images: ["/brand/Logo_Large_ClearBg.png"],
  },
};

const philosophySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Tayyib Architecture & Philosophy | MusTech Group",
  url: "https://www.mustechgroup.com/philosophy",
  description:
    "MusTech Group's foundational engineering manifesto governed by Amanah (Sacred Trust), Tijarah (Ethical Enterprise), and Mizan (Equilibrium).",
  publisher: {
    "@type": "Corporation",
    name: "MusTech Group",
    url: "https://www.mustechgroup.com",
    logo: "https://www.mustechgroup.com/brand/Logo_Large_ClearBg.png",
  },
};

export default function PhilosophyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--brand-bg)] text-[var(--color-primary-dark)]">
      <JsonLd schema={philosophySchema} />
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

          {/* Section Header */}
          <div className="flex flex-col items-start mb-16 pb-8 border-b border-black/10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4 block">
              The MusTech Philosophy
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-end">
              <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary-dark)] tracking-tight">
                Tayyib Architecture &amp; Values
              </h1>
              <p className="text-lg text-[var(--color-primary-dark)]/80 font-sans max-w-xl lg:justify-self-end leading-relaxed">
                Our approach to building software is governed by a deep sense of responsibility and ethical data stewardship. We engineer with purpose, ensuring everything we build is rooted in three foundational principles.
              </p>
            </div>
          </div>

          {/* 3 Principles (Amanah, Tijarah, Mizan) in Strict Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 mb-16 sm:mb-24 border-b border-black/10 pb-12 sm:pb-16 bg-white p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="flex flex-col py-6 md:p-6 md:pl-0">
              <span className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-1">
                Amanah
              </span>
              <span className="text-xs uppercase font-semibold tracking-wider text-[var(--color-primary)] mb-3">
                Sacred Trust
              </span>
              <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/85 leading-relaxed font-sans">
                Absolute data privacy, zero ad-tracking, and complete transparency in how systems operate. User data is treated as an inviolable custody, never as raw material for commercial monetisation or behavioural surveillance.
              </p>
            </div>

            <div className="flex flex-col py-6 md:p-6">
              <span className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-1">
                Tijarah
              </span>
              <span className="text-xs uppercase font-semibold tracking-wider text-[var(--color-primary)] mb-3">
                Ethical Enterprise
              </span>
              <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/85 leading-relaxed font-sans">
                Commercially sustainable ventures built without predatory monetisation or user exploitation. Honest value exchange where platforms earn revenue by solving genuine operational bottlenecks for businesses and communities.
              </p>
            </div>

            <div className="flex flex-col py-6 md:p-6 md:pr-0">
              <span className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-1">
                Mizan
              </span>
              <span className="text-xs uppercase font-semibold tracking-wider text-[var(--color-primary)] mb-3">
                Equilibrium &amp; Balance
              </span>
              <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/85 leading-relaxed font-sans">
                Software engineered to elevate spiritual and civic habits, not capture infinite user attention. Interfaces are quiet, purposeful, and respectful of human time, encouraging users to return to real-world community life.
              </p>
            </div>
          </div>

          {/* Architectural Pillars - Editorial Layout */}
          <div className="flex flex-col editorial-panel p-0 border border-black/10 bg-white shadow-sm mb-16">
            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row items-stretch border-b border-black/10">
              <div className="lg:w-1/3 p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-center items-start bg-white">
                <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-primary)] mb-4 sm:mb-6" />
                <h2 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-2">
                  Data Sovereignty &amp; Privacy
                </h2>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Zero Data Brokering
                </span>
              </div>
              <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white/40">
                <p className="text-[var(--color-primary-dark)]/85 leading-relaxed text-base sm:text-lg mb-4">
                  We build systems where user data is minimised by default. Information is stored locally whenever possible, never brokered to third parties, and protected under stringent Singapore PDPA standards.
                </p>
                <p className="text-[var(--color-primary-dark)]/75 leading-relaxed text-sm">
                  Our apps contain zero third-party advertising SDKs, zero behavioural tracking scripts, and zero cross-site identity graphs. Your activity belongs to you alone.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row items-stretch border-b border-black/10">
              <div className="lg:w-1/3 p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-center items-start bg-white">
                <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-primary)] mb-4 sm:mb-6" />
                <h2 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-2">
                  Resilient Modern Engineering
                </h2>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Deterministic &amp; Robust
                </span>
              </div>
              <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white/40">
                <p className="text-[var(--color-primary-dark)]/85 leading-relaxed text-base sm:text-lg mb-4">
                  We utilise high-performance cloud pipelines, intelligent data scraping, and edge-native architectures to transform unstructured civic information into fast, accessible tools.
                </p>
                <p className="text-[var(--color-primary-dark)]/75 leading-relaxed text-sm">
                  We adhere strictly to defensive engineering principles: database-level concurrency, atomic state mutations, and optical hash caching that minimises compute and token waste (Anti-Israf).
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-1/3 p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-center items-start bg-white">
                <HeartHandshake className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-primary)] mb-4 sm:mb-6" />
                <h2 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-2">
                  Civic &amp; Community Purpose
                </h2>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Social Dignity
                </span>
              </div>
              <div className="lg:w-2/3 p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white/40">
                <p className="text-[var(--color-primary-dark)]/85 leading-relaxed text-base sm:text-lg mb-4">
                  Success is measured by genuine utility. Every line of code exists to solve systemic fragmentation, empower grassroots organisations, and provide dignity to the people we serve.
                </p>
                <p className="text-[var(--color-primary-dark)]/75 leading-relaxed text-sm">
                  From helping bereaved families navigate final farewells with calm dignity to organising verified schedules across mosques, we measure success by civic impact rather than screen time.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Bridges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Link
              href="/portfolio"
              className="editorial-panel p-6 sm:p-8 border border-black/10 bg-white hover:border-[var(--color-primary)]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] mb-2 block">
                  Product Applications
                </span>
                <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-2">
                  Explore Ecosystem in Action
                </h3>
                <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-4">
                  See how Tayyib Architecture powers Saalihat, jenazah.sg, TaraBase, and MusTech Jumpstart.
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] group-hover:translate-x-0.5 transition-transform">
                <span>View Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/jumpstart"
              className="editorial-panel p-6 sm:p-8 border border-black/10 bg-white hover:border-[var(--color-primary)]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] mb-2 block">
                  Executive Masterclass
                </span>
                <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-2">
                  MusTech Jumpstart
                </h3>
                <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-4">
                  Learn how to build autonomous, agentic AI organisations grounded in sovereign data privacy and practical token economics.
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#814038] group-hover:translate-x-0.5 transition-transform">
                <span>Explore Masterclass</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
