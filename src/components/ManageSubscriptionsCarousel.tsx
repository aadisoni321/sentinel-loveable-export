import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ManageSubscriptionsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Start at slide 1 (2. One-Click Cancellation)

  const features = [
    {
      id: 0,
      number: "1",
      title: "AI-Powered Detection",
      content: "Sentinel automatically detects new subscriptions, trials, and recurring charges across your email and browsing activity without compromising your privacy or speed."
    },
    {
      id: 1,
      number: "2",
      title: "One-Click Cancellation",
      content: "Easily cancel unwanted subscriptions in seconds—no login hoops, customer service calls, or hidden steps. Sentinel handles service-specific flows behind the scenes, giving you a simple 'cancel' button that just works. It's fast, private, and designed to help you break free from sneaky renewals."
    },
    {
      id: 2,
      number: "3",
      title: "Lightweight Browser Extension",
      content: "The Sentinel Assistant detects trials and signups in real time while you browse sites like Netflix, Audible, or Spotify. It works locally in your browser—never tracking history or storing sensitive data—so you get instant trial detection without giving up privacy or speed."
    },
    {
      id: 3,
      number: "4",
      title: "Analytics & Usage Insights",
      content: "See which subscriptions you use and which you don't. Sentinel passively collects usage signals like login frequency or inactivity periods, helping you identify services you forget about or no longer need—so you can cut costs intelligently, not blindly."
    },
    {
      id: 4,
      number: "5",
      title: "Renewal & Trial Alerts",
      content: "Get notified before you're charged—not after. Sentinel sends alerts for upcoming renewals, trial expirations, and billing changes via email, SMS, or calendar sync. You'll never be caught off guard by another unexpected charge or hidden renewal again."
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const getCardPosition = (index: number) => {
    const activeIndex = activeSlide;
    if (index === activeIndex) {
      return { transform: 'translateX(0) scale(1)', zIndex: 10, opacity: 1 };
    } else if (index === (activeIndex - 1 + features.length) % features.length) {
      return { transform: 'translateX(-400px) scale(0.8)', zIndex: 5, opacity: 0.7 };
    } else if (index === (activeIndex + 1) % features.length) {
      return { transform: 'translateX(400px) scale(0.8)', zIndex: 5, opacity: 0.7 };
    } else {
      return { transform: 'translateX(0) scale(0.8)', zIndex: 1, opacity: 0 };
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
            className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-blue-600 border border-blue-500 flex items-center justify-center hover:bg-blue-700 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Thin Separator Line */}
        <div className="w-full h-px bg-white/20 mb-12"></div>

        {/* Carousel Container */}
        <div className="relative h-[600px] flex items-center justify-center overflow-hidden mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="absolute transition-all duration-500 ease-out"
              style={{
                width: index === activeSlide ? '700px' : '500px',
                height: index === activeSlide ? '500px' : '400px',
                ...getCardPosition(index)
              }}
            >
              <div 
                className="w-full h-full p-8 text-left"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--electric-blue)) 0%, hsl(224, 68%, 58%) 100%)'
                }}
              >
                <div className="text-white text-2xl font-bold mb-8">
                  {feature.number}. {feature.title}
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Track Subscriptions Automatically
          </h3>
          <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
            Sentinel monitors trials, subscriptions, and renewal patterns from the moment you sign up. It intelligently tracks confirmation emails, billing patterns, and known services—keeping your dashboard up to date without needing access to your financial data. Stay on top of everything without the noise or guesswork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManageSubscriptionsCarousel;