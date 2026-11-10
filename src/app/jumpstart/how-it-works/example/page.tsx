import type { Metadata } from "next";
import NadiaSite from "@/components/jumpstart/NadiaSite";
import { ExampleBackBar, ExampleEndCard } from "@/components/jumpstart/ExampleBackBar";

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
      <ExampleBackBar />
      <main id="main-content" className="[&_.ns]:h-auto [&_.ns]:overflow-visible">
        <NadiaSite live />
      </main>
      <ExampleEndCard />
    </div>
  );
}
