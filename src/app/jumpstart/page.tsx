import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles,
  Award,
  Layers,
  Scale,
  CheckCircle2,
  Cpu,
  Coins,
  Building2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import JumpstartRegisterForm from "@/components/JumpstartRegisterForm";
import AnimatedJumpstartLogo from "@/components/AnimatedJumpstartLogo";

export const metadata: Metadata = {
  title: "MusTech Jumpstart | Agentic AI & Autonomous Organisation Masterclass",
  description:
    "Move beyond toy prompts and basic automations. MusTech Jumpstart is a hands-on masterclass teaching founders how to design, orchestrate, and operate bespoke, agentic organisations from scratch. Taught by Taufiq Rashid.",
  alternates: {
    canonical: "/jumpstart",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/jumpstart",
    siteName: "MusTech Group",
    title: "MusTech Jumpstart | Agentic AI & Autonomous Organisation Masterclass",
    description:
      "Move beyond toy prompts and basic automations. Learn how to architect, orchestrate, and operate bespoke, agentic software organisations.",
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
  name: "MusTech Jumpstart: Agentic AI & Autonomous Organisation Masterclass",
  description:
    "A hands-on masterclass deconstructing agentic AI architecture, multi-agent orchestration, LLM token efficiency, and bespoke autonomous organisations under the Tayyib Architecture framework.",
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
    <div className="flex flex-col min-h-screen bg-[var(--brand-bg)]">
      <JsonLd schema={courseSchema} />
      <Navbar />

      <main id="main-content" className="flex-grow pt-28 sm:pt-36">
        {/* Slide 1: The Core Hero (Amplified with Agentic AI & Autonomous Organisation framing) */}
        <section className="relative pb-20 border-b border-black/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f5cb1d]/15 border border-[#f5cb1d]/30 text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <Sparkles className="w-4 h-4 text-[#814038]" />
                <span>Agentic AI · Autonomous Enterprise Masterclass</span>
              </div>

              {/* Animated Lightning Logo */}
              <div className="w-72 sm:w-96 mb-8">
                <AnimatedJumpstartLogo priority />
              </div>

              <h1 className="font-brand text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--color-primary-dark)] leading-[1.08] mb-6">
                Architecting the Autonomous Organisation.
              </h1>

              <p className="text-lg sm:text-xl text-[var(--color-primary-dark)]/80 font-sans leading-relaxed max-w-2xl mb-10">
                Move beyond toy prompts and fragile automations. MusTech Jumpstart is an executive masterclass teaching founders how to design, orchestrate, and operate bespoke, agentic software organisations from the ground up.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#register"
                  className="w-full sm:w-auto px-8 py-4 bg-[var(--color-primary-dark)] text-white hover:bg-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] transition-colors shadow-sm"
                >
                  Register Early Interest
                </a>
                <a
                  href="#overview"
                  className="w-full sm:w-auto px-8 py-4 bg-white border border-black/10 text-[var(--color-primary-dark)] hover:bg-black/5 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                >
                  What You Will Learn
                </a>
              </div>
            </div>

            {/* Micro Credential Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 border-t border-b border-black/10 py-6 max-w-5xl mx-auto text-xs text-[var(--color-primary-dark)]/80">
              <div className="flex items-center justify-center gap-3 py-3 md:py-0 px-4">
                <Award className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span>Taught by Enterprise Data Lead (ex-Google, WPP, LVMH)</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-3 md:py-0 px-4">
                <Layers className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span>Multi-Agent Orchestration &amp; Deterministic Guardrails</span>
              </div>
              <div className="flex items-center justify-center gap-3 py-3 md:py-0 px-4">
                <Scale className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                <span>Anti-Israf Token Economics &amp; Sovereign Architecture</span>
              </div>
            </div>

          </div>
        </section>

        {/* Slide 2: The Core Pillars (Bespoke Autonomous Organisation First, Marketing & Founder Focused) */}
        <section id="overview" className="py-20 border-b border-black/5 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                The Masterclass Experience
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl font-bold text-[var(--color-primary-dark)] tracking-tight mb-4">
                What Jumpstart Delivers for Your Venture
              </h2>
              <p className="text-[var(--color-primary-dark)]/80 font-sans text-base leading-relaxed">
                Not another prompt guide or toy demonstration. We equip you with a functioning, autonomous AI organisation designed to scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1: The Bespoke Autonomous Enterprise (Priority #1) */}
              <div className="p-8 border border-black/10 bg-[var(--brand-bg)]/40 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white border border-black/10 flex items-center justify-center text-[var(--color-primary)] mb-6 shadow-sm">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-3">
                    The Bespoke Autonomous Organisation
                  </h3>
                  <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-6">
                    We pre-build an entire AI organisation aligned directly to your venture&apos;s needs. Instead of getting bogged down in manual busywork, your company operates with coordinated AI agents managing research, operations, and customer touchpoints.
                  </p>
                </div>
                <div className="pt-4 border-t border-black/5 text-xs text-[var(--color-primary)] font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Pre-built AI systems tailored to your business</span>
                </div>
              </div>

              {/* Pillar 2: Agentic AI & Custom LLM Workflows */}
              <div className="p-8 border border-black/10 bg-[var(--brand-bg)]/40 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white border border-black/10 flex items-center justify-center text-[var(--color-primary)] mb-6 shadow-sm">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-3">
                    Agentic AI &amp; Custom Workflows
                  </h3>
                  <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-6">
                    Deploy autonomous AI agents that actually complete real tasks without getting stuck or hallucinating. Connect intelligent models directly into your database, communication channels, and production tools.
                  </p>
                </div>
                <div className="pt-4 border-t border-black/5 text-xs text-[var(--color-primary)] font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Autonomous workflows that execute real business tasks</span>
                </div>
              </div>

              {/* Pillar 3: Cost-Controlled & Production Ready */}
              <div className="p-8 border border-black/10 bg-[var(--brand-bg)]/40 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white border border-black/10 flex items-center justify-center text-[var(--color-primary)] mb-6 shadow-sm">
                    <Coins className="w-6 h-6" />
                  </div>
                  <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-3">
                    Cost-Controlled &amp; Production Ready
                  </h3>
                  <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-6">
                    Cut through the hype. Master practical AI economics so your business scales profitably without runaway API bills. Build with sovereign data privacy, predictable costs, and verified digital trust.
                  </p>
                </div>
                <div className="pt-4 border-t border-black/5 text-xs text-[var(--color-primary)] font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Predictable operating costs &amp; sovereign privacy</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Slide 3: Instructor Profile (Factual, Dignified, No Fabricated Quotes) */}
        <section className="py-16 border-b border-black/5 bg-[var(--brand-bg)]">
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
              <div className="md:col-span-3 p-8 sm:p-12 flex flex-col justify-center">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2">
                  Your Instructor
                </div>
                <h3 className="font-brand text-3xl sm:text-4xl font-bold text-[var(--color-primary-dark)] mb-6">
                  Taufiq Rashid
                </h3>
                <p className="text-lg text-[var(--color-primary-dark)] leading-relaxed font-sans mb-4">
                  Jumpstart teaches the system Taufiq uses to run MusTech Group.
                </p>
                <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-4">
                  MusTech Group runs Saalihat, Jenazah.sg, and TaraBase with one founder and a team of AI agents. Every workflow in this course comes from that operation: how the agents are organised, how their work is checked, and how decisions still reach the founder.
                </p>
                <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-4">
                  Throughout his career, Taufiq has taught technical work to people who are not technical:
                </p>
                <ul className="mb-4 space-y-2 border-l-2 border-[var(--color-accent)]/40 pl-4 text-sm text-[var(--color-primary-dark)]/80 leading-relaxed font-sans">
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
                <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-4">
                  He speaks business, outcomes, and plain language, never technical for the sake of technical. That is how Jumpstart is taught.
                </p>
                <p className="text-sm text-[var(--color-primary-dark)]/80 leading-relaxed font-sans mb-6">
                  He has led enterprise data analytics across APAC for over a decade, and is an academic consultant at SMU, ESSEC, and HKU.{" "}
                  <Link href="/#about" className="font-semibold underline hover:text-[var(--color-primary)]">
                    Full profile
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Early Interest Waitlist */}
        <section id="register" className="py-20 bg-[var(--brand-bg)] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2 block">
                Inaugural Cohort
              </span>
              <h2 className="font-brand text-3xl sm:text-4xl font-bold text-[var(--color-primary-dark)] tracking-tight">
                Register Your Interest
              </h2>
            </div>

            <JumpstartRegisterForm />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
