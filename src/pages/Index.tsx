import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VideoHeroSection from "@/components/VideoHeroSection";
import HorizontalScrollingFeatures from "@/components/HorizontalScrollingFeatures";
import UnifyFinancesSection from "@/components/UnifyFinancesSection";

const Index = () => {
  return (
    <div className="bg-black">
      <Navigation />
      <HeroSection />
      <VideoHeroSection />
      <HorizontalScrollingFeatures />
      <UnifyFinancesSection />
    </div>
  );
};

export default Index;
