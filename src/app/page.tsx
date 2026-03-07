import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { RetailerStrip } from "@/components/sections/RetailerStrip";
import { HowMilkWorks } from "@/components/sections/HowMilkWorks";
import { FeatureDeepDive } from "@/components/sections/FeatureDeepDive";
import { ComingSoonSection } from "@/components/sections/ComingSoonSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <RetailerStrip />
      <HowMilkWorks />
      <FeatureDeepDive />
      <ComingSoonSection />
      <FAQSection />
      <DownloadCTA />
      <FooterSection />
    </>
  );
}
