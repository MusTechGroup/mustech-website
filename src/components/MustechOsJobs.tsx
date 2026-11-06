// What a founder can ask MusTech OS for at their desk, and the finished work that comes back.
// Every job names a real skill in the MusTech OS template (founder-course/os-template/.agents/skills/).
// Names, amounts, and dates are illustrative.

type Job = {
  id: string;
  label: string;
  ask: string;
  skill: string;
  title: string;
  lines: { k: string; v: string; tone?: "flag" | "ok" }[];
  footer: string;
};

export const JOBS: Job[] = [
  {
    id: "website",
    label: "Build your website",
    ask: "I need a proper website for the studio.",
    skill: "site-and-domain",
    title: "Website plan: halcyonstudio.sg",
    lines: [
      { k: "Domain", v: "halcyonstudio.sg via a local SGNIC registrar, about S$45 a year. Registered in your name, not ours." },
      { k: "Hosting", v: "Three options compared with costs in S$. Recommended: a free static host with a Singapore edge." },
      { k: "Design", v: "Three directions to pick from, your fonts and colours, every colour pair checked for contrast." },
      { k: "Sprints", v: "Foundation, pages, then forms and privacy policy. Each sprint ends with a check you can see." },
      { k: "Go live", v: "Waits for your yes. It prepares the step; you press it.", tone: "ok" },
    ],
    footer: "Tracked as a project with its own scope and sprint register",
  },
  {
    id: "launch",
    label: "Run a launch",
    ask: "We launch the new retainer package on 1 December.",
    skill: "launch-plan",
    title: "Launch plan: Growth Retainer, 1 Dec",
    lines: [
      { k: "T-21 days", v: "Offer page, price confirmed from your price list, FAQ drafted." },
      { k: "T-14 days", v: "Email to 42 past clients, three posts scheduled, partner brief sent for your approval." },
      { k: "T-7 days", v: "Readiness check: links, payment page, and terms all tested." },
      { k: "Launch day", v: "Run-of-show by the hour, and who answers which questions." },
      { k: "T+14 days", v: "What sold, what didn't, and what to change.", tone: "ok" },
    ],
    footer: "Every date lands in your Commitments Ledger",
  },
  {
    id: "cash",
    label: "Get paid",
    ask: "Who still owes me money?",
    skill: "chase-payments",
    title: "Receivables: S$26,250 outstanding",
    lines: [
      { k: "Kopi Lab", v: "S$12,400, 21 days late. Firm reminder drafted: second chase, statement attached.", tone: "flag" },
      { k: "Arden & Co", v: "S$8,600, due Fri 14 Nov. Courtesy note drafted for Thursday." },
      { k: "Halcyon", v: "S$5,250, due Mon 1 Dec. Nothing to send yet." },
    ],
    footer: "Reminders wait in Decide. You press send.",
  },
  {
    id: "scope",
    label: "Price extra work",
    ask: "They now want a second landing page too.",
    skill: "scope-change",
    title: "Variation notice: Halcyon Studio",
    lines: [
      { k: "Signed scope", v: "One landing page (SOW clause 2.1). The request is outside it.", tone: "flag" },
      { k: "Cost", v: "S$4,800 from your price list, plus 6 working days." },
      { k: "Reply A", v: "Yes, as a variation at S$4,800, new delivery Fri 28 Nov." },
      { k: "Reply B", v: "Yes, in Phase 2 starting January, at the same rate." },
    ],
    footer: "You choose the reply. Nothing is sent for you.",
  },
  {
    id: "contract",
    label: "Check a contract",
    ask: "Read this agreement before I sign.",
    skill: "read-contract",
    title: "MSA_Halcyon_v3: 2 clauses to push back on",
    lines: [
      { k: "Clause 9.2", v: "Work in progress is unpaid if they end early. About S$9,600 at risk on this sprint.", tone: "flag" },
      { k: "Ask for", v: "Work completed to the termination date is invoiced at agreed rates.", tone: "ok" },
      { k: "Clause 14", v: "They own all drafts, including rejected concepts. Ask to keep unused work." },
      { k: "Fine as is", v: "Payment terms, confidentiality, and governing law (Singapore)." },
    ],
    footer: "Plain words, with the exact clause quoted",
  },
  {
    id: "call",
    label: "Prepare a meeting",
    ask: "I meet Apex Holdings at 2 pm.",
    skill: "call-prep",
    title: "Brief: Apex Holdings, 2 pm",
    lines: [
      { k: "Last time", v: "They asked for a cheaper option on 12 Oct. You promised a revised quote." },
      { k: "Likely pushback", v: "Timeline. Your answer: two phases, first one live in four weeks." },
      { k: "Your prices", v: "S$18,000 standard, S$14,500 for phase one only. No other discount is approved." },
      { k: "Ask them", v: "Who signs off, and when their budget year starts." },
    ],
    footer: "Built from your own notes and price list",
  },
  {
    id: "filings",
    label: "Stay on top of filings",
    ask: "What do I need to file this year?",
    skill: "filings-check",
    title: "Statutory calendar: FY ending 31 Dec",
    lines: [
      { k: "IRAS", v: "Estimated Chargeable Income due 31 Mar. Figures pack prepared for your accountant." },
      { k: "ACRA", v: "Annual return due 7 months after year end. Checklist ready." },
      { k: "Licences", v: "Business licence renewal in 30 days. On your calendar.", tone: "flag" },
    ],
    footer: "From official sources only. You file; it never files for you.",
  },
  {
    id: "brand",
    label: "Shape your brand",
    ask: "Make our posts look and sound like us.",
    skill: "brand-board",
    title: "Brand board and voice guide",
    lines: [
      { k: "Look", v: "Your colours, fonts, and logo rules on one board, with contrast checked." },
      { k: "Voice", v: "How you sound, from your own past messages: three do's and three don'ts." },
      { k: "Content", v: "A month of posts planned, each one checked against the board before you see it." },
    ],
    footer: "Every department uses the same board",
  },
];

// The jobs as a static list, so the guide reads the same on screen and in its PDF.
export default function MustechOsJobs() {
  return (
    <ol className="grid gap-px bg-[#233219]/12 border border-[#233219]/12 sm:grid-cols-2 print:gap-0 print:bg-transparent print:border-0 [&>*]:print:border [&>*]:print:border-[#233219]/15">
      {JOBS.map((j) => (
        <li key={j.id} className="bg-[#fffdf6] p-5 sm:p-6 flex flex-col gap-3 break-inside-avoid">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#077d95]">{j.label}</span>
          <span className="text-base sm:text-lg leading-snug">
            <span className="sr-only">You ask: </span>&ldquo;{j.ask}&rdquo;
          </span>
          <div className="border-t border-[#233219]/12 pt-3">
            <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#233219]/55">What comes back</span>
            <span className="mt-1 block font-brand font-bold text-lg tracking-[-0.01em]">{j.title}</span>
            <dl className="mt-2 flex flex-col gap-1.5 text-sm leading-relaxed">
              {j.lines.slice(0, 3).map((l) => (
                <div key={l.k} className="grid grid-cols-[6.5rem_1fr] gap-3">
                  <dt
                    className={`text-[11px] font-bold uppercase tracking-[0.1em] pt-[0.2em] ${
                      l.tone === "flag" ? "text-[#a8432f]" : l.tone === "ok" ? "text-[#2f6b3a]" : "text-[#233219]/55"
                    }`}
                  >
                    {l.k}
                  </dt>
                  <dd className="text-[#233219]/85">{l.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <span className="mt-auto text-xs text-[#233219]/60">{j.footer}</span>
        </li>
      ))}
    </ol>
  );
}
