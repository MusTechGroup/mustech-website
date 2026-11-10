// The example site from "Make me a website" (/jumpstart/how-it-works): what Nadia's AI builds for her
// tailoring business. Real, responsive markup (container queries), used in two places: inside the ad, where it
// shrinks from a laptop to a phone, and as a page of its own at /jumpstart/how-it-works/example.
// Names, business, and address are illustrative. No prices: the carried-forward note says none online until she says.
// Its own brand (plum and gold thread), not MusTech's or any other example's.

// Flip to true once the Gemini photos are in public/jumpstart/nadia/ (made 2026-11-10) (see docs/JUMPSTART_AD_GEMINI_PROMPTS.md).
export const HAS_PHOTOS = true;
const PHOTO = (name: string) => `/jumpstart/nadia/${name}.jpg`;

export const LOOKS = [
  { name: "Minimal", bg: "#faf7f2", ink: "#2a2326", accent: "#6b4a5a", gold: "#b8975a", soft: "#efe7de" },
  { name: "Heritage", bg: "#f6efe4", ink: "#341529", accent: "#6e1f45", gold: "#c49a3c", soft: "#ecdcc8" },
  { name: "Bold", bg: "#fff4ee", ink: "#1f1a1c", accent: "#b2365f", gold: "#e3a33a", soft: "#f8dccf" },
] as const;
export const CHOSEN_LOOK = 1;

export const HEADLINE = "Kebaya and baju kurung, fitted to you";

const STYLES = [
  { name: "Kebaya Nyonya", note: "Hand-embroidered, made to your measurements", photo: "style-kebaya" },
  { name: "Baju Kurung Moden", note: "Soft lines for Raya, weddings, and work", photo: "style-kurung" },
  { name: "Family sets", note: "Matching colours for the whole family", photo: "style-family" },
];

const STEPS = [
  ["Choose a style", "Browse the styles, or send a photo of what you have in mind."],
  ["Chat to order", "Tell us the date. We reply with a quote and a fitting slot."],
  ["Fit and collect", "One fitting at the studio, then collect it ready to wear."],
];

type Props = {
  look?: number;
  wire?: boolean;
  headlineChars?: number;
  hours?: string | null;
  glowHours?: boolean;
  scrollY?: number;
  /** On its own page the buttons work (they jump to the right section); inside the ad they are pictures. */
  live?: boolean;
};

export default function NadiaSite({ look = CHOSEN_LOOK, wire = false, headlineChars, hours = "Sat 10am to 4pm", glowHours = false, scrollY = 0, live = false }: Props) {
  const L = LOOKS[look] ?? LOOKS[CHOSEN_LOOK];
  const head = headlineChars === undefined ? HEADLINE : HEADLINE.slice(0, headlineChars);
  const vars = {
    "--ns-bg": L.bg,
    "--ns-ink": L.ink,
    "--ns-accent": L.accent,
    "--ns-gold": L.gold,
    "--ns-soft": L.soft,
  } as React.CSSProperties;

  return (
    <div className={`ns${wire ? " ns-wire" : ""}`} style={vars}>
      <style>{CSS}</style>
      <div className="ns-scroll" style={{ transform: `translateY(${-scrollY}px)` }}>
        <header className="ns-nav">
          <span className="ns-logo ns-t">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden className="ns-needle">
              <path d="M4 20 L19 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <ellipse cx="18.2" cy="5.8" rx="1.4" ry="2.4" transform="rotate(45 18.2 5.8)" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <path d="M18 6 C 10 2, 4 10, 9 14 S 16 18, 20 21" stroke="var(--ns-gold)" strokeWidth="1.2" fill="none" />
            </svg>
            Jahit Nadia
          </span>
          <nav className="ns-links">
            <Go live={live} to="styles" className="ns-t">Styles</Go>
            <Go live={live} to="order" className="ns-t">How to order</Go>
            <Go live={live} to="visit" className="ns-t">Visit</Go>
          </nav>
          <Go live={live} to="visit" className="ns-btn ns-btn-sm ns-t">Book a fitting</Go>
        </header>

        <section className="ns-hero">
          <div className="ns-hero-copy">
            <h1 className="ns-h1 ns-t">
              {head}
              {headlineChars !== undefined && headlineChars < HEADLINE.length && <span className="ns-caret" aria-hidden />}
            </h1>
            <p className="ns-lead ns-t">Choose a style, chat to order, and collect it ready to wear. Made in our studio in Geylang.</p>
            <div className="ns-ctas">
              <Go live={live} to="order" className="ns-btn ns-t">Chat to order</Go>
              <Go live={live} to="styles" className="ns-btn ns-btn-ghost ns-t">See the styles</Go>
            </div>
          </div>
          <div className="ns-hero-art" aria-hidden>
            {HAS_PHOTOS ? <img src={PHOTO("hero")} alt="" /> : <Songket />}
          </div>
        </section>

        <section className="ns-sec" id={live ? "styles" : undefined}>
          <h2 className="ns-h2 ns-t">Styles</h2>
          <div className="ns-grid">
            {STYLES.map((s, i) => (
              <article key={s.name} className="ns-card">
                <div className="ns-card-art" aria-hidden>
                  {HAS_PHOTOS ? <img src={PHOTO(s.photo)} alt="" /> : <Songket variant={i} />}
                </div>
                <h3 className="ns-h3 ns-t">{s.name}</h3>
                <p className="ns-small ns-t">{s.note}</p>
                <Go live={live} to="order" className="ns-link ns-t">Ask for a quote</Go>
              </article>
            ))}
          </div>
        </section>

        <section className="ns-sec ns-band" id={live ? "order" : undefined}>
          <h2 className="ns-h2 ns-t">How to order</h2>
          <ol className="ns-steps">
            {STEPS.map(([t, d], i) => (
              <li key={t}>
                <span className="ns-num ns-t">{i + 1}</span>
                <h3 className="ns-h3 ns-t">{t}</h3>
                <p className="ns-small ns-t">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="ns-sec ns-visit" id={live ? "visit" : undefined}>
          <div>
            <h2 className="ns-h2 ns-t">Visit the studio</h2>
            <p className="ns-small ns-t">Fittings by appointment. Tue to Fri 11am to 7pm</p>
            <p className={`ns-small ns-t${glowHours ? " ns-glow" : ""}`}>
              {hours ?? <mark className="ns-need">[NEED: your Saturday hours]</mark>}
            </p>
          </div>
          <Go live={live} to="visit" className="ns-btn ns-t">Book a fitting</Go>
        </section>

        <footer className="ns-foot">
          <span className="ns-t">Jahit Nadia · Made to measure in Singapore</span>
        </footer>
      </div>
    </div>
  );
}

function Go({ live, to, className, children }: { live: boolean; to: string; className: string; children: React.ReactNode }) {
  return live ? <a href={`#${to}`} className={className}>{children}</a> : <span className={className}>{children}</span>;
}

function Songket({ variant = 0 }: { variant?: number }) {
  const id = `sk${variant}`;
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="ns-songket">
      <defs>
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse" patternTransform={`rotate(${variant * 15})`}>
          <rect width="40" height="40" fill="var(--ns-accent)" />
          <path d="M20 4 L36 20 L20 36 L4 20 Z" fill="none" stroke="var(--ns-gold)" strokeWidth="1.4" />
          <path d="M20 13 L27 20 L20 27 L13 20 Z" fill="var(--ns-gold)" opacity="0.85" />
          <circle cx="0" cy="0" r="2" fill="var(--ns-gold)" />
          <circle cx="40" cy="40" r="2" fill="var(--ns-gold)" />
        </pattern>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="0.6" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />
      <rect width="400" height="300" fill={`url(#${id}g)`} />
      {variant === 0 && (
        <g transform="translate(200 150)" fill="var(--ns-bg)" opacity="0.92">
          <path d="M-34 -96 C -20 -104, 20 -104, 34 -96 L 40 -40 C 50 0, 62 50, 74 112 L -74 112 C -62 50, -50 0, -40 -40 Z" />
          <rect x="-4" y="-122" width="8" height="26" rx="2" />
          <path d="M-34 -96 L 0 -60 L 34 -96" fill="none" stroke="var(--ns-gold)" strokeWidth="3" />
          <circle cx="0" cy="-44" r="3" fill="var(--ns-gold)" />
          <circle cx="0" cy="-26" r="3" fill="var(--ns-gold)" />
          <circle cx="0" cy="-8" r="3" fill="var(--ns-gold)" />
        </g>
      )}
    </svg>
  );
}

const CSS = `
.ns{container-type:inline-size;container-name:ns;background:var(--ns-bg);color:var(--ns-ink);font-family:"DM Sans",system-ui,sans-serif;height:100%;overflow:hidden;transition:background-color .7s,color .7s}
.ns *{transition:background-color .7s,color .7s,border-color .7s,opacity .5s}
.ns-scroll{transition:transform 2.4s cubic-bezier(.45,0,.2,1)}
.ns-nav{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 20px;border-bottom:1px solid color-mix(in srgb,var(--ns-ink) 10%,transparent)}
.ns-logo{display:flex;align-items:center;gap:8px;font-family:Lora,Georgia,serif;font-weight:700;font-size:20px;color:var(--ns-accent)}
.ns-links{display:none;gap:28px;font-size:14px}
.ns a{text-decoration:none}
.ns-btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 20px;border-radius:999px;background:var(--ns-accent);color:var(--ns-bg);font-weight:700;font-size:15px;white-space:nowrap}
.ns-btn-sm{min-height:36px;padding:0 14px;font-size:13px}
.ns-btn-ghost{background:transparent;color:var(--ns-accent);border:1.5px solid var(--ns-accent)}
.ns-hero{display:grid;gap:22px;padding:28px 20px 36px}
.ns-h1{font-family:Lora,Georgia,serif;font-weight:700;font-size:36px;line-height:1.08;letter-spacing:-.01em;margin:0;min-height:2.2em}
.ns-lead{font-size:16px;line-height:1.55;margin:14px 0 0;opacity:.85;max-width:34em}
.ns-ctas{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
.ns-hero-art{aspect-ratio:4/3;border-radius:18px;overflow:hidden;box-shadow:0 20px 50px -24px color-mix(in srgb,var(--ns-accent) 70%,transparent)}
.ns-hero-art img,.ns-card-art img{width:100%;height:100%;object-fit:cover;display:block}
.ns-songket{width:100%;height:100%;display:block}
.ns-sec{padding:36px 20px}
.ns-h2{font-family:Lora,Georgia,serif;font-size:26px;margin:0 0 18px}
.ns-h3{font-family:Lora,Georgia,serif;font-size:18px;margin:12px 0 4px}
.ns-small{font-size:14px;line-height:1.5;margin:0;opacity:.85}
.ns-grid{display:grid;gap:18px}
.ns-card-art{aspect-ratio:4/3;border-radius:14px;overflow:hidden}
.ns-link{display:inline-block;margin-top:8px;font-weight:700;font-size:14px;color:var(--ns-accent);border-bottom:1.5px solid var(--ns-gold)}
.ns-band{background:var(--ns-soft)}
.ns-steps{list-style:none;padding:0;margin:0;display:grid;gap:18px}
.ns-num{display:inline-flex;width:32px;height:32px;border-radius:999px;align-items:center;justify-content:center;background:var(--ns-gold);color:var(--ns-ink);font-weight:700}
.ns-visit{display:flex;flex-direction:column;gap:18px;align-items:flex-start}
.ns-visit .ns-small{margin-top:6px}
.ns-need{background:#f8df98;color:#5c3d00;padding:1px 6px;border-radius:4px;font-weight:700}
.ns-glow{animation:nsGlow 1.6s ease-out}
@keyframes nsGlow{0%{background:color-mix(in srgb,var(--ns-gold) 55%,transparent)}100%{background:transparent}}
.ns-foot{padding:24px 20px 40px;font-size:13px;opacity:.7;border-top:1px solid color-mix(in srgb,var(--ns-ink) 10%,transparent)}
.ns-caret{display:inline-block;width:3px;height:.9em;margin-left:4px;vertical-align:-.08em;background:var(--ns-accent);animation:nsBlink .8s steps(1) infinite}
@keyframes nsBlink{50%{opacity:0}}
@container ns (min-width:720px){
  .ns-nav{padding:22px 48px}
  .ns-links{display:flex}
  .ns-hero{grid-template-columns:1.05fr 1fr;align-items:center;gap:48px;padding:56px 48px 64px}
  .ns-h1{font-size:54px}
  .ns-lead{font-size:18px}
  .ns-sec{padding:56px 48px}
  .ns-h2{font-size:34px}
  .ns-grid,.ns-steps{grid-template-columns:repeat(3,1fr);gap:28px}
  .ns-visit{flex-direction:row;justify-content:space-between;align-items:center}
  .ns-foot{padding:28px 48px 48px}
}
.ns-wire *{color:transparent!important;border-color:#d9d9d9!important;box-shadow:none!important}
.ns-wire,.ns-wire .ns-band{background:#f4f4f4!important}
.ns-wire .ns-t{background:#dedede!important;border-radius:6px}
.ns-wire .ns-hero-art,.ns-wire .ns-card-art{background:#e2e2e2}
.ns-wire .ns-hero-art>*,.ns-wire .ns-card-art>*,.ns-wire .ns-needle{opacity:0}
`;
