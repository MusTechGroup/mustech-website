import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GuideDoc, Part } from "@/components/GuideDoc";

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
    className={`inline-flex items-center min-h-[34px] px-3.5 text-[11px] font-bold uppercase tracking-[0.1em] whitespace-nowrap ${
      ghost ? "border border-[#233219]/30 text-[#233219]" : "bg-[#077d95] text-white"
    }`}
  >
    {children}
  </span>
);

const Mail = ({ subject, button }: { subject: string; button: string }) => (
  <span className="w-full sm:w-60 bg-[#fdfaf0] border border-[#233219]/15 border-t-[3px] border-t-[#077d95] p-3 flex flex-col gap-2">
    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#233219]/60">MusTech OS</span>
    <span className="text-sm font-semibold leading-snug">{subject}</span>
    <span className="self-start inline-flex items-center min-h-[28px] px-3 bg-[#077d95] text-white text-[10px] font-bold uppercase tracking-[0.08em]">
      {button}
    </span>
  </span>
);

type Step = { title: string; body: string; pic: ReactNode };
type Stage = { name: string; time: string; steps: Step[]; note?: string };

const STAGES: Stage[] = [
  {
    name: "Reserve your seat",
    time: "2 minutes",
    steps: [
      {
        title: "Pay for your Jumpstart seat",
        body: "Enter your email and pay on a secure checkout, by PayNow or card. Your receipt arrives by email. The seat includes 1 year of MusTech OS updates.",
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
    name: "Answer the questionnaire",
    time: "10 minutes, any device",
    steps: [
      {
        title: "Open the questionnaire email",
        body: "The link arrives right after payment. Plain questions about how your business works, each with a note on why we ask. Your answers decide which departments you get.",
        pic: <Mail subject="Your MusTech OS questionnaire" button="Answer the questionnaire" />,
      },
    ],
  },
  {
    name: "Install MusTech OS",
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
        body: "The installer is signed and checked by Apple, so it opens without warnings. Type your computer password when asked.",
        pic: <Btn>Download MusTech OS for Mac</Btn>,
      },
      {
        title: "Set up your workspace",
        body: "Back on the same page, press the button. If your browser asks to open MusTech OS, choose Open. It checks your workspace is genuine and puts it in place.",
        pic: (
          <span className="w-full sm:w-52 bg-[#fffdf6] border border-[#233219]/15 p-3 flex flex-col gap-3 text-xs">
            Open MusTech OS?
            <span className="flex gap-2 justify-end">
              <Btn ghost>Cancel</Btn>
              <Btn>Open</Btn>
            </span>
          </span>
        ),
      },
    ],
  },
  {
    name: "Connect",
    time: "10 minutes, on the Get started card",
    steps: [
      {
        title: "Connect your AI",
        body: "Press the AI tool you already pay for. MusTech OS sets it up and checks it can work while you are away. Allow it once when your tool asks.",
        pic: (
          <span className="flex flex-wrap gap-2">
            <Btn ghost>Claude Code</Btn>
            <Btn ghost>Codex</Btn>
            <Btn ghost>Antigravity</Btn>
          </span>
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
    <GuideDoc
      eyebrow="MusTech OS · Quick start"
      title={
        <>
          From payment to <span className="text-[#077d95]">your first morning report.</span>
        </>
      }
      standfirst="About 30 minutes of setup before Day 1, in five stages. Each step shows what you will see on screen."
      meta={[
        { k: "Time", v: "About 30 minutes" },
        { k: "Computer", v: "A Mac with macOS 13 or later" },
        { k: "AI plan", v: "Paid Claude, ChatGPT, or Google AI" },
        { k: "Also", v: "Your phone" },
      ]}
      pdf="/jumpstart/mustech-os-quick-start.pdf"
      pdfLabel="The quick start guide"
      other={{ href: "/jumpstart/mustech-os", label: "What MusTech OS does" }}
    >
      {STAGES.map((s, i) => (
        <Part key={s.name} n={`0${i + 1}`} title={s.name} lead={s.time}>
          <ol className="divide-y divide-[#233219]/12 border-y border-[#233219]/12">
            {s.steps.map((st) => {
              n += 1;
              return (
                <li key={st.title} className="py-5 grid gap-4 grid-cols-[2.25rem_1fr] lg:grid-cols-[2.25rem_1fr_auto] items-start break-inside-avoid">
                  <span className="w-9 h-9 grid place-items-center bg-[#233219] text-[#fdfaf0] font-brand font-bold">{n}</span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg">{st.title}</h3>
                    <p className="mt-1 text-sm sm:text-base leading-relaxed text-[#233219]/75">{st.body}</p>
                  </div>
                  <div className="col-start-2 lg:col-start-3 min-w-0" aria-hidden="true">
                    {st.pic}
                  </div>
                </li>
              );
            })}
          </ol>
          {s.note && (
            <p className="mt-4 bg-[#f8df98]/40 px-4 py-3 text-sm sm:text-base">
              <span className="font-bold">Tip: </span>
              {s.note}
            </p>
          )}
        </Part>
      ))}

      <Part n="06" title="Your day, at your desk." lead="Every day after Jumpstart.">
        <dl className="divide-y divide-[#233219]/12 border-y border-[#233219]/12">
          {DAILY.map((d) => (
            <div key={d.k} className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-6 py-4 break-inside-avoid">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-[#077d95] sm:pt-1">{d.k}</dt>
              <dd>
                <span className="block font-brand font-bold text-lg">{d.t}</span>
                <span className="block mt-1 text-sm sm:text-base text-[#233219]/75 leading-relaxed">{d.v}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Part>

      <Part n="07" title="If something looks wrong">
        <dl className="grid gap-px bg-[#233219]/12 border border-[#233219]/12 sm:grid-cols-2 print:gap-0 print:bg-transparent print:border-0 [&>*]:print:border [&>*]:print:border-[#233219]/15">
          {HELP.map((h) => (
            <div key={h.k} className="bg-[#fffdf6] p-4 sm:p-5 break-inside-avoid">
              <dt className="font-semibold">{h.k}</dt>
              <dd className="mt-1 text-sm text-[#233219]/75">{h.v}</dd>
            </div>
          ))}
        </dl>
      </Part>
    </GuideDoc>
  );
}
