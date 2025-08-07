import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ManageSubscriptionsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const features = [
    {
      id: 0,
      number: "1",
      title: "Track Subscriptions",
      content: "Sentinel monitors trials, subscriptions, and renewal patterns from the moment you sign up. It intelligently tracks confirmation emails, billing patterns, and known services—keeping your dashboard up to date without needing access to your financial data. Advanced detection algorithms work seamlessly in the background while maintaining complete privacy."
    },
    {
      id: 1,
      number: "2",
      title: "One-Click\nCancellation",
      content: "Easily cancel unwanted subscriptions in seconds—no login hoops, customer service calls, or hidden steps. Sentinel handles service-specific flows behind the scenes, giving you a simple 'cancel' button that just works. We've mapped out cancellation flows for thousands of services to ensure maximum success rates."
    },
    {
      id: 2,
      number: "3",
      title: "Lightweight Browser\nExtension",
      content: "The Sentinel Assistant detects trials and signups in real time while you browse sites like Netflix, Audible, or Spotify. It works locally in your browser—never tracking history or storing sensitive data. Our intelligent detection engine recognizes subscription patterns across thousands of websites without compromising your privacy."
    },
    {
      id: 3,
      number: "4",
      title: "Analytics & Usage\nInsights",
      content: "See which subscriptions you use and which you don't. Sentinel passively collects usage signals like login frequency or inactivity periods, helping you identify services you forget about or no longer need. Track spending trends, usage frequency, and cost-per-use metrics to optimize your subscription portfolio."
    },
    {
      id: 4,
      number: "5",
      title: "Renewal &\nTrial Alerts",
      content: "Get notified before you're charged—not after. Sentinel sends alerts for upcoming renewals, trial expirations, and billing changes via email, SMS, or calendar sync. Customize notification timing and delivery methods to match your preferences and never miss important deadlines."
    }
  ];

  const nextSlide = () => {
    if (activeSlide < features.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setActiveSlide(activeSlide + 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0 && !isAnimating) {
      setIsAnimating(true);
      setActiveSlide(activeSlide - 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <section className="bg-black py-20 relative">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient-calm mb-6 font-playfair">
            Manage Your Subscriptions
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Sentinel fits into your life, tracking subscriptions effortlessly and helping you cancel with one click—no clutter, no stress.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mb-12 px-4">
          <button
            onClick={prevSlide}
            disabled={activeSlide === 0}
            className={`w-12 h-12 border flex items-center justify-center transition-all duration-300 ${
              activeSlide === 0 
                ? 'bg-white/5 border-white/10 cursor-not-allowed' 
                : 'bg-white/10 border-white/20 hover:bg-white/20'
            }`}
          >
            <ChevronLeft className={`w-6 h-6 ${activeSlide === 0 ? 'text-white/30' : 'text-white'}`} />
          </button>
          <button
            onClick={nextSlide}
            disabled={activeSlide === features.length - 1}
            className={`w-12 h-12 border flex items-center justify-center transition-all duration-300 ${
              activeSlide === features.length - 1
                ? 'bg-blue-600/50 border-blue-500/50 cursor-not-allowed'
                : 'bg-blue-600 border-blue-500 hover:bg-blue-700'
            }`}
          >
            <ChevronRight className={`w-6 h-6 ${activeSlide === features.length - 1 ? 'text-white/50' : 'text-white'}`} />
          </button>
        </div>

        {/* Thin Separator Line */}
        <div className="w-full h-px bg-white/20 mb-12"></div>

        {/* Full Width Three Card Display */}
        <div className="relative w-full mb-20 overflow-hidden min-h-[600px]">
          {/* Left Card - Only shows image, no text */}
          {activeSlide > 0 && (
            <div 
              key={`left-${activeSlide}`}
              className="absolute left-0 top-0 w-[300px] opacity-100 animate-slide-in-left"
            >
              <div 
                className="w-full h-[350px]"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--electric-blue)) 0%, hsl(224, 68%, 58%) 100%)'
                }}
              />
            </div>
          )}

          {/* Center Card - Shows image and text */}
          <div className="flex justify-center">
            <div 
              key={`center-${activeSlide}`}
              className="w-[800px] animate-slide-in-center"
            >
              <div 
                className="w-full h-[500px] mb-8"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--electric-blue)) 0%, hsl(224, 68%, 58%) 100%)'
                }}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white animate-fade-in-text">
                <div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight h-[80px] flex items-center">
                    {features[activeSlide].number}. {features[activeSlide].title}
                  </h3>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-sm leading-relaxed text-white/90">
                    {features[activeSlide].content}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Only shows image, no text */}
          {activeSlide < features.length - 1 && (
            <div 
              key={`right-${activeSlide}`}
              className="absolute right-0 top-0 w-[300px] opacity-100 animate-slide-in-right"
            >
              <div 
                className="w-full h-[350px]"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--electric-blue)) 0%, hsl(224, 68%, 58%) 100%)'
                }}
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ManageSubscriptionsCarousel;