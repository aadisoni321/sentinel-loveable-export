import { Instagram, MessageCircle, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useEffect, useRef } from "react";
import "@/styles/glitch-animations.css";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const riseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));

    const apply = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const y = window.scrollY || doc.scrollTop || 0;
      const start = 0.8; // start reveal at 80%
      const raw = maxScroll > 0 ? (y / maxScroll - start) / (1 - start) : 0;
      const t = easeOutCubic(clamp(raw));
      const offset = (1 - t) * 40; // 40% -> 0%
      if (riseRef.current) {
        riseRef.current.style.transform = `translate3d(0, ${offset}%, 0)`;
      }
    };

    const onScroll = () => {
      requestAnimationFrame(apply);
    };

    // observe footer so we only compute near the bottom
    const blue = document.getElementById("footer-blue");
    let observer: IntersectionObserver | null = null;
    if (blue) {
      observer = new IntersectionObserver(
        () => requestAnimationFrame(apply),
        { threshold: [0, 0.5, 1], rootMargin: "0px 0px -20%" }
      );
      observer.observe(blue);
    }

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <footer className="bg-pure-black">
      {/* Main Footer */}
      <div className="border-t border-white/10 py-[60px] px-4 md:px-8 lg:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Column */}
          <div>
            {/* Empty space - removed blue square */}
          </div>

          {/* Terms Column */}
          <div>
            <h3 className="text-lg font-semibold text-pure-white mb-6">Terms</h3>
            <div className="space-y-4">
              <a href="#" className="block text-base text-light-gray hover:text-pure-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="block text-base text-light-gray hover:text-pure-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="block text-base text-light-gray hover:text-pure-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold text-pure-white mb-6">Resources</h3>
            <div className="space-y-4">
              <a href="#" className="block text-base text-light-gray hover:text-pure-white transition-colors duration-300">
                Product
              </a>
              <a href="#" className="block text-base text-light-gray hover:text-pure-white transition-colors duration-300">
                Security
              </a>
              <a href="#" className="block text-base text-light-gray hover:text-pure-white transition-colors duration-300">
                Pricing
              </a>
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-lg font-semibold text-pure-white mb-6">Connect</h3>
            <div className="space-y-4">
              <a href="#" className="block text-base text-light-gray hover:text-pure-white transition-colors duration-300">
                Feedback
              </a>
              <a href="#" className="block text-base text-light-gray hover:text-pure-white transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="block text-base text-light-gray hover:text-pure-white transition-colors duration-300">
                TikTok
              </a>
              <a href="#" className="block text-base text-light-gray hover:text-pure-white transition-colors duration-300">
                Discord
              </a>
              <a href="#" className="block text-base text-light-gray hover:text-pure-white transition-colors duration-300">
                Partnerships
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5 py-8 px-4 md:px-8 lg:px-20">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-light-gray text-sm">
            ©2025 Sentinel. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-light-gray hover:text-pure-white transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-light-gray hover:text-pure-white transition-colors duration-300">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="text-light-gray hover:text-pure-white transition-colors duration-300">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="text-light-gray hover:text-pure-white transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-light-gray hover:text-pure-white transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="text-light-gray hover:text-pure-white transition-colors duration-300 text-sm flex items-center gap-2"
          >
            Back to top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Final Blue Section */}
      <div id="footer-blue" className="bg-electric-blue py-12 md:py-16 flex items-center justify-center relative overflow-hidden">
        <div
          ref={riseRef}
          className="transform-gpu will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: "translate3d(0, 40%, 0)" }}
          aria-hidden="true"
        >
          <h2 
            className="text-[clamp(8rem,20vw,24rem)] font-extrabold text-pure-white tracking-[4px] select-none footer-sentinel-text"
          >
            <span className="footer-glitch" data-text="SENTINEL">SENTINEL</span>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;