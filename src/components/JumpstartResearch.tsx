import Link from "next/link";

// From MusTech's demand research (founder-course, jumpstart/review/audits/2026-11-09-demand-research.md):
// 58 asks from 189 mentions in owner forums, surveys, and public reports (IMDA, UOB, OpenAI and NBER, and others).
// Mention counts are a ranking, not exact numbers; the report says so too.
const ASKS = [
  { ask: "Product descriptions and listings with the right search words", n: 8, answer: "Listings drafted in your words, with no claim you did not make." },
  { ask: "Answer customers' repeat questions day and night", n: 8, answer: "A kit of ready answers you paste, and one fixed automatic reply only if you approve it." },
  { ask: "Answer missed calls and texts, take the details", n: 6, answer: "The caller's details taken down and a reply drafted for you to send." },
  { ask: "Collect receipts and keep the books in order", n: 6, answer: "Receipts logged with date, amount, and GST, ready for your accountant." },
  { ask: "Match a PayNow transfer to its order", n: 5, answer: "Your bank stays closed. Overdue invoices get a chaser drafted for you." },
  { ask: "A proposal or quote in five minutes", n: 5, answer: "A quote from your price list, every total worked out by calculation." },
];

export default function JumpstartResearch() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <ol className="lg:col-span-8 divide-y divide-white/10 border-y border-white/10">
        {ASKS.map((a) => (
          <li key={a.ask} className="grid grid-cols-[3rem_1fr] gap-4 py-4 sm:grid-cols-[4rem_1fr_1fr] sm:gap-6">
            <span className="font-brand font-bold text-2xl sm:text-3xl text-[#f5cb1d] leading-none" aria-label={`${a.n} mentions`}>
              {a.n}
            </span>
            <span className="text-sm sm:text-base font-semibold text-[#efe9d8]">{a.ask}</span>
            <span className="col-start-2 sm:col-start-3 text-sm text-[#efe9d8]/75 leading-relaxed">{a.answer}</span>
          </li>
        ))}
      </ol>
      <div className="lg:col-span-4 flex flex-col gap-4 text-sm sm:text-base text-[#efe9d8]/80 leading-relaxed">
        <p>
          <b className="text-[#efe9d8]">What owners will not let AI do</b> matched our rules exactly: they want to see their money, not let
          AI move it, and they want to say yes before a message goes out.
        </p>
        <p>
          <b className="text-[#efe9d8]">Why owners stopped trusting AI:</b> made-up facts and writing that reads like a machine. MusTech OS asks
          for a missing fact instead of inventing one, and checks every quote word for word.
        </p>
        <p>
          <Link href="/jumpstart/how-it-works" className="underline underline-offset-4 decoration-[#f5cb1d]/60 hover:decoration-[#f5cb1d] text-[#efe9d8]">
            See one request play out: &ldquo;make me a website&rdquo;
          </Link>
        </p>
      </div>
    </div>
  );
}
