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
      <main id="main-content" className="flex-grow pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--color-primary-dark)]/60 hover:text-[var(--color-primary)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[var(--color-primary)]" />
              <span>Return to MusTech Group Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center pb-10 mb-10 border-b border-black/10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-black/10 text-[var(--color-primary-dark)] text-xs font-semibold uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              Legal & Usage Agreement
            </div>
            <h1 className="font-brand text-3xl sm:text-5xl font-bold text-[var(--color-primary-dark)] tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-[var(--color-primary-dark)]/70">
              Operating Entity: <strong className="text-[var(--color-primary-dark)]">MusTech Group (ACRA: 202609163C)</strong>
            </p>
          </div>

          <div className="space-y-8 text-[var(--color-primary-dark)]/80 text-sm sm:text-base leading-relaxed font-sans">
            
            <section className="editorial-panel p-6 sm:p-8 border border-black/10 space-y-3">
              <h2 className="font-brand text-xl font-bold text-[var(--color-primary-dark)]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website of <strong>MusTech Group</strong>, the <strong>Saalihat</strong> mobile application, or any associated digital services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="editorial-panel p-6 sm:p-8 border border-black/10 space-y-3">
              <h2 className="font-brand text-xl font-bold text-[var(--color-primary-dark)]">
                2. Intellectual Property Rights
              </h2>
              <p>
                All software, designs, logos, text, brand assets, graphics, and underlying source code associated with MusTech Group and Saalihat are the proprietary property of MusTech Group and are protected by applicable intellectual property and copyright laws.
              </p>
            </section>

            <section className="editorial-panel p-6 sm:p-8 border border-black/10 space-y-3">
              <h2 className="font-brand text-xl font-bold text-[var(--color-primary-dark)]">
                3. Use of Services & Information Accuracy
              </h2>
              <p>
                Saalihat acts as an informational directory for mosque events, Kuliahs, and prayer schedules. While we make every effort to ensure accuracy through community and institutional verification, event schedules may change at the discretion of individual venues.
              </p>
            </section>

            <section className="editorial-panel p-6 sm:p-8 border border-black/10 space-y-3">
              <h2 className="font-brand text-xl font-bold text-[var(--color-primary-dark)]">
                4. Ethical Conduct & Prohibited Uses
              </h2>
              <p>
                Users agree not to exploit our services for unauthorized commercial extraction, automated scraping, denial-of-service attempts, or any conduct that violates applicable laws or community guidelines.
              </p>
            </section>

            <section className="editorial-panel p-6 sm:p-8 border border-black/10 space-y-3">
              <h2 className="font-brand text-xl font-bold text-[var(--color-primary-dark)]">
                5. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the <strong>Republic of Singapore</strong>. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
              </p>
            </section>

            <section className="editorial-panel p-6 sm:p-8 border border-black/10 space-y-4">
              <h2 className="font-brand text-xl font-bold text-[var(--color-primary-dark)]">
                6. Contact for Legal Inquiries
              </h2>
              <p>
                For questions regarding these Terms of Service or corporate inquiries, please contact:
              </p>
              <div className="p-4 bg-[var(--brand-bg)] border border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-[var(--color-primary-dark)]">MusTech Group</p>
                  <p className="text-xs font-mono text-[var(--color-primary-dark)]/70">ACRA Reg: 202609163C</p>
                </div>
                <a
                  href="mailto:admin@mustechgroup.com"
                  className="text-sm font-bold text-[var(--color-primary)] hover:underline"
                >
                  admin@mustechgroup.com
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
