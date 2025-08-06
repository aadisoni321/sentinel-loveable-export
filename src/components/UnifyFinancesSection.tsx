import { useEffect, useRef, useState } from "react";
import cardCancel from "@/assets/card-cancel.png";
import cardNetflix from "@/assets/card-netflix.png";
import cardJuly from "@/assets/card-july.png";
import cardActivity from "@/assets/card-activity.png";
import cardExpiring from "@/assets/card-expiring.png";

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
      width: 300,
      height: 300,
      borderColor: "",
      glowColor: "",
      content: (
        <img 
          src={cardExpiring} 
          alt="Expiring subscriptions" 
          className="w-full h-full object-contain"
        />
      )
    },
    {
      id: "netflix",
      initialX: 85,
      initialY: 15,
      width: 250,
      height: 250,
      borderColor: "",
      glowColor: "",
      content: (
        <img 
          src={cardNetflix} 
          alt="Netflix expiring trial" 
          className="w-full h-full object-contain"
        />
      )
    },
    {
      id: "cancel",
      initialX: 8,
      initialY: 70,
      width: 250,
      height: 250,
      borderColor: "",
      glowColor: "",
      content: (
        <img 
          src={cardCancel} 
          alt="Cancel subscription" 
          className="w-full h-full object-contain"
        />
      )
    },
    {
      id: "july",
      initialX: 90,
      initialY: 40,
      width: 250,
      height: 250,
      borderColor: "",
      glowColor: "",
      content: (
        <img 
          src={cardJuly} 
          alt="July savings" 
          className="w-full h-full object-contain"
        />
      )
    },
    {
      id: "activity",
      initialX: 80,
      initialY: 80,
      width: 250,
      height: 250,
      borderColor: "",
      glowColor: "",
      content: (
        <img 
          src={cardActivity} 
          alt="Activity charges blocked" 
          className="w-full h-full object-contain"
        />
      )
    }
  ];

  const getCardPosition = (card: FloatingCard) => {
    const centerX = 50;
    const centerY = 50;
    
    // Cards start off-screen and gradually appear
    if (animationProgress < 0.2) {
      return {
        left: `${card.initialX}%`,
        top: `${card.initialY}%`,
        transform: `translate(-50%, -50%) scale(0)`,
        opacity: 0,
        zIndex: 1
      };
    }

    // Adjust progress for card movement (starts after 20% of scroll)
    const cardProgress = Math.min(1, (animationProgress - 0.2) / 0.8);
    
    const currentX = card.initialX + (centerX - card.initialX) * cardProgress;
    const currentY = card.initialY + (centerY - card.initialY) * cardProgress;
    
    // No rotation, just straight movement with scaling
    const scale = Math.min(1, 0.3 + cardProgress * 0.7);

    return {
      left: `${currentX}%`,
      top: `${currentY}%`,
      transform: `translate(-50%, -50%) scale(${scale})`,
      opacity: 1, // Always 100% opacity when visible
      zIndex: Math.floor(cardProgress * 10) + 1
    };
  };

  return (
    <section ref={containerRef} className="h-[200vh] bg-black relative overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {/* Central Title */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-0"
          style={{ 
            opacity: animationProgress < 0.8 ? 1 - animationProgress * 0.8 : 0,
            transform: `scale(${Math.max(0.1, 1 - animationProgress * 0.8)})`,
            transition: 'all 0.1s ease-out'
          }}
        >
          <h2 className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-bold text-blue-500 text-center leading-none">
            Unify Your<br />Finances
          </h2>
        </div>

        {/* Floating Cards */}
        {cards.map((card) => {
          const cardStyle = getCardPosition(card);
          return (
            <div
              key={card.id}
              className={`absolute transition-all duration-300 ease-out ${card.glowColor} hover-lift`}
              style={{
                width: `${card.width}px`,
                height: `${card.height}px`,
                left: cardStyle.left,
                top: cardStyle.top,
                transform: cardStyle.transform,
                opacity: cardStyle.opacity,
                zIndex: cardStyle.zIndex
              }}
            >
              {card.content}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UnifyFinancesSection;