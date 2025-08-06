import { useState } from "react";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-pure-black py-[120px] px-4 md:px-8 lg:px-[120px] relative">
      {/* Dot Grid Pattern Behind Heading Only */}
      <div 
        className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[400px] h-[100px] opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="max-w-[1000px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[64px] font-bold text-pure-white mb-8">Pricing</h2>
          <p className="text-xl text-light-gray">
            Get started for Free. Upgrade to increase limits.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-20">
          <div className="bg-[#333333] rounded-3xl p-1 border border-[#555555] w-[300px] h-12">
            <div className="relative w-full h-full">
              <div
                className={`absolute top-0 h-full w-1/2 bg-electric-blue rounded-3xl transition-transform duration-300 ${
                  isYearly ? 'translate-x-full' : 'translate-x-0'
                }`}
              />
              <div className="relative flex h-full">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`flex-1 text-base font-medium transition-colors duration-300 ${
                    !isYearly ? 'text-pure-white' : 'text-light-gray'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`flex-1 text-base font-medium transition-colors duration-300 ${
                    isYearly ? 'text-pure-white' : 'text-light-gray'
                  }`}
                >
                  Yearly <span className="text-electric-blue">Save 25%</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center">
          {/* Free Plan */}
          <div className="w-full lg:w-[400px] h-[600px] bg-[#2A2A2A] border border-[#444444] rounded-2xl p-10 shadow-lg">
            <div className="bg-[#444444] text-pure-white text-sm font-semibold px-4 py-2 rounded-md inline-block mb-8">
              Free
            </div>
            
            <div className="mb-8">
              <div className="text-[72px] font-bold text-pure-white mb-2">$0</div>
              <div className="text-base text-light-gray">per month, no credit card required</div>
            </div>

            <button className="w-full bg-[#555555] text-pure-white py-4 rounded-xl text-lg font-semibold mb-8 hover:bg-[#666666] transition-colors duration-300">
              Get Started
            </button>

            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-electric-blue" />
                  <span className="text-light-gray">write</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Plan */}
          <div className="w-full lg:w-[400px] h-[600px] bg-[#2A2A2A] border border-electric-blue/50 rounded-2xl p-10 shadow-xl relative">
            {/* Blue glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue/20 to-blue-hover/20 rounded-2xl blur-sm" />
            <div className="relative bg-[#2A2A2A] rounded-2xl h-full p-0">
              <div className="bg-electric-blue text-pure-white text-sm font-semibold px-4 py-2 rounded-md inline-block mb-8">
                Pro
              </div>
              
              <div className="mb-8">
                <div className="text-[72px] font-bold text-pure-white mb-2">$5</div>
                <div className="text-base text-light-gray">per month, billed yearly</div>
              </div>

              <button className="w-full bg-electric-blue text-pure-white py-4 rounded-xl text-lg font-semibold mb-4 hover:bg-blue-hover transition-colors duration-300">
                Get Started
              </button>

              {/* Payment Icons */}
              <div className="flex justify-center gap-3 mb-8">
                <div className="w-8 h-6 bg-[#1A1F71] rounded text-white text-xs flex items-center justify-center font-bold">P</div>
                <div className="w-8 h-6 bg-[#1A237E] rounded text-white text-xs flex items-center justify-center">V</div>
                <div className="w-8 h-6 bg-[#EB001B] rounded text-white text-xs flex items-center justify-center">M</div>
                <div className="w-8 h-6 bg-[#006FCF] rounded text-white text-xs flex items-center justify-center">A</div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-electric-blue" />
                    <span className="text-light-gray">write</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;