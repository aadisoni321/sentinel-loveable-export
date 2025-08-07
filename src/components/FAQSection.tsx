const FAQSection = () => {
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
    <section className="bg-pure-black py-[120px] px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[72px] font-bold text-pure-white mb-8">FAQ</h2>
          <p className="text-lg text-light-gray text-center">Frequently asked questions</p>
        </div>

        {/* FAQ Animation */}
        <div className="space-y-6 overflow-hidden">
          {/* Top Row - Sliding Left */}
          <div className="flex gap-6 animate-scroll-left">
            {Array.from({ length: 50 }, (_, i) => faqItems[i % faqItems.length]).map((question, index) => (
              <div
                key={`top-${index}`}
                className="bg-[#222222] rounded-xl p-6 h-[140px] w-[280px] flex-shrink-0 flex items-center justify-start border border-white/20 hover:border-white/30 hover:bg-[#2A2A2A] transition-all duration-300 cursor-pointer"
              >
                <p className="text-light-gray text-xl leading-relaxed text-center">
                  {question}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom Row - Sliding Right */}
          <div className="flex gap-6 animate-scroll-right">
            {Array.from({ length: 50 }, (_, i) => faqItems[(i + 8) % faqItems.length]).map((question, index) => (
              <div
                key={`bottom-${index}`}
                className="bg-[#222222] rounded-xl p-6 h-[140px] w-[280px] flex-shrink-0 flex items-center justify-start border border-white/20 hover:border-white/30 hover:bg-[#2A2A2A] transition-all duration-300 cursor-pointer"
              >
                <p className="text-light-gray text-xl leading-relaxed text-center">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;