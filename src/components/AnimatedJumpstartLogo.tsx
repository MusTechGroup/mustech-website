"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface AnimatedJumpstartLogoProps {
  className?: string;
  priority?: boolean;
}

export default function AnimatedJumpstartLogo({
  className = "",
  priority = true,
}: AnimatedJumpstartLogoProps) {
  const [isStriking, setIsStriking] = useState(false);
  const [sparkKey, setSparkKey] = useState(0);

  useEffect(() => {
    // Periodic organic electric strike rhythm:
    // Strikes automatically every 4.5 seconds with a quick flash sequence
    const triggerLightning = () => {
      setIsStriking(true);
      setSparkKey((prev) => prev + 1);

      // Flash sequence: quick burst and settle
      setTimeout(() => setIsStriking(false), 380);
    };

    const interval = setInterval(() => {
      triggerLightning();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleManualStrike = () => {
    if (!isStriking) {
      setIsStriking(true);
      setSparkKey((prev) => prev + 1);
      setTimeout(() => setIsStriking(false), 450);
    }
  };

  return (
    <div
      className={`relative inline-block select-none group cursor-pointer ${className}`}
      onClick={handleManualStrike}
      onMouseEnter={handleManualStrike}
    >
      {/* Electric ambient glow layer during strike */}
      <div
        className={`absolute inset-0 -m-4 transition-opacity duration-150 pointer-events-none rounded-2xl ${
          isStriking
            ? "opacity-100 bg-[#f5cb1d]/15 blur-xl"
            : "opacity-0"
        }`}
      />

      {/* Primary Brand Image */}
      <div
        className={`relative z-10 transition-all duration-150 ${
          isStriking
            ? "filter drop-shadow-[0_0_16px_rgba(245,203,29,0.9)] scale-[1.02]"
            : "filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)] group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_14px_rgba(245,203,29,0.6)]"
        }`}
      >
        <Image
          src="/jumpstart/logo-trim.png"
          alt="MusTech Jumpstart"
          width={988}
          height={426}
          priority={priority}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Classic Multi-Strike SVG Lightning Bolts Overlay */}
      <svg
        key={sparkKey}
        viewBox="0 0 988 426"
        className={`absolute inset-0 z-20 w-full h-full pointer-events-none transition-opacity duration-100 ${
          isStriking ? "opacity-100" : "opacity-0"
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bolt 1: Jagged strike over the letters J & U */}
        <path
          d="M 60 40 L 95 110 L 75 125 L 120 195 L 90 205 L 140 280 L 115 290 L 160 360"
          stroke="#fff7c2"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lightning-bolt"
          style={{
            filter: "drop-shadow(0 0 8px #f5cb1d) drop-shadow(0 0 16px #ffea79)",
          }}
        />

        {/* Bolt 2: Electric arc cutting over M and P */}
        <path
          d="M 430 10 L 390 85 L 415 95 L 360 180 L 385 190 L 330 260"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lightning-bolt"
          style={{
            filter: "drop-shadow(0 0 8px #f5cb1d) drop-shadow(0 0 20px #f5cb1d)",
          }}
        />

        {/* Bolt 3: Micro spark at the corner of P */}
        <path
          d="M 580 80 L 550 130 L 565 138 L 530 185"
          stroke="#fff4a3"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lightning-bolt"
          style={{
            filter: "drop-shadow(0 0 6px #f5cb1d)",
          }}
        />

        {/* Bolt 4: Horizontal electric discharge along the rounded black box */}
        <path
          d="M 320 220 L 410 215 L 435 228 L 530 220 L 570 230 L 680 222"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lightning-bolt"
          style={{
            filter: "drop-shadow(0 0 6px #f5cb1d) drop-shadow(0 0 12px #fffae0)",
          }}
        />
      </svg>

      {/* Electric crackle styling */}
      <style jsx>{`
        .lightning-bolt {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: lightningStrike 0.35s ease-out forwards;
        }

        @keyframes lightningStrike {
          0% {
            stroke-dashoffset: 400;
            opacity: 0.2;
          }
          20% {
            stroke-dashoffset: 100;
            opacity: 1;
          }
          40% {
            opacity: 0.4;
          }
          60% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
