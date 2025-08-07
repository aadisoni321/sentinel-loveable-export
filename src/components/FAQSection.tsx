import { useState } from "react";

const FAQSection = () => {
  const [hoveredRow, setHoveredRow] = useState<'top' | 'bottom' | null>(null);

  const faqItems = [
    "How accurate is Sentinel's subscription detection?",
    "Can I cancel subscriptions directly through Sentinel?",
    "How does the notification system work?",
    "What insights does the spending tracker provide?",
    "How fast does Sentinel find my subscriptions?",
    "Can I set custom renewal alerts?",
    "Does Sentinel track free trial expirations?",
    "How does the browser extension work?",
    "Can I categorize my subscriptions?",
    "How detailed are the spending reports?",
    "Does Sentinel work with business accounts?",
    "Can I export my subscription data?",
    "How does Sentinel handle shared subscriptions?",
    "What automation features are available?",
    "Can I see subscription price changes over time?",
    "How does Sentinel prioritize which subscriptions to cancel?"
  ];

  return (
    <section className="bg-pure-black py-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-[120px]">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[72px] font-bold text-pure-white mb-8">FAQ</h2>
          <p className="text-lg text-light-gray text-center">Frequently asked questions</p>
        </div>
      </div>

      {/* FAQ Animation - Full Viewport Width */}
      <div className="relative space-y-6 w-full">
        {/* Top Row - Sliding Left */}
        <div 
          className={`flex gap-6 ${hoveredRow === 'top' ? '' : 'animate-scroll-left'}`}
          onMouseEnter={() => setHoveredRow('top')}
          onMouseLeave={() => setHoveredRow(null)}
        >
            {Array.from({ length: 50 }, (_, i) => faqItems[i % faqItems.length]).map((question, index) => (
              <div
                key={`top-${index}`}
                className="group bg-[#222222] rounded-xl p-6 h-[140px] w-[280px] flex-shrink-0 flex items-center justify-start border border-white/20 hover:border-blue-400/70 transition-all duration-300 cursor-pointer relative overflow-hidden
                hover:bg-gradient-to-br hover:from-blue-600/40 hover:via-blue-500/30 hover:to-blue-700/20
                hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 via-blue-300/10 to-blue-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="text-light-gray group-hover:text-blue-200 text-xl leading-relaxed text-center relative z-10 transition-colors duration-300">
                  {question}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom Row - Sliding Right */}
          <div 
            className={`flex gap-6 ${hoveredRow === 'bottom' ? '' : 'animate-scroll-right'}`}
            onMouseEnter={() => setHoveredRow('bottom')}
            onMouseLeave={() => setHoveredRow(null)}
          >
            {Array.from({ length: 50 }, (_, i) => faqItems[(i + 8) % faqItems.length]).map((question, index) => (
              <div
                key={`bottom-${index + 1000}`}
                className="group bg-[#222222] rounded-xl p-6 h-[140px] w-[280px] flex-shrink-0 flex items-center justify-start border border-white/20 hover:border-blue-400/70 transition-all duration-300 cursor-pointer relative overflow-hidden
                hover:bg-gradient-to-br hover:from-blue-600/40 hover:via-blue-500/30 hover:to-blue-700/20
                hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 via-blue-300/10 to-blue-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <p className="text-light-gray group-hover:text-blue-200 text-xl leading-relaxed text-center relative z-10 transition-colors duration-300">
                  {question}
                </p>
              </div>
            ))}
          </div>
        
        {/* Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-pure-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-pure-black to-transparent pointer-events-none z-10"></div>
        </div>
    </section>
  );
};

export default FAQSection;