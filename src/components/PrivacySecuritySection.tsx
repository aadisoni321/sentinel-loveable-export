import { Lock, Unlock, MapPin, Globe } from "lucide-react";
import { useEffect } from "react";
import "@/styles/privacy-animations.css";

const PrivacySecuritySection = () => {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".privacy-item");

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => {
        el.classList.add("in-view");
        el.style.transitionDelay = "0ms";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("in-view");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el, i) => {
      el.style.transitionDelay = `${i * 200}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-pure-black py-[120px] px-4 md:px-8 lg:px-[120px] privacy-section">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[56px] font-bold text-gradient-calm mb-8 leading-tight font-playfair">
            Privacy and Security
          </h2>
          <p className="text-lg text-light-gray max-w-[800px] mx-auto leading-relaxed">
            Sentinel prioritize protecting users' privacy and data security, adhering
            to the principle of "local-first" and "minimal data collection".
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[60px] lg:gap-[60px]">
          {/* Column 1 - Privacy-First by Design */}
          <div className="text-left privacy-item scroll-fade-up">
            <span className="icon-anim icon-lock-stack text-electric-blue mb-6 inline-block" aria-hidden="true">
              <Lock className="w-8 h-8 icon-lock-closed" />
              <Unlock className="w-8 h-8 icon-lock-open" />
            </span>
            <div className="section-number">01</div>
            <h3 className="text-2xl font-semibold text-pure-white mb-4">
              Privacy-First by Design
            </h3>
            <p className="text-base text-light-gray leading-relaxed">
              Sentinel never requires bank access, app tracking, or invasive permissions. 
              We only process the data you explicitly share—nothing more, nothing less.
            </p>
          </div>

          {/* Column 2 - Secure Local Processing */}
          <div className="text-left privacy-item scroll-fade-up">
            <MapPin className="w-8 h-8 text-electric-blue mb-6 icon-anim icon-pin" aria-hidden="true" />
            <div className="section-number">02</div>
            <h3 className="text-2xl font-semibold text-pure-white mb-4">
              Secure Local Processing
            </h3>
            <p className="text-base text-light-gray leading-relaxed">
              Your data stays where it belongs: with you. Email parsing, browser detections, 
              and analytics are processed locally or with temporary encryption. No persistent 
              storage without your consent.
            </p>
          </div>

          {/* Column 3 - Localized & Compliant Infrastructure */}
          <div className="text-left privacy-item scroll-fade-up">
            <Globe className="w-8 h-8 text-electric-blue mb-6 icon-anim icon-globe" aria-hidden="true" />
            <div className="section-number">03</div>
            <h3 className="text-2xl font-semibold text-pure-white mb-4">
              Localized & Compliant Infrastructure
            </h3>
            <p className="text-base text-light-gray leading-relaxed">
              Sentinel deploys infrastructure regionally with strict data isolation. Your 
              information is stored and processed in compliance with US, EU, and other local 
              privacy regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySecuritySection;
