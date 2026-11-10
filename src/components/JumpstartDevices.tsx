"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useExample } from "@/components/JumpstartExamples";
import { STANDUPS, type Example, type StandupItem } from "@/lib/jumpstartExamples";
import { clamp01, reducedMotion } from "@/lib/motion";

// A scripted mock of the two surfaces a founder uses each morning: the dashboard on a laptop and the email on a phone.
// The layouts follow the real Jumpstart workspace (the dashboard cards and the morning email), filled with the invented business.
// One clock drives both devices, so the answer sent from the phone lands on the dashboard too.

const LOOP = 14500;
const LAPTOP = { w: 580, h: 380 };
const PHONE = { w: 214, h: 440 };
const GAP = 48;

// Colors are the workspace's own: warm ivory ground, white cards, teal for Decide, red for Red.
const INK = "#1c1917";
const BODY = "#332f2b";
const MUTED = "#736b63";
const FAINT = "#9c9489";
const LINE = "#e7e2d6";
const GROUND = "#f7f5ee";
const TEAL = "#077d95";

interface Ask {
  id: string;
  item: StandupItem;
}

/** Remounts on every switch, so the loop restarts for the new business. */
export default function JumpstartDevices() {
  const { example } = useExample();
  return <Stage key={example.id} example={example} items={STANDUPS[example.id]} />;
}

function typed(t: number, start: number, per: number, text: string) {
  return text.slice(0, Math.max(0, Math.min(text.length, Math.floor((t - start) / per))));
}

function Stage({ example, items }: { example: Example; items: StandupItem[] }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [t, setT] = useState(0);
  const [avail, setAvail] = useState(0);
  const [screen, setScreen] = useState<"Dashboard" | "Email">("Dashboard");
  const [live, setLive] = useState(false);
  const still = useRef(false);

  const asks: Ask[] = items
    .filter((it) => it.kind !== "notify")
    .map((item, i) => ({ id: `${item.kind === "decide" ? "D" : "I"}-00${21 + i}`, item }));
  const done = items.filter((it) => it.kind === "notify");
  const first = asks[0];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    still.current = reducedMotion();
    // Deferred, as in JumpstartDemo, so the first paint matches the static HTML before the phone layout is picked.
    const init = window.setTimeout(() => {
      if (window.innerWidth < 640) setScreen("Email");
      if (still.current) setT(11500);
    }, 0);
    const ro = new ResizeObserver(([e]) => setAvail(e.contentRect.width));
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => setLive(e.isIntersecting && !still.current), { threshold: 0.25 });
    io.observe(el);
    return () => {
      window.clearTimeout(init);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!live) return;
    const t0 = performance.now();
    const id = window.setInterval(() => setT((performance.now() - t0) % LOOP), 50);
    return () => window.clearInterval(id);
  }, [live]);

  const both = avail >= LAPTOP.w + GAP + PHONE.w - 40;
  const fullW = LAPTOP.w + GAP + PHONE.w;

  // The script.
  // MR-01: nothing reads the founder's mailbox, so the answer is given on the dashboard, never by email reply.
  const sentAt = 6900;
  const answered = t >= sentAt;
  const note = example.capture;
  const noteText = typed(t, 8000, 50, note);
  const capturedAt = 8000 + note.length * 50 + 500;
  const captured = t >= capturedAt;
  const open = asks.length - (answered ? 1 : 0);
  const redOpen = asks.some((a) => a.item.red) && !(answered && first.item.red);
  const phoneScroll = t < 1200 ? 0 : t < 7000 ? 0.62 : 0;
  const laptopScroll = t < 1200 ? 0 : t < 7200 ? 0.3 : 1;
  const tapAnswer = t > sentAt - 350 && t < sentAt + 250;
  const tapLaptop = t > capturedAt - 450 && t < capturedAt + 150;

  const laptop = (
    <Laptop
      example={example}
      asks={asks}
      open={open}
      redOpen={redOpen}
      answeredId={answered ? first.id : null}
      scroll={laptopScroll}
      noteText={noteText}
      captured={captured}
      tap={tapLaptop}
      tapAnswer={tapAnswer}
    />
  );
  const phone = (
    <Phone
      example={example}
      asks={asks}
      done={done}
      open={open}
      redOpen={redOpen}
      answeredId={null}
      scroll={phoneScroll}
    />
  );

  const scaled = (w: number, h: number, node: ReactNode) => {
    const k = avail ? Math.min(1, avail / (both ? fullW : w)) : 1;
    return (
      <div style={{ width: w * k, height: h * k }} className="relative shrink-0">
        <div style={{ width: w, height: h, transform: `scale(${k})`, transformOrigin: "top left" }}>{node}</div>
      </div>
    );
  };

  return (
    <div ref={rootRef}>
      {!both && (
        <div role="group" aria-label="Pick a device" className="mb-4 inline-flex border border-white/25 bg-[#0b0b0a] p-1 gap-1">
          {(["Dashboard", "Email"] as const).map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={screen === s}
              onClick={() => setScreen(s)}
              className={`px-5 min-h-[44px] text-xs font-bold uppercase tracking-wider transition-colors ${
                screen === s ? "bg-[#f5cb1d] text-[#111]" : "text-[#efe9d8] hover:text-[#f5cb1d]"
              }`}
            >
              {s === "Dashboard" ? "Laptop" : "Phone"}
            </button>
          ))}
        </div>
      )}
      <div className="js-swap flex items-end justify-center gap-12" aria-hidden="true">
        {(both || screen === "Dashboard") && scaled(LAPTOP.w, LAPTOP.h, laptop)}
        {(both || screen === "Email") && scaled(PHONE.w, PHONE.h, phone)}
      </div>
      <p className="sr-only">
        A mock of the HQ dashboard on a laptop and the morning stand-up email on a phone. {asks.length} items need the founder. The founder answers on the dashboard, and replies to the email are not read.
      </p>
    </div>
  );
}

/* ---------------------------------------------------------------- devices */

function Scroller({ children, scroll }: { children: ReactNode; scroll: number }) {
  const view = useRef<HTMLDivElement | null>(null);
  const inner = useRef<HTMLDivElement | null>(null);
  const [max, setMax] = useState(0);
  useEffect(() => {
    const m = () => setMax(Math.max(0, (inner.current?.scrollHeight ?? 0) - (view.current?.clientHeight ?? 0)));
    m();
    const ro = new ResizeObserver(m);
    if (inner.current) ro.observe(inner.current);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={view} className="overflow-hidden h-full">
      <div
        ref={inner}
        style={{ transform: `translateY(${-max * clamp01(scroll)}px)`, transition: "transform 2200ms cubic-bezier(0.45, 0, 0.2, 1)" }}
      >
        {children}
      </div>
    </div>
  );
}

function Tap({ on, className }: { on: boolean; className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute h-7 w-7 rounded-full border-2 border-[#f5cb1d] bg-[#f5cb1d]/40 transition-all duration-200 ${on ? "scale-100 opacity-100" : "scale-50 opacity-0"} ${className}`}
    />
  );
}

interface DeviceProps {
  example: Example;
  asks: Ask[];
  open: number;
  redOpen: boolean;
  answeredId: string | null;
  scroll: number;
}

// The laptop follows the HQ dashboard: a dark charcoal sidebar, a cream page, and one card per Decide or Input with its own answer box.
const PAPER = "#FDFCF8";
const CARD = "#F7F6F2";
const EDGE = "#E4DCCB";
const DANGER = "#8B3A2F";

function Laptop({
  example,
  asks,
  open,
  redOpen,
  answeredId,
  scroll,
  noteText,
  captured,
  tap,
  tapAnswer,
}: DeviceProps & { noteText: string; captured: boolean; tap: boolean; tapAnswer: boolean }) {
  const initial = example.person.charAt(0);
  const B = example.brand;
  const label = "text-[8px] font-bold uppercase tracking-widest";
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 min-h-0 rounded-t-[16px] bg-[#16150f] p-[8px] ring-1 ring-white/15">
        <div className="relative h-full overflow-hidden rounded-[8px] flex" style={{ background: PAPER, color: B.dark }}>
        {/* Sidebar */}
        <aside className="w-[112px] shrink-0 p-3 text-[9px] flex flex-col gap-3" style={{ background: B.dark, color: "#e8eadf" }}>
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded grid place-items-center text-[11px] font-bold" style={{ background: B.accent }}>
              {initial}
            </span>
            <span className="leading-tight">
              <span className="block font-bold tracking-wide uppercase">{example.person}</span>
              <span className="block text-[7px] opacity-70">HQ</span>
            </span>
          </div>
          <ul className="space-y-1.5">
            {example.pages.map((page, i) => (
              <li
                key={page}
                className={`rounded px-1.5 py-1 ${i === 0 ? "font-semibold" : "opacity-80"}`}
                style={i === 0 ? { background: "rgba(255,255,255,0.12)" } : undefined}
              >
                {page}
              </li>
            ))}
          </ul>
        </aside>

        {/* Page */}
        <div className="flex-1 min-w-0">
          <Scroller scroll={scroll}>
            <div className="px-4 py-3 space-y-3 text-[10px]">
              <header className="border-b pb-2.5" style={{ borderColor: EDGE }}>
                <div className="flex items-center gap-1.5">
                  <span className="text-[7px] font-bold px-1.5 py-0.5 rounded text-white tracking-widest uppercase" style={{ background: B.accent }}>
                    Dashboard
                  </span>
                  <span className="font-mono text-[8px] opacity-60">{example.person.toLowerCase()}-hq · Tue 8:00</span>
                </div>
                <p className="mt-1 text-[16px] font-bold tracking-tight">{example.person}&rsquo;s HQ</p>
                <p className="mt-0.5 opacity-70">
                  <b>North star:</b> {example.blurb.replace(/\.$/, "")}
                </p>
              </header>

              {redOpen && (
                <div className="rounded-md p-2.5 border-l-4" style={{ background: CARD, borderColor: EDGE, borderLeftColor: DANGER, borderWidth: "0.5px 0.5px 0.5px 4px" }}>
                  <p className="font-semibold" style={{ color: DANGER }}>
                    1 Red item needs you first.
                  </p>
                </div>
              )}

              <p className={`${label} opacity-60`}>Waiting on you · {open}</p>
              {asks.map((a) => {
                const ok = answeredId === a.id;
                return (
                  <div key={a.id} className="relative rounded-md p-2.5 transition-colors duration-500" style={{ background: ok ? "#eef2e6" : CARD, border: `0.5px solid ${EDGE}` }}>
                    <div className="flex justify-between font-mono text-[8px] opacity-60">
                      <span>
                        {a.id} · {a.item.kind === "decide" ? "Decide" : "Input"} · {a.item.dept.toLowerCase()}
                      </span>
                      <span style={a.item.red && !ok ? { color: DANGER, opacity: 1, fontWeight: 700 } : undefined}>
                        {a.item.red && !ok ? a.item.red : "by Wed 09:00"}
                      </span>
                    </div>
                    <p className="mt-1 text-[10.5px] font-semibold leading-snug">{a.item.text}</p>
                    {!ok && <p className="mt-0.5 text-[8.5px] opacity-70">If you don&rsquo;t answer: hold and re-raise Wed 09:00</p>}
                    <div className="mt-1.5 flex gap-1.5">
                      {a.item.actions?.map((o, n) => (
                        <span
                          key={o}
                          className="rounded border px-1.5 py-0.5 text-[8.5px] font-semibold transition-colors duration-500"
                          style={ok && n === 0 ? { background: B.accent, color: "#fff", borderColor: B.accent } : { borderColor: B.accent, color: B.accent }}
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                    {ok ? (
                      <p className="mt-1.5 text-[8.5px] font-semibold" style={{ color: B.accent }}>
                        Answered: yes. Logged.
                      </p>
                    ) : (
                      <div className="mt-1.5 flex gap-1.5">
                        <span className="flex-1 rounded border px-1.5 py-1 text-[8.5px] opacity-50 bg-white" style={{ borderColor: EDGE }}>
                          Or answer in your own words
                        </span>
                        <span className="rounded px-2 py-1 text-[8.5px] font-bold text-white" style={{ background: "#9aa68f" }}>
                          Send
                        </span>
                      </div>
                    )}
                    {a.id === asks[0]?.id && <Tap on={tapAnswer} className="left-3 bottom-7" />}
                  </div>
                );
              })}

              <div className="relative rounded-md bg-white p-2.5" style={{ border: `0.5px solid ${EDGE}` }}>
                <p className={`${label} opacity-60`}>Capture</p>
                <div className="mt-1 min-h-[30px] rounded border px-2 py-1.5" style={{ borderColor: EDGE, opacity: noteText ? 1 : 0.5 }}>
                  {captured ? "" : noteText || "Type it the way you talk"}
                  {!captured && noteText && <span className="inline-block w-[1px] h-3 align-middle bg-black animate-pulse" />}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded px-2 py-1 text-[8.5px] font-bold uppercase tracking-wider text-white" style={{ background: B.dark }}>
                    Capture
                  </span>
                  {captured && (
                    <span className="text-[9px]" style={{ color: B.accent }}>
                      Captured. A read-back is on its way for you to confirm.
                    </span>
                  )}
                </div>
                <Tap on={tap} className="left-6 bottom-1" />
              </div>
              <div className="h-6" />
            </div>
          </Scroller>
        </div>
        </div>
      </div>
      <div className="h-[14px] -mx-3 rounded-b-[14px] bg-gradient-to-b from-[#3d3c34] to-[#1c1b16] shadow-[0_24px_40px_-12px_rgba(0,0,0,0.8)] flex justify-center">
        <span className="h-[4px] w-[70px] rounded-b-md bg-[#0e0e0a]" />
      </div>
    </div>
  );
}

function Phone({
  example,
  asks,
  done,
  open,
  redOpen,
  answeredId,
  scroll,
}: DeviceProps & { done: StandupItem[] }) {
  const decides = asks.filter((a) => a.item.kind === "decide").length - (answeredId ? 1 : 0);
  const inputs = asks.filter((a) => a.item.kind === "input").length;
  const cell = (n: number | string, label: string, hot = false) => (
    <div className="flex-1 text-center py-2 border-r last:border-r-0" style={{ borderColor: LINE, background: hot ? "#fee2e2" : "#faf8f2" }}>
      <div className="text-[16px] font-bold leading-none" style={{ color: hot ? "#991b1b" : INK }}>
        {n}
      </div>
      <div className="mt-1 text-[7px] font-bold uppercase tracking-wider" style={{ color: hot ? "#991b1b" : MUTED }}>
        {label}
      </div>
    </div>
  );

  const B = example.brand;
  const initial = example.person.charAt(0).toUpperCase();

  return (
    <div className="h-full rounded-[34px] bg-[#16150f] p-[9px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/15">
      <div className="relative h-full overflow-hidden rounded-[26px] flex flex-col" style={{ background: GROUND, color: INK }}>
        <div className="mx-auto mt-2 mb-1 h-[14px] w-[64px] rounded-full bg-[#16150f]" />
        <div className="px-3 py-2 border-b-[2px] flex items-center gap-2" style={{ background: B.dark, color: "#fdfaf0", borderColor: B.accent }}>
          <span
            className="h-5 w-5 rounded-[3px] grid place-items-center font-brand text-[9px] font-bold text-white shrink-0"
            style={{ background: B.accent }}
          >
            {initial}
          </span>
          <div className="min-w-0">
            <p className="text-[7px] font-bold uppercase tracking-wider truncate" style={{ color: B.onDark }}>
              {example.person}&rsquo;s HQ · 8:00
            </p>
            <p className="font-brand text-[10.5px] font-bold leading-tight text-[#fdfaf0] truncate">
              Executive Briefing · {open} {open === 1 ? "needs" : "need"} you
            </p>
          </div>
        </div>
        <div className="flex-1 min-h-0">
          <Scroller scroll={scroll}>
            <div className="p-3 space-y-2.5 text-[9.5px] leading-snug">
              <div className="flex rounded-md border overflow-hidden" style={{ borderColor: LINE }}>
                {cell(redOpen ? 1 : 0, redOpen ? "Red alert" : "All clear", redOpen)}
                {cell(decides, "Decisions")}
                {cell(inputs, "Inputs")}
              </div>
              {asks.map((a) => {
                const ok = answeredId === a.id;
                return (
                  <div
                    key={a.id}
                    className="rounded-md border overflow-hidden transition-colors duration-500"
                    style={{ borderColor: ok ? "#cde3cd" : LINE, background: ok ? "#f2f8f2" : "#fff" }}
                  >
                    <div className="px-2.5 py-1.5 flex items-center gap-1.5 border-b" style={{ borderColor: "#f0ebe1", background: ok ? "#f2f8f2" : "#faf9f6" }}>
                      <span className="font-mono text-[8.5px] font-bold text-white rounded px-1 py-[1px] whitespace-nowrap shrink-0" style={{ background: INK }}>
                        {a.id}
                      </span>
                      <span className="text-[8px] font-semibold uppercase tracking-wide" style={{ color: B.accent }}>
                        {a.item.dept}
                      </span>
                    </div>
                    <p className="px-2.5 py-2" style={{ color: BODY }}>
                      {a.item.text}
                    </p>
                    <p className="px-2.5 py-1 border-t text-[8px]" style={{ borderColor: "#f0ebe1", color: ok ? "#2f6b2f" : MUTED, background: ok ? "#f2f8f2" : "#fdfcf9" }}>
                      {ok ? "Answered: yes. Logged." : (
                        <>
                          Answer <b className="font-mono" style={{ color: INK }}>{a.id}</b> on your dashboard
                        </>
                      )}
                    </p>
                  </div>
                );
              })}
              <p className="pt-1 text-[8px] font-bold uppercase tracking-widest border-b pb-1" style={{ borderColor: INK, color: INK }}>
                Done for you
              </p>
              {done.map((d) => (
                <p key={d.text} className="rounded-md border bg-white px-2.5 py-1.5" style={{ borderColor: LINE, color: BODY }}>
                  {d.text.replace(/ Nothing to do\.$/, "")}
                </p>
              ))}
              <div className="h-4" />
            </div>
          </Scroller>
        </div>
        {/* Footer, as in the real standup email (MR-01) */}
        <div className="px-3 py-2 border-t bg-white text-[8.5px] leading-snug" style={{ borderColor: LINE, color: MUTED }}>
          Answer on your dashboard. Replies to this email are not read.
        </div>
        <div className="mx-auto mb-1.5 mt-1 h-[3px] w-[70px] rounded-full bg-black/30" />
      </div>
    </div>
  );
}
