import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoHeroSection from "@/components/VideoHeroSection";
import HorizontalScrollingFeatures from "@/components/HorizontalScrollingFeatures";

import ManageSubscriptionsCarousel from "@/components/ManageSubscriptionsCarousel";
import FAQSection from "@/components/FAQSection";
import PrivacySecuritySection from "@/components/PrivacySecuritySection";
import PricingSection from "@/components/PricingSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";
import SignInModal from "@/components/SignInModal";
import useFooterReveal from "@/hooks/use-footer-reveal";

const Index = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const { contentRef } = useFooterReveal();

  return (
    <div className="bg-black">
      <div
        ref={contentRef}
        className="transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ willChange: "transform" }}
      >
        <Navigation onGetStartedClick={() => setIsSignInModalOpen(true)} />
        <HeroSection onGetStartedClick={() => setIsSignInModalOpen(true)} />
        <VideoHeroSection />
        <HorizontalScrollingFeatures />
        
        <ManageSubscriptionsCarousel />
        <FAQSection />
        <PrivacySecuritySection />
        <PricingSection />
        <FinalCTASection />
        <div id="footer-io-trigger" className="h-px" />
      </div>
      <FooterSection />
      <SignInModal 
        isOpen={isSignInModalOpen} 
        onClose={() => setIsSignInModalOpen(false)} 
      />
    </div>
  );
};

export default Index;