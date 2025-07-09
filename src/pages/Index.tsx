import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import SavingsSection from "@/components/SavingsSection";
import LegalSection from "@/components/LegalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <PricingSection />
      <SavingsSection />
      <LegalSection />
      <Footer />
    </div>
  );
};

export default Index;
