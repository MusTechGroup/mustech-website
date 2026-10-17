import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CopyButton from "./CopyButton";
import Reveal from "@/components/Reveal";

const GOVERNANCE_SYSTEMS = [
  {
    number: "01",
    title: "Solo Founder OS & Antigravity Orchestration",
    tag: "How We Operate",
    summary:
      "MusTech Group runs four production platforms with one founder orchestrating specialised AI agents inside Google Antigravity. Every feature passes through architectural checkpoints, deterministic workspace routing, and human-in-the-loop sign-off.",
  },
  {
    number: "02",
    title: "Saalihat Verification & Reversible Audit Queues",
    tag: "Identity Sanctity",
    summary:
      "Our scrapers and vision pipelines never auto-merge speakers or publish unverified claims. Extracted mosque posters are cross-checked against the ARS directory and held in a reversible human audit queue before going live.",
  },
  {
    number: "03",
    title: "The Qawwam Standard & Anti-Israf Compute",
    tag: "Defensive Engineering",
    summary:
      "Database invariants enforce slot capacity at the PostgreSQL layer, SHA-256 optical caches prevent redundant LLM calls on receipts and posters, and all unhandled exceptions log to Mizan audit trails.",
  },
  {
    number: "04",
    title: "Singapore PDPA & Zero-Brokerage Governance",
    tag: "Statutory Compliance",
    summary:
      "Registered in Singapore (ACRA UEN 202609163C), we enforce default-deny Row Level Security across all multi-tenant tables, store user bookmarks locally on-device, and never broker community data.",
  },
];

export default function CorporateDetails() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-[var(--brand-bg)] border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 mb-12 border-b border-black/10 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-2">
              Governance &amp; Ways of Working
            </p>
            <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary-dark)] tracking-tight leading-tight">
              Engineered Governance: How One Founder Runs Four Platforms
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-base text-[var(--color-primary-dark)]/80 leading-relaxed">
              Our governance is not a static policy document - it is an active engineering operating system that powers Saalihat, jenazah.sg, and TaraBase, and forms the exact curriculum taught in{" "}
              <Link href="/jumpstart" className="font-semibold underline hover:text-[var(--color-primary)]">
                MusTech Jumpstart
              </Link>
              .
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold">
              <Link
                href="/jumpstart"
                className="inline-flex items-center gap-1.5 text-[var(--color-primary)] hover:opacity-75 transition-opacity group"
              >
                <span>Learn this system in Jumpstart</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-[var(--color-primary-dark)] hover:opacity-75 transition-opacity group"
              >
                <span>Executive leadership profile</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 4-Pillar Operational Governance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {GOVERNANCE_SYSTEMS.map((item, idx) => (
            <Reveal key={item.number} delayMs={idx * 70} className="h-full">
              <div className="editorial-panel bg-white border border-black/10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between pb-4 mb-5 border-b border-black/10">
                    <span className="font-brand text-2xl font-bold text-[var(--color-primary)]">
                      {item.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]/55">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-brand text-2xl font-bold text-[var(--color-primary-dark)] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-primary-dark)]/80 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Corporate Registry & Direct Communications Bar */}
        <Reveal delayMs={200}>
          <div
            id="contact"
            className="editorial-panel bg-white border border-black/10 p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm scroll-mt-28"
          >
            <div>
              <p className="font-semibold text-[var(--color-primary-dark)] mb-1">
                MUSTECH GROUP PTE. LTD.
              </p>
              <p className="text-[var(--color-primary-dark)]/65">
                ACRA UEN 202609163C · Republic of Singapore
              </p>
            </div>

            <div>
              <p className="text-[var(--color-primary-dark)]/60 mb-1">
                General &amp; Partnerships
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:admin@mustechgroup.com"
                  className="font-medium text-[var(--color-primary-dark)] hover:opacity-70 transition-opacity truncate"
                >
                  admin@mustechgroup.com
                </a>
                <CopyButton textToCopy="admin@mustechgroup.com" ariaLabel="Copy admin email" />
              </div>
            </div>

            <div>
              <p className="text-[var(--color-primary-dark)]/60 mb-1">
                Saalihat Support
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:saalihat_support@mustechgroup.com"
                  className="font-medium text-[var(--color-primary-dark)] hover:opacity-70 transition-opacity truncate"
                >
                  saalihat_support@mustechgroup.com
                </a>
                <CopyButton textToCopy="saalihat_support@mustechgroup.com" ariaLabel="Copy support email" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
