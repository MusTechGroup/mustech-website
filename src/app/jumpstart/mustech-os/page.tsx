import type { Metadata } from "next";
import Link from "next/link";
import { OnePager, Block, Sheet, SheetPart } from "@/components/OnePager";
import Cycler from "@/components/Cycler";
import { JOBS } from "@/components/mustech-os-jobs";

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

const STANDFIRST =
  "AI departments on your own computer that do real company work: your website, your launch, your invoices, and your contracts. Anything that matters waits for your yes.";

const REPORT = [
  { tag: "Decide", c: "bg-[#f8df98] text-[#5c3d00]", t: "Send the variation notice to Halcyon: S$4,800, +6 days?" },
  { tag: "Decide", c: "bg-[#f8df98] text-[#5c3d00]", t: "Second reminder to Kopi Lab: S$12,400, 21 days late?" },
  { tag: "Input", c: "bg-[#077d95]/12 text-[#065f72]", t: "Was the Arden retainer renewed for Q1?" },
  { tag: "Notify", c: "bg-[#233219]/8 text-[#233219]/75", t: "Website sprint 2 done. Preview ready." },
];

// Each lock maps to a registered control in founder-course/specs/HARNESS-CONTROLS.md:
// the guard G-01 to G-20, your yes R-03 with G-10 and G-16, the seal S-02 and S-03, the record G-18 and S-04.
const LOCKS = [
  { tab: "Guard", name: "The guard", line: "Checks every action before it runs. The refusals are code, not a prompt the AI can talk its way past.", proof: "20 refusals in code" },
  { tab: "Your yes", name: "Your yes", line: "Sending, paying, publishing, and deleting wait for your decision. Silence is never a yes.", proof: "Nothing acts unanswered" },
  { tab: "Seal", name: "The seal", line: "Its rules and tools are fingerprinted. If one changes, every department stops and it tops your morning report.", proof: "Pauses on any change" },
  { tab: "Record", name: "The record", line: "Every refusal and every decision is written down, in files on your computer the AI cannot edit.", proof: "Decision log" },
];

// Each was found by a second AI model attacking the harness (Gemini audits): G-08, G-09, and G-17.
const ATTACKS = [
  { t: "Reached outside its folder with a wildcard", d: "20 Oct" },
  { t: "Made a shortcut that led outside its folder", d: "20 Oct" },
  { t: "Wrote a protected file through a one-line script", d: "3 Nov" },
];

const FACTS = [
  { v: "82", k: "skills, each with its own rules" },
  { v: "1 year", k: "of updates, signed by MusTech" },
  { v: "None", k: "of your business records held by MusTech" },
  { v: "2", k: "half-days to install it with you" },
];

const flag = (tone?: "flag" | "ok") => (tone === "flag" ? "text-[#a8432f]" : tone === "ok" ? "text-[#2f6b3a]" : "text-[#233219]/55");

function Screen() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:auto-rows-[minmax(0,auto)]">
      {/* Who it is for, in one breath */}
      <Block dark className="lg:col-span-5 justify-between gap-8">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f8df98]">MusTech OS</p>
          <h1 className="mt-3 font-brand font-bold tracking-[-0.03em] leading-[1.02] text-[clamp(2.4rem,5vw,3.6rem)]">
            Your company, staffed.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#fdfaf0]/85 max-w-md">{STANDFIRST}</p>
        </div>
        <dl className="grid grid-cols-2 gap-4 text-sm border-t border-[#fdfaf0]/15 pt-4">
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fdfaf0]/60">Runs on</dt>
            <dd className="mt-1">Claude Code, Codex, or Antigravity</dd>
          </div>
          <div>
            <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fdfaf0]/60">Installed at</dt>
            <dd className="mt-1">
              <Link href="/jumpstart" className="underline underline-offset-4 decoration-[#f8df98]/60 hover:decoration-[#f8df98]">
                Jumpstart
              </Link>
            </dd>
          </div>
        </dl>
      </Block>

      {/* The jobs, one at a time */}
      <Block label="You ask. It comes back finished." className="lg:col-span-7">
        <Cycler
          label="Jobs MusTech OS does"
          tabs={JOBS.map((j) => j.tab)}
          items={JOBS.map((j) => (
            <div key={j.id} className="flex flex-col gap-3">
              <p className="font-brand text-xl sm:text-2xl leading-snug">&ldquo;{j.ask}&rdquo;</p>
              <div className="border-t border-[#233219]/12 pt-3">
                <p className="font-semibold">{j.title}</p>
                <dl className="mt-2 flex flex-col gap-1.5 text-sm">
                  {j.lines.slice(0, 3).map((l) => (
                    <div key={l.k} className="grid grid-cols-[7rem_1fr] gap-3">
                      <dt className={`text-[10px] font-bold uppercase tracking-[0.12em] pt-[0.25em] ${flag(l.tone)}`}>{l.k}</dt>
                      <dd className="text-[#233219]/85">{l.v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-[#233219]/60">{j.footer}</p>
              </div>
            </div>
          ))}
        />
      </Block>

      {/* The morning */}
      <Block label="8 am, your Command Centre" className="lg:col-span-4">
        <ul className="flex flex-col gap-2.5 pb-4">
          {REPORT.map((r) => (
            <li key={r.t} className="grid grid-cols-[4.25rem_1fr] gap-3 items-baseline text-sm">
              <span className={`justify-self-start px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] ${r.c}`}>{r.tag}</span>
              <span>{r.t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-auto pt-4 border-t border-[#233219]/10 text-sm text-[#233219]/70">
          The departments worked overnight. Only what needs you shows.
        </p>
      </Block>

      {/* The harness, one lock at a time */}
      <Block label="Rules the AI cannot get round" className="lg:col-span-5">
        <Cycler
          label="The four locks"
          tabs={[...LOCKS.map((l) => l.tab), "Tested"]}
          every={7000}
          items={[
            ...LOCKS.map((l, n) => (
              <div key={l.tab} className="flex flex-col gap-2">
                <p className="font-brand font-bold text-2xl tracking-[-0.01em]">
                  <span className="text-[#077d95] text-sm align-middle mr-2">0{n + 1}</span>
                  {l.name}
                </p>
                <p className="text-sm leading-relaxed text-[#233219]/80">{l.line}</p>
                <span className="self-start border border-[#077d95]/35 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#065f72]">
                  {l.proof}
                </span>
              </div>
            )),
            <div key="tested" className="flex flex-col gap-2">
              <p className="text-sm text-[#233219]/80">A second AI model attacks the harness before each release. What it found, now refused:</p>
              <ul className="divide-y divide-[#233219]/10 text-sm">
                {ATTACKS.map((a) => (
                  <li key={a.t} className="flex justify-between gap-3 py-1.5">
                    <span>{a.t}</span>
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] text-[#2f6b3a] pt-[0.3em]">Closed {a.d}</span>
                  </li>
                ))}
              </ul>
            </div>,
          ]}
        />
      </Block>

      {/* What is yours */}
      <Block label="Yours to keep" className="lg:col-span-3">
        <dl className="flex flex-col gap-3">
          {FACTS.map((f) => (
            <div key={f.k} className="grid grid-cols-[4.5rem_1fr] gap-3 items-baseline">
              <dt className="font-brand font-bold text-2xl text-[#077d95]">{f.v}</dt>
              <dd className="text-sm leading-snug">{f.k}</dd>
            </div>
          ))}
        </dl>
      </Block>
    </div>
  );
}

function Paper() {
  return (
    <Sheet kicker="MusTech OS · One-pager" title="Your company, staffed.">
      <p className="mt-[5mm] text-[11.5pt] leading-[1.45] max-w-[165mm]">{STANDFIRST}</p>

      <div className="mt-[7mm] grid grid-cols-[1.15fr_1fr] gap-[7mm]">
        <SheetPart label="You ask. It comes back finished.">
          <ol className="border-t border-[#233219]/20">
            {JOBS.map((j) => (
              <li key={j.id} className="py-[2.3mm] border-b border-[#233219]/12">
                <p className="text-[6.5pt] font-bold uppercase tracking-[0.16em] text-[#233219]/60">{j.label}</p>
                <p className="italic">&ldquo;{j.ask}&rdquo;</p>
                <p className="font-bold">
                  <span className="text-[#077d95]">&rarr; </span>
                  {j.title}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-[1mm] text-[6.5pt] text-[#233219]/60">Names and amounts are examples.</p>
        </SheetPart>

        <div className="flex flex-col gap-[7mm]">
          <SheetPart label="8 am, your Command Centre">
            <ul className="bg-[#fdfaf0] border border-[#233219]/15 px-[3mm] py-[2mm] flex flex-col gap-[1.4mm]">
              {REPORT.map((r) => (
                <li key={r.t} className="grid grid-cols-[13mm_1fr] gap-[2mm] items-baseline">
                  <span className={`justify-self-start px-[1mm] text-[6pt] font-bold uppercase tracking-[0.1em] ${r.c}`}>{r.tag}</span>
                  <span>{r.t}</span>
                </li>
              ))}
            </ul>
          </SheetPart>

          <SheetPart label="Rules the AI cannot get round">
            <ol className="flex flex-col gap-[2mm]">
              {LOCKS.map((l, n) => (
                <li key={l.tab} className="grid grid-cols-[6mm_1fr] gap-[1mm]">
                  <span className="font-brand font-bold text-[#077d95]">0{n + 1}</span>
                  <span>
                    <b>{l.name}.</b> {l.line}
                  </span>
                </li>
              ))}
            </ol>
          </SheetPart>

          <SheetPart label="Tested by attack">
            <p>A second AI model attacks the harness before each release. Each way through became a refusal:</p>
            <ul className="mt-[1mm]">
              {ATTACKS.map((a) => (
                <li key={a.t} className="flex justify-between gap-[2mm] border-b border-[#233219]/12 py-[0.8mm]">
                  <span>{a.t}</span>
                  <span className="shrink-0 font-bold text-[#2f6b3a]">{a.d}</span>
                </li>
              ))}
            </ul>
          </SheetPart>
        </div>
      </div>

      <div className="mt-[8mm] grid grid-cols-4 bg-[#fdfaf0] border border-[#233219]/15">
        {FACTS.map((f, n) => (
          <div key={f.k} className={`px-[3mm] py-[2.5mm] ${n ? "border-l border-[#233219]/15" : ""}`}>
            <p className="font-brand font-bold text-[20pt] leading-none text-[#077d95]">{f.v}</p>
            <p className="mt-[1mm] text-[7.5pt] leading-snug">{f.k}</p>
          </div>
        ))}
      </div>

      <p className="mt-[4mm] text-[9.5pt]">
        <b>Runs on</b> the AI tool you already pay for: Claude Code, Codex, or Antigravity. <b>Installed with you</b> at Jumpstart, two
        half-day sessions in person.
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
