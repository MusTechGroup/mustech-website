import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service and Conditions of Use for MusTech Group and its digital applications.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | MusTech Group",
    description: "Terms of Service and Conditions of Use for MusTech Group and its digital applications.",
    url: "https://www.mustechgroup.com/terms",
    siteName: "MusTech Group",
    locale: "en_SG",
    type: "website",
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
    title: "Terms of Service | MusTech Group",
    description: "Terms of Service and Conditions of Use for MusTech Group and its digital applications.",
    images: ["/brand/Logo_Large_ClearBg.png"],
  },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--brand-bg)] text-[var(--color-primary-dark)]">
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

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 mb-12 border-b border-black/10 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3">
                MUSTECH GROUP PTE. LTD. · UEN 202609163C · Republic of Singapore
              </p>
              <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary-dark)] tracking-tight leading-[1.08]">
                Terms of Service
              </h1>
            </div>
            <p className="lg:col-span-5 text-base sm:text-lg text-[var(--color-primary-dark)]/75 font-sans leading-relaxed">
              Terms and conditions governing the access, utilisation, and digital services provided by MusTech Group and its community applications.
            </p>
          </div>

          <div className="editorial-panel bg-white border border-black/10 p-8 sm:p-10 lg:p-12 divide-y divide-black/10 text-[var(--color-primary-dark)]/80 text-sm sm:text-base leading-relaxed font-sans">
            
            <section className="py-8 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">Clause 01</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Acceptance of Terms
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p>
                  By accessing or using the website of <strong>MusTech Group</strong>, the <strong>Saalihat</strong> mobile application, or any associated digital services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please refrain from using our services.
                </p>
              </div>
            </section>

            <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">Clause 02</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Intellectual Property &amp; Brand Assets
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p>
                  All software architectures, designs, typography, brand identities, editorial text, logos, graphics, and underlying source code associated with MusTech Group and Saalihat are the proprietary property of MusTech Group and are protected under international copyright and intellectual property legislation.
                </p>
              </div>
            </section>

            <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">Clause 03</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Directory Accuracy &amp; Civic Information
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p>
                  Saalihat acts as an informational directory for mosque events, Kuliahs, and community programmes. While we make every effort to verify information directly through automated extraction and institutional cross-referencing, schedules remain subject to amendments at the discretion of individual mosque administrators.
                </p>
              </div>
            </section>

            <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">Clause 04</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Ethical Conduct &amp; Prohibited Uses
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p>
                  Users agree not to exploit our services for unauthorised commercial extraction, malicious automated scraping, denial-of-service attempts, or any conduct that infringes upon applicable laws, privacy standards, or community dignity.
                </p>
              </div>
            </section>

            <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">Clause 05</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Governing Law &amp; Jurisdiction
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p>
                  These terms are governed by and construed in accordance with the laws of the <strong>Republic of Singapore</strong>. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
                </p>
              </div>
            </section>

            <section className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">Clause 06</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Ecosystem Platforms &amp; Masterclass Enrolment
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p>
                  <strong>TaraBase</strong> has its own{" "}
                  <a href="https://tarabase.co/terms" className="font-semibold underline hover:text-[var(--color-primary)]">
                    terms of service
                  </a>
                  , which apply when you use TaraBase.
                </p>
              </div>
            </section>

            <section className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <span className="font-brand text-xl font-bold text-[var(--color-primary)] block">Clause 07</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mt-1">
                  Corporate Enquiries &amp; Legal Notices
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-4">
                <p>
                  For legal notices, partnership discussions, or questions regarding these terms, please contact:
                </p>
                <div className="p-5 bg-[var(--brand-bg)] border border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-[var(--color-primary-dark)]/55 uppercase tracking-wider block mb-0.5">Holding Entity</span>
                    <p className="text-sm sm:text-base font-bold text-[var(--color-primary-dark)]">MUSTECH GROUP PTE. LTD. (UEN: 202609163C)</p>
                    <p className="text-xs text-[var(--color-primary-dark)]/65">Republic of Singapore</p>
                  </div>
                  <a
                    href="mailto:admin@mustechgroup.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>admin@mustechgroup.com</span>
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
