import { useEffect, useRef, useState } from "react";

const HorizontalScrollingFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !cardsRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress when section is in view
      if (containerTop <= windowHeight && containerTop + containerHeight >= 0) {
        const progress = Math.max(0, Math.min(1, (windowHeight - containerTop) / (windowHeight + containerHeight)));
        setScrollProgress(progress);
        
        // Apply horizontal transform based on scroll progress
        const maxTranslate = cardsRef.current.scrollWidth - window.innerWidth + 400; // 400px for left panel
        const translateX = -progress * maxTranslate;
        cardsRef.current.style.transform = `translateX(${Math.max(-maxTranslate, translateX)}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      id: "00",
      title: "From Trial to Control: AI Integrated Into Every Step of Subscription Management",
      description: "Sentinel tracks trials, renewals, and fees from the moment you sign up. Our AI handles the full lifecycle—signup to cancel—without needing bank access. Stay informed and in control."
    },
    {
      id: "01", 
      title: "Monitor Automatically: Your AI Subscription Tracker",
      description: "Sentinel scans inboxes and browsers for new subscriptions. Get smart alerts, instant insights, and cancel with one click. Stop paying for what you don't use."
    },
    {
      id: "02",
      title: "Two Modes: Browser + Inbox — You're in Control",
      description: "Use email scan or browser-only detection—your choice. Sentinel fits your privacy and workflow preferences. Automate or stay hands-on, with full transparency."
    },
    {
      id: "03",
      title: "Open Ecosystem: Manage Subscriptions Anywhere", 
      description: "Sentinel connects with email, calendar, browser, and mobile. Detect new trials, track usage, and cancel from anywhere. Everything syncs, with no data lock-in."
    }
  ];

    return (
    <section id="features" ref={containerRef} className="h-[300vh] bg-black relative">
      <div className="sticky top-0 h-screen flex overflow-hidden">
        {/* Left Side - Fixed Title */}
        <div className="w-[400px] flex-shrink-0 flex items-center pl-20">
          <h2 className="text-5xl font-bold text-white leading-tight max-w-sm">
            What You'll Unlock<br />with Sentinel
          </h2>
        </div>

        {/* Right Side - Scrolling Cards */}
        <div 
          ref={cardsRef}
          className="flex items-center space-x-10 transition-transform duration-100 ease-out"
          style={{ width: 'calc(4 * 400px + 3 * 40px)' }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="w-[400px] h-[500px] bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 flex flex-col justify-between hover-lift"
              style={{
                background: `linear-gradient(135deg, 
                  hsl(var(--electric-blue)) 0%, 
                  hsl(224, 68%, 58%) 100%
                )`
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <span className="text-white/80 text-lg font-semibold">
                  [{feature.id}]
                </span>
              </div>

              {/* Title */}
              <div className="flex-1 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white leading-tight text-center mb-4">
                  {feature.title}
                </h3>
              </div>

              {/* Placeholder for Features */}
              <div className="text-center mb-8">
                <span className="text-white/60 text-4xl font-light">Features</span>
              </div>

              {/* Description */}
              <div>
                <p className="text-white/90 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollingFeatures;