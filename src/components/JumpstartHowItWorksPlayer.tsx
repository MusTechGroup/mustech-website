"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import NadiaSite, { CHOSEN_LOOK, HEADLINE, LOOKS } from "@/components/jumpstart/NadiaSite";

// "Make me a website", played as a short ad: one line typed to her AI becomes a real site, in her brand, on
// her phone, under her own address. Every beat follows the product since 2026-11-10: the request becomes a
// project run by project-run in design-stages' six sprints, each ending at a checkpoint for her yes; gaps are
// marked [NEED: ...]; she buys the address and presses Publish herself (founder-course/jumpstart/review/audits/
// 2026-11-10-website-flow.md). Names are illustrative. The site in the ad is a real page: /jumpstart/how-it-works/example.
// One clock drives every frame, so pausing freezes the frame and the same timeline can be screen-recorded to MP4.
// Readers who prefer reduced motion get a storyboard.

const W = 1280;
const H = 720;

type Beat = { id: string; ms: number; sprint: number; caption: string };
const BEATS: Beat[] = [
  { id: "ask", ms: 5500, sprint: -1, caption: "Nadia makes kebaya and takes every order by chat. She types one line to her AI." },
  { id: "brief", ms: 5000, sprint: 0, caption: "It reads her chat orders and reviews, then writes the brief. Nothing moves until she says yes." },
  { id: "shape", ms: 5000, sprint: 1, caption: "The pages, and the path a customer takes from seeing a style to booking a fitting." },
  { id: "look", ms: 6000, sprint: 2, caption: "Three looks in her brand colours. She picks one, and every page follows it." },
  { id: "words", ms: 6500, sprint: 2, caption: "Every word in her voice. What it does not know, it asks. It never makes it up." },
  { id: "check", ms: 5500, sprint: 4, caption: "Built, then checked every time: critique, polish, harden, and adapt." },
  { id: "phone", ms: 5000, sprint: 4, caption: "Most of her customers will open it on a phone. So it is made for one." },
  { id: "live", ms: 7000, sprint: 5, caption: "Her address, bought in her name. Her click on Publish. Her AI guides each step and checks it worked." },
  { id: "end", ms: 6000, sprint: 5, caption: "You say it. You approve it. It goes live in your name." },
];
const STARTS = BEATS.reduce<number[]>((a, b, i) => (a.push(i ? a[i - 1] + BEATS[i - 1].ms : 0), a), []);
const TOTAL = STARTS[STARTS.length - 1] + BEATS[BEATS.length - 1].ms;
const SPRINT_NAMES = ["Ground", "Shape", "Look and words", "Build", "Check", "Go live"];

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const prog = (t: number, a: number, b: number) => clamp((t - a) / (b - a));
const ease = (p: number) => 1 - Math.pow(1 - p, 3);
const typed = (s: string, t: number, a: number, cps = 26) => s.slice(0, Math.max(0, Math.floor(((t - a) / 1000) * cps)));
const show = (t: number, a: number, rise = 450): React.CSSProperties => {
  const p = ease(prog(t, a, a + rise));
  return { opacity: p, transform: `translateY(${(1 - p) * 14}px)` };
};

const ASK = "Make me a website for my tailoring business.";
const DOMAIN = "jahitnadia.sg";

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (on: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener("change", on);
  return () => mq.removeEventListener("change", on);
};

const Tag = ({ kind }: { kind: "Decide" | "Done" | "Input" }) => (
  <span
    className={`inline-block px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.1em] ${
      kind === "Decide" ? "bg-[#f8df98] text-[#5c3d00]" : kind === "Input" ? "bg-[#077d95]/15 text-[#065f72]" : "bg-[#14181a]/8 text-[#14181a]/75"
    }`}
  >
    {kind}
  </span>
);

const Card = ({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
  <div className={`rounded-2xl border border-white/10 bg-[#fdfaf0] text-[#14181a] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] ${className}`} style={style}>
    {children}
  </div>
);

const Cursor = ({ x, y, down }: { x: number; y: number; down: boolean }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    className="pointer-events-none absolute z-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-[left,top] duration-700 ease-out"
    style={{ left: x, top: y, transform: `scale(${down ? 0.85 : 1})` }}
    aria-hidden
  >
    <path d="M4 2 L4 19 L8.5 14.8 L11.5 21.5 L14.2 20.3 L11.3 13.8 L17.5 13.6 Z" fill="#fff" stroke="#14181a" strokeWidth="1.3" />
  </svg>
);

const Check = ({ on }: { on: boolean }) => (
  <span
    className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-500 ${
      on ? "scale-100 bg-[#077d95] text-white" : "scale-75 bg-[#14181a]/10 text-transparent"
    }`}
    aria-hidden
  >
    ✓
  </span>
);

/** One frame of the ad at time t (ms). Pure: the same t always draws the same frame. */
function Frame({ t }: { t: number }) {
  let b = BEATS.length - 1;
  while (b > 0 && t < STARTS[b]) b--;
  const id = BEATS[b].id;
  const lt = t - STARTS[b];
  const at = (beat: string) => BEATS.findIndex((x) => x.id === beat);
  const after = (beat: string) => b > at(beat);
  const sprint = BEATS[b].sprint;

  // The site frame stays on screen from "shape" to the end, and changes shape between beats.
  const siteOn = b >= at("shape");
  const phone = b >= at("phone");
  const atEnd = id === "end";
  const enter = id === "shape" ? ease(prog(lt, 0, 900)) : 1;
  const frameW = phone ? 360 : 960;
  const frameH = phone ? 610 : 560;
  const frameX = atEnd ? 140 : phone ? 220 : (W - frameW) / 2 + (id === "look" ? 120 : id === "check" ? -110 : id === "words" ? -130 : 0);
  const frameY = phone ? 36 : 96;

  const look = id === "look" ? (lt < 1300 ? 0 : lt < 2500 ? 1 : lt < 3600 ? 2 : CHOSEN_LOOK) : CHOSEN_LOOK;
  const wire = id === "shape" || (id === "look" && lt < 500);
  const headlineChars = id === "words" ? Math.min(HEADLINE.length, Math.floor(prog(lt, 300, 2600) * HEADLINE.length)) : undefined;
  const hoursIn = after("words") || (id === "words" && lt > 4600);
  const scrollY = id === "phone" ? (lt > 1500 ? 520 : 0) : id === "check" ? (lt > 1800 ? 700 : 0) : id === "words" ? (lt > 2900 ? 1180 : 0) : 0;
  const urlText = id === "live" ? typed(DOMAIN, lt, 400, 18) : after("live") ? DOMAIN : "preview";
  const secure = (id === "live" && lt > 1600) || atEnd;
  const published = (id === "live" && lt > 3700) || atEnd;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0b0c0c] font-sans text-[#efe9d8]">
      {/* Light that follows the work */}
      <div
        className="absolute h-[900px] w-[900px] rounded-full opacity-60 blur-3xl transition-[left,top,background] duration-[1600ms]"
        style={{
          left: siteOn ? frameX + frameW / 2 - 450 : 190,
          top: -120,
          background: `radial-gradient(circle, ${siteOn ? LOOKS[look].accent : "#077d95"}66 0%, transparent 65%)`,
        }}
        aria-hidden
      />

      {/* Beat 1: the ask */}
      {id === "ask" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-40">
          <Card className="w-[760px] px-7 py-6" style={show(lt, 0)}>
            <p className="text-[13px] text-[#14181a]/55">Your AI, at your desk</p>
            <p className="mt-2 min-h-[2.4rem] text-[30px] font-semibold leading-tight">
              {typed(ASK, lt, 500)}
              {lt < 2600 && <span className="ml-1 inline-block h-[1.1em] w-[3px] translate-y-1 animate-pulse bg-[#077d95]" />}
            </p>
          </Card>
          <Card className="w-[760px] border-[#077d95]/40 bg-[#e9f3f4] px-7 py-5" style={show(lt, 3000)}>
            <p className="text-[21px] leading-snug">
              On it. I&rsquo;ll run it as a project, &ldquo;Nadia&rsquo;s website&rdquo;: six sprints, and your yes at each checkpoint.
            </p>
          </Card>
        </div>
      )}

      {/* Beat 2: the brief, approved */}
      {id === "brief" && (
        <div className="absolute inset-0 flex items-center justify-center gap-10">
          <div className="flex w-[300px] flex-col gap-3 text-[15px]">
            {["Read 14 chat orders", "Read 6 reviews", "Checked two other ways to do this"].map((s, i) => (
              <p key={s} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3" style={show(lt, 200 + i * 450)}>
                <Check on={lt > 500 + i * 450} /> {s}
              </p>
            ))}
          </div>
          <Card className="relative w-[520px] p-7" style={show(lt, 900)}>
            <p className="flex items-center gap-3">
              <Tag kind="Decide" /> <span className="text-[20px] font-semibold">Approve the brief?</span>
            </p>
            <div className="mt-4 flex flex-col gap-2 text-[16px] leading-snug">
              <p><b>For:</b> women ordering kebaya and baju kurung for weddings and Raya.</p>
              <p><b>One job:</b> get a fitting booked by chat.</p>
              <p><b>Working when:</b> more chat orders mention the site.</p>
            </div>
            <span
              className={`mt-5 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-300 ${
                lt > 3500 ? "bg-[#233219]" : "bg-[#077d95]"
              }`}
            >
              {lt > 3500 ? "✓ Approved by you" : "Approve"}
            </span>
          </Card>
        </div>
      )}

      {/* The site, from wireframe to her phone */}
      {siteOn && (
        <div
          className="absolute overflow-hidden bg-[#1b1d1e] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] transition-[left,top,width,height,border-radius] duration-[1100ms] ease-[cubic-bezier(.65,0,.25,1)]"
          style={{
            left: frameX,
            top: frameY,
            width: frameW,
            height: frameH,
            borderRadius: phone ? 46 : 14,
            padding: phone ? 10 : 0,
            opacity: enter,
            transform: `scale(${0.9 + enter * 0.1})`,
          }}
        >
          <div className="flex h-full flex-col overflow-hidden" style={{ borderRadius: phone ? 36 : 14 }}>
            <div className={`flex shrink-0 items-center gap-2 bg-[#f1efe9] px-3 ${phone ? "h-12 justify-center pt-3" : "h-10"}`}>
              {!phone && (
                <span className="flex gap-1.5" aria-hidden>
                  <i className="h-3 w-3 rounded-full bg-[#ec6a5e]" />
                  <i className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
                  <i className="h-3 w-3 rounded-full bg-[#61c554]" />
                </span>
              )}
              <span className={`flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[13px] text-[#14181a]/75 ${phone ? "" : "ml-3 min-w-[280px]"}`}>
                <span className={`transition-all duration-500 ${secure ? "text-[#1e7a3c] opacity-100" : "opacity-30"}`} aria-hidden>
                  {secure ? "🔒" : "○"}
                </span>
                {urlText}
                {id === "live" && lt < 1300 && <span className="inline-block h-3.5 w-[2px] animate-pulse bg-[#14181a]" />}
              </span>
            </div>
            <div className="relative min-h-0 flex-1">
              <NadiaSite look={look} wire={wire} headlineChars={headlineChars} hours={hoursIn ? "Sat 10am to 4pm" : null} glowHours={id === "words" && lt > 4600} scrollY={scrollY} />
              {id === "check" && (
                <div
                  className="pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-[#077d95]/25 to-transparent"
                  style={{ top: `${-20 + prog(lt, 300, 4300) * 120}%` }}
                  aria-hidden
                />
              )}
              {id === "live" && (
                <div
                  className="absolute inset-x-3 top-3 z-10 rounded-2xl bg-white/95 p-3 text-[13px] text-[#14181a] shadow-xl backdrop-blur transition-all duration-500"
                  style={{ opacity: lt > 5000 ? 1 : 0, transform: `translateY(${lt > 5000 ? 0 : -24}px)` }}
                >
                  <p className="font-semibold">New chat · from the website</p>
                  <p className="mt-0.5 text-[#14181a]/75">Salam, can I book a fitting for a Raya kebaya?</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Side panels, one per beat */}
      {id === "shape" && (
        <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[15px]">
          {["Sees a style", "Asks for a quote", "Chats to order", "Books a fitting"].map((s, i) => (
            <span key={s} className="flex items-center gap-2" style={show(lt, 1200 + i * 550)}>
              {i > 0 && <span className="text-[#f5cb1d]">→</span>}
              <span className="rounded-full border border-white/20 bg-[#0b0c0c]/90 px-4 py-2 backdrop-blur">{s}</span>
            </span>
          ))}
        </div>
      )}

      {id === "look" && (
        <Card className="absolute left-10 top-[180px] w-[150px] p-3" style={show(lt, 300)}>
          <p className="flex items-center gap-2 text-[13px] font-semibold"><Tag kind="Decide" /> Look</p>
          <div className="mt-2 flex flex-col gap-2">
            {LOOKS.map((L, i) => (
              <div
                key={L.name}
                className={`flex items-center gap-2 rounded-lg border p-2 text-[13px] transition-all duration-300 ${
                  i === look ? "border-[#077d95] bg-[#077d95]/10 font-semibold" : "border-[#14181a]/10"
                }`}
              >
                <span className="h-5 w-5 rounded-full" style={{ background: `linear-gradient(135deg, ${L.accent} 50%, ${L.gold} 50%)` }} />
                {L.name}
              </div>
            ))}
          </div>
          <p className="mt-2 text-[12px] font-semibold text-[#233219]" style={show(lt, 4000)}>✓ Chosen by you</p>
        </Card>
      )}

      {id === "words" && (
        <div className="absolute right-8 top-[200px] flex w-[230px] flex-col gap-3">
          <Card className="p-4 text-[14px]" style={show(lt, 2700)}>
            <p className="flex items-center gap-2 font-semibold"><Tag kind="Input" /> One gap</p>
            <p className="mt-2 leading-snug">What are your Saturday hours? I won&rsquo;t guess.</p>
          </Card>
          <p className="ml-auto max-w-[85%] rounded-2xl bg-[#077d95] px-4 py-2.5 text-[14px] text-white" style={show(lt, 3900)}>
            Saturdays 10 to 4.
          </p>
        </div>
      )}

      {id === "check" && (
        <Card className="absolute right-12 top-[170px] w-[290px] p-5" style={show(lt, 200)}>
          <p className="text-[15px] font-semibold">Checks, before anything goes live</p>
          <ul className="mt-3 flex flex-col gap-2.5 text-[14px]">
            {[
              ["Critique", "Swapped a template-looking section"],
              ["Polish", "Spacing matches the chosen look"],
              ["Harden", "Long style names still fit"],
              ["Adapt", "Order button within thumb reach"],
            ].map(([k, v], i) => (
              <li key={k} className="flex items-start gap-2.5">
                <Check on={lt > 900 + i * 800} />
                <span>
                  <b>{k}</b>
                  <span className="block text-[12.5px] text-[#14181a]/65">{v}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 flex items-center gap-2 text-[13px]" style={show(lt, 4300)}>
            <Tag kind="Decide" /> First look approved
          </p>
        </Card>
      )}

      {id === "phone" && (
        <div className="absolute left-[640px] top-[230px] w-[480px]" style={show(lt, 900)}>
          <p className="font-brand text-[44px] font-bold leading-[1.05]">Made for the phone in her customer&rsquo;s hand.</p>
          <p className="mt-4 text-[18px] text-[#efe9d8]/70">Same pages, same look, rearranged for a thumb.</p>
        </div>
      )}

      {id === "live" && (
        <Card className="absolute left-[640px] top-[150px] w-[440px] p-6" style={show(lt, 200)}>
          <p className="text-[18px] font-semibold">Going live, guided</p>
          <ol className="mt-4 flex flex-col gap-3 text-[15px]">
            {[
              ["Your address, in your name, auto-renew on", 1000],
              ["Connected to the site, record by record", 1700],
              ["Press Publish: your click", 3700],
              ["Opened on your phone: padlock showing", 4600],
            ].map(([s, on]) => (
              <li key={s as string} className="flex items-center gap-3">
                <Check on={lt > (on as number)} /> {s}
              </li>
            ))}
          </ol>
          <span
            className={`relative mt-5 inline-flex items-center rounded-lg px-6 py-3 text-[15px] font-bold text-white transition-all duration-300 ${
              published ? "bg-[#233219]" : "bg-[#077d95]"
            } ${id === "live" && lt > 3300 && lt < 3700 ? "scale-95" : ""}`}
          >
            {published ? "✓ Live" : "Publish"}
          </span>
        </Card>
      )}
      {id === "live" && <Cursor x={lt < 2600 ? 1180 : 700} y={lt < 2600 ? 640 : 380} down={lt > 3300 && lt < 3700} />}
      {id === "brief" && <Cursor x={lt < 2400 ? 1100 : 650} y={lt < 2400 ? 640 : 436} down={lt > 3200 && lt < 3500} />}

      {atEnd && (
        <div className="absolute left-[600px] top-[150px] w-[600px]">
          <p className="font-brand text-[52px] font-bold leading-[1.04]" style={show(lt, 300, 700)}>
            You say it.<br />You approve it.<br />It goes live in your name.
          </p>
          <p className="mt-6 text-[19px] leading-snug text-[#efe9d8]/75" style={show(lt, 1400)}>
            AI Jumpstart sets up your own AI team at your desk. A website is one thing you can ask for.
          </p>
          <div className="mt-8 flex gap-4" style={show(lt, 2100)}>
            <Link href="/jumpstart/how-it-works/example" className="rounded-lg bg-[#f5cb1d] px-6 py-3.5 text-[17px] font-bold text-[#14181a] hover:bg-[#f8df98]">
              Open Nadia&rsquo;s site
            </Link>
            <Link href="/jumpstart" className="rounded-lg border border-white/30 px-6 py-3.5 text-[17px] font-bold hover:border-white/70">
              About AI Jumpstart
            </Link>
          </div>
        </div>
      )}

      {/* Where we are: six sprints, a checkpoint at the end of each */}
      {sprint >= 0 && !atEnd && (
        <ol className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-1.5 text-[12px]">
          {SPRINT_NAMES.map((n, i) => (
            <li
              key={n}
              className={`rounded-full px-3 py-1 transition-all duration-500 ${
                i === sprint ? "bg-[#f5cb1d] font-bold text-[#14181a]" : i < sprint ? "bg-white/15 text-[#efe9d8]/80" : "bg-white/5 text-[#efe9d8]/40"
              }`}
            >
              {i + 1} · {n}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default function JumpstartHowItWorksPlayer() {
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [scale, setScale] = useState(0.5);
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => false);
  const box = useRef<HTMLDivElement>(null);
  const done = t >= TOTAL;

  useEffect(() => {
    if (!box.current) return;
    const el = box.current;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / W));
    ro.observe(el);
    return () => ro.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (reduced || !box.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (!userPaused) setPlaying(e.isIntersecting);
    }, { threshold: 0.5 });
    io.observe(box.current);
    return () => io.disconnect();
  }, [reduced, userPaused]);

  useEffect(() => {
    if (!playing || reduced || done) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(100, now - last);
      last = now;
      setT((v) => Math.min(TOTAL, v + dt));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, reduced, done]);

  if (reduced) {
    // A storyboard: one still per beat, taken at the moment the beat has settled.
    return (
      <ol className="grid gap-6 sm:grid-cols-2">
        {BEATS.map((s, n) => (
          <li key={s.id} className="flex flex-col gap-3">
            <Still t={STARTS[n] + s.ms - 200} />
            <p className="text-sm text-[#efe9d8]">
              <b className="text-[#f5cb1d]">{n + 1}.</b> {s.caption}
            </p>
          </li>
        ))}
      </ol>
    );
  }

  let b = BEATS.length - 1;
  while (b > 0 && t < STARTS[b]) b--;

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={box}
        className="relative w-full overflow-hidden rounded-xl ring-1 ring-white/10"
        style={{ aspectRatio: `${W} / ${H}` }}
        role="img"
        aria-label="A short film: a founder asks her AI for a website and it goes live on her own address, with her approval at each step."
      >
        <div className="absolute left-0 top-0 origin-top-left" style={{ width: W, height: H, transform: `scale(${scale})` }}>
          <Frame t={t} />
        </div>
      </div>
      <p className="min-h-[3.5rem] text-base sm:text-lg leading-snug text-[#efe9d8]" aria-live="polite">
        {BEATS[b].caption}
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => {
            if (done) {
              setT(0);
              setPlaying(true);
              setUserPaused(false);
              return;
            }
            setUserPaused(playing);
            setPlaying(!playing);
          }}
          className="min-h-[44px] min-w-[96px] border border-white/30 px-4 text-xs font-bold uppercase tracking-wider text-[#efe9d8] hover:border-white/70"
        >
          {done ? "Replay" : playing ? "Pause" : "Play"}
        </button>
        <ol className="flex flex-1 gap-1.5" aria-label="Scenes">
          {BEATS.map((s, n) => (
            <li key={s.id} className="flex-1">
              <button
                type="button"
                onClick={() => setT(STARTS[n])}
                aria-label={`Scene ${n + 1} of ${BEATS.length}`}
                aria-current={n === b ? "step" : undefined}
                className="relative flex h-[44px] w-full items-center"
              >
                <span className="relative block h-2 w-full overflow-hidden rounded-full bg-white/15">
                  <span className="absolute inset-y-0 left-0 bg-[#f5cb1d]" style={{ width: `${prog(t, STARTS[n], STARTS[n] + s.ms) * 100}%` }} />
                </span>
              </button>
            </li>
          ))}
        </ol>
        <span className="text-xs text-[#efe9d8]/60 tabular-nums">
          {b + 1} / {BEATS.length}
        </span>
      </div>
    </div>
  );
}

function Still({ t }: { t: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={ref} className="relative w-full overflow-hidden rounded-lg ring-1 ring-white/10" style={{ aspectRatio: `${W} / ${H}` }} aria-hidden>
      <div className="absolute left-0 top-0 origin-top-left" style={{ width: W, height: H, transform: `scale(${scale})` }}>
        <Frame t={t} />
      </div>
    </div>
  );
}
