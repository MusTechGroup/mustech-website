"use client";

import { useState } from "react";
import Image from "next/image";

interface AnimatedTarabaseLogoProps {
  className?: string;
  priority?: boolean;
}

export default function AnimatedTarabaseLogo({
  className = "",
  priority = true,
}: AnimatedTarabaseLogoProps) {
  const [stage, setStage] = useState<"idle" | "drawing" | "sailing">("idle");
  const [cycleKey, setCycleKey] = useState(0);

  const startDrawAndSail = () => {
    setStage("drawing");
    setCycleKey((prev) => prev + 1);

    // Calligraphic sequence: rapid top-left, rapid slash, deliberate hull, pause, whip back, pause, whip up (~2.22s)
    setTimeout(() => {
      setStage("sailing");
    }, 2220);
  };

  const handleMouseEnter = () => {
    if (stage === "idle") {
      startDrawAndSail();
    }
  };

  const handleMouseLeave = () => {
    // When mouse leaves after sailing, gently dock back to calm idle
    if (stage === "sailing") {
      setTimeout(() => {
        setStage("idle");
      }, 400);
    }
  };

  /*
   * 5 Sequential Strokes:
   * 1. Horizontal line from left to right: (35, 102) -> (195, 102) [forms top arm of '>']
   * 2. The curved slash: (195, 102) -> (15, 395) [curves back, forming clear '>' corner, no mast bleed]
   * 3. The semicircle bottom: (15, 395) -> (538, 375) [hull to stern tip]
   * 4. The horizontal line: (538, 375) -> (218, 388) [deck line]
   * 5. The vertical line: (218, 388) -> (218, 10) [mast straight UP to apex, completing logo]
   */
  const stroke1 = "M 35 102 L 195 102";
  const stroke2 = "M 195 102 C 160 140, 70 260, 15 395";
  const stroke3 = "M 15 400 C 140 535, 340 530, 538 375";
  const stroke4 = "M 538 375 L 218 388";
  const stroke5 = "M 218 388 L 218 10";

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center select-none group cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={startDrawAndSail}
    >
      {/* Outer frame matching standard portfolio logo height h-28 */}
      <div className="relative h-28 flex flex-col items-center justify-center">

        {/* -------------------------------------------------------------------
            THE TARABASE EMBLEM (5 Sequential Strokes in 2.0s, then Quiet Moor)
            Persistent image rendering: zero blinking or opacity flicker.
           ------------------------------------------------------------------- */}
        <div
          className={`relative w-20 h-20 transition-all duration-300 ${
            stage === "sailing"
              ? "animate-quiet-moor-sail filter drop-shadow-[0_8px_16px_rgba(201,90,68,0.22)]"
              : "group-hover:scale-105"
          }`}
        >
          {/* Ambient Terracotta Glow while sailing */}
          <div
            className={`absolute inset-0 rounded-full bg-[#c95a44]/12 blur-lg transition-opacity duration-500 pointer-events-none ${
              stage === "sailing" ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* 
            PERSISTENT EMBLEM (Never unmounted, never blinks)
            During 'drawing': progressively revealed by the 5 sequential mask strokes.
            During 'sailing' / 'idle': fully revealed at 100% pristine resolution.
          */}
          <div className="relative w-full h-full z-10">
            <svg
              viewBox="0 0 541 541"
              className="w-full h-full pointer-events-none overflow-visible"
            >
              <defs>
                <mask id={`tb-seq-mask-${cycleKey}`}>
                  <rect width="541" height="541" fill="black" />

                  {/* 1. Horizontal line from left to right (0.00s - 0.35s) */}
                  <path
                    d={stroke1}
                    stroke="white"
                    strokeWidth="65"
                    strokeLinecap="round"
                    fill="none"
                    className={stage === "drawing" ? "animate-seq-stroke-1" : "stroke-finished"}
                  />

                  {/* 2. The curved slash (0.35s - 0.85s, forms '>' corner then curves down) */}
                  <path
                    d={stroke2}
                    stroke="white"
                    strokeWidth="65"
                    strokeLinecap="round"
                    fill="none"
                    className={stage === "drawing" ? "animate-seq-stroke-2" : "stroke-finished"}
                  />

                  {/* 3. The semicircle bottom hull */}
                  <path
                    d={stroke3}
                    stroke="white"
                    strokeWidth="65"
                    strokeLinecap="round"
                    fill="none"
                    className={stage === "drawing" ? "animate-seq-stroke-3" : "stroke-finished"}
                  />

                  {/* 
                    DECK SHIELD (Protects the Stern Pause Illusion):
                    Masks out the horizontal deck corridor in black so Stroke 3's end cap
                    never bleeds into the deck line prematurely.
                    Stroke 4 will paint pure white directly over this area when whipping back!
                  */}
                  <rect
                    x="218"
                    y="355"
                    width="314"
                    height="42"
                    fill="black"
                  />

                  {/* 4. The horizontal line across deck (whip back) */}
                  <path
                    d={stroke4}
                    stroke="white"
                    strokeWidth="70"
                    strokeLinecap="round"
                    fill="none"
                    className={stage === "drawing" ? "animate-seq-stroke-4" : "stroke-finished"}
                  />

                  {/* 5. The vertical line straight UP (1.75s - 2.00s) */}
                  <path
                    d={stroke5}
                    stroke="white"
                    strokeWidth="65"
                    strokeLinecap="round"
                    fill="none"
                    className={stage === "drawing" ? "animate-seq-stroke-5" : "stroke-finished"}
                  />

                  {/* Seamless 100% white reveal layer completing at 1.95s to eliminate any flicker */}
                  <rect
                    width="541"
                    height="541"
                    fill="white"
                    className={stage === "drawing" ? "mask-full-white" : "fill-white"}
                  />
                </mask>
              </defs>

              {/* The 100% Authentic TaraBase Icon */}
              <image
                href="/tarabase/icon.png"
                x="0"
                y="0"
                width="541"
                height="541"
                mask={stage === "idle" ? undefined : `url(#tb-seq-mask-${cycleKey})`}
              />
            </svg>
          </div>

          {/* 
            QUIET MOOR WATER WAKE RIPPLES
            Gentle harbor waves lapping softly beneath the keel while moored.
          */}
          <div
            className={`absolute -bottom-2 inset-x-0 h-4 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-700 ${
              stage === "sailing" ? "opacity-100" : "opacity-0"
            }`}
          >
            <svg viewBox="0 0 100 20" className="w-24 h-4 fill-none overflow-visible">
              {/* Quiet harbor ripple 1 */}
              <path
                d="M 10 10 Q 30 14, 50 10 T 90 10"
                stroke="#c95a44"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="animate-quiet-wave-1"
                opacity="0.5"
              />
              {/* Quiet harbor ripple 2 */}
              <path
                d="M 20 15 Q 40 11, 60 15 T 80 15"
                stroke="#814038"
                strokeWidth="1.25"
                strokeLinecap="round"
                className="animate-quiet-wave-2"
                opacity="0.35"
              />
            </svg>
          </div>
        </div>

        {/* -------------------------------------------------------------------
            WORDMARK ("TaraBase")
            Grounded beneath the boat, matching the official identity.
           ------------------------------------------------------------------- */}
        <div className="relative z-10 mt-1 h-5 w-auto flex items-center justify-center">
          <Image
            src="/brand/tarabase-wordmark.png"
            alt="TaraBase Wordmark"
            width={753}
            height={124}
            priority={priority}
            className="h-4 w-auto object-contain"
          />
        </div>

      </div>

      {/* Embedded CSS for 5 sequential stroke timings totaling exactly 2.0s & Quiet Moor sailing */}
      <style jsx>{`
        /* Completed stroke state */
        .stroke-finished {
          stroke-dashoffset: 0;
        }

        /* 
         * CALLIGRAPHIC 5-STROKE PACING:
         * 1 & 2: Rapid flicks (0.00s - 0.50s)
         * 3: Deliberate hull sweep (starts slow, accelerates to stern) (0.50s - 1.45s)
         * Pause slightly at stern (1.45s - 1.60s)
         * 4: Whip back across deck (1.60s - 1.82s)
         * Pause at mast base (1.82s - 1.96s)
         * 5: Whip up straight to apex (1.96s - 2.20s)
         * Seamless sail at 2.22s
         */

        /* 1. Rapid horizontal flick from left to right (0.00s - 0.20s) */
        .animate-seq-stroke-1 {
          stroke-dasharray: 180;
          stroke-dashoffset: 180;
          animation: drawStroke1 0.20s ease-out forwards;
        }

        @keyframes drawStroke1 {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* 2. Rapid curved slash down to prow (0.20s - 0.50s) */
        .animate-seq-stroke-2 {
          stroke-dasharray: 380;
          stroke-dashoffset: 380;
          animation: drawStroke2 0.30s ease-out 0.20s forwards;
        }

        @keyframes drawStroke2 {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* 3. Deliberate semicircle hull: starts slow, accelerates through keel to stern (0.50s - 1.45s) */
        .animate-seq-stroke-3 {
          stroke-dasharray: 620;
          stroke-dashoffset: 620;
          animation: drawStroke3 0.95s cubic-bezier(0.65, 0.0, 0.85, 1) 0.50s forwards;
        }

        @keyframes drawStroke3 {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* [Pause slightly at stern tip: 1.45s - 1.60s] */

        /* 4. Whip back across deck to mast base (1.60s - 1.82s) */
        .animate-seq-stroke-4 {
          stroke-dasharray: 350;
          stroke-dashoffset: 350;
          animation: drawStroke4 0.22s cubic-bezier(0.1, 0.9, 0.2, 1) 1.60s forwards;
        }

        @keyframes drawStroke4 {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* [Pause at mast base: 1.82s - 1.96s] */

        /* 5. Whip straight UP to apex (1.96s - 2.20s) */
        .animate-seq-stroke-5 {
          stroke-dasharray: 410;
          stroke-dashoffset: 410;
          animation: drawStroke5 0.24s cubic-bezier(0.12, 0.9, 0.25, 1) 1.96s forwards;
        }

        @keyframes drawStroke5 {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Seamless 100% full reveal at 2.16s */
        @keyframes maskFullWhite {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .mask-full-white {
          opacity: 0;
          animation: maskFullWhite 0.06s ease-in 2.16s forwards;
        }

        .fill-white {
          opacity: 1;
        }

        /* 
         * QUIET MOOR SAILING:
         * Gentle, tranquil nautical rocking motion:
         * subtle pitch and heave as the boat sways at dock on calm waters.
         */
        @keyframes quietMoorSail {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-2.5px) rotate(2deg);
          }
          50% {
            transform: translateY(1px) rotate(0.5deg);
          }
          75% {
            transform: translateY(2px) rotate(-1.75deg);
          }
        }

        .animate-quiet-moor-sail {
          animation: quietMoorSail 4.2s ease-in-out infinite;
        }

        /* Quiet harbor water ripples */
        @keyframes quietWave1 {
          0%, 100% {
            transform: translateX(-3px) scaleY(0.9);
          }
          50% {
            transform: translateX(3px) scaleY(1.15);
          }
        }

        .animate-quiet-wave-1 {
          animation: quietWave1 3s ease-in-out infinite;
        }

        @keyframes quietWave2 {
          0%, 100% {
            transform: translateX(2px) scaleY(1.1);
          }
          50% {
            transform: translateX(-2px) scaleY(0.85);
          }
        }

        .animate-quiet-wave-2 {
          animation: quietWave2 3.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
