import type { Metadata } from "next";
import type { ReactNode } from "react";
import { OnePager, Block, Sheet, SheetPart } from "@/components/OnePager";

export const metadata: Metadata = {
  title: "MusTech OS Quick Start | Three Phases from Sign-Up to Live Execution",
  description:
    "How setup works across three balanced phases: enrol and calibrate your business, install MusTech OS and connect your AI engine, then build, launch, and run with your AI departments.",
  alternates: { canonical: "/jumpstart/quick-start" },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/jumpstart/quick-start",
    siteName: "MusTech Group",
    title: "MusTech OS Quick Start",
    description: "Three balanced phases, nine clear steps from checkout to your first live sprint.",
    images: [{ url: "/brand/Logo_Large_ClearBg.png", width: 513, height: 386, alt: "MusTech" }],
  },
};

const Pill = ({ children, solid = false }: { children: ReactNode; solid?: boolean }) => (
  <span
    className={`inline-flex items-center min-h-[26px] px-2.5 text-[10px] font-bold uppercase tracking-[0.09em] whitespace-nowrap ${
      solid ? "bg-[#077d95] text-white" : "border border-[#14181a]/25 bg-[#fdfaf0] text-[#14181a]"
    }`}
  >
    {children}
  </span>
);

const MiniMail = ({ subject, cta, accent = "#077d95" }: { subject: string; cta: string; accent?: string }) => (
  <span className="inline-flex items-center justify-between gap-2 w-full bg-[#0b0b0a] text-[#fdfaf0] border-l-[3px] px-2.5 py-1.5 text-[11px]" style={{ borderColor: accent }}>
    <span className="font-brand truncate">{subject}</span>
    <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 text-white" style={{ backgroundColor: accent }}>
      {cta}
    </span>
  </span>
);

type Step = { num: number; title: string; body: string; cue: ReactNode };
type Phase = { phase: string; name: string; time: string; ready: string; steps: Step[] };

const PHASES: Phase[] = [
  {
    phase: "Phase 01",
    name: "Enrol & Calibrate",
    time: "~12 mins · Any device",
    ready: "Your email address, PayNow or card, and a snapshot of your current offers and clients.",
    steps: [
      {
        num: 1,
        title: "Reserve your Jumpstart seat",
        body: "Complete checkout via PayNow or card. Your receipt and 1-year signed update licence arrive immediately.",
        cue: (
          <span className="flex flex-wrap gap-1.5">
            <Pill solid>PayNow SGQR</Pill>
            <Pill>Card Checkout</Pill>
          </span>
        ),
      },
      {
        num: 2,
        title: "Complete the 10-minute calibration",
        body: "Answer plain-English questions on your offers, clients, and workflow so we configure the right AI departments.",
        cue: <MiniMail subject="Your MusTech OS questionnaire" cta="Start Survey" />,
      },
      {
        num: 3,
        title: "Receive your tailored workspace email",
        body: "Your custom MusTech OS workspace is compiled from your answers and sent to your inbox with your install link.",
        cue: <MiniMail subject="Your MusTech OS workspace is ready" cta="Open Setup" />,
      },
    ],
  },
  {
    phase: "Phase 02",
    name: "Install & Connect",
    time: "~15 mins · Your Mac or PC",
    ready: "Your laptop, your macOS/Windows login password, and your paid AI subscription.",
    steps: [
      {
        num: 4,
        title: "Run the signed MusTech OS installer",
        body: "Download the notarised Mac or Windows package from your setup page and double-click to install with zero terminal setup.",
        cue: (
          <span className="flex flex-wrap gap-1.5">
            <Pill solid>Download for Mac</Pill>
            <Pill>Windows (.msi)</Pill>
          </span>
        ),
      },
      {
        num: 5,
        title: "Unpack & open your Command Centre",
        body: "Click Set up my workspace on the install page. Your browser opens your local Command Centre; bookmark it for daily use.",
        cue: (
          <span className="flex flex-wrap gap-1.5">
            <Pill solid>Set up my workspace</Pill>
            <Pill>localhost:3100</Pill>
          </span>
        ),
      },
      {
        num: 6,
        title: "Connect your AI engine & phone",
        body: "Select the AI tool you already pay for on the Get Started card, then scan the QR code to pair your phone for quick capture.",
        cue: (
          <span className="flex flex-wrap gap-1.5">
            <Pill>Claude Code</Pill>
            <Pill>Codex</Pill>
            <Pill>Antigravity</Pill>
          </span>
        ),
      },
    ],
  },
  {
    phase: "Phase 03",
    name: "Build, Launch & Run",
    time: "2 half-days + daily rhythm",
    ready: "Your laptop and charger, plus a real website, trend brief, or product launch you want to ship.",
    steps: [
      {
        num: 7,
        title: "Day 1: Calibrate your brand & live ledger",
        body: "Load your brand colours, active retainers, unpaid invoices, and statutory deadlines into one live Commitments Ledger.",
        cue: (
          <span className="flex flex-wrap gap-1.5">
            <Pill>Brand Board</Pill>
            <Pill>Commitments Ledger</Pill>
          </span>
        ),
      },
      {
        num: 8,
        title: "Day 2: Ship a live sprint with your AI",
        body: "Work with your AI to create a website, scope social listening on market trends, or build a full product launch plan.",
        cue: (
          <span className="flex flex-wrap gap-1.5">
            <Pill solid>Website Build</Pill>
            <Pill>Social Listening</Pill>
            <Pill>Launch PM</Pill>
          </span>
        ),
      },
      {
        num: 9,
        title: "Daily 8 am Executive Briefing",
        body: "Receive your morning dossier in your own company's brand colours, approve key calls in one line, and track weekly execution.",
        cue: <MiniMail subject="Daily Executive Briefing." cta="2 Decisions" accent="#d95d24" />,
      },
    ],
  },
];

const DAILY = [
  { k: "8:00 am", t: "Review your company-branded briefing", v: "Approve pending client, pricing, or launch calls (`D-0019 yes`)." },
  { k: "At your desk", t: "Co-build & execute with your AI", v: "Create pages, run social listening on trends, or check launch compliance." },
  { k: "On the move", t: "Capture notes & receipts from your phone", v: "Drop a voice note or receipt photo; your workspace files it and sends a read-back." },
];

const HELP = [
  { k: "“Set up” button did nothing", v: "Run the downloaded installer first, then click Set up my workspace again." },
  { k: "Setup link expired (48h)", v: "Click Send a new link on the install page for a fresh 48-hour token." },
  { k: "Closed the Command Centre tab", v: "Reopen your localhost bookmark at any time; the background service stays active." },
  { k: "Uninstalling or moving laptops", v: "Open MusTech OS in Applications; your local company folder stays intact." },
];

const NEEDS = [
  { k: "Pre-class setup", v: "~25 minutes total" },
  { k: "Computer", v: "Mac (macOS 13+) or Windows 11" },
  { k: "AI subscription", v: "Claude, ChatGPT, or Google AI" },
  { k: "Mobile companion", v: "iPhone or Android browser" },
];

function Screen() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
      <Block dark className="lg:col-span-12 lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f8df98] mb-2">
            Three Phases · Nine Steps
          </p>
          <h1 className="font-brand font-bold tracking-[-0.03em] leading-[1.04] text-[clamp(2rem,4vw,3rem)] max-w-2xl">
            From seat reservation to shipping with your AI departments.
          </h1>
        </div>
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 text-sm lg:max-w-2xl">
          {NEEDS.map((m) => (
            <div key={m.k}>
              <dt className="text-[#fdfaf0]/65">{m.k}</dt>
              <dd className="mt-0.5 font-semibold">{m.v}</dd>
            </div>
          ))}
        </dl>
      </Block>

      {/* Symmetrical 3-Column × 3-Step grid: every phase has 3 balanced step cards and zero dead space */}
      {PHASES.map((p) => (
        <Block key={p.phase} className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between gap-2 border-b-2 border-[#077d95] pb-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#077d95]">{p.phase}</span>
                <h2 className="font-brand font-bold text-2xl leading-tight text-[#14181a] mt-0.5">{p.name}</h2>
              </div>
              <span className="text-xs font-semibold text-[#077d95] bg-[#077d95]/10 px-2.5 py-1 whitespace-nowrap">
                {p.time}
              </span>
            </div>

            <ol className="mt-4 grid grid-cols-1 gap-3">
              {p.steps.map((st) => (
                <li
                  key={st.num}
                  className="flex flex-col justify-between gap-2.5 bg-[#fdfaf0] border border-[#14181a]/12 p-3.5 min-h-[154px]"
                >
                  <div>
                    <p className="font-semibold text-[#14181a] leading-snug flex items-center gap-2">
                      <span className="inline-grid place-items-center w-6 h-6 shrink-0 bg-[#077d95] text-white font-brand font-bold text-sm">
                        {st.num}
                      </span>
                      <span>{st.title}</span>
                    </p>
                    <p className="mt-1.5 text-sm text-[#14181a]/80 leading-relaxed">{st.body}</p>
                  </div>
                  <div aria-hidden="true" className="pt-1">
                    {st.cue}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-4 bg-[#f8df98]/45 border-l-[3px] border-[#077d95] px-3 py-2 text-xs leading-relaxed text-[#14181a]">
            <b>Have ready: </b>
            {p.ready}
          </p>
        </Block>
      ))}

      <Block label="Your Daily & Weekly Operating Rhythm" className="lg:col-span-7">
        <dl className="grid gap-4 sm:grid-cols-3">
          {DAILY.map((d) => (
            <div key={d.k} className="bg-[#fdfaf0] border border-[#14181a]/12 p-3">
              <dt className="font-brand font-bold text-lg text-[#077d95]">{d.k}</dt>
              <dd className="mt-1">
                <span className="block font-semibold text-sm text-[#14181a]">{d.t}</span>
                <span className="block mt-1 text-xs leading-relaxed text-[#14181a]/75">{d.v}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block label="Quick Troubleshooting" className="lg:col-span-5">
        <dl className="grid gap-3 sm:grid-cols-2 text-xs leading-relaxed">
          {HELP.map((h) => (
            <div key={h.k} className="bg-[#fdfaf0] border border-[#14181a]/12 p-2.5">
              <dt className="font-semibold text-[#14181a]">{h.k}</dt>
              <dd className="mt-0.5 text-[#14181a]/75">{h.v}</dd>
            </div>
          ))}
        </dl>
      </Block>
    </div>
  );
}

function Paper() {
  return (
    <Sheet title="From seat reservation to shipping with your AI departments.">
      <dl className="mt-[4mm] grid grid-cols-4 gap-[4mm] bg-[#fdfaf0] border border-[#14181a]/15 px-[3mm] py-[2mm]">
        {NEEDS.map((m) => (
          <div key={m.k}>
            <dt className="text-[7pt] uppercase tracking-wider text-[#14181a]/65">{m.k}</dt>
            <dd className="font-bold text-[8.5pt]">{m.v}</dd>
          </div>
        ))}
      </dl>

      <SheetPart label="Three Phases · Nine Steps (Symmetrical Setup & Execution)" className="mt-[5.5mm]">
        <ol className="grid grid-cols-3 gap-[4.5mm] border-t-[2pt] border-[#077d95] pt-[3mm]">
          {PHASES.map((p) => (
            <li key={p.phase} className="flex flex-col justify-between bg-[#fdfaf0] border border-[#14181a]/15 p-[3mm]">
              <div>
                <div className="flex items-baseline justify-between border-b border-[#14181a]/15 pb-[1.5mm]">
                  <div>
                    <span className="text-[6.5pt] font-bold uppercase tracking-wider text-[#077d95]">{p.phase}</span>
                    <p className="font-brand font-bold text-[11.5pt] leading-tight">{p.name}</p>
                  </div>
                  <span className="text-[7pt] font-semibold text-[#077d95]">{p.time}</span>
                </div>
                <ol className="mt-[2.2mm] flex flex-col gap-[2.2mm]">
                  {p.steps.map((st) => (
                    <li key={st.num} className="bg-white border border-[#14181a]/12 p-[2mm]">
                      <p className="font-bold text-[8.5pt] leading-snug flex items-center gap-[1.5mm]">
                        <span className="inline-grid place-items-center w-[4.8mm] h-[4.8mm] shrink-0 bg-[#077d95] text-white font-brand font-bold text-[7.5pt]">
                          {st.num}
                        </span>
                        <span>{st.title}</span>
                      </p>
                      <p className="mt-[0.8mm] text-[7.6pt] leading-[1.32] text-[#14181a]/85">{st.body}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <p className="mt-[2.2mm] bg-[#f8df98]/45 px-[2mm] py-[1.2mm] text-[7pt] leading-[1.3]">
                <b>Have ready: </b>
                {p.ready}
              </p>
            </li>
          ))}
        </ol>
      </SheetPart>

      <div className="mt-[5mm] grid grid-cols-2 gap-[6mm] border-t border-[#14181a]/20 pt-[3.5mm]">
        <SheetPart label="Your Daily & Weekly Operating Rhythm">
          <dl className="flex flex-col gap-[1.4mm] text-[8pt]">
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
        <SheetPart label="Quick Troubleshooting">
          <dl className="flex flex-col gap-[1.4mm] text-[8pt]">
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
