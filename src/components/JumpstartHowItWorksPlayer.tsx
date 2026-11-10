"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// "Make me a website": how it plays out in MusTech OS, scene by scene. Traced from the product itself
// (founder-course, jumpstart/review/audits/2026-11-10-website-flow.md): the site-and-domain skill, which every
// install has; the dashboard's Decide card; the founder's own purchase and publish; the morning standup.
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

const SCENES: Scene[] = [
  {
    caption: "Nadia runs a tailoring business and takes orders by chat. At her desk, she types one line to her AI.",
    render: () => (
      <Window title="Your AI tool: Claude Code, Codex, or Antigravity">
        <div className="flex flex-col gap-2">
          <Bubble who="you">I need a website.</Bubble>
          <Bubble who="ai">Happy to. Before anything, let me read what your workspace already knows.</Bubble>
        </div>
      </Window>
    ),
  },
  {
    caption: "Her AI picks the website skill. It is already installed: every MusTech OS has it. Nothing is downloaded mid-request.",
    render: () => (
      <Window title="Skills installed for Nadia">
        <ul className="flex flex-col gap-2">
          <li className="hiw-in flex items-center justify-between rounded border border-[#077d95]/40 bg-[#077d95]/8 px-3 py-2">
            <span className="font-mono text-xs">site-and-domain</span>
            <span className="text-xs font-semibold text-[#077d95]">Installed, in use</span>
          </li>
          <li className="hiw-in flex items-center justify-between rounded border border-[#14181a]/10 px-3 py-2 [animation-delay:0.4s]">
            <span className="font-mono text-xs">write-post, privacy-check</span>
            <span className="text-xs text-[#14181a]/60">Installed</span>
          </li>
          <li className="hiw-in flex items-center justify-between rounded border border-dashed border-[#14181a]/20 px-3 py-2 [animation-delay:0.8s]">
            <span className="font-mono text-xs">prototype, smoke-test</span>
            <span className="text-xs text-[#14181a]/60">For builders: offered as a Decide</span>
          </li>
        </ul>
      </Window>
    ),
  },
  {
    caption: "It reads what it already knows: her services, her prices, her hours, and her brand. It asks only for what is missing.",
    render: () => (
      <Window title="Read from Nadia's workspace">
        <ul className="flex flex-col gap-1.5 font-mono text-xs">
          {["strategy-and-goals/focus.md", "price list: alterations, kebaya, baju kurung", "brand-basics.md: colours and logo", "domains-and-accounts.md: no domain yet"].map((f, i) => (
            <li key={f} className="hiw-in rounded bg-[#fdfaf0] px-2.5 py-1.5" style={{ animationDelay: `${i * 0.35}s` }}>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-col gap-2">
          <Bubble who="ai">Do you already own a domain, and do you want to edit the words yourself?</Bubble>
        </div>
      </Window>
    ),
  },
  {
    caption: "Two routes, compared from the providers' own pages, with today's prices. The choice waits on her dashboard.",
    render: () => (
      <Window title="Dashboard · Today · Decide">
        <div className="hiw-in flex flex-col gap-2">
          <p className="flex items-center gap-2">
            <Tag kind="Decide" /> <span className="font-semibold">Your website: which route?</span>
          </p>
          <ol className="list-decimal pl-5 text-[13px] leading-snug text-[#14181a]/85">
            <li>A builder you edit yourself on the web (good for a booking form).</li>
            <li>A small site your AI builds, in your brand. You ask for changes.</li>
          </ol>
          <p className="text-xs text-[#14181a]/60">Two providers each, prices read today, with the date.</p>
          <span className="self-start rounded bg-[#077d95] px-3 py-1.5 text-xs font-semibold text-white">Answer: 1</span>
        </div>
      </Window>
    ),
  },
  {
    caption: "The pages are written from her records. A fact it does not have is marked for her, never made up.",
    render: () => (
      <Window title="Draft: Home page">
        <div className="hiw-in flex flex-col gap-2 leading-snug">
          <p className="font-brand text-lg font-bold">Alterations and made-to-measure, in your colours</p>
          <p className="text-[13px] text-[#14181a]/80">Kebaya and baju kurung, fitted to you. Order by chat, collect in a week.</p>
          <p className="text-[13px]">
            Open: <mark className="bg-[#f8df98] px-1">[NEED: your Saturday hours]</mark>
          </p>
          <p className="text-xs text-[#14181a]/60">Home, about, services, how to order, contact. A privacy page if the form collects details.</p>
        </div>
      </Window>
    ),
  },
  {
    caption: "She looks at the preview on her phone and laptop. Nothing goes live on the AI's word.",
    render: () => (
      <div className="flex items-end justify-center gap-4">
        <div className="hiw-in h-40 w-64 rounded-md border-4 border-[#14181a]/80 bg-white p-2 sm:h-48 sm:w-80">
          <div className="h-3 w-24 rounded bg-[#077d95]/70" />
          <div className="mt-2 h-2 w-40 rounded bg-[#14181a]/15" />
          <div className="mt-1 h-2 w-32 rounded bg-[#14181a]/15" />
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((n) => (
              <div key={n} className="h-12 rounded bg-[#f8df98]/70" />
            ))}
          </div>
        </div>
        <div className="hiw-in h-36 w-20 rounded-xl border-4 border-[#14181a]/80 bg-white p-1.5 [animation-delay:0.5s] sm:h-44 sm:w-24">
          <div className="h-2 w-12 rounded bg-[#077d95]/70" />
          <div className="mt-1.5 h-1.5 w-14 rounded bg-[#14181a]/15" />
          <div className="mt-2 h-10 rounded bg-[#f8df98]/70" />
          <div className="mt-1 h-10 rounded bg-[#f8df98]/70" />
        </div>
      </div>
    ),
  },
  {
    caption: "She buys the domain in her own name and publishes it herself. Her AI gives one plain step at a time and waits.",
    render: () => (
      <Window title="Going live, one step at a time">
        <ol className="flex flex-col gap-2 text-[13px]">
          {[
            ["Buy the domain, in your own name, auto-renew on", "You"],
            ["Turn on two-step sign-in", "You"],
            ["Add the two records the host shows you", "You"],
            ["Press Publish", "You"],
            ["Open it on your phone, Wi-Fi off: padlock showing?", "Checked together"],
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
    caption: "Next morning, her standup says it is done. If she wants, a morning check of her new pages is one approval away.",
    render: () => (
      <Window title="Your standup · by email and on your dashboard">
        <ul className="flex flex-col gap-2 text-[13px]">
          <li className="hiw-in flex items-start gap-2">
            <Tag kind="Done" /> <span>Website live on her own domain; renewal date added to her calendar.</span>
          </li>
          <li className="hiw-in flex items-start gap-2 [animation-delay:0.4s]">
            <Tag kind="Input" /> <span>Update the link in your chat profile and your bio? Here is the list.</span>
          </li>
          <li className="hiw-in flex items-start gap-2 [animation-delay:0.8s]">
            <Tag kind="Decide" /> <span>Check your site&rsquo;s pages each morning? (a gate: you approve, it closes on a date)</span>
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
