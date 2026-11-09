import type { Metadata } from "next";
import Link from "next/link";
import JumpstartNav from "@/components/JumpstartNav";
import Footer from "@/components/Footer";
import JumpstartHowItWorksPlayer from "@/components/JumpstartHowItWorksPlayer";

export const metadata: Metadata = {
  title: "Make Me a Website: How It Plays Out in MusTech OS | MusTech Group",
  description:
    "One request, start to finish: what your AI does, what it reads, what you approve on your dashboard, and what you do yourself, when you say \"I need a website\" in MusTech OS.",
  alternates: { canonical: "/jumpstart/how-it-works" },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/jumpstart/how-it-works",
    siteName: "MusTech Group",
    title: "Make me a website: how it plays out in MusTech OS",
    description: "Your AI drafts and guides. You choose, approve, buy, and publish.",
    images: [{ url: "/brand/Logo_Large_ClearBg.png", width: 513, height: 386, alt: "MusTech" }],
  },
};

const WHO = [
  { k: "Your AI does", v: "Reads your workspace, compares providers from their own pages, writes the pages, marks what is missing, and guides each step." },
  { k: "You decide", v: "The route and the provider, on your dashboard. The words, page by page. The preview, on your phone and laptop." },
  { k: "You do yourself", v: "Buy the domain in your own name, and press Publish. MusTech OS never buys, publishes, or signs for you." },
  { k: "Installed or not", v: "The website skill is in every install. Builders and developers also get prototypes and browser checks; anyone else can ask for them, and they arrive as a Decide." },
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
            One request in MusTech OS, start to finish, in about a minute. Every step is what the product does today.
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
              What MusTech OS does
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
