import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoHeroSection from "@/components/VideoHeroSection";
import HorizontalScrollingFeatures from "@/components/HorizontalScrollingFeatures";
import UnifyFinancesSection from "@/components/UnifyFinancesSection";
import ManageSubscriptionsCarousel from "@/components/ManageSubscriptionsCarousel";
import FAQSection from "@/components/FAQSection";
import PrivacySecuritySection from "@/components/PrivacySecuritySection";
import PricingSection from "@/components/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";
import SignInModal from "@/components/SignInModal";

const Index = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  return (
    <div className="bg-black">
      <Navigation onGetStartedClick={() => setIsSignInModalOpen(true)} />
      <HeroSection onGetStartedClick={() => setIsSignInModalOpen(true)} />
      <VideoHeroSection />
      <HorizontalScrollingFeatures />
      <UnifyFinancesSection />
      <ManageSubscriptionsCarousel />
      <FAQSection />
      <PrivacySecuritySection />
      <PricingSection />
      <FinalCTASection />
      <FooterSection />
      <SignInModal 
        isOpen={isSignInModalOpen} 
        onClose={() => setIsSignInModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
