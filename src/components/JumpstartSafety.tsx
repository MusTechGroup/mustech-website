// The guard's refusals, in plain words. Each one paraphrases a real refusal in the Jumpstart template
// (founder-course/os-template/tools/agent_guard.py), registered with its reason in specs/HARNESS-CONTROLS.md.

const RULES: { tried: string; refused: string; instead: string }[] = [
  {
    tried: "Put the new website live",
    refused: "Publishing is yours to run.",
    instead: "It prepares the exact command and asks you to run it.",
  },
  {
    tried: "Open the file that holds your passwords",
    refused: "Your secrets stay closed to the AI.",
    instead: "If one is missing, it tells you its name, never its value.",
  },
  {
    tried: "Loosen its own rules",
    refused: "Only you change the rules.",
    instead: "It raises the change for you to decide, with the wording before and after.",
  },
  {
    tried: "Take your silence as a yes",
    refused: "An unanswered decision never acts.",
    instead: "It holds and asks again. It never sends, pays, or publishes on its own.",
  },
  {
    tried: "Send a customer’s details off your computer",
    refused: "Customer data stays with you.",
    instead: "It names what would leave and where it would go, and you decide.",
  },
];

export default function JumpstartSafety() {
  return (
    <div>
      <ul className="grid gap-px bg-white/15 border border-white/15 sm:grid-cols-2">
        {RULES.map((r, i) => (
          // An odd last card spans both columns, so the grid has no empty cell.
          <li
            key={r.tried}
            className={`bg-[#0b0b0a] p-4 sm:p-6 text-sm leading-relaxed ${i === RULES.length - 1 && RULES.length % 2 ? "sm:col-span-2" : ""}`}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#efe9d8]/55">If the AI tries to</p>
            <p className="mt-1 text-base sm:text-lg font-semibold text-[#efe9d8]">{r.tried}</p>
            <p className="mt-3 flex gap-2 text-[#efe9d8]">
              <span aria-hidden="true" className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#D93A52]" />
              <span>
                <span className="sr-only">Refused: </span>
                {r.refused}
              </span>
            </p>
            <p className="mt-1.5 flex gap-2 text-[#efe9d8]/75">
              <span aria-hidden="true" className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-[#2E9E3E]" />
              <span>
                <span className="sr-only">Instead: </span>
                {r.instead}
              </span>
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm sm:text-base text-[#efe9d8]/70 leading-relaxed max-w-3xl">
        These are checks in code that run before the AI acts, not requests written into a prompt. They are tested the way MusTech tests its own work: real sessions in Antigravity, Claude Code, and Codex, with mistakes planted for the AI to catch. Every skill is read line by line by a person before it ships, and every rule is written down with the reason it exists.
      </p>
    </div>
  );
}
