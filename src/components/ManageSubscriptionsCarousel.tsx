import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ManageSubscriptionsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Start at slide 0

  const features = [
    {
      id: 0,
      number: "1",
      title: "Track Subscriptions Automatically",
      content: "Sentinel monitors trials, subscriptions, and renewal patterns from the moment you sign up. It intelligently tracks confirmation emails, billing patterns, and known services—keeping your dashboard up to date without needing access to your financial data."
    },
    {
      id: 1,
      number: "2",
      title: "One-Click Cancellation",
      content: "Easily cancel unwanted subscriptions in seconds—no login hoops, customer service calls, or hidden steps. Sentinel handles service-specific flows behind the scenes, giving you a simple 'cancel' button that just works."
    },
    {
      id: 2,
      number: "3",
      title: "Lightweight Browser Extension",
      content: "The Sentinel Assistant detects trials and signups in real time while you browse sites like Netflix, Audible, or Spotify. It works locally in your browser—never tracking history or storing sensitive data."
    },
    {
      id: 3,
      number: "4",
      title: "Analytics & Usage Insights",
      content: "See which subscriptions you use and which you don't. Sentinel passively collects usage signals like login frequency or inactivity periods, helping you identify services you forget about or no longer need."
    },
    {
      id: 4,
      number: "5",
      title: "Renewal & Trial Alerts",
      content: "Get notified before you're charged—not after. Sentinel sends alerts for upcoming renewals, trial expirations, and billing changes via email, SMS, or calendar sync."
    }
  ];

  const nextSlide = () => {
    if (activeSlide < features.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <section className="bg-black py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Manage Your Subscriptions
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Sentinel fits into your life, tracking subscriptions effortlessly and helping you cancel with one click—no clutter, no stress.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mb-12">
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

        {/* Single Card Display */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-4xl">
            {/* Blue Box - Empty - Doubled Height */}
            <div 
              className="w-full h-[500px] mb-8"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--electric-blue)) 0%, hsl(224, 68%, 58%) 100%)'
              }}
            />
            
            {/* Content Below - Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              {/* Left Column - Title (Always 2 lines) */}
              <div>
                <h3 className="text-3xl font-bold mb-4 leading-tight h-[80px] flex items-center">
                  {features[activeSlide].number}. {features[activeSlide].title}
                </h3>
              </div>
              
              {/* Right Column - Description (Smaller text) */}
              <div>
                <p className="text-sm leading-relaxed text-white/90">
                  {features[activeSlide].content}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ManageSubscriptionsCarousel;