import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import PhilosophyInteractive from "@/components/PhilosophyInteractive";

export const metadata: Metadata = {
  title: "Tayyib Architecture & Values",
  description:
    "Our approach to building software is governed by ethical data stewardship and the Tayyib Architecture framework: Amanah (Sacred Trust), Tijarah (Ethical Enterprise), and Mizan (Equilibrium).",
  alternates: {
    canonical: "/philosophy",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/philosophy",
    siteName: "MusTech Group",
    title: "Tayyib Architecture & Values | MusTech Group",
    description:
      "Software engineered for utility, dignity, and sacred trust. Learn about MusTech Group's Tayyib Architecture principles.",
    images: [
      {
        url: "/brand/Logo_Large_ClearBg.png",
        width: 1200,
        height: 630,
        alt: "MusTech Group Philosophy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tayyib Architecture & Philosophy | MusTech Group",
    description:
      "Software engineered for utility, dignity, and sacred trust under the Tayyib Architecture framework.",
    images: ["/brand/Logo_Large_ClearBg.png"],
  },
};

const philosophySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Tayyib Architecture & Philosophy | MusTech Group",
  url: "https://www.mustechgroup.com/philosophy",
  description:
    "MusTech Group's foundational engineering manifesto governed by Amanah (Sacred Trust), Tijarah (Ethical Enterprise), and Mizan (Equilibrium).",
  publisher: {
    "@type": "Corporation",
    name: "MusTech Group",
    url: "https://www.mustechgroup.com",
    logo: "https://www.mustechgroup.com/brand/Logo_Large_ClearBg.png",
  },
};

export default function PhilosophyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#233219] text-[#fdfaf0]">
      <JsonLd schema={philosophySchema} />
      <Navbar />
      <PhilosophyInteractive />
      <Footer />
    </div>
  );
}
