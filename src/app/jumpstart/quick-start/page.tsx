import type { Metadata } from "next";
import type { ReactNode } from "react";
import { OnePager, Block, Sheet, SheetPart } from "@/components/OnePager";
import Cycler from "@/components/Cycler";

export const metadata: Metadata = {
  title: "MusTech OS Quick Start | From Payment to Your First Morning Report",
  description:
    "How setup works: reserve your Jumpstart seat, answer the questionnaire, install MusTech OS with a double-click, connect your AI, and start your day from the Command Centre.",
  alternates: { canonical: "/jumpstart/quick-start" },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/jumpstart/quick-start",
    siteName: "MusTech Group",
    title: "MusTech OS Quick Start",
    description: "From payment to your first morning report, step by step.",
    images: [{ url: "/brand/Logo_Large_ClearBg.png", width: 513, height: 386, alt: "MusTech" }],
  },
};

// Small pictures of what is on screen at each step, so a founder matches the screen instead of reading.
const Btn = ({ children, ghost = false }: { children: ReactNode; ghost?: boolean }) => (
  <span
    className={`inline-flex items-center min-h-[30px] px-3 text-[10px] font-bold uppercase tracking-[0.1em] whitespace-nowrap ${
      ghost ? "border border-[#233219]/30 text-[#233219]" : "bg-[#077d95] text-white"
    }`}
  >
    {children}
  </span>
);

const Mail = ({ subject, button }: { subject: string; button: string }) => (
  <span className="inline-flex flex-col gap-1.5 bg-[#fdfaf0] border border-[#233219]/15 border-t-[3px] border-t-[#077d95] p-2.5 w-56">
    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#233219]/60">MusTech OS</span>
    <span className="text-xs font-semibold leading-snug">{subject}</span>
    <span className="self-start bg-[#077d95] text-white text-[9px] font-bold uppercase tracking-[0.08em] px-2 py-1">{button}</span>
  </span>
);

type Step = { title: string; body: string; pic: ReactNode };
type Stage = { tab: string; name: string; time: string; ready: string; steps: Step[] };

const STAGES: Stage[] = [
  {
    tab: "Reserve",
    ready: "Your email address, and PayNow or a card.",
    name: "Reserve your seat",
    time: "2 min",
    steps: [
      {
        title: "Pay for your Jumpstart seat",
        body: "Enter your email and pay on a secure checkout. Your receipt arrives by email. The seat includes 1 year of MusTech OS updates.",
        pic: (
          <span className="flex gap-2">
            <Btn>PayNow</Btn>
            <Btn ghost>Card</Btn>
          </span>
        ),
      },
    ],
  },
  {
    tab: "Answer",
    ready: "Ten quiet minutes, and the last 3 months of your business in mind.",
    name: "Answer the questions",
    time: "10 min, any device",
    steps: [
      {
        title: "Open the questionnaire email",
        body: "Plain questions about how your business works, each with a note on why we ask.",
        pic: <Mail subject="Your MusTech OS questionnaire" button="Answer the questionnaire" />,
      },
    ],
  },
  {
    tab: "Install",
    ready: "Your Mac, its password, and the “ready” email open on it.",
    name: "Install MusTech OS",
    time: "10 min, your Mac",
    steps: [
      {
        title: "Open the “ready” email on your computer",
        body: "Your workspace is built from your answers within minutes. Open it on the computer you work from.",
        pic: <Mail subject="Your MusTech OS workspace is ready" button="Install MusTech OS" />,
      },
      {
        title: "Download, open, install",
        body: "Signed and checked by Apple, so it opens without warnings. Type your computer password when asked.",
        pic: <Btn>Download for Mac</Btn>,
      },
      {
        title: "Set up your workspace",
        body: "Back on the same page, press Set up. When your browser asks, choose Open. Bookmark the Command Centre that opens.",
        pic: (
          <span className="inline-flex items-center gap-2 border border-[#233219]/15 bg-[#fffdf6] px-2.5 py-2 text-xs">
            Open MusTech OS? <Btn>Open</Btn>
          </span>
        ),
      },
    ],
  },
  {
    tab: "Connect",
    ready: "Your AI tool signed in on your Mac, and your phone.",
    name: "Connect",
    time: "10 min, Get started card",
    steps: [
      {
        title: "Connect your AI",
        body: "Press the AI tool you already pay for. Allow it once when your tool asks.",
        pic: (
          <span className="flex flex-wrap gap-1.5">
            <Btn ghost>Claude Code</Btn>
            <Btn ghost>Codex</Btn>
            <Btn ghost>Antigravity</Btn>
          </span>
        ),
      },
      {
        title: "Add your phone",
        body: "Scan the code with your phone's camera, choose Add to Home Screen, and send a test note.",
        pic: <Btn ghost>Show the code for my phone</Btn>,
      },
    ],
  },
  {
    tab: "Jumpstart",
    ready: "Your Mac and charger, and your open jobs, unpaid invoices, quotes, and deadlines.",
    name: "At Jumpstart",
    time: "2 half-days",
    steps: [
      {
        title: "Day 1: reconcile your business",
        body: "Every open job, unpaid invoice, outstanding quote, and filing deadline goes into one Commitments Ledger.",
        pic: <Btn ghost>Commitments Ledger</Btn>,
      },
      {
        title: "Day 2: your first morning report",
        body: "The departments worked overnight. Answer your first decisions, then put them to work on a real job.",
        pic: <Btn>3 need you today</Btn>,
      },
    ],
  },
];

const DAILY = [
  { k: "8 am", t: "Open your Command Centre", v: "Decide yes or no. Answer each Input." },
  { k: "At your desk", t: "Ask your AI tool for the work", v: "“Check this contract.” “Plan the launch.”" },
  { k: "Away", t: "Send it from your phone", v: "A note or a receipt photo, waiting when you are back." },
];

const HELP = [
  { k: "“Set up” did nothing", v: "Install the app first, then press it again." },
  { k: "The link expired", v: "Ask for a new one on the download page." },
  { k: "Closed the Command Centre", v: "Open your bookmark. It keeps running." },
  { k: "Want to remove it", v: "Open MusTech OS from Applications. Your records stay." },
];

const NEEDS = [
  { k: "Time", v: "About 30 minutes" },
  { k: "Computer", v: "Mac, macOS 13 or later" },
  { k: "AI plan", v: "Paid Claude, ChatGPT, or Google AI" },
  { k: "Also", v: "Your phone" },
];

// Each stage's first step number, so steps count on across stages.
const FIRST = STAGES.map((_, i) => STAGES.slice(0, i).reduce((sum, s) => sum + s.steps.length, 1));

function Screen() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
      <Block dark className="lg:col-span-4 justify-between gap-8">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f8df98]">MusTech OS · Quick start</p>
          <h1 className="mt-3 font-brand font-bold tracking-[-0.03em] leading-[1.04] text-[clamp(2.1rem,4vw,3rem)]">
            From payment to your first morning report.
          </h1>
        </div>
        <dl className="grid grid-cols-2 gap-4 text-sm border-t border-[#fdfaf0]/15 pt-4">
          {NEEDS.map((m) => (
            <div key={m.k}>
              <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fdfaf0]/60">{m.k}</dt>
              <dd className="mt-1">{m.v}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block label="Five stages, nine steps" className="lg:col-span-8">
        <Cycler
          label="Setup stages"
          rail
          tabs={STAGES.map((s, n) => (
            <span key={s.tab} className="flex items-baseline justify-between gap-2">
              <span>
                <span className="font-brand font-bold mr-2">{n + 1}</span>
                {s.tab}
              </span>
              <span className="text-[11px] opacity-70">{s.time.split(",")[0]}</span>
            </span>
          ))}
          every={8000}
          items={STAGES.map((s, n) => (
            <div key={s.tab} className="flex flex-col gap-3 h-full">
              <p className="flex items-baseline justify-between gap-3">
                <span className="font-brand font-bold text-2xl tracking-[-0.01em]">{s.name}</span>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#233219]/55">{s.time}</span>
              </p>
              <ol className="divide-y divide-[#233219]/10 border-t border-[#233219]/10">
                {s.steps.map((st) => (
                  <li key={st.title} className="grid gap-3 sm:grid-cols-[1fr_auto] items-center py-3">
                    <div>
                      <p className="font-semibold">{st.title}</p>
                      <p className="mt-0.5 text-sm text-[#233219]/75">{st.body}</p>
                    </div>
                    <div aria-hidden="true">{st.pic}</div>
                  </li>
                ))}
              </ol>
              <p className="mt-1 bg-[#f8df98]/40 px-3 py-2 text-sm">
                <b>Have ready: </b>
                {s.ready}
              </p>
              <p className="text-sm text-[#233219]/65">
                {n < STAGES.length - 1 ? (
                  <>
                    Then: <b className="text-[#233219]">{STAGES[n + 1].name}</b>
                  </>
                ) : (
                  "Then: your Command Centre, every morning."
                )}
              </p>
            </div>
          ))}
        />
      </Block>

      <Block label="Every day after" className="lg:col-span-7">
        <dl className="grid gap-4 sm:grid-cols-3">
          {DAILY.map((d) => (
            <div key={d.k}>
              <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#077d95]">{d.k}</dt>
              <dd className="mt-1">
                <span className="block font-semibold">{d.t}</span>
                <span className="block mt-0.5 text-sm text-[#233219]/75">{d.v}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block label="If something looks wrong" className="lg:col-span-5">
        <dl className="grid gap-3 sm:grid-cols-2 text-sm">
          {HELP.map((h) => (
            <div key={h.k}>
              <dt className="font-semibold">{h.k}</dt>
              <dd className="text-[#233219]/75">{h.v}</dd>
            </div>
          ))}
        </dl>
      </Block>
    </div>
  );
}

function Paper() {
  return (
    <Sheet kicker="MusTech OS · Quick start" title="From payment to your first morning report.">
      <dl className="mt-[5mm] grid grid-cols-4 gap-[4mm]">
        {NEEDS.map((m) => (
          <div key={m.k}>
            <dt className="text-[6.5pt] font-bold uppercase tracking-[0.2em] text-[#233219]/60">{m.k}</dt>
            <dd className="font-bold">{m.v}</dd>
          </div>
        ))}
      </dl>

      {/* The five stages across the page, each with its steps: said once, in order */}
      <SheetPart label="Five stages, nine steps" className="mt-[7mm]">
        <ol className="grid grid-cols-5 border-t-[2pt] border-[#233219]">
          {STAGES.map((s, n) => (
            <li key={s.tab} className={`pt-[3mm] pr-[3mm] ${n ? "pl-[3mm] border-l border-[#233219]/15" : ""}`}>
              <p className="font-brand font-bold text-[12pt] leading-tight">{s.name}</p>
              <p className="mt-[0.5mm] text-[7pt] font-bold uppercase tracking-[0.12em] text-[#077d95]">{s.time}</p>
              <ol className="mt-[2mm] flex flex-col gap-[2.2mm]">
                {s.steps.map((st) => (
                  <li key={st.title}>
                    <span className="inline-grid place-items-center w-[5.5mm] h-[5.5mm] bg-[#233219] text-[#fdfaf0] font-brand font-bold text-[8.5pt]">
                      {FIRST[n] + s.steps.indexOf(st)}
                    </span>
                    <p className="mt-[1mm] font-bold leading-snug">{st.title}</p>
                    <p className="text-[8pt] leading-[1.35] text-[#233219]/85">{st.body}</p>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </SheetPart>

      <div className="mt-[6mm] grid grid-cols-2 gap-[7mm] border-t border-[#233219]/20 pt-[4mm]">
        <SheetPart label="Every day after">
          <dl className="flex flex-col gap-[1.5mm]">
            {DAILY.map((d) => (
              <div key={d.k} className="grid grid-cols-[17mm_1fr] gap-[2mm]">
                <dt className="font-bold text-[#077d95]">{d.k}</dt>
                <dd>
                  <b>{d.t}.</b> {d.v}
                </dd>
              </div>
            ))}
          </dl>
        </SheetPart>
        <SheetPart label="If something looks wrong">
          <dl className="flex flex-col gap-[1.5mm]">
            {HELP.map((h) => (
              <div key={h.k}>
                <dt className="inline font-bold">{h.k}: </dt>
                <dd className="inline">{h.v}</dd>
              </div>
            ))}
          </dl>
        </SheetPart>
      </div>
    </Sheet>
  );
}

export default function QuickStartPage() {
  return (
    <OnePager
      screen={<Screen />}
      sheet={<Paper />}
      pdf="/jumpstart/mustech-os-quick-start.pdf"
      other={{ href: "/jumpstart/mustech-os", label: "What MusTech OS does" }}
    />
  );
}
