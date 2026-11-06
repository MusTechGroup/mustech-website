import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// The calm document look for the MusTech OS guides: cream paper, moss ink, teal accents, Lao MN headings.
// No starfield or motion, so it is light on older computers. The same page prints to the PDF that founders
// download (scripts/guides-pdf.sh), so everything here has a print style and nothing depends on hover or clicks.

export const paper = "#fdfaf0";
export const ink = "#233219";

export function GuideDoc({
  eyebrow,
  title,
  standfirst,
  meta,
  pdf,
  pdfLabel,
  other,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  standfirst: string;
  meta: { k: string; v: string }[];
  pdf: string;
  pdfLabel: string;
  other: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfaf0] text-[#233219] print:bg-white">
      <div className="print:hidden">
        <Navbar />
      </div>

      <main id="main-content" className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 sm:pb-24 print:pt-0 print:pb-0 print:px-0 print:max-w-none">
          {/* Masthead: printed as the PDF's first lines too */}
          <header className="pb-8 sm:pb-10 border-b border-[#233219]/15">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#077d95]">{eyebrow}</span>
              <a
                href={pdf}
                download
                className="print:hidden text-xs font-bold uppercase tracking-[0.16em] text-[#077d95] underline underline-offset-4 decoration-[#077d95]/40 hover:decoration-[#077d95]"
              >
                PDF
              </a>
            </div>
            <h1 className="mt-5 font-brand font-bold tracking-[-0.03em] leading-[1.04] text-[clamp(2.3rem,6vw,4.2rem)] text-balance print:text-[34pt]">
              {title}
            </h1>
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-[#233219]/80 max-w-2xl print:text-[12pt]">{standfirst}</p>
            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 text-sm">
              {meta.map((m) => (
                <div key={m.k}>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#233219]/55">{m.k}</dt>
                  <dd className="mt-1 font-semibold">{m.v}</dd>
                </div>
              ))}
            </dl>
          </header>

          {children}

          {/* Keep a copy */}
          <aside className="print:hidden mt-16 sm:mt-20 bg-[#233219] text-[#fdfaf0] p-6 sm:p-10 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f8df98]">Keep a copy</span>
              <p className="mt-3 font-brand font-bold text-2xl sm:text-3xl tracking-[-0.02em]">{pdfLabel}</p>
              <p className="mt-2 text-sm text-[#fdfaf0]/75">A formatted PDF of this page, to read offline or print.</p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <a
                href={pdf}
                download
                className="inline-flex items-center justify-center min-h-[48px] px-7 bg-[#077d95] hover:bg-[#0a91ad] text-white text-xs font-bold uppercase tracking-[0.12em] transition-colors"
              >
                Download PDF
              </a>
              <Link
                href={other.href}
                className="text-xs font-bold uppercase tracking-[0.14em] text-[#fdfaf0]/80 underline underline-offset-4 decoration-[#fdfaf0]/30 hover:text-[#fdfaf0]"
              >
                {other.label}
              </Link>
            </div>
          </aside>

          <p className="hidden print:block mt-10 pt-4 border-t border-[#233219]/20 text-[9pt] text-[#233219]/70">
            MusTech OS, a MusTech Group initiative, Singapore. The latest version of this guide is on mustechgroup.com/jumpstart.
          </p>
        </article>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}

// A numbered section with its number in a margin rail, so the page reads like a manual.
// keep: print the whole section on one page (for short sections), so a heading never sits alone at a page foot.
export function Part({
  n,
  title,
  lead,
  keep = true,
  children,
}: {
  n: string;
  title: string;
  lead?: string;
  keep?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`pt-12 sm:pt-16 grid gap-4 md:grid-cols-[4rem_1fr] md:gap-8 print:pt-8 ${keep ? "print:break-inside-avoid" : ""}`}>
      <span className="font-brand font-bold text-sm tracking-[0.2em] text-[#077d95] md:pt-2">{n}</span>
      <div className="min-w-0">
        <h2 className="break-after-avoid font-brand font-bold tracking-[-0.02em] leading-[1.1] text-[clamp(1.6rem,3.6vw,2.4rem)] text-balance print:text-[20pt]">
          {title}
        </h2>
        {lead && <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#233219]/80 max-w-2xl print:text-[11pt]">{lead}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
