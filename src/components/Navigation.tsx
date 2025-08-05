import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] h-20 transition-all duration-300 nav-blur`}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-[120px] h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-extrabold text-white tracking-wider">
            SENTINEL
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {/* Menu Items */}
          <div className="flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection("product")}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-300"
            >
              Product
            </button>
            <button 
              onClick={() => scrollToSection("security")}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-300"
            >
              Security
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-300"
            >
              Pricing
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="default"
              className="btn-secondary px-6 py-3 rounded-lg border-2"
              onClick={() => scrollToSection("signin")}
            >
              Get Started
            </Button>
            <Button
              size="default"
              className="btn-primary px-6 py-3 rounded-lg font-semibold"
              onClick={() => scrollToSection("pricing")}
            >
              Get Sentinel
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;