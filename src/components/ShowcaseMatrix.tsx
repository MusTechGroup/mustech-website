"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ActiveProduct = "static" | "saalihat" | "jenazah" | "tarabase" | "jumpstart";

const SLIDE_ITEMS: Array<{
  key: ActiveProduct;
  label: string;
  pillBg: string;
  pillText: string;
}> = [
  {
    key: "static",
    label: "Static",
    pillBg: "#233219",
    pillText: "#fdfaf0",
  },
  {
    key: "saalihat",
    label: "Saalihat",
    pillBg: "#0e1117",
    pillText: "#d5ad5b",
  },
  {
    key: "jenazah",
    label: "jenazah.sg",
    pillBg: "#4A5D3F",
    pillText: "#FDFCF8",
  },
  {
    key: "tarabase",
    label: "TaraBase",
    pillBg: "#814038",
    pillText: "#F2E6CF",
  },
  {
    key: "jumpstart",
    label: "Jumpstart",
    pillBg: "#050504",
    pillText: "#f5cb1d",
  },
];

// Authentic TaraBase "Kain" Woven-Cloth SVG Tile (from tarabase-prod/src/app/components/motifs.tsx)
const TARABASE_PUCUK_BRICK = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'>" +
    "<rect width='56' height='56' fill='#B84E39'/>" +
    "<rect y='4' width='56' height='4' fill='#E5A84B'/><rect y='48' width='56' height='4' fill='#E5A84B'/>" +
    "<path d='M0 44L14 14L28 44zM28 44L42 14L56 44z' fill='#E5A84B'/>" +
    "<path d='M8 44L14 28L20 44zM36 44L42 28L48 44z' fill='#B84E39'/>" +
    "</svg>"
)}")`;

export default function ShowcaseMatrix() {
  const [activeProduct, setActiveProduct] = useState<ActiveProduct>("static");

  // Strictly lock html/body scroll and rubber-banding on iPadOS Chrome
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevHtmlHeight = html.style.height;
    const prevHtmlOverscroll = html.style.overscrollBehavior;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyHeight = body.style.height;
    const prevBodyPosition = body.style.position;
    const prevBodyInset = body.style.inset;
    const prevBodyOverscroll = body.style.overscrollBehavior;

    html.style.overflow = "hidden";
    html.style.height = "100%";
    html.style.overscrollBehavior = "none";
    body.style.overflow = "hidden";
    body.style.height = "100%";
    body.style.position = "fixed";
    body.style.inset = "0";
    body.style.overscrollBehavior = "none";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      html.style.height = prevHtmlHeight;
      html.style.overscrollBehavior = prevHtmlOverscroll;
      body.style.overflow = prevBodyOverflow;
      body.style.height = prevBodyHeight;
      body.style.position = prevBodyPosition;
      body.style.inset = prevBodyInset;
      body.style.overscrollBehavior = prevBodyOverscroll;
    };
  }, []);

  const activeIndex = SLIDE_ITEMS.findIndex((item) => item.key === activeProduct);
  const currentSlide = SLIDE_ITEMS[activeIndex] ?? SLIDE_ITEMS[0];

  const handleSlideSelect = (key: ActiveProduct) => {
    setActiveProduct((prev) => (prev === key && key !== "static" ? "static" : key));
  };

  const windowLiftClass = (key: ActiveProduct, activeRing: string) => {
    const isSelected = activeProduct === key;
    const isAnotherSelected = activeProduct !== "static" && activeProduct !== key;

    if (isSelected) {
      return `-translate-y-2 scale-[1.018] z-20 shadow-[0_26px_54px_-12px_rgba(0,0,0,0.42)] ${activeRing}`;
    }
    if (isAnotherSelected) {
      return "translate-y-0.5 scale-[0.985] opacity-65 shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-black/10";
    }
    return "translate-y-0 scale-100 opacity-100 shadow-[0_12px_30px_-8px_rgba(35,50,25,0.16)] border-black/12";
  };

  return (
    <div className="fixed inset-0 w-screen h-[100dvh] overflow-hidden overscroll-none touch-none flex flex-col bg-[#f3ede0] text-[#233219] select-none">
      {/* =====================================================================
          TOP HEADER BAR
          Left: MusTech Group Branding -> mustechgroup.com
          Right: Smooth Sliding Product Selector (Lifts & Animates Window)
         ===================================================================== */}
      <header className="h-14 shrink-0 w-full bg-[#fdfaf0]/90 backdrop-blur-md border-b border-black/10 px-4 sm:px-6 flex items-center justify-between gap-4 z-30">
        <a
          href="https://www.mustechgroup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none shrink-0"
          aria-label="Go to MusTech Group website"
        >
          <Image
            src="/brand/mustech-emblem-trim.png"
            alt="MusTech Group Emblem"
            width={387}
            height={277}
            priority
            className="h-7 sm:h-8 w-auto object-contain"
          />
          <span className="font-brand text-lg sm:text-xl font-bold tracking-tight text-[#233219] leading-none">
            MusTech Group
          </span>
        </a>

        {/* Sliding Product Animation Track */}
        <div
          role="tablist"
          aria-label="Select product window to lift and animate"
          className="relative grid grid-cols-5 items-center bg-black/[0.06] p-1 rounded-full border border-black/10 w-[440px] sm:w-[540px] max-w-full shadow-inner"
        >
          {/* Animated Sliding Pill Indicator */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1 bottom-1 left-1 rounded-full shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              width: "calc((100% - 0.5rem) / 5)",
              transform: `translate3d(${activeIndex * 100}%, 0, 0)`,
              backgroundColor: currentSlide.pillBg,
            }}
          />

          {SLIDE_ITEMS.map((item) => {
            const isSelected = activeProduct === item.key;
            return (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleSlideSelect(item.key)}
                className="relative z-10 h-8 sm:h-9 px-2 rounded-full text-[11px] sm:text-xs font-bold tracking-wide transition-colors duration-200 flex items-center justify-center cursor-pointer truncate focus:outline-none"
                style={{
                  color: isSelected ? currentSlide.pillText : "#233219",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* =====================================================================
          2x2 FLOATING WINDOW STAGE
          Top-Left: Saalihat       | Top-Right: jenazah.sg
          Bottom-Left: TaraBase    | Bottom-Right: MusTech Jumpstart
         ===================================================================== */}
      <main
        id="main-content"
        className="flex-1 min-h-0 w-full p-3.5 sm:p-5 grid grid-cols-2 grid-rows-2 gap-4 sm:gap-5 overflow-hidden"
      >
        {/* -------------------------------------------------------------------
            WINDOW 1 (TOP-LEFT): SAALIHAT
            Typography: Lao MN (Display) + Sans
            Animation: Hardware-accelerated 30fps MP4/WebM when selected
           ------------------------------------------------------------------- */}
        <a
          href="/portfolio#saalihat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Saalihat"
          className={`relative h-full w-full min-h-0 rounded-2xl overflow-hidden bg-[#0e1117] text-white border p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none ${windowLiftClass(
            "saalihat",
            "ring-2 ring-[#d5ad5b] border-[#d5ad5b]"
          )}`}
        >
          <span
            className={`absolute inset-x-0 top-0 transition-all duration-300 bg-[#d5ad5b] ${
              activeProduct === "saalihat" ? "h-1.5" : "h-1"
            }`}
          />

          {/* Left: Brand + Dual QR (Apple & Google Play signs) */}
          <div className="flex flex-col justify-between h-full min-w-0 shrink-0 py-0.5">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/saalihat/logo.jpg"
                  alt="Saalihat"
                  width={44}
                  height={44}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover ring-1 ring-white/15 shrink-0"
                />
                <h2 className="font-brand text-2xl sm:text-3xl font-bold text-white leading-none tracking-tight">
                  Saalihat
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#d5ad5b] mt-1.5 font-medium">
                Mosque Events &amp; Kuliah Directory
              </p>
            </div>

            {/* Dual iOS + Android High-Contrast Large QR Codes */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="bg-white p-1.5 rounded-xl flex flex-col items-center shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/saalihat/ios-qr.svg"
                  alt="iOS App Store QR"
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-[116px] lg:h-[116px] object-contain"
                />
                <span
                  className="text-[#0e1117] text-sm sm:text-base font-bold leading-none mt-1"
                  aria-label="Apple iOS"
                >
                  
                </span>
              </div>

              <div className="bg-white p-1.5 rounded-xl flex flex-col items-center shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/saalihat/android-qr.svg"
                  alt="Google Play QR"
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-[116px] lg:h-[116px] object-contain"
                />
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#0e1117] mt-1"
                  aria-label="Android Google Play"
                >
                  <path d="M4 2.5v19l16-9.5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Static Frame by Default, Smooth 30fps Video when Selected */}
          <div className="flex-1 h-full min-h-0 flex items-center justify-end overflow-hidden">
            {activeProduct === "saalihat" ? (
              <video
                key="saalihat-active-video"
                autoPlay
                loop
                muted
                playsInline
                poster="/saalihat/mustech_saalihat_static.png"
                className="max-h-full max-w-full w-auto h-full object-contain rounded-xl border border-[#d5ad5b] shadow-[0_0_24px_rgba(213,173,91,0.28)]"
              >
                <source src="/saalihat/saalihat_boomerang.mp4" type="video/mp4" />
                <source src="/saalihat/saalihat_boomerang.webm" type="video/webm" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/saalihat/mustech_saalihat_preview.gif"
                  alt="Saalihat App Preview"
                  className="max-h-full max-w-full w-auto h-full object-contain"
                />
              </video>
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src="/saalihat/mustech_saalihat_static.png"
                alt="Saalihat App Preview"
                className="max-h-full max-w-full w-auto h-full object-contain rounded-xl border border-white/15"
              />
            )}
          </div>
        </a>

        {/* -------------------------------------------------------------------
            WINDOW 2 (TOP-RIGHT): JENAZAH.SG
            Typography: Lora (Display Serif) + Plus Jakarta Sans (Body)
           ------------------------------------------------------------------- */}
        <a
          href="https://jenazah.sg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open jenazah.sg"
          className={`relative h-full w-full min-h-0 rounded-2xl overflow-hidden bg-[#FDFCF8] text-[#233219] p-4 sm:p-5 border flex items-center justify-between gap-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none ${windowLiftClass(
            "jenazah",
            "ring-2 ring-[#4A5D3F] border-[#4A5D3F]"
          )}`}
        >
          <span
            className={`absolute inset-x-0 top-0 transition-all duration-300 bg-[#92ae94] ${
              activeProduct === "jenazah" ? "h-1.5" : "h-1"
            }`}
          />

          {/* Left: Brand + Large QR */}
          <div className="flex flex-col justify-between h-full min-w-0 shrink-0 py-0.5">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/jenazah/logo-trim.png"
                  alt="jenazah.sg"
                  width={979}
                  height={905}
                  className="h-10 sm:h-12 w-auto object-contain shrink-0"
                />
                <h2 className="font-['Lora',Georgia,serif] text-2xl sm:text-3xl font-medium text-[#233219] leading-none tracking-tight">
                  jenazah.sg
                </h2>
              </div>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#4A5D3F] mt-1.5 font-medium">
                Muslim Bereavement &amp; Funeral Rites
              </p>
            </div>

            <div className="bg-white p-2 rounded-xl border border-black/15 shadow-sm w-fit">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jenazah/qr.svg"
                alt="jenazah.sg QR"
                className="w-28 h-28 sm:w-32 sm:h-32 lg:w-[132px] lg:h-[132px] object-contain"
              />
            </div>
          </div>

          {/* Right: Static Frame by Default, Smooth 60fps Video when Selected */}
          <div className="flex-1 h-full min-h-0 flex items-center justify-end overflow-hidden">
            {activeProduct === "jenazah" ? (
              <video
                key="jenazah-active-video"
                autoPlay
                loop
                muted
                playsInline
                poster="/jenazah/mustech_jenazah_static.png"
                className="max-h-full max-w-full w-auto h-full object-contain rounded-xl border border-[#4A5D3F] shadow-md"
              >
                <source src="/jenazah/mustech_jenazah_preview.mp4" type="video/mp4" />
                <source src="/jenazah/mustech_jenazah_preview.webm" type="video/webm" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/jenazah/mustech_jenazah_preview.gif"
                  alt="jenazah.sg Preview"
                  className="max-h-full max-w-full w-auto h-full object-contain"
                />
              </video>
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src="/jenazah/mustech_jenazah_static.png"
                alt="jenazah.sg Preview"
                className="max-h-full max-w-full w-auto h-full object-contain rounded-xl border border-black/10 shadow-sm"
              />
            )}
          </div>
        </a>

        {/* -------------------------------------------------------------------
            WINDOW 3 (BOTTOM-LEFT): TARABASE
            Typography: Bricolage Grotesque (Display) + DM Sans (Body)
            Motif: Authentic Kain Pucuk Rebung Top Band
           ------------------------------------------------------------------- */}
        <a
          href="https://tarabase.co"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open TaraBase"
          className={`relative h-full w-full min-h-0 rounded-2xl overflow-hidden bg-[#F2E6CF] text-[#06382B] border flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none ${windowLiftClass(
            "tarabase",
            "ring-2 ring-[#814038] border-[#814038]"
          )}`}
        >
          {/* Top Woven Band: Pucuk Rebung in Brick & Amber (Drifts when selected) */}
          <div
            aria-hidden="true"
            className={`w-full h-4 sm:h-5 shrink-0 ${
              activeProduct === "tarabase" ? "animate-tarabase-band" : ""
            }`}
            style={{
              backgroundImage: TARABASE_PUCUK_BRICK,
              backgroundSize: "20px 20px",
              backgroundRepeat: "repeat-x",
            }}
          />

          {/* Main TaraBase Content Area */}
          <div className="relative flex-1 min-h-0 w-full px-4 sm:px-5 pb-4 sm:pb-5 pt-3 flex items-center justify-between gap-4 overflow-hidden">
            {/* Left: Brand + Large QR */}
            <div className="flex flex-col justify-between h-full min-w-0 shrink-0 py-0.5">
              <div>
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/tarabase/icon.png"
                    alt="TaraBase"
                    width={541}
                    height={541}
                    className="h-9 w-9 sm:h-10 sm:w-10 object-contain shrink-0"
                  />
                  <Image
                    src="/brand/tarabase-wordmark.png"
                    alt="TaraBase"
                    width={951}
                    height={152}
                    className="h-4 sm:h-5 w-auto object-contain"
                  />
                </div>
                <p className="font-['Bricolage_Grotesque',sans-serif] text-xs sm:text-sm text-[#814038] mt-1.5 font-bold tracking-tight">
                  Telegram Pre-Orders &amp; PayNow OS
                </p>
              </div>

              <div className="bg-white p-1.5 sm:p-2 rounded-xl border-2 border-[#E5A84B] shadow-[0_6px_18px_rgba(90,50,20,0.14)] w-fit">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/tarabase/qr.svg"
                  alt="TaraBase QR"
                  className="w-28 h-28 sm:w-32 sm:h-32 lg:w-[132px] lg:h-[132px] object-contain"
                />
              </div>
            </div>

            {/* Right: Static Frame by Default, Smooth Video when Selected */}
            <div className="flex-1 h-full min-h-0 flex items-center justify-end overflow-hidden">
              {activeProduct === "tarabase" ? (
                <video
                  key="tarabase-active-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/tarabase/mustech_tarabase_static.png"
                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl border-2 border-[#06382B] shadow-md"
                >
                  <source src="/tarabase/mustech_tarabase_preview.mp4" type="video/mp4" />
                  <source src="/tarabase/mustech_tarabase_preview.webm" type="video/webm" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/tarabase/mustech_tarabase_preview.gif"
                    alt="TaraBase Preview"
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                </video>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src="/tarabase/mustech_tarabase_static.png"
                  alt="TaraBase Preview"
                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl border border-[#06382B]/25 shadow-sm"
                />
              )}
            </div>
          </div>
        </a>

        {/* -------------------------------------------------------------------
            WINDOW 4 (BOTTOM-RIGHT): MUSTECH JUMPSTART
            Typography: Lao MN (Display) + Signal Yellow Highlight
            Backdrop: Subtle Minor Constellations & Nebula Glow
           ------------------------------------------------------------------- */}
        <a
          href="/jumpstart"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open MusTech Jumpstart"
          className={`relative h-full w-full min-h-0 rounded-2xl overflow-hidden bg-[#050504] text-[#efe9d8] p-4 sm:p-5 border flex items-center justify-between gap-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none ${windowLiftClass(
            "jumpstart",
            "ring-2 ring-[#f5cb1d] border-[#f5cb1d]"
          )}`}
        >
          <span
            className={`absolute inset-x-0 top-0 transition-all duration-300 bg-[#f5cb1d] z-20 ${
              activeProduct === "jumpstart" ? "h-1.5" : "h-1"
            }`}
          />

          {/* Subtle Minor Constellation Backdrop */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 380"
            preserveAspectRatio="xMidYMid slice"
            className={`pointer-events-none absolute inset-0 w-full h-full z-0 transition-opacity duration-500 ${
              activeProduct === "jumpstart" ? "opacity-95" : "opacity-65"
            }`}
          >
            <defs>
              <radialGradient id="js-nebula-1" cx="22%" cy="32%" r="45%">
                <stop offset="0%" stopColor="rgba(36, 50, 132, 0.22)" />
                <stop offset="100%" stopColor="rgba(5, 5, 4, 0)" />
              </radialGradient>
              <radialGradient id="js-nebula-2" cx="78%" cy="70%" r="40%">
                <stop offset="0%" stopColor="rgba(20, 66, 115, 0.16)" />
                <stop offset="100%" stopColor="rgba(5, 5, 4, 0)" />
              </radialGradient>
            </defs>
            <rect width="600" height="380" fill="url(#js-nebula-1)" />
            <rect width="600" height="380" fill="url(#js-nebula-2)" />

            {/* Delicate Constellation Lines */}
            <g stroke="rgba(239, 233, 216, 0.13)" strokeWidth="0.75" fill="none">
              <polyline points="42,148 96,124 148,154 192,118" />
              <line x1="96" y1="124" x2="112" y2="78" />
              <polyline points="218,288 264,256 312,274 348,236" />
              <polyline points="440,52 488,36 538,64" />
            </g>

            {/* Constellation Vertex Stars */}
            <g fill="rgba(220, 232, 255, 0.55)">
              <circle cx="42" cy="148" r="1.3" />
              <circle cx="96" cy="124" r="1.8" fill="#f5cb1d" fillOpacity="0.75" />
              <circle cx="112" cy="78" r="1.1" />
              <circle cx="148" cy="154" r="1.4" />
              <circle cx="192" cy="118" r="1.6" />
              <circle cx="218" cy="288" r="1.2" />
              <circle cx="264" cy="256" r="1.7" fill="#f5cb1d" fillOpacity="0.65" />
              <circle cx="312" cy="274" r="1.3" />
              <circle cx="348" cy="236" r="1.1" />
              <circle cx="440" cy="52" r="1.2" />
              <circle cx="488" cy="36" r="1.6" />
              <circle cx="538" cy="64" r="1.2" />
              {/* Ambient Pinpoint Field Stars */}
              <circle cx="28" cy="230" r="0.8" opacity="0.45" />
              <circle cx="164" cy="212" r="0.9" opacity="0.5" />
              <circle cx="238" cy="64" r="1.0" opacity="0.45" />
              <circle cx="290" cy="108" r="0.8" opacity="0.35" />
              <circle cx="182" cy="338" r="0.9" opacity="0.4" />
              <circle cx="566" cy="322" r="1.0" opacity="0.4" />
            </g>
          </svg>

          {/* Left: Brand + Large QR */}
          <div className="relative z-10 flex flex-col justify-between h-full min-w-0 shrink-0 py-0.5">
            <div>
              <div className="inline-block [filter:drop-shadow(0_0_1px_rgba(239,233,216,0.6))]">
                <Image
                  src="/jumpstart/logo-trim.png"
                  alt="MusTech Jumpstart"
                  width={988}
                  height={426}
                  className="h-9 sm:h-11 w-auto object-contain"
                />
              </div>
              <p className="font-brand text-xs sm:text-sm mt-1.5 font-bold tracking-tight">
                <span className="bg-[#f5cb1d] text-[#111111] px-1.5 py-0.5">
                  AI Course for Founders
                </span>
              </p>
            </div>

            <div className="bg-white p-2 rounded-xl shadow-md w-fit">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jumpstart/qr.svg"
                alt="Jumpstart QR"
                className="w-28 h-28 sm:w-32 sm:h-32 lg:w-[132px] lg:h-[132px] object-contain"
              />
            </div>
          </div>

          {/* Right: Static Frame by Default, Smooth Video when Selected */}
          <div className="relative z-10 flex-1 h-full min-h-0 flex items-center justify-end overflow-hidden">
            {activeProduct === "jumpstart" ? (
              <video
                key="jumpstart-active-video"
                autoPlay
                loop
                muted
                playsInline
                poster="/jumpstart/mustech_jumpstart_static.png"
                className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl border border-[#f5cb1d] shadow-[0_0_24px_rgba(245,203,29,0.22)]"
              >
                <source src="/jumpstart/mustech_jumpstart_preview.mp4" type="video/mp4" />
                <source src="/jumpstart/mustech_jumpstart_preview.webm" type="video/webm" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/jumpstart/mustech_jumpstart_preview.gif"
                  alt="MusTech Jumpstart Preview"
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                />
              </video>
            ) : (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src="/jumpstart/mustech_jumpstart_static.png"
                alt="MusTech Jumpstart Preview"
                className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl border border-white/15 shadow-sm"
              />
            )}
          </div>
        </a>
      </main>
    </div>
  );
}
