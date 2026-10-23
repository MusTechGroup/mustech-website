import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import PageTransition from "@/components/PageTransition";

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
    "MusTech Group (MUSTECH GROUP PTE. LTD.) is a Singapore-based technology holding company building ethical digital infrastructure, mobile applications, and civic platforms: Saalihat, jenazah.sg, TaraBase, and MusTech Jumpstart.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "MusTech Group",
    "MUSTECH GROUP PTE. LTD.",
    "Saalihat",
    "jenazah.sg",
    "TaraBase",
    "MusTech Jumpstart",
    "AI Course for Founders",
    "Singapore Bereavement Directory",
    "Home-Based Business Telegram Shop",
    "Singapore Tech Company",
    "Ethical Technology",
    "Islamic Tech Ecosystem",
    "Tayyib Architecture",
    "Amanah Digital Standards",
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
      "Singapore technology holding company building privacy-first mobile applications and civic digital infrastructure: Saalihat, jenazah.sg, TaraBase, and MusTech Jumpstart.",
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
      "Singapore technology holding company building privacy-first mobile applications and civic digital infrastructure: Saalihat, jenazah.sg, TaraBase, and MusTech Jumpstart.",
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
    legalName: "MUSTECH GROUP PTE. LTD.",
    identifier: "202609163C",
    taxID: "202609163C",
    url: "https://www.mustechgroup.com",
    logo: "https://www.mustechgroup.com/brand/Logo_Large_ClearBg.png",
    image: "https://www.mustechgroup.com/brand/Logo_Large_ClearBg.png",
    description:
      "Singapore-based technology holding company specialising in ethical digital infrastructure, mobile applications, and community platforms under the Tayyib Architecture framework.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Singapore",
      addressCountry: "SG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "admin@mustechgroup.com",
        contactType: "general enquiries and partnerships",
        areaServed: "SG",
        availableLanguage: ["English", "Malay"],
      },
      {
        "@type": "ContactPoint",
        email: "saalihat_support@mustechgroup.com",
        contactType: "customer support",
        areaServed: "SG",
        availableLanguage: ["English", "Malay"],
      },
    ],
    sameAs: [
      "https://jenazah.sg",
      "https://tarabase.co",
      "https://apps.apple.com/sg/app/saalihat/id6760661366",
      "https://play.google.com/store/apps/details?id=com.mustechgroup.saalihat",
    ],
    founder: {
      "@type": "Person",
      name: "Taufiq Rashid",
      jobTitle: "Founder & Data Analytics Lead",
      image: "https://www.mustechgroup.com/brand/founder.jpg",
      affiliation: [
        { "@type": "CollegeOrUniversity", name: "Singapore Management University" },
        { "@type": "CollegeOrUniversity", name: "ESSEC Business School" },
        { "@type": "CollegeOrUniversity", name: "University of Hong Kong" },
        { "@type": "CollegeOrUniversity", name: "City University of Hong Kong" },
      ],
    },
    subOrganization: [
      {
        "@type": "Organization",
        name: "jenazah.sg",
        url: "https://jenazah.sg",
        description: "Free funeral notices, a private family link, and step-by-step bereavement guides for Muslim families in Singapore.",
      },
      {
        "@type": "Organization",
        name: "TaraBase",
        url: "https://tarabase.co",
        description: "Telegram pre-orders and PayNow payments for home-based businesses in Singapore.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Saalihat",
        operatingSystem: "iOS, Android",
        applicationCategory: "LifestyleApplication",
        description: "Islamic community lecture aggregator and mosque directory in Singapore.",
        sameAs: [
          "https://apps.apple.com/sg/app/saalihat/id6760661366",
          "https://play.google.com/store/apps/details?id=com.mustechgroup.saalihat",
        ],
      },
      {
        "@type": "EducationalOccupationalProgram",
        name: "MusTech Jumpstart",
        url: "https://www.mustechgroup.com/jumpstart",
        description: "A hands-on course that teaches founders to run their business with AI tools, with a person checking every result.",
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
        <PageTransition />
        {children}
      </body>
    </html>
  );
}
