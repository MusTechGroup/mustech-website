import type { Metadata } from "next";
import Link from "next/link";
import JumpstartNav from "@/components/JumpstartNav";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import BrandLogo from "@/components/BrandLogo";
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

const eyebrow = "text-xs font-bold uppercase tracking-[0.25em] text-[#f5cb1d] mb-4 block";
const h2 = "font-brand font-bold tracking-[-0.02em] leading-[1.05] text-[clamp(1.9rem,5vw,3.5rem)] text-balance";
const lead = "mt-3 text-sm sm:text-lg text-[#efe9d8]/80 leading-relaxed max-w-2xl";

const INCLUDED: { k: string; v: string }[] = [
  { k: "Your organisation", v: "Departments chosen and sized from your questionnaire. A design studio and a trading company get different offices." },
  { k: "Command Centre", v: "Your dashboard: what needs your decision, your ledger of commitments and money owed, and your numbers." },
  { k: "82 skills", v: "Contracts, payments, launches, websites, filings, brand, and more, each with its own rules." },
  { k: "1 year of updates", v: "New skills and fixes, signed by MusTech and checked on your computer before they install." },
];

export default function MustechOsPage() {
  return (
    <div className="relative isolate flex flex-col min-h-screen bg-[#050504]">
      <JumpstartNav />
      <Starfield />

      <main id="main-content" className="relative z-10 flex-grow text-[#efe9d8]">
        {/* Hero */}
        <section className="pt-28 sm:pt-40 pb-12 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className={eyebrow}>The product inside Jumpstart</span>
            <h1 className="font-brand font-bold tracking-[-0.03em] leading-[1.02] text-[clamp(2.5rem,7vw,6rem)] max-w-5xl text-balance">
              MusTech OS.{" "}
              <span className="bg-[#f5cb1d] px-[0.14em] text-[#111] [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
                Your company, staffed.
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-xl text-[#efe9d8]/80 leading-relaxed max-w-2xl">
              AI departments that live on your own computer and do real company work: your website, your launch, your
              invoices, your contracts. They work inside rules they cannot get round, and anything that matters waits
              for your yes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#efe9d8]/60">Runs on the AI you already pay for</span>
              <BrandLogo name="Antigravity" src="/jumpstart/logos/antigravity.png" className="text-lg" />
              <BrandLogo name="Claude Code" src="/jumpstart/logos/claude-code.webp" className="text-lg" />
              <BrandLogo name="Codex" src="/jumpstart/logos/codex.svg" className="text-lg" />
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/jumpstart#register"
                className="w-full sm:w-auto px-8 py-4 min-h-[48px] flex items-center justify-center bg-[#f5cb1d] text-[#111] hover:bg-[#ffd93b] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Get it at Jumpstart
              </Link>
              <a
                href="#jobs"
                className="w-full sm:w-auto px-8 py-4 min-h-[48px] flex items-center justify-center border border-white/30 hover:border-white/70 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                See what it does
              </a>
            </div>
          </div>
        </section>

        {/* Jobs: the tangible part */}
        <section id="jobs" className="py-12 sm:py-20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8 sm:mb-10">
              <span className={eyebrow}>What it does</span>
              <h2 className={h2}>Ask for the outcome. Get the finished work.</h2>
              <p className={lead}>
                Say what you need in your own words, in your AI tool at your desk. The right department picks it up with
                your prices, your clients, and your rules already loaded. Pick a job to see what comes back.
              </p>
            </div>
            <MustechOsJobs />
          </div>
        </section>

        {/* At the desk */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className={eyebrow}>Every morning</span>
              <h2 className={h2}>Your company reports in before you do.</h2>
              <p className={lead}>
                Overnight, the departments work through what came in. At 8 am your Command Centre shows only what needs
                you: decisions to make, facts only you know, and things to be aware of.
              </p>
            </div>
            <div className="lg:col-span-7 min-w-0">
              <div className="bg-[#0e1117] border border-white/10 p-4 sm:p-5 flex flex-col gap-3 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.2em]">
                  <span className="text-[#f5cb1d]">Command Centre · 08:00 SGT</span>
                  <span className="text-[#efe9d8]/50">3 need you</span>
                </div>
                {[
                  { tag: "Decide", c: "text-[#f5cb1d]", t: "Send the variation notice to Halcyon Studio: S$4,800, +6 days?" },
                  { tag: "Decide", c: "text-[#f5cb1d]", t: "Second reminder to Kopi Lab for INV-0042, S$12,400, 21 days late?" },
                  { tag: "Input", c: "text-[#5cbccf]", t: "Was the Arden retainer renewed for Q1? Needed for the cash forecast." },
                  { tag: "Notify", c: "text-[#efe9d8]/50", t: "Website sprint 2 finished. Preview ready for your review." },
                ].map((r) => (
                  <div key={r.t} className="bg-white/[0.03] border border-white/10 px-4 py-3">
                    <span className={`block text-[11px] font-bold uppercase tracking-[0.15em] ${r.c}`}>{r.tag}</span>
                    <span className="text-sm sm:text-base text-[#efe9d8]/90">{r.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The harness */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className={eyebrow}>The harness</span>
              <h2 className={h2}>Rules the AI cannot get round.</h2>
              <p className={lead}>
                A guard checks every action before it happens: 20 hard refusals and 10 standing rules. If a protected
                file changes, the whole organisation pauses until you look.
              </p>
            </div>
            <JumpstartSafety />
          </div>
        </section>

        {/* What you get */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className={eyebrow}>What you get</span>
              <h2 className={h2}>Yours, on your computer.</h2>
            </div>
            <dl className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {INCLUDED.map((i) => (
                <div key={i.k} className="bg-[#050504] p-5 sm:p-6">
                  <dt className="font-brand font-bold text-xl text-[#f5cb1d]">{i.k}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[#efe9d8]/80">{i.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-[#efe9d8]/60 max-w-2xl">
              Your records are ordinary files on your own computer. MusTech never holds your business data.
            </p>
          </div>
        </section>

        {/* Jumpstart */}
        <section className="py-14 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <span className={eyebrow}>How you get it</span>
            <h2 className={`${h2} max-w-3xl`}>Jumpstart installs it with you.</h2>
            <p className={`${lead} mx-auto`}>
              Two half-day sessions, in person. Day 1, your open work, money owed, quotes, and deadlines go into one
              ledger. Day 2, you answer your first morning report and put the departments to work.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/jumpstart#register"
                className="px-8 py-4 min-h-[48px] flex items-center justify-center bg-[#f5cb1d] text-[#111] hover:bg-[#ffd93b] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Register your interest
              </Link>
              <Link
                href="/jumpstart/quick-start"
                className="px-8 py-4 min-h-[48px] flex items-center justify-center border border-white/30 hover:border-white/70 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                How setup works
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
