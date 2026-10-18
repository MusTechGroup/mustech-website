import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Saalihat app, the MusTech Group website, and MusTech Jumpstart sign-ups.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | MusTech Group",
    description:
      "Privacy policy for the Saalihat app, the MusTech Group website, and MusTech Jumpstart sign-ups.",
    url: "https://www.mustechgroup.com/privacy-policy",
    siteName: "MusTech Group",
    locale: "en_SG",
    type: "website",
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
    title: "Privacy Policy | MusTech Group",
    description:
      "Privacy policy for the Saalihat app, the MusTech Group website, and MusTech Jumpstart sign-ups.",
    images: ["/brand/Logo_Large_ClearBg.png"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-grow">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  );
}
