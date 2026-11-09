import type { Metadata } from "next";
import Link from "next/link";
import { OnePager, Block, Sheet, SheetPart } from "@/components/OnePager";
import Cycler from "@/components/Cycler";
import { JOBS } from "@/components/mustech-os-jobs";

export const metadata: Metadata = {
  title: "MusTech OS | AI Departments That Run Your Business, With You in Charge",
  description:
    "MusTech OS installs AI departments on your own computer, calibrated to your business: customer replies, receipts, quotes, chasers, a website, and a daily standup. Nothing leaves without your yes.",
  alternates: { canonical: "/jumpstart/mustech-os" },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/jumpstart/mustech-os",
    siteName: "MusTech Group",
    title: "MusTech OS | AI Departments That Run Your Business, With You in Charge",
    description:
      "AI departments on your own computer, calibrated to your business. They draft, chase, and remind; you approve on your dashboard.",
    images: [{ url: "/brand/Logo_Large_ClearBg.png", width: 513, height: 386, alt: "MusTech" }],
  },
};

const STANDFIRST =
  "MusTech OS puts AI departments on your own computer, set up for your business at AI Jumpstart. They keep your ledger, draft your replies, quotes, and chasers, and bring you a standup every morning. You approve on your dashboard; nothing leaves without you.";

const REPORT = [
  { tag: "Red", c: "bg-[#a8432f]/15 text-[#7a2f20]", t: "Invoice to Kopi Lab is 14 days late. A chaser is drafted: send it?" },
  { tag: "Decide", c: "bg-[#f8df98] text-[#5c3d00]", t: "Quote for the Tan wedding order is ready. Approve and send?" },
  { tag: "Input", c: "bg-[#077d95]/12 text-[#065f72]", t: "When is your last order date before the holiday?" },
  { tag: "Done", c: "bg-[#14181a]/8 text-[#14181a]/75", t: "3 receipts logged with GST; 2 missed-call replies drafted." },
];

const ADVANTAGES = [
  {
    num: "01",
    name: "Real work from your own records",
    line: "Not generic tips: quotes from your price list, chasers from your ledger, listings in your words. A missing fact is asked for, never made up.",
    badge: "No invented facts",
  },
  {
    num: "02",
    name: "Nothing leaves without you",
    line: "Every message, payment, and publish waits for you. When your AI needs to go past a limit, it asks; you approve on your dashboard, and the gate closes by itself.",
    badge: "You approve",
  },
  {
    num: "03",
    name: "Your business stays on your computer",
    line: "Your records never go to MusTech. It runs on the AI plan you already pay for, and nothing breaks if you stop paying us.",
    badge: "Yours to keep",
  },
];

const FACTS = [
  { v: "58", k: "things owners asked AI for, from 189 mentions, shaped what it does" },
  { v: "92", k: "skills to choose from; yours are installed to fit your answers" },
  { v: "0", k: "business files sent to MusTech: your records stay on your machine" },
  { v: "2 days", k: "in person at AI Jumpstart, setting it up with you" },
];

const flag = (tone?: "flag" | "ok") =>
  tone === "flag" ? "text-[#a8432f]" : tone === "ok" ? "text-[#077d95]" : "text-[#14181a]/70";

function Screen() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:auto-rows-[minmax(0,auto)]">
      {/* Hero value proposition */}
      <Block dark className="lg:col-span-5 justify-between gap-6">
        <div>
          <h1 className="font-brand font-bold tracking-[-0.03em] leading-[1.04] text-[clamp(2.2rem,4.4vw,3.25rem)]">
            AI departments for your business, with you in charge.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#fdfaf0]/85">{STANDFIRST}</p>
        </div>
        <dl className="grid grid-cols-2 gap-4 text-sm border-t border-[#fdfaf0]/15 pt-4">
          <div>
            <dt className="text-[#fdfaf0]/65">Powered by your AI</dt>
            <dd className="mt-1 font-semibold">Claude Code, Codex, or Antigravity</dd>
          </div>
          <div>
            <dt className="text-[#fdfaf0]/65">Calibrated live at</dt>
            <dd className="mt-1 font-semibold">
              <Link href="/jumpstart" className="underline underline-offset-4 decoration-[#f8df98]/60 hover:decoration-[#f8df98]">
                AI Jumpstart (two days, in person)
              </Link>
            </dd>
          </div>
        </dl>
      </Block>

      {/* Four high-leverage co-execution playbooks (click tabs, zero auto-cycling) */}
      <Block label="What it does for you" className="lg:col-span-7">
        <Cycler
          label="Department playbooks"
          tabs={JOBS.map((j) => j.tab)}
          items={JOBS.map((j) => (
            <div key={j.id} className="flex flex-col gap-3">
              <p className="font-brand font-bold text-xl sm:text-2xl leading-snug text-[#14181a]">{j.label}</p>
              <p className="text-sm leading-relaxed text-[#14181a]/80">{j.summary}</p>
              <p className="text-xs text-[#14181a]/60">
                {j.dept} · <span className="font-mono">{j.skill}</span>
              </p>
              <div className="border-t border-[#14181a]/12 pt-3">
                <dl className="flex flex-col gap-2 text-sm">
                  {j.lines.map((l) => (
                    <div key={l.k} className="grid grid-cols-[7.5rem_1fr] gap-3 items-baseline">
                      <dt className={`font-semibold ${flag(l.tone)}`}>{l.k}</dt>
                      <dd className="text-[#14181a]/85 leading-relaxed">{l.v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 pt-2 border-t border-[#14181a]/10 text-xs font-semibold text-[#077d95]">{j.footer}</p>
              </div>
            </div>
          ))}
        />
      </Block>

      {/* 8 am Company-Branded Executive Briefing */}
      <Block label="Your morning standup" className="lg:col-span-4">
        <p className="text-sm text-[#14181a]/80 mb-3">
          Every morning, by email and on your dashboard, in <strong>your own brand colours</strong>: what is Red, what needs your call, and what is done.
        </p>
        <ul className="flex flex-col gap-2.5 pb-4">
          {REPORT.map((r) => (
            <li key={r.t} className="grid grid-cols-[4.25rem_1fr] gap-3 items-baseline text-sm">
              <span className={`justify-self-start px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${r.c}`}>{r.tag}</span>
              <span className="leading-snug">{r.t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-auto pt-3 border-t border-[#14181a]/10 text-xs font-semibold text-[#14181a]/70">
          Answer on your dashboard, or in one line from your phone.
        </p>
      </Block>

      {/* Sales-focused Executive Control & Leverage section */}
      <Block label="Why founders trust it" className="lg:col-span-5">
        <ol className="flex flex-col gap-3.5">
          {ADVANTAGES.map((a) => (
            <li key={a.num} className="border-b border-[#14181a]/10 pb-3 last:border-b-0 last:pb-0">
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-brand font-bold text-lg leading-snug text-[#14181a]">
                  <span className="text-[#077d95] text-xs font-sans font-bold uppercase tracking-wider mr-2">{a.num}</span>
                  {a.name}
                </p>
                <span className="shrink-0 bg-[#077d95]/10 text-[#055e70] px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em]">
                  {a.badge}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-[#14181a]/80">{a.line}</p>
            </li>
          ))}
        </ol>
      </Block>

      {/* Key metrics */}
      <Block label="In numbers" className="lg:col-span-3">
        <dl className="flex flex-col gap-3.5 my-auto">
          {FACTS.map((f) => (
            <div key={f.k} className="border-b border-[#14181a]/10 pb-2.5 last:border-b-0 last:pb-0">
              <dt className="font-brand font-bold text-2xl text-[#077d95] leading-none">{f.v}</dt>
              <dd className="mt-1 text-sm leading-snug text-[#14181a]/85">{f.k}</dd>
            </div>
          ))}
        </dl>
      </Block>
    </div>
  );
}

function Paper() {
  return (
    <Sheet title="AI departments for your business, with you in charge.">
      <p className="mt-[4mm] text-[10.5pt] leading-[1.45] max-w-[172mm]">{STANDFIRST}</p>

      <div className="mt-[6mm] grid grid-cols-[1.18fr_1fr] gap-[6mm]">
        <SheetPart label="What it does for you">
          <ol className="border-t border-[#14181a]/20">
            {JOBS.map((j) => (
              <li key={j.id} className="py-[2.2mm] border-b border-[#14181a]/12">
                <div className="flex justify-between items-baseline">
                  <p className="font-bold text-[#077d95]">{j.label}</p>
                  <span className="text-[7pt] uppercase tracking-wider text-[#14181a]/60">{j.dept}</span>
                </div>
                <p className="mt-[0.6mm] text-[8.2pt] leading-[1.35] text-[#14181a]/85">{j.summary}</p>
                <p className="mt-[0.8mm] text-[8pt] font-semibold text-[#14181a]">
                  <span className="text-[#077d95]">&rarr; </span>
                  {j.title}
                </p>
              </li>
            ))}
          </ol>
        </SheetPart>

        <div className="flex flex-col gap-[5.5mm]">
          <SheetPart label="Your morning standup">
            <p className="text-[8pt] leading-[1.35] mb-[1.5mm] text-[#14181a]/80">
              By email and on your dashboard, in your own brand colours:
            </p>
            <ul className="bg-[#fdfaf0] border border-[#14181a]/15 px-[3mm] py-[2mm] flex flex-col gap-[1.4mm]">
              {REPORT.map((r) => (
                <li key={r.t} className="grid grid-cols-[13mm_1fr] gap-[2mm] items-baseline text-[8pt]">
                  <span className={`justify-self-start px-[1mm] text-[6pt] font-bold uppercase tracking-[0.1em] ${r.c}`}>{r.tag}</span>
                  <span>{r.t}</span>
                </li>
              ))}
            </ul>
          </SheetPart>

          <SheetPart label="Why founders trust it">
            <ol className="flex flex-col gap-[2.2mm]">
              {ADVANTAGES.map((a) => (
                <li key={a.num} className="grid grid-cols-[6mm_1fr] gap-[1.5mm] text-[8.2pt] leading-[1.35]">
                  <span className="font-brand font-bold text-[#077d95]">{a.num}</span>
                  <span>
                    <b>{a.name}.</b> {a.line}
                  </span>
                </li>
              ))}
            </ol>
          </SheetPart>
        </div>
      </div>

      <div className="mt-[6mm] grid grid-cols-4 bg-[#fdfaf0] border border-[#14181a]/15">
        {FACTS.map((f, n) => (
          <div key={f.k} className={`px-[3mm] py-[2.2mm] ${n ? "border-l border-[#14181a]/15" : ""}`}>
            <p className="font-brand font-bold text-[18pt] leading-none text-[#077d95]">{f.v}</p>
            <p className="mt-[1mm] text-[7.5pt] leading-snug">{f.k}</p>
          </div>
        ))}
      </div>

      <p className="mt-[3.5mm] text-[9pt]">
        <b>Works with</b> the AI plan you already use (Claude Code, Codex, or Antigravity). <b>Set up with you</b> at AI Jumpstart, two days in person. See it play out: mustechgroup.com/jumpstart/how-it-works
      </p>
    </Sheet>
  );
}

export default function MustechOsPage() {
  return (
    <OnePager
      screen={<Screen />}
      sheet={<Paper />}
      pdf="/jumpstart/mustech-os-one-pager.pdf"
      other={{ href: "/jumpstart/quick-start", label: "Next: the quick start" }}
    />
  );
}
