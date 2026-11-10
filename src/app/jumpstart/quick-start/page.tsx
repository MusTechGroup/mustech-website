import type { Metadata } from "next";
import type { ReactNode } from "react";
import { OnePager, Block, Sheet, SheetPart } from "@/components/OnePager";

export const metadata: Metadata = {
  title: "AI Jumpstart Quick Start | From Sign-Up to Your First Morning Standup",
  description:
    "Nine steps, no Terminal: sign up and answer the questions about your business, install the app and connect your AI, then set it up with us at AI Jumpstart and run your business with it.",
  alternates: { canonical: "/jumpstart/quick-start" },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/jumpstart/quick-start",
    siteName: "MusTech Group",
    title: "AI Jumpstart Quick Start",
    description: "Nine steps, no Terminal, from sign-up to your first morning standup.",
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
    phase: "1",
    name: "1. Sign up and tell us about your business",
    time: "~12 mins · Any device",
    ready: "Your email address, PayNow or card, and a rough picture of what you sell and who buys.",
    steps: [
      {
        num: 1,
        title: "Reserve your Jumpstart seat",
        body: "Pay by PayNow or card. Your receipt arrives by email at the address you signed up with.",
        cue: (
          <span className="flex flex-wrap gap-1.5">
            <Pill solid>PayNow SGQR</Pill>
            <Pill>Card Checkout</Pill>
          </span>
        ),
      },
      {
        num: 2,
        title: "Answer the questions about your business",
        body: "About ten minutes of plain questions: what you sell, who buys, what eats your week. Your answers decide which departments you get.",
        cue: <MiniMail subject="Your MusTech OS questionnaire" cta="Start Survey" />,
      },
      {
        num: 3,
        title: "Get your setup email",
        body: "Your workspace is built from your answers, and the setup link arrives in the email we send to the address you signed up with.",
        cue: <MiniMail subject="Your MusTech OS workspace is ready" cta="Open Setup" />,
      },
    ],
  },
  {
    phase: "2",
    name: "2. Install and connect",
    time: "~15 mins · Your Mac or PC",
    ready: "Your laptop, its login password, and the AI plan you pay for.",
    steps: [
      {
        num: 4,
        title: "Run the installer",
        body: "Download it for Mac or Windows from your setup page, double-click it, and press Install. No Terminal, nothing else to install.",
        cue: (
          <span className="flex flex-wrap gap-1.5">
            <Pill solid>Download for Mac</Pill>
            <Pill>Windows 11</Pill>
          </span>
        ),
      },
      {
        num: 5,
        title: "Open your dashboard",
        body: "Press Set up my workspace on the setup page. Your dashboard opens in your browser; bookmark it. It runs on your own computer.",
        cue: (
          <span className="flex flex-wrap gap-1.5">
            <Pill solid>Set up my workspace</Pill>
            <Pill>localhost:3100</Pill>
          </span>
        ),
      },
      {
        num: 6,
        title: "Connect your AI and your phone",
        body: "On the Get started card, pick the AI tool you already pay for, then scan the code with your phone so you can send notes from anywhere.",
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
    phase: "3",
    name: "3. Set it up with us, then run it",
    time: "2 days in person, then daily",
    ready: "Your laptop and charger, your price list, unpaid invoices, and the dates you must not miss.",
    steps: [
      {
        num: 7,
        title: "Day 1: your brand and your ledger",
        body: "Your brand colours, what you owe, what is owed to you, and your filing dates, all in one ledger. Nothing is guessed: a missing date is asked for.",
        cue: (
          <span className="flex flex-wrap gap-1.5">
            <Pill>Brand</Pill>
            <Pill>Ledger</Pill>
          </span>
        ),
      },
      {
        num: 8,
        title: "Day 2: your first real jobs",
        body: "With your AI: a quote, a payment chaser, your product listings, or your website, from your own records, for you to approve.",
        cue: (
          <span className="flex flex-wrap gap-1.5">
            <Pill solid>Quote</Pill>
            <Pill>Chaser</Pill>
            <Pill>Website</Pill>
          </span>
        ),
      },
      {
        num: 9,
        title: "Every morning: your standup",
        body: "By email and on your dashboard, in your brand colours: what is Red, what needs your call, and what is done. Answer in one line.",
        cue: <MiniMail subject="Your standup" cta="2 to decide" accent="#d95d24" />,
      },
    ],
  },
];

const DAILY = [
  { k: "Morning", t: "Read your standup", v: "Red first, then what to decide. Answer on your dashboard or in one line." },
  { k: "At your desk", t: "Work with your AI", v: "Quotes, replies, listings, receipts, or your website, drafted for you to approve." },
  { k: "On the move", t: "Send notes from your phone", v: "A promise, an order, or a receipt photo; you get a numbered read-back to confirm." },
];

const HELP = [
  { k: "“Set up” button did nothing", v: "Run the downloaded installer first, then click Set up my workspace again." },
  { k: "Setup link expired", v: "Press Send a new link on the setup page." },
  { k: "Closed the dashboard tab", v: "Open your bookmark again; your dashboard keeps running in the background." },
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
          <h1 className="font-brand font-bold tracking-[-0.03em] leading-[1.04] text-[clamp(2rem,4vw,3rem)] max-w-2xl">
            From sign-up to your first morning standup, in nine steps.
          </h1>
          <p className="mt-3 text-sm text-[#fdfaf0]/80 max-w-xl">
            No Terminal and nothing technical. See how a request plays out:{" "}
            <a href="/jumpstart/how-it-works" className="underline underline-offset-4 decoration-[#f8df98]/60">make me a website</a>.
          </p>
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
              <h2 className="font-brand font-bold text-2xl leading-tight text-[#14181a]">{p.name}</h2>
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

      <Block label="A normal day" className="lg:col-span-7">
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

      <Block label="If something goes wrong" className="lg:col-span-5">
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
    <Sheet title="From sign-up to your first morning standup, in nine steps.">
      <dl className="mt-[4mm] grid grid-cols-4 gap-[4mm] bg-[#fdfaf0] border border-[#14181a]/15 px-[3mm] py-[2mm]">
        {NEEDS.map((m) => (
          <div key={m.k}>
            <dt className="text-[7pt] uppercase tracking-wider text-[#14181a]/65">{m.k}</dt>
            <dd className="font-bold text-[8.5pt]">{m.v}</dd>
          </div>
        ))}
      </dl>

      <SheetPart label="Nine steps, no Terminal" className="mt-[5.5mm]">
        <ol className="grid grid-cols-3 gap-[4.5mm] border-t-[2pt] border-[#077d95] pt-[3mm]">
          {PHASES.map((p) => (
            <li key={p.phase} className="flex flex-col justify-between bg-[#fdfaf0] border border-[#14181a]/15 p-[3mm]">
              <div>
                <div className="flex items-baseline justify-between border-b border-[#14181a]/15 pb-[1.5mm]">
                  <p className="font-brand font-bold text-[11.5pt] leading-tight">{p.name}</p>
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
        <SheetPart label="A normal day">
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
        <SheetPart label="If something goes wrong">
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
      other={{ href: "/jumpstart/mustech-os", label: "What you get" }}
    />
  );
}
