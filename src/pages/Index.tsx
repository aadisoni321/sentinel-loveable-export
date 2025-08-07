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
  const revealY = useFooterReveal();
 
  return (
    <div className="bg-black">
      <div
        id="page-content"
        style={{ transform: `translate3d(0, ${-revealY}px, 0)`, willChange: "transform" }}
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
        {/* Sentinel element to trigger reveal computations near bottom */}
        <div id="footer-reveal-sentinel" className="h-px" />
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