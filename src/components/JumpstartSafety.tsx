// The safety rules, said briefly for owners (founder, 2026-11-10: the earlier version was "word vomit").
// Each line maps to a registered control in founder-course/specs/HARNESS-CONTROLS.md:
// "your yes" is the touch floors (R-03, G-10, G-16) and the gates (G-25 to G-27); "checked first" is the guard
// (G-01 to G-20, os-template/tools/agent_guard.py) and the pin (S-02); "written down" is the decision log (G-18) and
// the usage log of refusals (S-04). "Tested" is the Gemini audits that found G-08, G-09, and G-17.

const POINTS: { name: string; line: string }[] = [
  {
    name: "Nothing goes out without your yes",
    line: "Sending, paying, publishing, and deleting wait for you on your dashboard. Silence is never a yes.",
  },
  {
    name: "Checked before it acts",
    line: "A guard written in code checks every step. When it stops one, it tells you what to do instead.",
  },
  {
    name: "Everything written down",
    line: "Every decision you make is kept on your own computer, where the AI cannot change it.",
  },
];

export default function JumpstartSafety() {
  return (
    <div className="flex flex-col gap-6">
      <ol className="grid gap-px border border-white/15 bg-white/15 sm:grid-cols-3">
        {POINTS.map((p, i) => (
          <li key={p.name} className="bg-[#0b0b0a] p-5 sm:p-6 flex flex-col gap-3">
            <span className="font-brand font-bold text-sm tracking-[0.2em] text-[#f5cb1d]">0{i + 1}</span>
            <span className="font-brand font-bold text-xl sm:text-2xl tracking-[-0.01em] text-[#efe9d8]">{p.name}</span>
            <span className="text-sm leading-relaxed text-[#efe9d8]/75">{p.line}</span>
          </li>
        ))}
      </ol>
      <p className="text-sm text-[#efe9d8]/70 leading-relaxed max-w-2xl">
        Before anything ships, a second AI is set on it to find a way round. Each gap it finds is closed and tested.
      </p>
    </div>
  );
}
