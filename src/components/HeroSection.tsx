import { Button } from "@/components/ui/button";
import TypewriterEffect from "./TypewriterEffect";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-black pt-20 flex items-center">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-[120px] py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Notification Banner */}
            <div className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 border border-blue-600/30 hover-lift">
              <span className="text-xl mr-2">⚡</span>
              <span className="text-white text-sm font-medium mr-3">
                Sentinel Is Live! Start Saving.
              </span>
              <button 
                onClick={() => scrollToSection("features")}
                className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
              >
                Explore Now &gt;
              </button>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
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
                className="btn-primary px-8 py-4 rounded-xl font-semibold text-base w-40"
                onClick={() => scrollToSection("pricing")}
              >
                Get Sentinel
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-secondary px-8 py-4 rounded-xl font-semibold text-base w-40"
                onClick={() => scrollToSection("signin")}
              >
                Get Started
              </Button>
            </div>

            {/* Small Link */}
            <div className="pt-4">
              <button 
                onClick={() => scrollToSection("pricing")}
                className="text-blue-500 text-sm font-medium hover:underline transition-all duration-300"
              >
                Get Sentinel &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;