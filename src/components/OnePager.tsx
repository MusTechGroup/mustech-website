import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
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
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfaf0] text-[#233219] print:min-h-0 print:bg-white">
      <div className="print:hidden">
        <Navbar />
      </div>

      <main id="main-content" className="flex-grow print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-10">
          {screen}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#233219]/15 pt-4">
            <Link
              href={other.href}
              className="text-sm font-semibold text-[#077d95] underline underline-offset-4 decoration-[#077d95]/40 hover:decoration-[#077d95]"
            >
              {other.label}
            </Link>
            <a
              href={pdf}
              download
              className="inline-flex items-center justify-center min-h-[44px] px-6 bg-[#077d95] hover:bg-[#0a91ad] text-white text-xs font-bold uppercase tracking-[0.12em] transition-colors"
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
        dark ? "bg-[#233219] text-[#fdfaf0]" : "bg-[#fffdf6] border border-[#233219]/12"
      } ${className}`}
    >
      {label && (
        <h2 className={`font-brand font-bold text-lg tracking-[-0.01em] mb-4 ${dark ? "text-[#f8df98]" : "text-[#233219]"}`}>
          {label}
        </h2>
      )}
      {children}
    </section>
  );
}

// The printed sheet's frame: a moss masthead, the content, and a foot line. Sizes are in points and millimetres.
export function Sheet({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <div className="text-[#233219] text-[9.5pt] leading-[1.42] h-[276mm] flex flex-col">
      <div className="bg-[#233219] text-[#fdfaf0] px-[7mm] py-[5mm] flex items-end justify-between gap-[6mm]">
        <div>
          <p className="font-brand font-bold text-[28pt] leading-[1.02] tracking-[-0.02em]">{title}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/mustech-emblem-trim.png" alt="" className="h-[11mm] w-auto bg-[#fdfaf0] p-[1.5mm]" />
      </div>
      {children}
      <p className="mt-auto pt-[2mm] border-t border-[#233219]/20 flex justify-between text-[7.5pt] text-[#233219]/70">
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
      <p className="font-brand font-bold text-[11pt] text-[#233219] mb-[1.5mm]">{label}</p>
      {children}
    </div>
  );
}
