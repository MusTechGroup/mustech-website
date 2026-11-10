import Link from "next/link";

// From MusTech's demand research (founder-course, jumpstart/review/audits/2026-11-09-demand-research.md).
// Founder, 2026-11-10: say it for owners, not analysts: where we looked, the need, and our fix. No counts.
const WHERE = "Owner forums, freelance job boards, and studies from IMDA, UOB, and OpenAI.";

const NEEDS = [
  { need: "Customers asking the same questions", fix: "Ready answers in your own words, and you approve anything that goes out." },
  { need: "Quotes, listings, and follow-ups that take hours", fix: "Drafted from your own price list and records, every total calculated." },
  { need: "Receipts and books always behind", fix: "Receipts logged as they come, ready for your accountant." },
  { need: "AI that makes things up", fix: "It asks for a missing fact instead of inventing one, and never touches your money." },
];

export default function JumpstartResearch() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm sm:text-base text-[#efe9d8]/75 max-w-2xl">
        <b className="text-[#efe9d8]">Where we looked:</b> {WHERE}
      </p>
      <ul className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
        {NEEDS.map((n) => (
          <li key={n.need} className="bg-[#0b0b0a] p-5 sm:p-6 flex flex-col gap-2">
            <span className="font-brand font-bold text-lg sm:text-xl text-[#efe9d8]">{n.need}</span>
            <span className="text-sm leading-relaxed text-[#efe9d8]/75">
              <span className="text-[#f5cb1d] font-semibold">Our fix: </span>
              {n.fix}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-sm">
        <Link href="/jumpstart/how-it-works" className="underline underline-offset-4 decoration-[#f5cb1d]/60 hover:decoration-[#f5cb1d] text-[#efe9d8]">
          See one request play out: &ldquo;make me a website&rdquo;
        </Link>
      </p>
    </div>
  );
}
