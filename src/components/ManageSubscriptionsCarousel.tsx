import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ManageSubscriptionsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const features = [
    {
      id: 0,
      number: "00",
      title: "From Trial to Control: AI Integrated Into Every Step of Subscription Management",
      content: "Sentinel tracks trials, renewals, and fees from the moment you sign up. Our AI handles the full lifecycle—signup to cancel—without needing bank access. Stay informed and in control."
    },
    {
      id: 1,
      number: "01",
      title: "Monitor Automatically: Your AI Subscription Tracker",
      content: "Sentinel scans inboxes and browsers for new subscriptions. Get smart alerts, instant insights, and cancel with one click. Stop paying for what you don't use."
    },
    {
      id: 2,
      number: "02",
      title: "Two Modes: Browser + Inbox — You're in Control",
      content: "Use email scan or browser-only detection—your choice. Sentinel fits your privacy and workflow preferences. Automate or stay hands-on, with full transparency."
    },
    {
      id: 3,
      number: "03",
      title: "Open Ecosystem: Manage Subscriptions Anywhere",
      content: "Sentinel connects with email, calendar, browser, and mobile. Detect new trials, track usage, and cancel from anywhere. Everything syncs, with no data lock-in."
    },
    {
      id: 4,
      number: "04",
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
    <section className="bg-black py-[60px] px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-start gap-20">
          {/* Left Side - Text */}
          <div className="w-[400px] flex-shrink-0">
            <h2 className="text-5xl font-bold text-white leading-tight mb-8">
              What You'll Unlock<br />with Sentinel
            </h2>
          </div>

          {/* Right Side - Carousel */}
          <div className="flex-1 relative">
            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-[60px] mb-12">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
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
                    width: index === activeSlide ? '600px' : '400px',
                    height: index === activeSlide ? '500px' : '300px',
                    ...getCardPosition(index)
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-electric-blue to-blue-hover p-8 text-left">
                    <div className="text-white/70 text-sm mb-6">Features</div>
                    <div className="text-white text-[48px] font-bold absolute top-8 right-8">
                      [{feature.number}]
                    </div>
                    <h3 className="text-white text-[24px] font-semibold mb-6 leading-tight pr-16">
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
        </div>
      </div>
    </section>
  );
};

export default ManageSubscriptionsCarousel;