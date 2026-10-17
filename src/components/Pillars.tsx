import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const CORE_PILLARS = [
  {
    number: "01",
    title: "Amanah",
    subtitle: "Data Sovereignty",
    invariant: "Zero Ad-SDKs · Local Storage First",
    summary:
      "User data stays on your device whenever possible and is never tracked, profiled, or sold.",
  },
  {
    number: "02",
    title: "Tijarah",
    subtitle: "Honest Commerce",
    invariant: "0% Platform Cut · Direct PayNow",
    summary:
      "Sustainable software built on fair value exchange, with zero marketplace commissions or dark patterns.",
  },
  {
    number: "03",
    title: "Mizan",
    subtitle: "Human Equilibrium",
    invariant: "Fast Utility · Zero Infinite Feeds",
    summary:
      "Quiet tools that deliver the schedule, funeral notice, or order sheet you need and get out of your way.",
  },
];

export default function Pillars() {
  return (
    <section
      id="philosophy"
      className="py-20 sm:py-24 bg-[#233219] text-[#fdfaf0] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-10 border-b border-white/15">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f8df98] mb-2">
              Tayyib Architecture
            </p>
            <h2 className="font-brand text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Three Foundational Commitments
            </h2>
          </div>

          <Link
            href="/philosophy"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#f8df98] hover:text-white active:translate-y-[1px] transition-all shrink-0 group"
          >
            <span>Read Philosophy</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_PILLARS.map((pillar, idx) => (
            <Reveal key={pillar.title} delayMs={idx * 80} className="h-full">
              <div className="h-full border border-white/15 bg-[#192412] p-7 flex flex-col justify-between transition-colors duration-300 hover:border-[#f8df98]/50">
                <div>
                  <div className="flex items-baseline justify-between pb-4 mb-5 border-b border-white/10">
                    <span className="font-brand text-2xl font-bold text-[#f8df98]">
                      {pillar.number}
                    </span>
                    <span className="text-xs font-medium text-[#fdfaf0]/70">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="font-brand text-2xl font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#fdfaf0]/80 leading-relaxed mb-6">
                    {pillar.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs font-medium text-[#f8df98]">
                  {pillar.invariant}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
