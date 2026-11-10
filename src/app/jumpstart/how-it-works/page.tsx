import type { Metadata } from "next";
import Link from "next/link";
import JumpstartNav from "@/components/JumpstartNav";
import Footer from "@/components/Footer";
import JumpstartHowItWorksPlayer from "@/components/JumpstartHowItWorksPlayer";

export const metadata: Metadata = {
  title: "Make Me a Website: How It Plays Out | AI Jumpstart",
  description:
    "One request, start to finish: what your AI does, what it reads, and what you approve on your dashboard, when you say \"I need a website\" after AI Jumpstart.",
  alternates: { canonical: "/jumpstart/how-it-works" },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/jumpstart/how-it-works",
    siteName: "MusTech Group",
    title: "Make me a website: how it plays out",
    description: "Your AI drafts and guides. You choose, approve, buy, and publish.",
    images: [{ url: "/brand/Logo_Large_ClearBg.png", width: 513, height: 386, alt: "MusTech" }],
  },
};

const WHO = [
  { k: "Your AI does", v: "Runs it as a project: a sprint plan, the right skills in each sprint, and a written record after every sprint, so the next session picks up exactly where the last one stopped." },
  { k: "You decide", v: "At five checkpoints on your dashboard: the brief, the plan, the look and words, a first look at the built pages, and when it is ready. Nothing moves to the next sprint without your yes." },
  { k: "We guide you", v: "When it is time to buy the domain or press Publish, your AI shows you each click and checks it worked. Your name, your card, your site." },
  { k: "The skills it calls", v: "Every install has the project manager and the website playbook, with guides from Intent and Impeccable: philosopher, investigate, strategize, blueprint, journey, organize, design-direction, articulate, critique, polish, harden, adapt, and more. Founders who build their own app also get prototypes, browser checks, and a scored before and after." },
];

export default function HowItWorksPage() {
  return (
    <div className="relative isolate flex flex-col min-h-screen bg-[#050504]">
      <JumpstartNav />
      <main id="main-content" className="relative z-10 flex-grow pt-24 sm:pt-32 pb-16 text-[#efe9d8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-brand font-bold tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,6vw,3.75rem)] text-balance">
            &ldquo;Make me a website.&rdquo; Here is how it plays out.
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#efe9d8]/80 leading-relaxed">
            One request, start to finish, in about a minute. Every step is what your AI does today after Jumpstart.
          </p>
          <div className="mt-8 sm:mt-12">
            <JumpstartHowItWorksPlayer />
          </div>
          <dl className="mt-12 grid gap-6 sm:grid-cols-2">
            {WHO.map((w) => (
              <div key={w.k} className="border-t border-white/15 pt-4">
                <dt className="font-brand text-xl font-bold text-[#f5cb1d]">{w.k}</dt>
                <dd className="mt-2 text-sm sm:text-base leading-relaxed text-[#efe9d8]/80">{w.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-12 text-sm sm:text-base text-[#efe9d8]/80">
            <Link href="/jumpstart" className="underline underline-offset-4 decoration-[#f5cb1d]/60 hover:decoration-[#f5cb1d]">
              About AI Jumpstart
            </Link>
            {" · "}
            <Link href="/jumpstart/mustech-os" className="underline underline-offset-4 decoration-[#f5cb1d]/60 hover:decoration-[#f5cb1d]">
              What you get
            </Link>
            {" · "}
            <Link href="/jumpstart/quick-start" className="underline underline-offset-4 decoration-[#f5cb1d]/60 hover:decoration-[#f5cb1d]">
              Quick start
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
