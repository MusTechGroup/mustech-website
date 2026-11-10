"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

// The example site is opened from the film, which plays on two pages. The link carries ?from= so the way back
// returns the visitor to the film they were watching, not to a page they have never seen. Only known values
// are honoured: an unknown or missing value falls back to the how-it-works page.
const ORIGINS = {
  jumpstart: { href: "/jumpstart#see-it-work", label: "Back to AI Jumpstart" },
  "how-it-works": { href: "/jumpstart/how-it-works", label: "Back to the film" },
} as const;

type Origin = keyof typeof ORIGINS;

const noSubscribe = () => () => {};

function useOrigin(): Origin {
  // Read on the client only: the page is a static export, so the server render uses the fallback.
  return useSyncExternalStore(
    noSubscribe,
    () => {
      const from = new URLSearchParams(window.location.search).get("from");
      return from && from in ORIGINS ? (from as Origin) : "how-it-works";
    },
    () => "how-it-works" as Origin,
  );
}

export function ExampleBackBar() {
  const back = ORIGINS[useOrigin()];
  return (
    <p className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-2 bg-[#050504] px-4 py-2.5 text-[13px] text-[#efe9d8] sm:px-6">
      <Link href={back.href} className="font-semibold underline underline-offset-4 decoration-[#f5cb1d]/70">
        ← {back.label}
      </Link>
      <span>An example site from &ldquo;Make me a website&rdquo;. The business is illustrative.</span>
    </p>
  );
}

export function ExampleEndCard() {
  const back = ORIGINS[useOrigin()];
  return (
    <section className="bg-[#050504] px-4 py-14 text-center text-[#efe9d8] sm:px-6">
      <p className="font-brand text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-balance">
        Nadia asked for this in one line. Your AI can build yours.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <Link href="/jumpstart#register" className="rounded-xl bg-[#f5cb1d] px-7 py-3.5 text-[17px] font-bold text-[#14181a] hover:bg-[#ffd93b]">
          Register your interest
        </Link>
        <Link href={back.href} className="rounded-lg border border-white/30 px-6 py-3 text-[15px] font-bold hover:border-white/70">
          {back.label}
        </Link>
      </div>
    </section>
  );
}
