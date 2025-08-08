import { Button } from "@/components/ui/button";
import TypewriterEffect from "./TypewriterEffect";
import AnimatedAtmosphere from "./AnimatedAtmosphere";
import "@/styles/atmosphere-animations.css";

interface HeroSectionProps {
  onGetStartedClick: () => void;
}

const HeroSection = ({ onGetStartedClick }: HeroSectionProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-black pt-20 flex items-end relative overflow-hidden">
      {/* Animated Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-blue-900/20"></div>
        <AnimatedAtmosphere />
      </div>
      
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-[120px] py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Notification Banner - positioned above SENTINEL */}
            <div className="mb-4">
              <div className="inline-flex items-center">
                <span className="text-xl mr-2">⚡</span>
                <span className="text-white text-sm font-medium">
                  Sentinel Is Live! Start Saving. 
                  <button 
                    onClick={() => scrollToSection("pricing")}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 ml-1 underline cursor-pointer"
                  >
                    Explore Now →
                  </button>
                </span>
              </div>
            </div>

            {/* Large SENTINEL Logo */}
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-wide mb-8">
                SENTINEL
              </h1>
            </div>

            {/* Typewriter Effect */}
            <TypewriterEffect />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Main Headline */}
            <h2 className="text-lg font-normal text-white leading-tight">
              Understand. Detect. Protect.
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Sentinel is your AI watchdog for subscriptions—quietly monitoring signups, trials, and billing traps so you don't have to.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="btn-primary px-8 py-4 font-semibold text-base w-40"
                onClick={() => scrollToSection("pricing")}
              >
                Get Sentinel
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-secondary px-8 py-4 font-semibold text-base w-40"
                onClick={onGetStartedClick}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;