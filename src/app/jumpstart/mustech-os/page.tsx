import type { Metadata } from "next";
import Link from "next/link";
import { OnePager, Block, Sheet, SheetPart } from "@/components/OnePager";
import Cycler from "@/components/Cycler";
import { JOBS } from "@/components/mustech-os-jobs";

export const metadata: Metadata = {
  title: "MusTech OS | Build, Launch, and Run Your Company with AI Departments",
  description:
    "MusTech OS installs specialist AI departments on your computer. Work with your AI to create production websites, run social listening on market trends, orchestrate product launches, and manage daily and weekly execution.",
  alternates: { canonical: "/jumpstart/mustech-os" },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/jumpstart/mustech-os",
    siteName: "MusTech Group",
    title: "MusTech OS | Build, Launch, and Run Your Company with AI Departments",
    description:
      "Work with specialist AI departments on your computer to build websites, research market trends, launch products, and run daily and weekly operations.",
    images: [{ url: "/brand/Logo_Large_ClearBg.png", width: 513, height: 386, alt: "MusTech" }],
  },
};

const STANDFIRST =
  "Stop using AI like a chat assistant. MusTech OS turns your laptop into a full operating company: you work with specialist AI departments to build websites, run social listening on market trends, launch products end-to-end, and project-manage daily and weekly execution.";

const REPORT = [
  { tag: "Decide", c: "bg-[#f8df98] text-[#5c3d00]", t: "Approve variation notice for Halcyon motion reel (+S$4,800, +6 days)?" },
  { tag: "Decide", c: "bg-[#f8df98] text-[#5c3d00]", t: "Approve launch social calendar & PDPA privacy policy for 1 Dec?" },
  { tag: "Input", c: "bg-[#077d95]/12 text-[#065f72]", t: "Confirm Q1 retainer rate for Arden Studio before renewal draft?" },
  { tag: "Done", c: "bg-[#14181a]/8 text-[#14181a]/75", t: "Website sprint 2 built & verified on localhost; 4 PayNow receipts reconciled." },
];

const ADVANTAGES = [
  {
    num: "01",
    name: "Full-Stack Execution, Not Chat Advice",
    line: "Your AI does not hand you generic tips. It writes production code, conducts scoped social listening, checks regulatory and privacy rules, and manages your launch calendar alongside you.",
    badge: "Co-build & ship",
  },
  {
    num: "02",
    name: "You Hold the Pen on Money, Clients & Legal",
    line: "Departments research, build, test, and draft autonomously, while every client message, price change, public deployment, or payment waits for your one-line sign-off.",
    badge: "Executive sign-off",
  },
  {
    num: "03",
    name: "Branded to Your Company, Owned by You",
    line: "Your 8 am Executive Briefing, read-backs, and alerts carry your own company name and brand colours. Everything runs locally on your computer with zero monthly SaaS rent to MusTech.",
    badge: "100% sovereign",
  },
];

const FACTS = [
  { v: "82", k: "department playbooks across product, GTM, legal & finance" },
  { v: "S$0/mo", k: "ongoing platform rent to MusTech; runs on your existing AI plan" },
  { v: "100%", k: "of your client, financial & strategy files stay on your machine" },
  { v: "2 days", k: "hands-on calibration and live sprint execution at Jumpstart" },
];

const flag = (tone?: "flag" | "ok") =>
  tone === "flag" ? "text-[#a8432f]" : tone === "ok" ? "text-[#077d95]" : "text-[#14181a]/70";

function Screen() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:auto-rows-[minmax(0,auto)]">
      {/* Hero value proposition */}
      <Block dark className="lg:col-span-5 justify-between gap-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f8df98] mb-2">
            Sovereign Founder Operating System
          </p>
          <h1 className="font-brand font-bold tracking-[-0.03em] leading-[1.04] text-[clamp(2.2rem,4.4vw,3.25rem)]">
            Build, launch, and run with AI departments.
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
                AI Jumpstart (2 Half-Days)
              </Link>
            </dd>
          </div>
        </dl>
      </Block>

      {/* Four high-leverage co-execution playbooks (click tabs, zero auto-cycling) */}
      <Block label="What you and your AI departments build together" className="lg:col-span-7">
        <Cycler
          label="Department playbooks"
          tabs={JOBS.map((j) => j.tab)}
          items={JOBS.map((j) => (
            <div key={j.id} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#077d95]">{j.dept}</span>
                <span className="text-xs font-mono text-[#14181a]/60">Playbook · {j.skill}</span>
              </div>
              <p className="font-brand font-bold text-xl sm:text-2xl leading-snug text-[#14181a]">{j.label}</p>
              <p className="text-sm leading-relaxed text-[#14181a]/80">{j.summary}</p>
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
      <Block label="8 am · Your Company-Branded Briefing" className="lg:col-span-4">
        <p className="text-sm text-[#14181a]/80 mb-3">
          Every morning at 8 am, your workspace sends a dossier in <strong>your own company&rsquo;s brand colours</strong> with the exact decisions and weekly tasks that need your call:
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
          Approve in one line from your Command Centre (`D-0019 yes`).
        </p>
      </Block>

      {/* Sales-focused Executive Control & Leverage section */}
      <Block label="Why Founders Run Real Operations on MusTech OS" className="lg:col-span-5">
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
      <Block label="Built for Sovereign Scale" className="lg:col-span-3">
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
    <Sheet title="Build, launch, and run with AI departments.">
      <p className="mt-[4mm] text-[10.5pt] leading-[1.45] max-w-[172mm]">{STANDFIRST}</p>

      <div className="mt-[6mm] grid grid-cols-[1.18fr_1fr] gap-[6mm]">
        <SheetPart label="Four Founder + AI Co-Execution Playbooks">
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
          <SheetPart label="8 am · Company-Branded Executive Briefing">
            <p className="text-[8pt] leading-[1.35] mb-[1.5mm] text-[#14181a]/80">
              Delivered in your own company&rsquo;s brand palette so you start every morning with clear priorities:
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

          <SheetPart label="Why Founders Run Real Operations on MusTech OS">
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
        <b>Works with</b> the AI subscription you already use (Claude Code, Codex, or Antigravity). <b>Installed and calibrated with you</b> at AI Jumpstart across two hands-on half-day sessions.
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
