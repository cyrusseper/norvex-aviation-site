import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { FleetSection } from "@/components/sections/FleetSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InvestorSection } from "@/components/sections/InvestorSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06131f]">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CoverageSection />
        <FleetSection />
        <InvestorSection />
      </main>
      <Footer />
    </div>
  );
}
