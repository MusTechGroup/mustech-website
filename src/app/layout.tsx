import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  keywords: [
    "MusTech Group",
    "Saalihat",
    "Singapore Tech Company",
    "Ethical Technology",
    "Islamic Tech Ecosystem",
    "Mosque Directory",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen flex flex-col bg-[var(--brand-bg)] text-[var(--color-primary-dark)] font-sans">
        {children}
      </body>
    </html>
  );
}
