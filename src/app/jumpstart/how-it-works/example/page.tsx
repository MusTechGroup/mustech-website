import type { Metadata } from "next";
import Link from "next/link";
import NadiaSite from "@/components/jumpstart/NadiaSite";

// The site from the "Make me a website" ad, as a real page: open it on a phone and a laptop.
// The business is illustrative, so the page is kept out of search.
export const metadata: Metadata = {
  title: "Example Site: Jahit Nadia | AI Jumpstart",
  description: "The example site from \"Make me a website\": what a founder's AI builds, in the founder's own brand. The business is illustrative.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/jumpstart/how-it-works/example" },
};

export default function ExampleSitePage() {
  return (
    <div className="min-h-screen bg-[#f6efe4]">
      <p className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-2 bg-[#050504] px-4 py-2.5 text-[13px] text-[#efe9d8] sm:px-6">
        <span>An example site from &ldquo;Make me a website&rdquo;. The business is illustrative.</span>
        <Link href="/jumpstart/how-it-works" className="font-semibold underline underline-offset-4 decoration-[#f5cb1d]/70">
          Back to the film
        </Link>
      </p>
      <main id="main-content" className="[&_.ns]:h-auto [&_.ns]:overflow-visible">
        <NadiaSite live />
      </main>
    </div>
  );
}
