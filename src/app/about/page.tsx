import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "Corporate Entity, Leadership & Governance",
  description:
    "MusTech Group is a registered Singapore technology holding entity (ACRA UEN: 202609163C). Learn about our corporate governance, data analytics leadership under Taufiq Rashid, and official communications.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/about",
    siteName: "MusTech Group",
    title: "Corporate Entity, Leadership & Governance | MusTech Group",
    description:
      "MusTech Group operates as a registered Singapore technology holding entity, building privacy-first mobile applications and civic digital infrastructure across Southeast Asia.",
    images: [
      {
        url: "/brand/Logo_Large_ClearBg.png",
        width: 1200,
        height: 630,
        alt: "MusTech Group Corporate Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Entity, Leadership & Governance | About MusTech Group",
    description:
      "Registered Singapore technology holding entity building ethical mobile applications and civic digital infrastructure.",
    images: ["/brand/Logo_Large_ClearBg.png"],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About MusTech Group",
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
        "Over a decade of enterprise data analytics and strategic leadership across APAC at WPP Media, Google, LVMH, and OCBC Bank. Academic consultant across SMU, ESSEC, and HKU.",
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

          {/* Editorial Section Header */}
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 pb-8 border-b border-black/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                Corporate Entity &amp; Leadership
              </span>
              <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary-dark)] tracking-tight">
                About MusTech Group
              </h1>
            </div>
            <p className="text-base sm:text-lg text-[var(--color-primary-dark)]/80 font-sans max-w-xl md:text-right mt-6 md:mt-0 leading-relaxed">
              MusTech Group operates as a registered Singapore technology holding entity, building privacy-first mobile applications and civic digital infrastructure across Southeast Asia.
            </p>
          </div>

          {/* Prospectus Layout */}
          <div className="editorial-panel p-0 border border-black/10 flex flex-col mb-16 bg-white shadow-sm">
            {/* Top Row: Founder & ACRA */}
            <div className="flex flex-col lg:flex-row items-stretch border-b border-black/10">
              {/* Founder Profile */}
              <div className="lg:w-2/3 p-6 sm:p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/10 bg-white flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                <div className="relative w-32 h-40 sm:w-44 sm:h-52 shrink-0 border border-black/15 bg-zinc-100 overflow-hidden shadow-sm">
                  <Image
                    src="/brand/founder.jpg"
                    alt="Taufiq Rashid"
                    fill
                    priority
                    sizes="(max-width: 640px) 128px, 176px"
                    className="object-cover object-[center_30%] transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] block mb-1">
                    Leadership
                  </span>
                  <h2 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-1">
                    Taufiq Rashid
                  </h2>
                  <p className="text-xs font-semibold text-[var(--color-primary-dark)]/70 mb-4 sm:mb-6">
                    Founder &amp; Data Analytics Lead
                  </p>

                  <p className="text-[var(--color-primary-dark)]/85 leading-relaxed font-sans text-sm sm:text-base mb-4">
                    Taufiq brings over a decade of enterprise data analytics and strategic leadership across global institutions, currently driving regional data initiatives across APAC at WPP Media alongside prior experience at Google, LVMH (Sephora), and OCBC Bank.
                  </p>
                  <p className="text-[var(--color-primary-dark)]/85 leading-relaxed font-sans text-sm sm:text-base mb-6">
                    Combining deep experience in large-scale analytics with commercial business strategy, he founded MusTech Group to build mission-driven software that solves civic and community challenges. He is also an academic consultant across Singapore Management University, ESSEC Business School, and the University of Hong Kong.
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-3 border-t border-black/5 text-xs text-[var(--color-primary-dark)]/80 font-medium">
                    <span>APAC Data Leadership</span>
                    <span>·</span>
                    <span>Commercial Strategy</span>
                    <span>·</span>
                    <span>Academic Consultant (SMU · ESSEC · HKU)</span>
                  </div>
                </div>
              </div>

              {/* ACRA Information */}
              <div id="credentials" className="lg:w-1/3 p-6 sm:p-8 md:p-12 bg-white flex flex-col justify-between scroll-mt-28">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] block mb-1">
                    Governance
                  </span>
                  <h3 className="font-brand text-2xl sm:text-3xl font-bold text-[var(--color-primary-dark)] mb-1">
                    MusTech Group
                  </h3>
                  <p className="text-xs font-semibold text-[var(--color-primary-dark)]/70 mb-6">
                    Registered Singapore Technology Entity
                  </p>

                  <div className="space-y-4 border-t border-black/10 pt-4 sm:pt-6">
                    <div className="flex items-center justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-[var(--color-primary-dark)]/70 uppercase font-semibold tracking-wider">
                        Jurisdiction
                      </span>
                      <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                        Singapore
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-[var(--color-primary-dark)]/70 uppercase font-semibold tracking-wider">
                        ACRA UEN
                      </span>
                      <span className="text-xs font-mono font-bold text-[var(--color-primary-dark)]">
                        202609163C
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-black/5 pb-3">
                      <span className="text-xs text-[var(--color-primary-dark)]/70 uppercase font-semibold tracking-wider">
                        Data Protection
                      </span>
                      <span className="text-xs font-bold text-[var(--color-primary-dark)] flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        Singapore PDPA
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[var(--color-primary-dark)]/70 uppercase font-semibold tracking-wider">
                        Architecture
                      </span>
                      <span className="text-xs font-bold text-[var(--color-primary-dark)]">
                        Tayyib Principles
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5">
                  <Link
                    href="/philosophy"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors group"
                  >
                    <span>Read Architecture Manifesto</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Row: Official Communications */}
            <div id="contact" className="p-6 sm:p-8 md:p-12 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 scroll-mt-28">
              <div className="flex items-start gap-4 sm:gap-6">
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--color-primary)] mt-1 shrink-0" />
                <div>
                  <h3 className="font-brand text-xl sm:text-2xl font-bold text-[var(--color-primary-dark)] mb-1">
                    Official Communications
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-primary-dark)]/75">
                    Direct enquiries, civic partnerships, and support. Response time: 1 - 2 business days (SGT).
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
                {/* General & Partnership Enquiries */}
                <div className="p-4 border border-black/10 flex flex-col gap-1.5 flex-1 bg-[var(--brand-bg)]/40">
                  <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider">
                    General &amp; Partnerships
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href="mailto:admin@mustechgroup.com"
                      className="text-sm font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors break-all"
                    >
                      admin@mustechgroup.com
                    </a>
                    <CopyButton textToCopy="admin@mustechgroup.com" ariaLabel="Copy admin email" />
                  </div>
                </div>
                {/* Support */}
                <div className="p-4 border border-black/10 flex flex-col gap-1.5 flex-1 bg-[var(--brand-bg)]/40">
                  <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider">
                    Saalihat Support
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href="mailto:saalihat_support@mustechgroup.com"
                      className="text-sm font-bold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors break-all"
                    >
                      saalihat_support@mustechgroup.com
                    </a>
                    <CopyButton textToCopy="saalihat_support@mustechgroup.com" ariaLabel="Copy support email" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ecosystem Navigation Bridge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Link
              href="/philosophy"
              className="editorial-panel p-6 sm:p-8 border border-black/10 bg-white hover:border-[var(--color-primary)]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] mb-2 block">
                  Ethical Framework
                </span>
                <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-2">
                  Tayyib Architecture &amp; Values
                </h3>
                <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-4">
                  Discover how Amanah, Tijarah, and Mizan shape every software system, data pipeline, and user interface we build.
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] group-hover:translate-x-0.5 transition-transform">
                <span>Read Philosophy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/portfolio"
              className="editorial-panel p-6 sm:p-8 border border-black/10 bg-white hover:border-[var(--color-primary)]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] mb-2 block">
                  Product Ecosystem
                </span>
                <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-2">
                  Explore All Platforms
                </h3>
                <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-4">
                  View Saalihat, jenazah.sg, TaraBase, and MusTech Jumpstart in our complete product portfolio showcase.
                </p>
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] group-hover:translate-x-0.5 transition-transform">
                <span>View Portfolio</span>
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
