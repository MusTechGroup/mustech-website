import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JumpstartNav from "@/components/JumpstartNav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import JumpstartRegisterForm from "@/components/JumpstartRegisterForm";
import AnimatedJumpstartLogo from "@/components/AnimatedJumpstartLogo";
import JumpstartDemo from "@/components/JumpstartDemo";
import JumpstartFlow from "@/components/JumpstartFlow";
import JumpstartStandup from "@/components/JumpstartStandup";
import BrandLogo from "@/components/BrandLogo";
import Scene from "@/components/Scene";
import DeckRail from "@/components/DeckRail";
import { ExampleProvider, ExampleToggle, ExampleText, ExampleDepartments } from "@/components/JumpstartExamples";

export const metadata: Metadata = {
  title: "MusTech Jumpstart | Run Your Business with AI, Checked by You",
  description:
    "A hands-on course for founders, taught by Taufiq Rashid: give AI tools clear jobs and check their work before it reaches your customers. Works with Antigravity, Claude Code, and Codex.",
  alternates: {
    canonical: "/jumpstart",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/jumpstart",
    siteName: "MusTech Group",
    title: "MusTech Jumpstart | Run Your Business with AI, Checked by You",
    description:
      "A hands-on course for founders: give AI tools clear jobs and check their work before it reaches your customers. Works with Antigravity, Claude Code, and Codex.",
    images: [
      {
        url: "/jumpstart/logo-trim.png",
        width: 988,
        height: 426,
        alt: "MusTech Jumpstart Official Identity",
      },
    ],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "MusTech Jumpstart: Run Your Business with AI, Checked by You",
  description:
    "A hands-on course for founders: give AI tools clear jobs and check their work before it reaches your customers. Works with Antigravity, Claude Code, and Codex.",
  provider: {
    "@type": "Organization",
    name: "MusTech Group",
    url: "https://www.mustechgroup.com",
    logo: "https://www.mustechgroup.com/brand/Logo_Large_ClearBg.png",
  },
  instructor: {
    "@type": "Person",
    name: "Taufiq Rashid",
    jobTitle: "Founder & Data Analytics Lead",
    image: "https://www.mustechgroup.com/jumpstart/founder.jpg",
  },
};

export default function JumpstartPage() {
  return (
    <div className="relative isolate flex flex-col min-h-screen bg-[#050504]">
      <JsonLd schema={courseSchema} />
      <JumpstartNav />
      <DeckRail />

      <main id="main-content" className="relative z-10 flex-grow">
        {/* Hero */}
        <Scene deck="Launch" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[var(--brand-bg)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">

              <div className="w-[min(70vw,36rem)] mb-8 sm:mb-10">
                <AnimatedJumpstartLogo priority />
              </div>

              <h1 className="font-brand font-bold tracking-[-0.03em] leading-[1.02] text-[var(--color-primary-dark)] text-[clamp(2.25rem,6.5vw,5.5rem)] max-w-5xl text-balance">
                AI does the work.{" "}
                <span className="bg-[linear-gradient(transparent_58%,#f5cb1d_58%,#f5cb1d_88%,transparent_88%)] px-[0.04em]">
                  You make the calls.
                </span>
              </h1>

              <p className="mt-8 text-base sm:text-lg md:text-xl text-[var(--color-primary-dark)]/85 font-sans leading-relaxed max-w-2xl">
                Jumpstart sets up AI departments inside your business, built from a short questionnaire about how you work. Each morning you get one list: what got done, what it needs from you, and what only you can decide.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[var(--color-primary-dark)]">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]/60">Works with</span>
                <BrandLogo name="Antigravity" src="/jumpstart/logos/antigravity.png" className="text-lg" />
                <BrandLogo name="Claude Code" src="/jumpstart/logos/claude-code.webp" className="text-lg" />
                <BrandLogo name="Codex" src="/jumpstart/logos/codex.png" className="text-lg" />
              </div>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href="#register"
                  className="w-full sm:w-auto px-8 py-4 min-h-[48px] flex items-center justify-center bg-[var(--color-primary-dark)] text-white hover:bg-black text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Register Early Interest
                </a>
                <a
                  href="#demo"
                  className="w-full sm:w-auto px-8 py-4 min-h-[48px] flex items-center justify-center bg-white border border-black/15 text-[var(--color-primary-dark)] hover:bg-black/5 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  See it work
                </a>
              </div>
            </div>
          </div>
        </Scene>

        <ExampleProvider>
          {/* A real capture, worked through */}
          <Scene id="demo" deck="Demo" className="bg-[#0b0b0a] text-[#efe9d8] py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-8 sm:mb-10">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5cb1d] mb-4 block">
                  <ExampleText field="role" />
                </span>
                <h2 className="font-brand font-bold tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,5vw,4rem)] text-balance">
                  A messy note goes in. Here is what happens.
                </h2>
                <p className="mt-5 text-base sm:text-lg text-[#efe9d8]/75 leading-relaxed max-w-2xl">
                  <ExampleText field="blurb" /> This is the Jumpstart exercise, run on an example business. Pick one, answer the questions, and press the buttons.
                </p>
              </div>
              <div className="mb-6">
                <ExampleToggle />
              </div>
              <JumpstartDemo />
            </div>
          </Scene>

          {/* What you leave with */}
          <Scene id="overview" deck="Stack" className="bg-[#0b0b0a] text-[#efe9d8] py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5cb1d] mb-4 block">
                  What you leave with
                </span>
                <h2 className="font-brand font-bold tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,5vw,3.75rem)] text-balance">
                  Your business, set up as departments.
                </h2>
                <p className="mt-5 text-base sm:text-lg text-[#efe9d8]/80 leading-relaxed">
                  You answer a short questionnaire. Jumpstart installs only the departments your business needs and sets how deep each one goes. <ExampleDepartments />
                </p>
                <ul className="mt-6 space-y-3 text-sm sm:text-base text-[#efe9d8]/80 leading-relaxed">
                  <li className="border-l-2 border-[#f5cb1d] pl-4">Each department has its own rules and skills, so the AI knows how you work.</li>
                  <li className="border-l-2 border-[#f5cb1d] pl-4">Nothing goes out until you have checked it.</li>
                  <li className="border-l-2 border-[#f5cb1d] pl-4">The files stay on your computer. Costs stay predictable, and customer data stays with you.</li>
                </ul>
                <div className="mt-8">
                  <ExampleToggle label="Pick an example business for the diagram" />
                </div>
              </div>
              <div className="lg:col-span-7 min-w-0">
                <JumpstartFlow />
              </div>
            </div>
          </Scene>

          {/* The daily standup, as it looks on a working day */}
          <Scene id="standup" deck="Standup" className="bg-[#0b0b0a] text-[#efe9d8] py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-8 sm:mb-10">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5cb1d] mb-4 block">
                  The next morning
                </span>
                <h2 className="font-brand font-bold tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,5vw,3.75rem)] text-balance">
                  One list. Only what needs you.
                </h2>
                <p className="mt-5 text-base sm:text-lg text-[#efe9d8]/75 leading-relaxed max-w-2xl">
                  This is the standup for the same business. Answer a question or make a call, and it is logged.
                </p>
              </div>
              <div className="mb-6">
                <ExampleToggle label="Pick an example business for the standup" />
              </div>
              <JumpstartStandup />
            </div>
          </Scene>
        </ExampleProvider>

        {/* Slide 3: Instructor Profile (Factual, Dignified, No Fabricated Quotes) */}
        <Scene deck="Crew" className="py-20 sm:py-28 bg-[var(--brand-bg)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="editorial-panel border border-black/10 bg-white grid grid-cols-1 md:grid-cols-5 shadow-sm overflow-hidden">
              <div className="relative md:col-span-2 aspect-[2/3] md:aspect-auto md:min-h-[480px] bg-zinc-100">
                <Image
                  src="/jumpstart/founder.jpg"
                  alt="Taufiq Rashid"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
              </div>
              <div className="md:col-span-3 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] mb-2 block">
                  Your Instructor
                </span>
                <h2 className="font-brand text-2xl sm:text-4xl font-bold text-[var(--color-primary-dark)] mb-6">
                  Taufiq Rashid
                </h2>
                <p className="text-base sm:text-lg text-[var(--color-primary-dark)] leading-relaxed font-sans mb-4">
                  Jumpstart teaches the system Taufiq uses to run MusTech Group.
                </p>
                <p className="text-sm text-[var(--color-primary-dark)]/85 leading-relaxed font-sans mb-4">
                  MusTech Group runs Saalihat, jenazah.sg, and TaraBase with one founder and AI tools. Every workflow in this course comes from that operation: how the agents are organised, how their work is checked, and how decisions still reach the founder.
                </p>
                <p className="text-sm text-[var(--color-primary-dark)]/85 leading-relaxed font-sans mb-4">
                  Throughout his career, Taufiq has taught technical work to people who are not technical:
                </p>
                <ul className="mb-4 space-y-2 border-l-2 border-[var(--color-accent)]/40 pl-4 text-sm text-[var(--color-primary-dark)]/85 leading-relaxed font-sans">
                  <li>
                    <strong className="text-[var(--color-primary-dark)]">WPP Media:</strong> trained analysts in Singapore, Australia, India, Japan, and Korea to use AI and build their own agents.
                  </li>
                  <li>
                    <strong className="text-[var(--color-primary-dark)]">Sephora:</strong> led Sephora SAID, a community for technical sharing.
                  </li>
                  <li>
                    <strong className="text-[var(--color-primary-dark)]">Google:</strong> ran SQL training for marketers.
                  </li>
                </ul>
                <p className="text-sm text-[var(--color-primary-dark)]/85 leading-relaxed font-sans mb-4">
                  He speaks business, outcomes, and plain language, never technical for the sake of technical. That is how Jumpstart is taught.
                </p>
                <p className="text-sm text-[var(--color-primary-dark)]/85 leading-relaxed font-sans mb-6">
                  He has led enterprise data analytics across APAC for over a decade, and is an academic consultant at SMU, ESSEC, HKU, and City University of Hong Kong.{" "}
                  <Link href="/about" className="font-semibold underline hover:text-[var(--color-primary)]">
                    Full profile
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Scene>

        {/* Early interest */}
        <Scene id="register" deck="Dock" className="py-20 sm:py-28 bg-[#0b0b0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5cb1d] mb-3 block">
                Inaugural Cohort
              </span>
              <h2 className="font-brand font-bold tracking-[-0.02em] text-[#efe9d8] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05]">
                Register Your Interest
              </h2>
            </div>

            <JumpstartRegisterForm />
          </div>
        </Scene>

      </main>

      <div className="js-snap-end relative z-10">
        <Footer />
      </div>
    </div>
  );
}
