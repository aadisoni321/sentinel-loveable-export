
const FinalCTASection = () => {
  return (
    <section className="bg-pure-black border-t border-white/10 py-20 px-4 md:px-8 lg:px-[120px]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Side Content */}
        <div>
          <h2 className="text-[48px] font-bold text-gradient-calm mb-4 leading-tight">
            Get Started with Sentinel
          </h2>
          <p className="text-2xl text-medium-gray">Try it for Free</p>
        </div>

        {/* Right Side CTA Button */}
        <div>
          <button className="bg-electric-blue text-pure-white px-24 py-4 text-lg font-semibold hover:bg-blue-hover hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-electric-blue/30">
            Get Sentinel →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
