import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ManageSubscriptionsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const features = [
    {
      id: 0,
      number: "1.",
      title: "Track Subscriptions Automatically",
      content: "Sentinel monitors trials, subscriptions, and renewal patterns from the moment you sign up. It intelligently tracks confirmation emails, billing patterns, and known services—keeping your dashboard up to date without needing access to your financial data. Stay on top of everything without the noise or guesswork."
    },
    {
      id: 1,
      number: "2.",
      title: "One-Click Cancellation",
      content: "Easily cancel unwanted subscriptions in seconds—no login hoops, customer service calls, or hidden steps. Sentinel handles service-specific flows behind the scenes, giving you a simple 'cancel' button that just works. It's fast, private, and designed to help you break free from sneaky renewals."
    },
    {
      id: 2,
      number: "3.",
      title: "Lightweight Browser Extension",
      content: "The Sentinel Assistant detects trials and signups in real time while you browse sites like Netflix, Audible, or Spotify. It works locally in your browser—never tracking history or storing sensitive data—so you get instant trial detection without giving up privacy or speed."
    },
    {
      id: 3,
      number: "4.",
      title: "Analytics & Usage Insights",
      content: "See which subscriptions you use and which you don't. Sentinel passively collects usage signals like login frequency or inactivity periods, helping you identify services you forgot about or no longer need—so you can cut costs intelligently, not blindly."
    },
    {
      id: 4,
      number: "5.",
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
      return { transform: 'translateX(-500px) scale(0.6)', zIndex: 5, opacity: 0.6 };
    } else if (index === (activeIndex + 1) % features.length) {
      return { transform: 'translateX(500px) scale(0.6)', zIndex: 5, opacity: 0.6 };
    } else {
      return { transform: 'translateX(0) scale(0.6)', zIndex: 1, opacity: 0 };
    }
  };

  return (
    <section className="bg-pure-black py-[120px] px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Header */}
        <h2 className="text-[48px] font-bold text-pure-white mb-6 leading-tight">
          Manage Your Subscriptions
        </h2>
        <p className="text-[18px] text-light-gray max-w-[600px] mx-auto mb-[60px] leading-relaxed">
          Sentinel fits into your life, tracking subscriptions effortlessly and helping you
          cancel with one click—no clutter, no stress.
        </p>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-[60px] mb-20">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[500px] flex items-start justify-center overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="absolute transition-all duration-500 ease-out"
              style={{
                width: index === activeSlide ? '800px' : '400px',
                height: index === activeSlide ? '500px' : '300px',
                ...getCardPosition(index)
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-electric-blue to-blue-hover rounded-2xl p-10 text-left">
                <div className="text-white/70 text-sm mb-6">Features</div>
                <div className="text-white text-[64px] font-bold absolute top-10 right-10">
                  {feature.number.replace('.', '')}
                </div>
                <h3 className="text-white text-[32px] font-semibold mb-8 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-base leading-relaxed">
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManageSubscriptionsCarousel;