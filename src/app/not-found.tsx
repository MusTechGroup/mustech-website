import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--brand-bg)] text-[var(--color-primary-dark)]">
      <Navbar />
      <main id="main-content" className="flex-grow pt-28 sm:pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-2">
            Error 404
          </p>
          <h1 className="font-brand text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
            We couldn&apos;t find that page.
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-primary-dark)]/75 leading-relaxed mb-8">
            The link may be old, or the page may have moved. You can start again from the home page or browse our products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[44px] bg-[var(--color-primary-dark)] text-white hover:bg-[var(--color-primary)] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 min-h-[44px] bg-white border border-black/10 hover:bg-black/5 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              View our products
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
