import { Instagram, MessageCircle, Linkedin, Mail, ArrowUp } from "lucide-react";

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      <div className="bg-electric-blue py-[100px] flex items-center justify-center relative overflow-hidden">
        <h2 
          className="text-[300px] font-extrabold text-pure-white tracking-[4px] cursor-pointer select-none footer-sentinel-text"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const angleX = (y - centerY) / 30;
            const angleY = (centerX - x) / 30;
            e.currentTarget.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
          }}
        >
          SENTINEL
        </h2>
      </div>
    </footer>
  );
};

export default FooterSection;