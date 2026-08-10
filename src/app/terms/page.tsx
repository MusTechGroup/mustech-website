import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale, ArrowLeft, ShieldCheck, Mail, Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | MusTech Group",
  description: "Terms of Service and Conditions of Use for MusTech Group and its digital applications.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#a9263a]/25 via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#c6394f]" />
              <span>Return to MusTech Group Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center pb-10 mb-10 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a9263a]/15 border border-[#a9263a]/30 text-[#fae6db] text-xs font-semibold uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5 text-[#c6394f]" />
              Legal & Usage Agreement
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Terms of <span className="text-gradient-crimson">Service</span>
            </h1>
            <p className="text-sm text-zinc-400">
              Operating Entity: <strong className="text-[#fae6db]">MusTech Group (ACRA: 202609163C)</strong>
            </p>
          </div>

          <div className="space-y-8 text-zinc-300 text-sm sm:text-base leading-relaxed">
            
            <section className="p-6 sm:p-8 rounded-3xl bg-[#12151c] border border-white/5 space-y-3">
              <h2 className="font-serif text-xl font-bold text-white">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website of <strong>MusTech Group</strong>, the <strong>Saalihat</strong> mobile application, or any associated digital services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-3xl bg-[#12151c] border border-white/5 space-y-3">
              <h2 className="font-serif text-xl font-bold text-white">
                2. Intellectual Property Rights
              </h2>
              <p>
                All software, designs, logos, text, brand assets, graphics, and underlying source code associated with MusTech Group and Saalihat are the proprietary property of MusTech Group and are protected by applicable intellectual property and copyright laws.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-3xl bg-[#12151c] border border-white/5 space-y-3">
              <h2 className="font-serif text-xl font-bold text-white">
                3. Use of Services & Information Accuracy
              </h2>
              <p>
                Saalihat acts as an informational directory for mosque events, kuliahs, and prayer schedules. While we make every effort to ensure accuracy through community and institutional verification, event schedules may change at the discretion of individual venues.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-3xl bg-[#12151c] border border-white/5 space-y-3">
              <h2 className="font-serif text-xl font-bold text-white">
                4. Ethical Conduct & Prohibited Uses
              </h2>
              <p>
                Users agree not to exploit our services for unauthorized commercial extraction, automated scraping, denial-of-service attempts, or any conduct that violates applicable laws or community guidelines.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-3xl bg-[#12151c] border border-white/5 space-y-3">
              <h2 className="font-serif text-xl font-bold text-white">
                5. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the <strong>Republic of Singapore</strong>. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
              </p>
            </section>

            <section className="p-6 sm:p-8 rounded-3xl bg-[#12151c] border border-[#a9263a]/30 space-y-4">
              <h2 className="font-serif text-xl font-bold text-white">
                6. Contact for Legal Inquiries
              </h2>
              <p>
                For questions regarding these Terms of Service or corporate inquiries, please contact:
              </p>
              <div className="p-4 rounded-2xl bg-[#181c26] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-white">MusTech Group</p>
                  <p className="text-xs font-mono text-[#fae6db]">ACRA Reg: 202609163C</p>
                </div>
                <a
                  href="mailto:admin@mustechgroup.com"
                  className="text-sm font-semibold text-[#fae6db] hover:underline"
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
