import type { Metadata } from "next";
import Link from "next/link";
import { GuideDoc, Part } from "@/components/GuideDoc";
import JumpstartSafety from "@/components/JumpstartSafety";
import MustechOsJobs from "@/components/MustechOsJobs";

export const metadata: Metadata = {
  title: "MusTech OS | Your Company, Run by AI Departments You Control",
  description:
    "MusTech OS installs AI departments on your own computer. Build your website, run a launch, chase payments, price extra work, and check contracts, inside rules the AI cannot get round. Installed with you at Jumpstart.",
  alternates: { canonical: "/jumpstart/mustech-os" },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/jumpstart/mustech-os",
    siteName: "MusTech Group",
    title: "MusTech OS | Your Company, Run by AI Departments You Control",
    description:
      "AI departments on your own computer that do real company work, inside rules you set. Installed with you at Jumpstart.",
    images: [{ url: "/brand/Logo_Large_ClearBg.png", width: 513, height: 386, alt: "MusTech" }],
  },
};

const INCLUDED: { k: string; v: string }[] = [
  { k: "Your organisation", v: "Departments chosen and sized from your questionnaire. A design studio and a trading company get different offices." },
  { k: "Command Centre", v: "Your dashboard: what needs your decision, your ledger of commitments and money owed, and your numbers." },
  { k: "82 skills", v: "Contracts, payments, launches, websites, filings, brand, and more, each with its own rules." },
  { k: "1 year of updates", v: "New skills and fixes, signed by MusTech and checked on your computer before they install." },
];

const REPORT: { tag: string; c: string; t: string }[] = [
  { tag: "Decide", c: "text-[#8a5a00] bg-[#f8df98]/45", t: "Send the variation notice to Halcyon Studio: S$4,800, +6 days?" },
  { tag: "Decide", c: "text-[#8a5a00] bg-[#f8df98]/45", t: "Second reminder to Kopi Lab for INV-0042, S$12,400, 21 days late?" },
  { tag: "Input", c: "text-[#065f72] bg-[#077d95]/10", t: "Was the Arden retainer renewed for Q1? Needed for the cash forecast." },
  { tag: "Notify", c: "text-[#233219]/70 bg-[#233219]/[0.06]", t: "Website sprint 2 finished. Preview ready for your review." },
];

export default function MustechOsPage() {
  return (
    <GuideDoc
      eyebrow="MusTech OS · Guide"
      title={
        <>
          Your company, <span className="text-[#077d95]">staffed.</span>
        </>
      }
      standfirst="MusTech OS puts AI departments on your own computer that do real company work: your website, your launch, your invoices, and your contracts. They work inside rules they cannot get round, and anything that matters waits for your yes."
      meta={[
        { k: "Runs on", v: "Claude Code, Codex, or Antigravity" },
        { k: "Lives on", v: "Your own Mac" },
        { k: "Included", v: "1 year of updates" },
        { k: "Installed at", v: "Jumpstart" },
      ]}
      pdf="/jumpstart/mustech-os-guide.pdf"
      pdfLabel="The MusTech OS guide"
      other={{ href: "/jumpstart/quick-start", label: "Next: the quick start guide" }}
    >
      <Part
        n="01"
        keep={false}
        title="Ask for the outcome. Get the finished work."
        lead="Say what you need in your own words, in your AI tool at your desk. The right department picks it up with your prices, your clients, and your rules already loaded."
      >
        <MustechOsJobs />
        <p className="mt-3 text-xs text-[#233219]/60">Names, amounts, and dates are examples.</p>
      </Part>

      <Part
        n="02"
        title="Your company reports in before you do."
        lead="Overnight, the departments work through what came in. At 8 am your Command Centre shows only what needs you: decisions to make, facts only you know, and things to be aware of."
      >
        <div className="border border-[#233219]/15 bg-[#fffdf6] break-inside-avoid">
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-[#233219]/12 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="text-[#077d95]">Command Centre · 08:00 SGT</span>
            <span className="text-[#233219]/55">3 need you</span>
          </div>
          <ul className="divide-y divide-[#233219]/10">
            {REPORT.map((r) => (
              <li key={r.t} className="grid grid-cols-[4.75rem_1fr] gap-3 items-baseline px-4 sm:px-5 py-3">
                <span className={`justify-self-start px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] ${r.c}`}>{r.tag}</span>
                <span className="text-sm sm:text-base">{r.t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Part>

      <Part
        n="03"
        keep={false}
        title="Rules the AI cannot get round."
        lead="Four locks sit between the AI and your business. None of them is a request in a prompt: each is a check that runs before the AI acts."
      >
        <JumpstartSafety tone="light" />
      </Part>

      <Part n="04" title="Yours, on your computer.">
        <dl className="divide-y divide-[#233219]/12 border-y border-[#233219]/12">
          {INCLUDED.map((i) => (
            <div key={i.k} className="grid gap-1 sm:grid-cols-[12rem_1fr] sm:gap-6 py-4 break-inside-avoid">
              <dt className="font-brand font-bold text-lg">{i.k}</dt>
              <dd className="text-sm sm:text-base leading-relaxed text-[#233219]/80">{i.v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-sm text-[#233219]/70">Your records are ordinary files on your own computer. MusTech never holds your business data.</p>
      </Part>

      <Part
        n="05"
        title="Jumpstart installs it with you."
        lead="Two half-day sessions, in person. Day 1, your open work, money owed, quotes, and deadlines go into one ledger. Day 2, you answer your first morning report and put the departments to work."
      >
        <Link
          href="/jumpstart#register"
          className="print:hidden inline-flex items-center justify-center min-h-[48px] px-7 bg-[#233219] hover:bg-[#30441f] text-[#fdfaf0] text-xs font-bold uppercase tracking-[0.12em] transition-colors"
        >
          Register your interest
        </Link>
      </Part>
    </GuideDoc>
  );
}
