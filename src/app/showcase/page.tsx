import type { Metadata } from "next";
import ShowcaseMatrix from "@/components/ShowcaseMatrix";

export const metadata: Metadata = {
  title: "Ecosystem Showcase | Saalihat, jenazah.sg, TaraBase & Jumpstart",
  description:
    "Interactive 4-quadrant showcase of the MusTech Group ecosystem: Saalihat (Mosque & Kuliah App), jenazah.sg (Bereavement Utility), TaraBase (Home Business Pre-Orders), and MusTech Jumpstart (AI Course for Founders).",
  alternates: {
    canonical: "/showcase",
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com/showcase",
    siteName: "MusTech Group",
    title: "MusTech Group Ecosystem Showcase",
    description:
      "Interactive 4-quadrant showcase of Saalihat, jenazah.sg, TaraBase, and MusTech Jumpstart.",
    images: [
      {
        url: "/brand/Logo_Large_ClearBg.png",
        width: 1200,
        height: 630,
        alt: "MusTech Group Ecosystem Showcase",
      },
    ],
  },
};

export default function ShowcasePage() {
  return <ShowcaseMatrix />;
}
