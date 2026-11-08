import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";

// A MusTech OS one-pager: on screen, a set of blocks in about one screen; printed, one A4 infographic sheet.
// The two are separate markup from the same data, because a sheet of paper cannot cycle.
// scripts/guides-pdf.sh prints the sheet to the PDF behind the download button and fails if it is not one page.
export function OnePager({
  screen,
  sheet,
  pdf,
  other,
}: {
  screen: ReactNode;
  sheet: ReactNode;
  pdf: string;
  other: { href: string; label: string };
}) {
  const isQuickStart = other.href.includes("mustech-os");
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfaf0] text-[#14181a] print:min-h-0 print:bg-white">
      <header className="print:hidden border-b border-[#14181a]/15 bg-[#fdfaf0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Link href="/jumpstart" className="flex items-center gap-2.5 text-[#14181a] hover:opacity-85 transition-opacity">
              <img src="/brand/mustech-emblem-trim.png" alt="MusTech" className="h-6 w-auto" />
              <span className="font-brand text-lg font-bold tracking-[-0.02em]">MusTech OS</span>
              <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-[0.14em] text-[#077d95] border-l border-[#14181a]/20 pl-2.5">
                AI Jumpstart Materials
              </span>
            </Link>
            <nav aria-label="Class materials" className="hidden md:flex items-center border border-[#14181a]/20 bg-white">
              <Link
                href="/jumpstart/mustech-os"
                className={`px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  !isQuickStart ? "bg-[#077d95] text-white" : "text-[#14181a] hover:bg-[#077d95]/10"
                }`}
              >
                1 · What It Does (One-Pager)
              </Link>
              <Link
                href="/jumpstart/quick-start"
                className={`px-3.5 py-1.5 text-xs font-semibold border-l border-[#14181a]/20 transition-colors ${
                  isQuickStart ? "bg-[#077d95] text-white" : "text-[#14181a] hover:bg-[#077d95]/10"
                }`}
              >
                2 · Quick Start Guide
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/jumpstart"
              className="hidden sm:inline-flex items-center text-xs font-semibold text-[#14181a]/75 hover:text-[#077d95] transition-colors"
            >
              Jumpstart Overview
            </Link>
            <a
              href={pdf}
              download
              className="inline-flex items-center justify-center min-h-[38px] px-4 bg-[#077d95] hover:bg-[#055e70] text-white text-[11px] font-bold uppercase tracking-[0.12em] transition-colors"
            >
              Download A4 PDF
            </a>
          </div>
        </div>
      </header>

      <main id="main-content" className="flex-grow print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-10">
          {screen}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#14181a]/15 pt-4">
            <Link
              href={other.href}
              className="text-sm font-semibold text-[#077d95] underline underline-offset-4 decoration-[#077d95]/40 hover:decoration-[#077d95]"
            >
              {other.label}
            </Link>
            <a
              href={pdf}
              download
              className="inline-flex items-center justify-center min-h-[44px] px-6 bg-[#077d95] hover:bg-[#055e70] text-white text-xs font-bold uppercase tracking-[0.12em] transition-colors"
            >
              Download the one-page PDF
            </a>
          </div>
        </div>
      </main>

      <div className="hidden print:block">{sheet}</div>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}

// A block on screen: a hairline frame, a small label, and its content.
export function Block({
  label,
  className = "",
  dark = false,
  children,
}: {
  label?: string;
  className?: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={`p-5 sm:p-6 flex flex-col min-w-0 ${
        dark ? "bg-[#055e70] text-[#fdfaf0]" : "bg-[#fffdf6] border border-[#14181a]/12"
      } ${className}`}
    >
      {label && (
        <h2 className={`font-brand font-bold text-lg tracking-[-0.01em] mb-4 ${dark ? "text-[#f8df98]" : "text-[#055e70]"}`}>
          {label}
        </h2>
      )}
      {children}
    </section>
  );
}

// The printed sheet's frame: a deep teal masthead, the content, and a foot line. Sizes are in points and millimetres.
export function Sheet({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <div className="text-[#14181a] text-[9.5pt] leading-[1.42] h-[276mm] flex flex-col">
      <div className="bg-[#055e70] text-[#fdfaf0] px-[7mm] py-[5mm] border-b-[3pt] border-[#077d95] flex items-end justify-between gap-[6mm]">
        <div>
          <p className="font-brand font-bold text-[28pt] leading-[1.02] tracking-[-0.02em]">{title}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/mustech-emblem-trim.png" alt="" className="h-[11mm] w-auto bg-[#fdfaf0] p-[1.5mm]" />
      </div>
      {children}
      <p className="mt-auto pt-[2mm] border-t border-[#14181a]/20 flex justify-between text-[7.5pt] text-[#14181a]/70">
        <span>MusTech OS · A MusTech Group initiative · Singapore</span>
        <span className="font-bold text-[#077d95]">mustechgroup.com/jumpstart</span>
      </p>
    </div>
  );
}

// A section of the sheet: a small teal label over its content.
export function SheetPart({ label, className = "", children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <p className="font-brand font-bold text-[11pt] text-[#055e70] mb-[1.5mm]">{label}</p>
      {children}
    </div>
  );
}
