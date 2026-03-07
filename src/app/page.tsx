import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PhoneShowcaseSection } from "@/components/sections/PhoneShowcaseSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { RetailersSection } from "@/components/sections/RetailersSection";
import { ComingSoonSection } from "@/components/sections/ComingSoonSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { StickyCTA } from "@/components/ui/StickyCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <PhoneShowcaseSection />
      <HowItWorksSection />
      <RetailersSection />
      <ComingSoonSection />
      <WaitlistSection />
      <FooterSection />
      <StickyCTA />
    </>
  );
}
