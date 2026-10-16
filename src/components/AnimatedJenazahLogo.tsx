"use client";

import { useState } from "react";
import Image from "next/image";

interface AnimatedJenazahLogoProps {
  className?: string;
  priority?: boolean;
}

export default function AnimatedJenazahLogo({
  className = "",
  priority = true,
}: AnimatedJenazahLogoProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const triggerSunOrbit = () => {
    setIsAnimating(true);
    setAnimKey((prev) => prev + 1);

    // Exact 3.2s continuous, single-motion orbital transit from East to West at 75% span
    setTimeout(() => {
      setIsAnimating(false);
    }, 3200);
  };

  const handleMouseEnter = () => {
    if (!isAnimating) {
      triggerSunOrbit();
    }
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none group cursor-pointer overflow-visible ${className}`}
      onMouseEnter={handleMouseEnter}
      onClick={triggerSunOrbit}
    >
      {/* Outer staging area centered on the logo frame */}
      <div className="relative w-44 h-28 flex items-center justify-center overflow-visible">

        {/* -------------------------------------------------------------------
            THE CELESTIAL SUN (Solid Block Colour, 75% Distance, East to West)
            Pure solid block colour sun disc. Zero inner dots or rings.
           ------------------------------------------------------------------- */}
        {isAnimating && (
          <div
            key={`sun-${animKey}`}
            className="absolute inset-0 pointer-events-none z-10 overflow-visible flex items-center justify-center"
          >
            <div className="sun-east-to-west-motion relative flex items-center justify-center">
              {/* Expansive soft solar corona bloom */}
              <div className="absolute -inset-7 rounded-full bg-[#f5cb1d]/25 blur-xl pointer-events-none" />
              {/* Radiant mid-range warm golden aura */}
              <div className="absolute -inset-2.5 rounded-full bg-[#f5cb1d]/50 blur-md pointer-events-none" />
              {/* Solid colour block sun disc with vivid luminous glow */}
              <div className="relative z-10 w-6 h-6 rounded-full bg-[#f5cb1d] shadow-[0_0_18px_#f5cb1d,0_0_36px_rgba(245,203,29,0.85)]" />
            </div>
          </div>
        )}

        {/* Soft atmospheric sky bloom (zero rectangular borders) */}
        <div
          className={`absolute -inset-x-8 -top-8 h-32 rounded-full bg-gradient-to-b from-[#f5cb1d]/12 via-[#d5ad5b]/5 to-transparent blur-2xl pointer-events-none transition-opacity duration-700 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* -------------------------------------------------------------------
            DYNAMIC GROUND CAST SHADOW
            Counter-shifts smoothly beneath the arch as the sun moves across.
           ------------------------------------------------------------------- */}
        <div
          className={`absolute -bottom-2 w-28 h-3 rounded-[100%] bg-black/20 blur-sm pointer-events-none transition-opacity duration-300 ${
            isAnimating ? "opacity-100 animate-ground-shadow-east-west" : "opacity-40"
          }`}
        />

        {/* -------------------------------------------------------------------
            AUTHENTIC BRAND LOGO WITH DYNAMIC SOLAR DIRECTIONAL SHADOW
            Sun rises East (right) -> shadow West (left).
            Sun sets West (left) -> shadow East (right).
           ------------------------------------------------------------------- */}
        <div
          className={`relative z-20 h-28 w-auto max-w-[12rem] flex items-center justify-center transition-all duration-300 ${
            isAnimating
              ? "animate-arch-shadow-east-west scale-[1.01]"
              : "filter drop-shadow-[0_4px_12px_rgba(74,93,63,0.15)] group-hover:scale-[1.02]"
          }`}
        >
          <Image
            src="/jenazah/logo-trim.png"
            alt="jenazah.sg Official Brand Logo"
            width={979}
            height={905}
            priority={priority}
            className="h-28 w-auto max-w-[12rem] object-contain"
          />
        </div>

      </div>

      {/* Embedded CSS for 1-motion East-to-West celestial arc (75% distance) */}
      <style jsx>{`
        /* 
         * 1-MOTION EAST TO WEST CELESTIAL ARC (70% OF PREVIOUS DISTANCE):
         * Starts in the East (Right: X = +74px, Y = +32px),
         * Arcs over high noon zenith (Center: X = 0, Y = -80px),
         * Sets in the West (Left: X = -74px, Y = +32px).
         */
        .sun-east-to-west-motion {
          offset-path: path("M 74 32 Q 0 -80, -74 32");
          offset-rotate: 0deg;
          animation: travelEastToWest 3.2s cubic-bezier(0.38, 0, 0.22, 1) forwards;
        }

        @keyframes travelEastToWest {
          0% {
            offset-distance: 0%;
            opacity: 0;
            transform: scale(0.8);
          }
          10% {
            opacity: 1;
            transform: scale(0.95);
          }
          50% {
            transform: scale(1.1);
          }
          90% {
            opacity: 1;
            transform: scale(0.95);
          }
          100% {
            offset-distance: 100%;
            opacity: 0;
            transform: scale(0.8);
          }
        }

        /* Directional shadow on the arch (scaled to 70% span) */
        @keyframes archShadowEastToWest {
          0% {
            filter: drop-shadow(0px 4px 8px rgba(42, 51, 40, 0.14));
          }
          15% {
            /* Sun low East (right) -> shadow cast West (left) */
            filter: drop-shadow(-10px 8px 10px rgba(35, 42, 32, 0.28));
          }
          50% {
            /* High Noon Zenith -> shadow directly below */
            filter: drop-shadow(0px 18px 14px rgba(35, 42, 32, 0.38));
          }
          85% {
            /* Sun low West (left) -> shadow cast East (right) */
            filter: drop-shadow(10px 8px 10px rgba(35, 42, 32, 0.28));
          }
          100% {
            filter: drop-shadow(0px 4px 8px rgba(42, 51, 40, 0.14));
          }
        }

        .animate-arch-shadow-east-west {
          animation: archShadowEastToWest 3.2s cubic-bezier(0.38, 0, 0.22, 1) forwards;
        }

        /* Ground contact counter-shadow (scaled to 70% span) */
        @keyframes groundShadowEastWest {
          0% {
            transform: translate3d(0px, 0, 0) scaleX(0.9);
          }
          18% {
            transform: translate3d(-10px, 0, 0) scaleX(1.1);
          }
          50% {
            transform: translate3d(0px, 0, 0) scaleX(1);
          }
          82% {
            transform: translate3d(10px, 0, 0) scaleX(1.1);
          }
          100% {
            transform: translate3d(0px, 0, 0) scaleX(0.9);
          }
        }

        .animate-ground-shadow-east-west {
          animation: groundShadowEastWest 3.2s cubic-bezier(0.38, 0, 0.22, 1) forwards;
        }
      `}</style>
    </div>
  );
}
