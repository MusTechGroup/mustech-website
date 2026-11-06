import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import JumpstartNav from "@/components/JumpstartNav";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";

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

const eyebrow = "text-xs font-bold uppercase tracking-[0.25em] text-[#f5cb1d]";

// Small pictures of what is on screen at each step, so a founder matches the screen instead of reading.
const Btn = ({ children, ghost = false }: { children: ReactNode; ghost?: boolean }) => (
  <span
    className={`inline-flex items-center min-h-[36px] px-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap ${
      ghost ? "border border-white/30 text-[#efe9d8]" : "bg-[#f5cb1d] text-[#111]"
    }`}
  >
    {children}
  </span>
);

const Mail = ({ subject, button }: { subject: string; button: string }) => (
  <div className="w-full sm:w-64 bg-[#efe9d8] text-[#111] p-3 flex flex-col gap-2">
    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#111]/60">MusTech OS</span>
    <span className="text-sm font-semibold leading-snug">{subject}</span>
    <span className="self-start inline-flex items-center min-h-[30px] px-3 bg-[#077d95] text-white text-[11px] font-bold">{button}</span>
  </div>
);

type Step = { title: string; body: string; pic: ReactNode };
type Stage = { name: string; time: string; steps: Step[]; note?: string };

const STAGES: Stage[] = [
  {
    name: "Reserve",
    time: "2 minutes",
    steps: [
      {
        title: "Reserve your Jumpstart seat",
        body: "Enter your email and pay the ticket on a secure checkout, by PayNow or card. Your receipt arrives by email. The ticket includes 1 year of MusTech OS updates.",
        pic: (
          <div className="flex gap-2">
            <Btn>PayNow</Btn>
            <Btn ghost>Card</Btn>
          </div>
        ),
      },
    ],
  },
  {
    name: "Answer",
    time: "10 minutes, any device",
    steps: [
      {
        title: "Answer the questionnaire",
        body: "The link arrives right after payment. Plain questions about how your business works. Your answers decide which departments you get.",
        pic: <Mail subject="Your MusTech OS questionnaire" button="Answer the questionnaire" />,
      },
    ],
  },
  {
    name: "Install",
    time: "10 minutes, on your computer",
    note: "Your Command Centre opens in your browser. Bookmark it: this is where your day starts.",
    steps: [
      {
        title: "Open the “ready” email on your computer",
        body: "Your workspace is built from your answers within minutes. Open the email on the computer you work from, not your phone.",
        pic: <Mail subject="Your MusTech OS workspace is ready" button="Install MusTech OS" />,
      },
      {
        title: "Download, open, install",
        body: "The installer is signed and checked by Apple, so it opens without warnings. Type your computer password when asked. Windows is coming next.",
        pic: <Btn>Download MusTech OS for Mac</Btn>,
      },
      {
        title: "Set up your workspace",
        body: "Back on the same page, press the button. If your browser asks to open MusTech OS, choose Open. It checks your workspace is genuine and puts it in place.",
        pic: (
          <div className="w-full sm:w-56 bg-[#2a2d33] p-3 flex flex-col gap-3 text-xs text-[#efe9d8]">
            Open MusTech OS?
            <span className="flex gap-2 justify-end">
              <Btn ghost>Cancel</Btn>
              <Btn>Open</Btn>
            </span>
          </div>
        ),
      },
    ],
  },
  {
    name: "Connect",
    time: "10 minutes, the Get started card",
    steps: [
      {
        title: "Connect your AI",
        body: "Press the AI tool you already pay for. MusTech OS sets it up and checks it can work while you are away. Allow it once when your tool asks.",
        pic: (
          <div className="flex flex-wrap gap-2">
            <Btn ghost>Claude Code</Btn>
            <Btn ghost>Codex</Btn>
            <Btn ghost>Antigravity</Btn>
          </div>
        ),
      },
      {
        title: "Add your phone",
        body: "Scan the code with your phone's camera and choose Add to Home Screen. Send a test note. Notes are sealed on your phone and only your computer can open them.",
        pic: <Btn ghost>Show the code for my phone</Btn>,
      },
    ],
  },
  {
    name: "At Jumpstart",
    time: "two half-day sessions",
    steps: [
      {
        title: "Day 1: reconcile your business",
        body: "Structured Operational Intake: every open job, unpaid invoice, outstanding quote, and filing deadline goes into one Commitments Ledger.",
        pic: <Btn ghost>Commitments Ledger</Btn>,
      },
      {
        title: "Day 2: your first morning report",
        body: "The departments worked overnight. You answer your first decisions, then put them to work on a real job: a contract, a quote, or your website.",
        pic: <Btn>3 need you today</Btn>,
      },
    ],
  },
];

const DAILY = [
  { k: "8 am", t: "Open your Command Centre", v: "Decide yes or no. Answer each Input. Read each Notify." },
  { k: "At your desk", t: "Ask your AI tool for the work", v: "“Build the pricing page.” “Check this contract.” “Plan the December launch.”" },
  { k: "Away", t: "Send it to HQ from your phone", v: "A note, a quote, or a photo of a receipt. It is waiting when you are back." },
];

const HELP = [
  { k: "“Set up” did nothing", v: "Install the app first, then press the button again." },
  { k: "The link expired", v: "Ask for a new one on the download page. It arrives in minutes." },
  { k: "Closed the Command Centre", v: "Open your bookmark. MusTech OS keeps running." },
  { k: "Want to remove it", v: "Open MusTech OS from Applications. Your records stay." },
];

export default function QuickStartPage() {
  let n = 0;
  return (
    <div className="relative isolate flex flex-col min-h-screen bg-[#050504]">
      <JumpstartNav />
      <Starfield />

      <main id="main-content" className="relative z-10 flex-grow text-[#efe9d8]">
        <section className="pt-28 sm:pt-40 pb-10 sm:pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className={`${eyebrow} mb-4 block`}>MusTech OS · Quick start</span>
            <h1 className="font-brand font-bold tracking-[-0.03em] leading-[1.02] text-[clamp(2.4rem,6.5vw,5rem)] text-balance">
              From payment to{" "}
              <span className="bg-[#f5cb1d] px-[0.14em] text-[#111] [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
                your first morning report.
              </span>
            </h1>
            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { k: "Time", v: "About 30 minutes before Day 1" },
                { k: "You need", v: "A Mac with macOS 13 or later, and your phone" },
                { k: "And", v: "A paid Claude, ChatGPT, or Google AI plan" },
              ].map((m) => (
                <div key={m.k}>
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-[#efe9d8]/50 mb-1">{m.k}</dt>
                  <dd className="text-base">{m.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="pb-12 sm:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            {STAGES.map((s) => (
              <div key={s.name} className="grid grid-cols-1 md:grid-cols-[11rem_1fr] gap-4 md:gap-8">
                <div className="md:pt-2">
                  <h2 className="font-brand font-bold text-2xl sm:text-3xl tracking-[-0.02em]">{s.name}</h2>
                  <span className="text-sm text-[#efe9d8]/55">{s.time}</span>
                </div>
                <ol className="flex flex-col gap-3 min-w-0">
                  {s.steps.map((st) => {
                    n += 1;
                    return (
                      <li
                        key={st.title}
                        className="border border-white/12 bg-white/[0.03] p-4 sm:p-5 grid grid-cols-[2.5rem_1fr] lg:grid-cols-[2.5rem_1fr_auto] gap-4 items-center"
                      >
                        <span className="w-10 h-10 grid place-items-center bg-[#f5cb1d] text-[#111] font-brand font-bold text-lg">{n}</span>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-base sm:text-lg">{st.title}</h3>
                          <p className="mt-1 text-sm text-[#efe9d8]/70 leading-relaxed">{st.body}</p>
                        </div>
                        <div className="col-span-2 lg:col-span-1 lg:justify-self-end min-w-0" aria-hidden="true">
                          {st.pic}
                        </div>
                      </li>
                    );
                  })}
                  {s.note && (
                    <li className="border-l-2 border-[#f5cb1d] pl-4 py-1 text-sm sm:text-base text-[#efe9d8]/85">{s.note}</li>
                  )}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-20 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className={`${eyebrow} mb-4 block`}>Every day after</span>
            <h2 className="font-brand font-bold tracking-[-0.02em] leading-[1.05] text-[clamp(1.9rem,5vw,3rem)]">Your day, at your desk.</h2>
            <div className="mt-8 grid gap-px bg-white/10 md:grid-cols-3">
              {DAILY.map((d) => (
                <div key={d.k} className="bg-[#050504] p-5 sm:p-6 flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5cb1d]">{d.k}</span>
                  <span className="font-brand font-bold text-xl">{d.t}</span>
                  <span className="text-sm text-[#efe9d8]/75 leading-relaxed">{d.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-brand font-bold text-2xl sm:text-3xl tracking-[-0.02em]">If something looks wrong</h2>
            <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HELP.map((h) => (
                <div key={h.k} className="border-t-2 border-[#f5cb1d] pt-3">
                  <dt className="font-semibold">{h.k}</dt>
                  <dd className="mt-1 text-sm text-[#efe9d8]/70">{h.v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/jumpstart#register"
                className="px-8 py-4 min-h-[48px] flex items-center justify-center bg-[#f5cb1d] text-[#111] hover:bg-[#ffd93b] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Register your interest
              </Link>
              <Link
                href="/jumpstart/mustech-os"
                className="px-8 py-4 min-h-[48px] flex items-center justify-center border border-white/30 hover:border-white/70 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                What MusTech OS does
              </Link>
            </div>
          </div>
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
