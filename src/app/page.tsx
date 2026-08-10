import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Pillars from "@/components/Pillars";
import CorporateDetails from "@/components/CorporateDetails";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <Pillars />
        <CorporateDetails />
      </main>
      <Footer />
    </div>
  );
}
