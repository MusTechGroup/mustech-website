import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | MusTech Group & Saalihat",
  description:
    "Official Privacy Policy for Saalihat and MusTech Group. Built on the Islamic ethical principle of Amanah (sacred trust) with strict data minimization.",
  alternates: {
    canonical: "https://www.mustechgroup.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | MusTech Group",
    description: "Official Privacy Policy for Saalihat app and MusTech Group.",
  },
};

export default function HomePrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  );
}
