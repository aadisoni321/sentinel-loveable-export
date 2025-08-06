import { useEffect, useRef, useState } from "react";

interface FloatingCard {
  id: string;
  initialX: number;
  initialY: number;
  width: number;
  height: number;
  content: React.ReactNode;
  borderColor: string;
  glowColor: string;
}

const UnifyFinancesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Calculate animation progress
      if (containerTop <= windowHeight && containerTop + containerHeight >= 0) {
        const progress = Math.max(0, Math.min(1, (windowHeight - containerTop) / (windowHeight + containerHeight)));
        setAnimationProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards: FloatingCard[] = [
    {
      id: "expiring",
      initialX: 10,
      initialY: 20,
      width: 240,
      height: 180,
      borderColor: "border-orange-500",
      glowColor: "shadow-orange-500/30",
      content: (
        <div className="bg-gray-900 rounded-xl p-4 h-full border-3 border-orange-500">
          <div className="text-white text-sm mb-3">Expiring...</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">hulu</div>
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">A</div>
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">△</div>
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">⚡</div>
          </div>
        </div>
      )
    },
    {
      id: "netflix",
      initialX: 85,
      initialY: 15,
      width: 180,
      height: 160,
      borderColor: "border-red-500",
      glowColor: "shadow-red-500/40",
      content: (
        <div className="bg-red-600 rounded-xl p-4 h-full relative">
          <div className="absolute top-2 right-2 text-white font-bold text-lg">N</div>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-white font-bold text-3xl">2</div>
            <div className="text-white text-sm">DAYS</div>
            <div className="text-white text-xs mt-2">Expiring Trial</div>
          </div>
        </div>
      )
    },
    {
      id: "spotify",
      initialX: 8,
      initialY: 70,
      width: 200,
      height: 140,
      borderColor: "border-green-500",
      glowColor: "shadow-green-500/40",
      content: (
        <div className="bg-gray-900 rounded-xl p-4 h-full border-3 border-green-500">
          <div className="flex items-center mb-2">
            <div className="text-green-500 mr-2">🎵</div>
          </div>
          <div className="text-white text-2xl font-bold mb-1">$9.99</div>
          <div className="text-green-500 font-semibold mb-2">Cancel</div>
          <div className="text-gray-400 text-xs">You Save: $109.89</div>
        </div>
      )
    },
    {
      id: "saved",
      initialX: 90,
      initialY: 40,
      width: 160,
      height: 180,
      borderColor: "border-blue-500",
      glowColor: "shadow-blue-500/40",
      content: (
        <div className="bg-blue-600 rounded-xl p-4 h-full relative" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%)' }}>
          <div className="text-white text-sm mb-2">JULY</div>
          <div className="absolute top-2 right-2 text-white">🔖</div>
          <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold mb-2">SAVED</div>
          <div className="text-white text-xl font-bold">$342.89</div>
          <div className="text-white/80 text-xs">Secured</div>
        </div>
      )
    },
    {
      id: "activity",
      initialX: 80,
      initialY: 80,
      width: 200,
      height: 160,
      borderColor: "border-red-500",
      glowColor: "shadow-red-500/40",
      content: (
        <div className="bg-gray-900 rounded-xl p-4 h-full border-3 border-red-500">
          <div className="text-white text-sm mb-1">ACTIVITY</div>
          <div className="text-gray-400 text-xs underline mb-3">Charges Blocked</div>
          <div className="text-white text-2xl font-bold mb-3">$349.09</div>
          <div className="flex space-x-2">
            <div className="relative">
              <div className="w-6 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center">hulu</div>
              <div className="absolute -top-1 -right-1 text-red-500 text-lg">🚫</div>
            </div>
            <div className="relative">
              <div className="w-6 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center">A</div>
              <div className="absolute -top-1 -right-1 text-red-500 text-lg">🚫</div>
            </div>
            <div className="relative">
              <div className="w-6 h-6 bg-purple-600 rounded text-white text-xs flex items-center justify-center">⚡</div>
              <div className="absolute -top-1 -right-1 text-red-500 text-lg">🚫</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const getCardPosition = (card: FloatingCard) => {
    const centerX = 50;
    const centerY = 50;
    
    const currentX = card.initialX + (centerX - card.initialX) * animationProgress;
    const currentY = card.initialY + (centerY - card.initialY) * animationProgress;
    
    const rotation = animationProgress * (Math.random() * 30 - 15); // Random rotation
    const scale = 1 - animationProgress * 0.1; // Slight scale down

    return {
      left: `${currentX}%`,
      top: `${currentY}%`,
      transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
      zIndex: Math.floor(animationProgress * 10) + 1
    };
  };

  return (
    <section ref={containerRef} className="h-[200vh] bg-black relative overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Central Title */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-0"
          style={{ 
            opacity: animationProgress < 0.9 ? 1 - animationProgress * 0.8 : 0,
            transform: `scale(${3 - animationProgress * 2})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h2 className="text-6xl md:text-8xl font-bold text-blue-500 text-center">
            Unify Your<br />Finances
          </h2>
        </div>

        {/* Floating Cards */}
        {cards.map((card) => (
          <div
            key={card.id}
            className={`absolute transition-all duration-300 ease-out ${card.glowColor} hover-lift`}
            style={{
              width: `${card.width}px`,
              height: `${card.height}px`,
              ...getCardPosition(card)
            }}
          >
            {card.content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default UnifyFinancesSection;