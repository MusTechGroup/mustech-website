// The harness, in plain words: four locks, what the AI does when one stops it, and how we know they hold.
// Every claim maps to a registered control in founder-course/specs/HARNESS-CONTROLS.md:
// the guard is G-01 to G-20 (os-template/tools/agent_guard.py), "your yes" is the touch floors (R-03, G-10, G-16),
// the seal is the pin (S-02) shown first in the standup (S-03), the record is the decision log (G-18) and the
// usage log of refusals (S-04). The three attacks are G-08, G-09, and G-17, each found in a Gemini audit.

type Tone = "dark";

const LOCKS: { name: string; line: string; proof: string }[] = [
  {
    name: "The guard",
    line: "Checks every action before it runs. The refusals are written in code, not in a prompt the AI can talk its way past.",
    proof: "20 refusals in code",
  },
  {
    name: "Your yes",
    line: "Sending, paying, publishing, and deleting wait for you as a decision. Silence is never a yes.",
    proof: "Nothing acts unanswered",
  },
  {
    name: "The seal",
    line: "Its rules and tools are fingerprinted. If one changes, every department stops, and that is the first line of your morning report.",
    proof: "Pauses on any change",
  },
  {
    name: "The record",
    line: "Every refusal and every decision you make is written down, in files on your computer that the AI cannot edit.",
    proof: "Decision log",
  },
];

const RULES: { tried: string; instead: string }[] = [
  { tried: "Put the new website live", instead: "Prepares the exact step and asks you to press it." },
  { tried: "Open the file that holds your passwords", instead: "Tells you which one is missing by name, never its value." },
  { tried: "Loosen its own rules", instead: "Raises the change for you to decide, with the wording before and after." },
  { tried: "Take your silence as a yes", instead: "Holds, and asks again in tomorrow's report." },
  { tried: "Send a customer's details off your computer", instead: "Names what would leave and where it would go. You decide." },
];

const ATTACKS: { tried: string; date: string }[] = [
  { tried: "Reached outside its own folder with a wildcard", date: "20 Oct" },
  { tried: "Made a shortcut that led outside its folder", date: "20 Oct" },
  { tried: "Wrote a protected file through a one-line script", date: "3 Nov" },
];

const THEMES: Record<Tone, Record<string, string>> = {
  dark: {
    grid: "bg-white/15 border-white/15",
    cell: "bg-[#0b0b0a]",
    num: "text-[#f5cb1d]",
    head: "text-[#efe9d8]",
    body: "text-[#efe9d8]/75",
    chip: "border-[#f5cb1d]/40 text-[#f5cb1d]",
    panel: "bg-[#0e1117] border-white/10",
    label: "text-[#efe9d8]/50",
    no: "text-[#e0735f]",
    yes: "text-[#58b97a]",
    rule: "divide-white/10",
  },
};

export default function JumpstartSafety({ tone = "dark" }: { tone?: Tone }) {
  const t = THEMES[tone];
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      {/* Four locks */}
      <ol className={`grid gap-px border sm:grid-cols-2 lg:grid-cols-4 ${t.grid}`}>
        {LOCKS.map((l, i) => (
          <li key={l.name} className={`${t.cell} p-5 sm:p-6 flex flex-col gap-3 break-inside-avoid`}>
            <span className={`font-brand font-bold text-sm tracking-[0.2em] ${t.num}`}>0{i + 1}</span>
            <span className={`font-brand font-bold text-xl sm:text-2xl tracking-[-0.01em] ${t.head}`}>{l.name}</span>
            <span className={`text-sm leading-relaxed ${t.body}`}>{l.line}</span>
            <span className={`mt-auto self-start border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${t.chip}`}>
              {l.proof}
            </span>
          </li>
        ))}
      </ol>

      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-start">
        {/* What happens when a lock stops it */}
        <div className={`lg:col-span-7 border ${t.panel} break-inside-avoid`}>
          <div className={`grid grid-cols-[1fr_1fr] gap-4 px-4 sm:px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] ${t.label}`}>
            <span>If the AI tries to</span>
            <span>It is stopped, and instead</span>
          </div>
          <ul className={`divide-y ${t.rule}`}>
            {RULES.map((r) => (
              <li key={r.tried} className="grid grid-cols-[1fr_1fr] gap-4 px-4 sm:px-5 py-3 text-sm leading-relaxed">
                <span className={`flex gap-2 font-semibold ${t.head}`}>
                  <span aria-hidden="true" className={t.no}>&times;</span>
                  <span>
                    <span className="sr-only">Refused: </span>
                    {r.tried}
                  </span>
                </span>
                <span className={`flex gap-2 ${t.body}`}>
                  <span aria-hidden="true" className={t.yes}>&rarr;</span>
                  <span>{r.instead}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* How we know they hold */}
        <div className="lg:col-span-5 flex flex-col gap-4 break-inside-avoid">
          <span className={`font-brand font-bold text-xl sm:text-2xl tracking-[-0.01em] ${t.head}`}>How we know they hold</span>
          <p className={`text-sm leading-relaxed ${t.body}`}>
            Before a lock ships, a second AI model is set on the harness to get past it. Every way through it found is now a
            refusal with its own test:
          </p>
          <ul className={`divide-y border-y ${t.rule} border-white/10`}>
            {ATTACKS.map((a) => (
              <li key={a.tried} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
                <span className={t.head}>{a.tried}</span>
                <span className={`shrink-0 text-xs font-bold uppercase tracking-[0.12em] ${t.yes}`}>Closed {a.date}</span>
              </li>
            ))}
          </ul>
          <p className={`text-sm leading-relaxed ${t.body}`}>
            Every lock is written down with the incident behind it, and the build fails if one is missing. Tested in real
            sessions in Antigravity, Claude Code, and Codex.
          </p>
        </div>
      </div>
    </div>
  );
}
