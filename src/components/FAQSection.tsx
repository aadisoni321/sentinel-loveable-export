const FAQSection = () => {
  const faqItems = [
    "What does Sentinel do?",
    "How does the cancellation process work?",
    "Is my data secure?",
    "What subscription services are supported?",
    "How much does Sentinel cost?",
    "Can I use Sentinel without browser extension?",
    "How do I get notified about renewals?",
    "What happens to my data if I cancel?"
  ];

  return (
    <section className="bg-pure-black py-[120px] px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[72px] font-bold text-pure-white mb-8">FAQ</h2>
          <p className="text-2xl text-light-gray">What does Sentinel do?</p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {faqItems.map((question, index) => (
            <div
              key={index}
              className="bg-[#222222] rounded-xl p-6 h-[200px] flex items-center justify-start border border-transparent hover:border-white/10 hover:bg-[#2A2A2A] transition-all duration-300 cursor-pointer"
            >
              <p className="text-light-gray text-base leading-relaxed">
                {question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;