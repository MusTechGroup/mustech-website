import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | MusTech Group",
  description: "Terms of Service and Conditions of Use for MusTech Group and its digital applications.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--brand-bg)] text-[var(--color-primary-dark)]">
      <Navbar />
      <main id="main-content" className="flex-grow pt-32 sm:pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-primary-dark)]/60 hover:text-[var(--color-primary)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to MusTech Group Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="pb-10 mb-12 border-b border-black/10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3">
              Legal &amp; Usage Framework
            </p>
            <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary-dark)] tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-primary-dark)]/80 font-sans leading-relaxed max-w-3xl mb-8">
              Terms and conditions governing the access, utilisation, and digital services provided by MusTech Group and its affiliated community applications.
            </p>

            {/* Governance Metadata Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-black/5 text-xs text-[var(--color-primary-dark)]/80">
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-[var(--color-primary-dark)]/50 mb-0.5">Governing Entity</span>
                <span className="font-semibold text-[var(--color-primary-dark)]">MusTech Group</span>
                <span className="block text-[11px] font-mono text-[var(--color-primary-dark)]/60">UEN: 202609163C</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-[var(--color-primary-dark)]/50 mb-0.5">Applicability</span>
                <span className="font-semibold text-[var(--color-primary-dark)]">All Web &amp; Mobile Services</span>
                <span className="block text-[11px] text-[var(--color-primary-dark)]/60">Public &amp; Community APIs</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-[var(--color-primary-dark)]/50 mb-0.5">Jurisdiction</span>
                <span className="font-semibold text-[var(--color-primary-dark)]">Republic of Singapore</span>
                <span className="block text-[11px] text-[var(--color-primary-dark)]/60">Singapore Courts</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-[var(--color-primary-dark)]/80 text-sm sm:text-base leading-relaxed font-sans">
            
            <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-4">
              <div className="border-b border-black/5 pb-4">
                <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 01</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                  Acceptance of Terms
                </h2>
              </div>
              <p>
                By accessing or using the website of <strong>MusTech Group</strong>, the <strong>Saalihat</strong> mobile application, or any associated digital services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please refrain from using our services.
              </p>
            </section>

            <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-4">
              <div className="border-b border-black/5 pb-4">
                <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 02</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                  Intellectual Property &amp; Brand Assets
                </h2>
              </div>
              <p>
                All software architectures, designs, typography, brand identities, editorial text, logos, graphics, and underlying source code associated with MusTech Group and Saalihat are the proprietary property of MusTech Group and are protected under international copyright and intellectual property legislation.
              </p>
            </section>

            <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-4">
              <div className="border-b border-black/5 pb-4">
                <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 03</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                  Directory Accuracy &amp; Civic Information
                </h2>
              </div>
              <p>
                Saalihat acts as an informational directory for mosque events, Kuliahs, and community programmes. While we make every effort to verify information directly through automated extraction and institutional cross-referencing, schedules remain subject to amendments at the discretion of individual mosque administrators.
              </p>
            </section>

            <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-4">
              <div className="border-b border-black/5 pb-4">
                <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 04</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                  Ethical Conduct &amp; Prohibited Uses
                </h2>
              </div>
              <p>
                Users agree not to exploit our services for unauthorised commercial extraction, malicious automated scraping, denial-of-service attempts, or any conduct that infringes upon applicable laws, privacy standards, or community dignity.
              </p>
            </section>

            <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-4">
              <div className="border-b border-black/5 pb-4">
                <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 05</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                  Governing Law &amp; Jurisdiction
                </h2>
              </div>
              <p>
                These terms are governed by and construed in accordance with the laws of the <strong>Republic of Singapore</strong>. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
              </p>
            </section>

            <section className="editorial-panel p-8 sm:p-10 border border-black/10 bg-white space-y-6">
              <div className="border-b border-black/5 pb-4">
                <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">Clause 06</span>
                <h2 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)]">
                  Corporate Inquiries &amp; Legal Notices
                </h2>
              </div>
              <p>
                For legal notices, partnership discussions, or questions regarding these terms, please contact:
              </p>
              <div className="p-5 bg-[var(--brand-bg)] border border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-0.5">Holding Entity</span>
                  <p className="text-base font-bold text-[var(--color-primary-dark)]">MusTech Group</p>
                  <p className="text-xs font-mono text-[var(--color-primary-dark)]/70">ACRA Reg: 202609163C · Singapore</p>
                </div>
                <a
                  href="mailto:admin@mustechgroup.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>admin@mustechgroup.com</span>
                </a>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
