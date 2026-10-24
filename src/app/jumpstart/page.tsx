import type { Metadata } from "next";
import JumpstartNav from "@/components/JumpstartNav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import JumpstartRegisterForm from "@/components/JumpstartRegisterForm";
import AnimatedJumpstartLogo from "@/components/AnimatedJumpstartLogo";
import JumpstartDemo from "@/components/JumpstartDemo";
import JumpstartFlow from "@/components/JumpstartFlow";
import JumpstartDevices from "@/components/JumpstartDevices";
import BrandLogo from "@/components/BrandLogo";
import Scene from "@/components/Scene";
import DeckRail from "@/components/DeckRail";
import Starfield from "@/components/Starfield";
import { ExampleProvider, ExampleToggle, ExampleText, ExampleDepartments, Rebuild } from "@/components/JumpstartExamples";

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
      <Starfield />
      <DeckRail />

      <main id="main-content" className="relative z-10 flex-grow">
        {/* Hero */}
        <Scene deck="Launch" className="relative pt-24 sm:pt-36 pb-10 sm:pb-24 text-[#efe9d8]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">

              {/* The logo has a black box, so a hairline light edge keeps it readable on the dark page. */}
              <div className="w-[min(66vw,30rem)] mb-8 sm:mb-12 [filter:drop-shadow(0_0_1.5px_rgba(239,233,216,0.75))]">
                <AnimatedJumpstartLogo priority />
              </div>

              <h1 className="font-brand font-bold tracking-[-0.03em] leading-[1.02] text-[#efe9d8] text-[clamp(2.25rem,6.5vw,5.5rem)] max-w-5xl text-balance">
                AI does the work.{" "}
                <span className="bg-[#f5cb1d] px-[0.14em] text-[#111] [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
                  You make the calls.
                </span>
              </h1>

              <p className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-[#efe9d8]/80 font-sans leading-relaxed max-w-2xl">
                Jumpstart builds AI departments inside your business, made to fit how you work. Run it like a large organisation: a morning stand-up shows what matters, and you sign off the key decisions as your own CEO.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[#efe9d8]">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#efe9d8]/60">Works with</span>
                <BrandLogo name="Antigravity" src="/jumpstart/logos/antigravity.png" className="text-lg" />
                <BrandLogo name="Claude Code" src="/jumpstart/logos/claude-code.webp" className="text-lg" />
                <BrandLogo name="Codex" src="/jumpstart/logos/codex.svg" className="text-lg" />
              </div>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href="#register"
                  className="w-full sm:w-auto px-8 py-4 min-h-[48px] flex items-center justify-center bg-[#f5cb1d] text-[#111] hover:bg-[#ffd93b] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Register Early Interest
                </a>
                <a
                  href="#demo"
                  className="w-full sm:w-auto px-8 py-4 min-h-[48px] flex items-center justify-center border border-white/30 text-[#efe9d8] hover:border-white/70 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  See it work
                </a>
              </div>
            </div>
          </div>
        </Scene>

        <ExampleProvider>
          {/* A real capture, worked through */}
          <Scene id="demo" deck="Demo" className="text-[#efe9d8] py-10 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-4 sm:mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5cb1d] mb-4 block">
                  <ExampleText field="role" />
                </span>
                <h2 className="font-brand font-bold tracking-[-0.02em] leading-[1.05] text-[clamp(1.75rem,5vw,3.25rem)] text-balance">
                  A messy note goes in. Here is what happens.
                </h2>
                <p className="mt-3 text-sm sm:text-lg text-[#efe9d8]/75 leading-relaxed max-w-2xl">
                  <ExampleText field="blurb" /> Pick one and press the buttons.
                </p>
              </div>
              <div className="mb-4">
                <ExampleToggle />
              </div>
              <Rebuild>
                <JumpstartDemo />
              </Rebuild>
            </div>
          </Scene>

          {/* What you leave with */}
          <Scene id="overview" deck="Stack" className="text-[#efe9d8] py-10 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-4 sm:mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5cb1d] mb-4 block">
                  What you leave with
                </span>
                <h2 className="font-brand font-bold tracking-[-0.02em] leading-[1.05] text-[clamp(1.75rem,5vw,3.5rem)] text-balance">
                  Your business, with independent teams reporting to you.
                </h2>
                <p className="mt-3 text-sm sm:text-lg text-[#efe9d8]/80 leading-relaxed max-w-2xl">
                  Answer a series of questions and Jumpstart builds an organisation just for you. It comes pre-loaded with relevant ways of working, roles and responsibilities, curated skills, and set rules. Steer it as you see fit.
                </p>
              </div>
              <div className="mb-4">
                <ExampleToggle label="Pick an example business for the diagram" />
              </div>
              <Rebuild>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                  <div className="lg:col-span-5">
                    <p className="text-base sm:text-lg text-[#efe9d8]/85 leading-relaxed">
                      <ExampleDepartments />
                    </p>
                    <ul className="mt-4 space-y-2 text-sm sm:text-base text-[#efe9d8]/80 leading-relaxed">
                      <li className="border-l-2 border-[#f5cb1d] pl-4">Each department has its own rules and skills, so the AI knows how you work.</li>
                      <li className="border-l-2 border-[#f5cb1d] pl-4">Nothing goes out until you have checked it.</li>
                      <li className="border-l-2 border-[#f5cb1d] pl-4">The files stay on your computer. Costs stay predictable, and customer data stays with you.</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-7 min-w-0">
                    <JumpstartFlow />
                  </div>
                </div>
              </Rebuild>
            </div>
          </Scene>

          {/* The daily standup, as it looks on a working day */}
          <Scene id="standup" deck="Standup" className="text-[#efe9d8] py-10 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-4 sm:mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5cb1d] mb-4 block">
                  The next morning
                </span>
                <h2 className="font-brand font-bold tracking-[-0.02em] leading-[1.05] text-[clamp(2rem,5vw,3.75rem)] text-balance">
                  Your business pulse, at your fingertips.
                </h2>
                <p className="mt-3 text-sm sm:text-lg text-[#efe9d8]/75 leading-relaxed max-w-2xl">
                  The next morning, same business. A stand-up email on your phone shows what matters. A robust dashboard on your laptop holds the rest. Reply to one and the other updates.
                </p>
              </div>
              <div className="mb-4">
                <ExampleToggle label="Pick an example business for the standup" />
              </div>
              <Rebuild>
                <JumpstartDevices />
              </Rebuild>
            </div>
          </Scene>
        </ExampleProvider>

        {/* Instructor: why this course is credible */}
        <Scene deck="Crew" className="text-[#efe9d8] py-10 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-4">
                <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 overflow-hidden">
                  <Image
                    src="/jumpstart/founder.jpg"
                    alt="Taufiq Rashid"
                    fill
                    sizes="(max-width: 1024px) 80vw, 400px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:col-span-8 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5cb1d] mb-4 block">
                  Your Instructor
                </span>
                <h2 className="font-brand font-bold tracking-[-0.02em] leading-[1.05] text-[clamp(1.75rem,5vw,3.25rem)] text-balance">
                  Taufiq Rashid
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[#efe9d8]/85 leading-relaxed">
                  Jumpstart teaches the system Taufiq uses to run MusTech Group. One founder and AI tools run Saalihat, jenazah.sg, and TaraBase. Every workflow in this course comes from that operation: how the agents are organised, how their work is checked, and how decisions still reach the founder.
                </p>
                <p className="mt-4 text-sm sm:text-base text-[#efe9d8]/80 leading-relaxed">
                  He has taught technical work to people who are not technical:
                </p>
                <ul className="mt-3 space-y-2 text-sm sm:text-base text-[#efe9d8]/80 leading-relaxed">
                  <li className="border-l-2 border-[#f5cb1d] pl-4"><strong className="text-[#efe9d8]">WPP Media:</strong> trained analysts in Singapore, Australia, India, Japan, and Korea to use AI and build their own agents.</li>
                  <li className="border-l-2 border-[#f5cb1d] pl-4"><strong className="text-[#efe9d8]">Sephora:</strong> led Sephora SAID, a community for technical sharing.</li>
                  <li className="border-l-2 border-[#f5cb1d] pl-4"><strong className="text-[#efe9d8]">Google:</strong> ran SQL training for marketers.</li>
                </ul>
                <p className="mt-4 text-sm sm:text-base text-[#efe9d8]/80 leading-relaxed">
                  He speaks business, outcomes, and plain language, never technical for the sake of technical. That is how Jumpstart is taught. He has led enterprise data analytics across APAC for over a decade, and is an academic consultant at SMU, ESSEC, HKU, and City University of Hong Kong.{" "}
                  <Link href="/about" className="font-semibold underline hover:text-[#f5cb1d]">
                    Full profile
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Scene>

        {/* Early interest */}
        <Scene id="register" deck="Dock" className="py-10 sm:py-20">
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
