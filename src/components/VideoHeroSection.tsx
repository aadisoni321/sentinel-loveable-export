import { useState } from "react";
import AnimatedIntroLabel from "@/components/AnimatedIntroLabel";

const VideoHeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="product" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        {/* Animated Intro Label */}
        <AnimatedIntroLabel className="mb-6" text="INTRODUCING SENTINEL" />

        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-gradient-calm leading-tight mb-20 max-w-4xl mx-auto whitespace-nowrap font-playfair">
          The Smartest Way to Manage Subscriptions
        </h2>

        {/* Video Container */}
        <div 
          className={`relative w-full max-w-7xl mx-auto aspect-[16/9] overflow-hidden hover-lift cursor-pointer transition-all duration-500 ${
            isHovered ? 'scale-[1.02]' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundImage: `linear-gradient(135deg, 
              rgba(255, 107, 53, 0.8) 0%, 
              rgba(255, 68, 68, 0.6) 25%, 
              rgba(147, 51, 234, 0.7) 50%, 
              rgba(59, 130, 246, 0.8) 75%, 
              rgba(0, 204, 102, 0.6) 100%
            ), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600"><defs><radialGradient id="g" cx="50%" cy="30%"><stop offset="0%" stop-color="%23ff6b35" stop-opacity="0.8"/><stop offset="50%" stop-color="%23ff4444" stop-opacity="0.4"/><stop offset="100%" stop-color="%23000" stop-opacity="1"/></radialGradient></defs><rect width="1000" height="600" fill="url(%23g)"/><g fill="%23fff" opacity="0.8"><circle cx="100" cy="100" r="1"/><circle cx="300" cy="80" r="1.5"/><circle cx="500" cy="120" r="1"/><circle cx="700" cy="90" r="1.2"/><circle cx="900" cy="110" r="1"/><circle cx="200" cy="200" r="1.3"/><circle cx="600" cy="180" r="1"/><circle cx="800" cy="220" r="1.5"/></g><polygon points="0,400 100,380 200,390 300,370 400,385 500,375 600,380 700,370 800,385 900,375 1000,390 1000,600 0,600" fill="%23000" opacity="0.9"/></svg>')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`w-20 h-20 rounded-full glass-effect flex items-center justify-center transition-all duration-300 ${
                isHovered ? 'scale-110 bg-white/25' : 'bg-white/15'
              }`}
              style={{
                border: `2px solid rgba(255, 255, 255, ${isHovered ? 0.5 : 0.3})`,
              }}
            >
              <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
            </div>
          </div>

          {/* Pulse Animation Ring */}
          <div className={`absolute inset-0 flex items-center justify-center ${isHovered ? 'animate-pulse' : ''}`}>
            <div className="w-32 h-32 rounded-full border border-white/20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHeroSection;