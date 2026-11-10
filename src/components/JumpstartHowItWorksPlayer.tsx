"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// "Make me a website", scene by scene, as the product runs it since 2026-11-10: the request becomes a project
// run by project-run (every install) in design-stages' six sprints, each ending at a checkpoint, with the
// documentation loop between sprints (os-template/.agents/skills/project-run and design-stages).
// Names are illustrative. Plays like a short video; a storyboard when the reader prefers reduced motion.

const SCENE_MS = 8000;

type Scene = { caption: string; render: () => React.ReactNode };

const Window = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="w-full max-w-md rounded-md border border-[#14181a]/15 bg-white shadow-sm overflow-hidden text-left">
    <div className="flex items-center gap-1.5 border-b border-[#14181a]/10 bg-[#fdfaf0] px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#a8432f]/70" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-[#f8df98]" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-[#077d95]/60" aria-hidden />
      <span className="ml-2 text-xs text-[#14181a]/60">{title}</span>
    </div>
    <div className="p-4 text-sm text-[#14181a]">{children}</div>
  </div>
);

const Bubble = ({ who, children }: { who: "you" | "ai"; children: React.ReactNode }) => (
  <p
    className={`hiw-in max-w-[85%] rounded-lg px-3 py-2 leading-snug ${
      who === "you" ? "ml-auto bg-[#077d95] text-white" : "bg-[#fdfaf0] border border-[#14181a]/10"
    }`}
  >
    {children}
  </p>
);

const Tag = ({ kind }: { kind: "Decide" | "Done" | "Input" }) => (
  <span
    className={`inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] ${
      kind === "Decide" ? "bg-[#f8df98] text-[#5c3d00]" : kind === "Input" ? "bg-[#077d95]/12 text-[#065f72]" : "bg-[#14181a]/8 text-[#14181a]/75"
    }`}
  >
    {kind}
  </span>
);

const SPRINTS: [string, string, string][] = [
  ["Ground", "philosopher, investigate, strategize", "Brief"],
  ["Shape", "blueprint, journey, organize, transpose", "Plan"],
  ["Look and words", "design-direction, articulate, onboard", "Look, words"],
  ["Build", "site-and-domain, frontend-design", ""],
  ["Check", "evaluate, critique, polish, harden, adapt", "Ready?"],
  ["Go live and learn", "site-and-domain, specify, measure", ""],
];

const Sprints = ({ at }: { at: number }) => (
  <ol className="flex flex-col gap-1 text-[12px]">
    {SPRINTS.map(([name, skills, check], n) => (
      <li
        key={name}
        className={`hiw-in grid grid-cols-[1fr_auto] items-center gap-x-3 rounded px-2.5 py-1 ${
          n === at ? "border border-[#077d95]/50 bg-[#077d95]/8" : "border border-[#14181a]/8"
        }`}
        style={{ animationDelay: `${n * 0.15}s` }}
      >
        <span className={n < at ? "text-[#14181a]/50 line-through" : "font-semibold"}>
          Sprint {n + 1} · {name}
        </span>
        {check ? <span className="text-[10px] font-bold uppercase tracking-wide text-[#5c3d00]">Checkpoint: {check}</span> : <span />}
        <span className="col-span-2 font-mono text-[10px] text-[#14181a]/60">{skills}</span>
      </li>
    ))}
  </ol>
);

const SCENES: Scene[] = [
  {
    caption: "Nadia runs a tailoring business and takes orders by chat. At her desk, she types one line to her AI.",
    render: () => (
      <Window title="Your AI tool: Claude Code, Codex, or Antigravity">
        <div className="flex flex-col gap-2">
          <Bubble who="you">I need a website.</Bubble>
          <Bubble who="ai">I&rsquo;ll run this as a project, &ldquo;Nadia&rsquo;s website&rdquo;, in six sprints, with your yes at the end of each. OK?</Bubble>
          <Bubble who="you">OK.</Bubble>
        </div>
      </Window>
    ),
  },
  {
    caption: "Her AI project manager writes the sprint plan. Each sprint calls the right skills in order and ends at a checkpoint for her yes.",
    render: () => (
      <Window title="Projects · PJ-0003 · Nadia's website">
        <Sprints at={0} />
      </Window>
    ),
  },
  {
    caption: "Sprint 1 grounds it: other ways to solve this, what her customers already say in her messages and reviews, then the brief. Checkpoint 1.",
    render: () => (
      <Window title="Dashboard · Today · Decide">
        <div className="hiw-in flex flex-col gap-2 text-[13px] leading-snug">
          <p className="flex items-center gap-2">
            <Tag kind="Decide" /> <span className="font-semibold">Approve the brief?</span>
          </p>
          <p><b>For:</b> women ordering kebaya and baju kurung for weddings and Raya.</p>
          <p><b>One job:</b> get a fitting booked by chat.</p>
          <p><b>Working when:</b> more chat orders mention the site.</p>
          <span className="self-start rounded bg-[#077d95] px-3 py-1.5 text-xs font-semibold text-white">Approve</span>
        </div>
      </Window>
    ),
  },
  {
    caption: "Before the next sprint, the documentation loop: what was done, what she decided, and what the next sprint must know, written on the project page.",
    render: () => (
      <Window title="PJ-0003 · after checkpoint 1">
        <ul className="flex flex-col gap-1.5 text-[12.5px]">
          {[
            ["Log", "Brief written from 14 chat orders and 6 reviews"],
            ["Decisions", "D-0041 · brief approved"],
            ["Docs", "brief.md"],
            ["Carried forward", "Raya rush is the busiest month; no prices online until she says"],
          ].map(([k, v], i) => (
            <li key={k} className="hiw-in grid grid-cols-[7.5rem_1fr] gap-2" style={{ animationDelay: `${i * 0.35}s` }}>
              <span className="font-semibold text-[#077d95]">{k}</span>
              <span>{v}</span>
            </li>
          ))}
        </ul>
        <p className="hiw-in mt-3 text-xs text-[#14181a]/60 [animation-delay:1.6s]">The next session reads this first, so nothing is lost between days.</p>
      </Window>
    ),
  },
  {
    caption: "Sprint 2 shapes it: what happens behind an order, the path a customer takes to book a fitting, and the pages. Checkpoint 2.",
    render: () => (
      <Window title="Sprint 2 · Shape">
        <div className="flex flex-col gap-3 text-[13px]">
          <p className="hiw-in">Home · Styles · Prices · How to order · Contact</p>
          <ol className="flex flex-wrap items-center gap-1.5 text-xs">
            {["Sees a style", "Checks the price", "Chats to order", "Books a fitting"].map((t, i) => (
              <li key={t} className="hiw-in rounded border border-[#14181a]/15 bg-[#fdfaf0] px-2 py-1" style={{ animationDelay: `${0.3 + i * 0.3}s` }}>
                {t}
              </li>
            ))}
          </ol>
        </div>
      </Window>
    ),
  },
  {
    caption: "Sprint 3: two or three looks, all in her own brand colours. She picks one, and every page follows it.",
    render: () => (
      <Window title="Dashboard · Decide · Choose a look">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Minimal", "#5a2a41", "#f6efe9"],
            ["High-end", "#2b1620", "#efe2d6"],
            ["Bold", "#8c2f4f", "#fff5f0"],
          ].map(([name, ink, bg], i) => (
            <div key={name} className="hiw-in flex flex-col gap-1.5 rounded border border-[#14181a]/10 p-2" style={{ animationDelay: `${i * 0.3}s`, background: bg }}>
              <div className="h-2 w-10 rounded" style={{ background: ink }} />
              <div className="h-1.5 w-14 rounded bg-[#14181a]/15" />
              <div className="h-8 rounded" style={{ background: `${ink}22` }} />
              <span className="text-[11px] font-semibold" style={{ color: ink }}>{name}</span>
            </div>
          ))}
        </div>
      </Window>
    ),
  },
  {
    caption: "Then the words: every heading and button in her voice. A fact it does not have is marked for her, never made up. Checkpoint 3.",
    render: () => (
      <Window title="Sprint 3 · Words · Home page">
        <div className="hiw-in flex flex-col gap-2 leading-snug">
          <p className="font-brand text-lg font-bold">Kebaya and baju kurung, fitted to you</p>
          <p className="text-[13px] text-[#14181a]/80">Choose a style, chat to order, and collect in a week.</p>
          <p className="text-[13px]">
            Open: <mark className="bg-[#f8df98] px-1">[NEED: your Saturday hours]</mark>
          </p>
          <span className="self-start rounded bg-[#077d95] px-3 py-1.5 text-xs font-semibold text-white">Approve this page</span>
        </div>
      </Window>
    ),
  },
  {
    caption: "Sprints 4 and 5: the pages are built, then checked. Critique, polish, harden, and adapt run every time; nothing goes live without them. Checkpoint 4.",
    render: () => (
      <Window title="Sprint 5 · Check (always)">
        <ul className="flex flex-col gap-1.5 text-[13px]">
          {[
            ["Critique", "Hero looked like a template: replaced with her own photos"],
            ["Polish", "Spacing and type lined up to the chosen look"],
            ["Harden", "A long style name no longer breaks the price card"],
            ["Adapt", "Order button reachable by thumb on a phone"],
          ].map(([k, v], i) => (
            <li key={k} className="hiw-in flex gap-2" style={{ animationDelay: `${i * 0.35}s` }}>
              <span className="w-16 shrink-0 font-mono text-[11px] text-[#077d95]">{k}</span>
              <span>{v}</span>
            </li>
          ))}
        </ul>
        <p className="hiw-in mt-3 flex items-center gap-2 text-[13px] [animation-delay:1.6s]">
          <Tag kind="Decide" /> Preview on your phone and laptop. Ready to go live?
        </p>
      </Window>
    ),
  },
  {
    caption: "Sprint 6: her AI walks her through each click and checks it worked, then writes a handover: how to change each page.",
    render: () => (
      <Window title="Sprint 6 · Going live, guided">
        <ol className="flex flex-col gap-2 text-[13px]">
          {[
            ["Choose your web address", "Shown on screen"],
            ["Buy it in your name, auto-renew on", "Guided"],
            ["Connect it to the site", "Guided, record by record"],
            ["Press Publish", "Guided"],
            ["Open it on your phone: padlock showing?", "Checked together"],
          ].map(([t, who], i) => (
            <li key={t} className="hiw-in flex items-center justify-between gap-3 rounded border border-[#14181a]/10 px-2.5 py-1.5" style={{ animationDelay: `${i * 0.4}s` }}>
              <span>{t}</span>
              <span className="shrink-0 text-xs font-semibold text-[#077d95]">{who}</span>
            </li>
          ))}
        </ol>
      </Window>
    ),
  },
  {
    caption: "Next morning, her standup closes the project. A daily check of her new pages is one approval away.",
    render: () => (
      <Window title="Your standup · by email and on your dashboard">
        <ul className="flex flex-col gap-2 text-[13px]">
          <li className="hiw-in flex items-start gap-2">
            <Tag kind="Done" /> <span>PJ-0003 Nadia&rsquo;s website: live on her own address, all six sprints done, handover on the project page.</span>
          </li>
          <li className="hiw-in flex items-start gap-2 [animation-delay:0.4s]">
            <Tag kind="Input" /> <span>Update the link in your chat profile and your bio? Here is the list.</span>
          </li>
          <li className="hiw-in flex items-start gap-2 [animation-delay:0.8s]">
            <Tag kind="Decide" /> <span>Check your site&rsquo;s pages each morning? You approve, and it closes on a date.</span>
          </li>
        </ul>
      </Window>
    ),
  },
];

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (on: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", on);
  return () => mq.removeEventListener("change", on);
};

export default function JumpstartHowItWorksPlayer() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || !box.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (!userPaused) setPlaying(e.isIntersecting);
    }, { threshold: 0.4 });
    io.observe(box.current);
    return () => io.disconnect();
  }, [reduced, userPaused]);

  useEffect(() => {
    if (!playing || reduced) return;
    const t = setTimeout(() => setI((n) => (n + 1) % SCENES.length), SCENE_MS);
    return () => clearTimeout(t);
  }, [playing, reduced, i]);

  if (reduced) {
    return (
      <ol className="grid gap-6 sm:grid-cols-2">
        {SCENES.map((s, n) => (
          <li key={s.caption} className="flex flex-col gap-3 rounded-md border border-white/10 bg-[#fdfaf0]/5 p-4">
            <p className="text-sm text-[#efe9d8]">
              <b className="text-[#f5cb1d]">{n + 1}.</b> {s.caption}
            </p>
            <div className="flex justify-center">{s.render()}</div>
          </li>
        ))}
      </ol>
    );
  }

  const scene = SCENES[i];
  return (
    <div ref={box} className="flex flex-col gap-4">
      <style>{`
        @keyframes hiwIn { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
        .hiw-in { opacity: 0; animation: hiwIn 0.6s ease-out forwards }
        @keyframes hiwBar { from { width: 0 } to { width: 100% } }
      `}</style>
      <div className="relative flex min-h-[340px] items-center justify-center rounded-lg bg-[#fdfaf0] p-4 sm:min-h-[380px] sm:p-8">
        <div key={i} className="flex w-full justify-center">{scene.render()}</div>
      </div>
      <p key={`c${i}`} className="hiw-in min-h-[3.5rem] text-base sm:text-lg leading-snug text-[#efe9d8]" aria-live="polite">
        {scene.caption}
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => {
            setUserPaused(playing);
            setPlaying(!playing);
          }}
          className="min-h-[44px] min-w-[88px] border border-white/30 px-4 text-xs font-bold uppercase tracking-wider text-[#efe9d8] hover:border-white/70"
        >
          {playing ? "Pause" : "Play"}
        </button>
        <ol className="flex flex-1 gap-1.5" aria-label="Scenes">
          {SCENES.map((s, n) => (
            <li key={s.caption} className="flex-1">
              <button
                type="button"
                onClick={() => setI(n)}
                aria-label={`Scene ${n + 1} of ${SCENES.length}`}
                aria-current={n === i ? "step" : undefined}
                className="relative block h-2 w-full overflow-hidden rounded-full bg-white/15"
              >
                <span
                  className="absolute inset-y-0 left-0 bg-[#f5cb1d]"
                  style={
                    n < i
                      ? { width: "100%" }
                      : n === i && playing
                        ? { animation: `hiwBar ${SCENE_MS}ms linear forwards` }
                        : { width: n === i ? "100%" : 0 }
                  }
                  key={`${n}-${i}-${playing}`}
                />
              </button>
            </li>
          ))}
        </ol>
        <span className="text-xs text-[#efe9d8]/60 tabular-nums">
          {i + 1} / {SCENES.length}
        </span>
      </div>
    </div>
  );
}
