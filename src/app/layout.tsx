import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";

export const viewport: Viewport = {
  themeColor: "#f8df98", // Custard
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mustechgroup.com"),
  title: {
    default: "MusTech Group | Ethical Technology Holding Company",
    template: "%s | MusTech Group",
  },
  description:
    "MusTech Group is a Singapore-based technology holding company specialising in mobile application development, ethical digital infrastructure, and data-driven community ecosystems. Developer of Saalihat.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "MusTech Group",
    "Jumpstart",
    "Agentic AI Masterclass",
    "Autonomous Organisation",
    "LLM Engineering",
    "Founder Programme Singapore",
    "Saalihat",
    "Singapore Tech Company",
    "Ethical Technology",
    "Islamic Tech Ecosystem",
    "Tayyib Architecture",
    "Community Solutions",
    "Amanah Tech",
    "Mobile Application Development",
  ],
  authors: [{ name: "MusTech Group" }],
  creator: "MusTech Group",
  publisher: "MusTech Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://www.mustechgroup.com",
    siteName: "MusTech Group",
    title: "MusTech Group | Ethical Technology Holding Company",
    description:
      "Singapore-based technology holding company specialising in mobile application development and data-driven community solutions. Creator of Saalihat.",
    images: [
      {
        url: "/brand/Logo_Large_ClearBg.png",
        width: 1200,
        height: 630,
        alt: "MusTech Group Corporate Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MusTech Group | Ethical Technology Holding Company",
    description:
      "Singapore-based technology holding company specialising in mobile application development and data-driven community solutions.",
    images: ["/brand/Logo_Large_ClearBg.png"],
  },
  icons: {
    icon: "/brand/Logo_Large_ClearBg.png",
    apple: "/brand/Logo_Large_ClearBg.png",
  },
};

const corporationSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "MusTech Group",
    legalName: "MusTech Group Pte. Ltd.",
    identifier: "202609163C",
    taxID: "202609163C",
    url: "https://www.mustechgroup.com",
    logo: "https://www.mustechgroup.com/brand/Logo_Large_ClearBg.png",
    image: "https://www.mustechgroup.com/brand/Logo_Large_ClearBg.png",
    description:
      "Singapore-based technology holding company specialising in ethical digital infrastructure, mobile applications, and community platforms.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Singapore",
      addressCountry: "SG",
    },
    founder: {
      "@type": "Person",
      name: "Taufiq Rashid",
      jobTitle: "Founder & Data Analytics Lead",
      image: "https://www.mustechgroup.com/brand/founder.jpg",
    },
    subOrganization: [
      {
        "@type": "Organization",
        name: "jenazah.sg",
        url: "https://jenazah.sg",
        description: "Stateless grief navigation, legal triage, and live funeral coordination platform for Singapore.",
      },
      {
        "@type": "Organization",
        name: "TaraBase",
        url: "https://tarabase.co",
        description: "Telegram pre-orders and PayNow payment platform for home bakers, cooks, and small-batch makers.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Saalihat",
        operatingSystem: "iOS, Android",
        applicationCategory: "LifestyleApplication",
        description: "Islamic community lecture aggregator and mosque directory in Southeast Asia.",
        sameAs: [
          "https://apps.apple.com/sg/app/saalihat/id6760661366",
          "https://play.google.com/store/apps/details?id=com.mustechgroup.saalihat",
        ],
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "MusTech Jumpstart",
        url: "https://www.mustechgroup.com/jumpstart",
        description: "Agentic AI & autonomous organisation masterclass deconstructing multi-agent orchestration, LLM engineering, and bespoke venture architecture.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MusTech Group",
    url: "https://www.mustechgroup.com",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-SG" className="scroll-smooth antialiased">
      <body className="min-h-screen flex flex-col bg-[var(--brand-bg)] text-[var(--color-primary-dark)] font-sans">
        <JsonLd schema={corporationSchema} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-[var(--brand-bg)] text-[var(--color-primary-dark)] px-4 py-2 border border-black/10 shadow-lg font-bold text-sm">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
