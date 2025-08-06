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
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [scrollLockPosition, setScrollLockPosition] = useState(0);
  const [accumulatedScroll, setAccumulatedScroll] = useState(0);

  useEffect(() => {
    let isLocked = false;
    
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      
      // Check if we've reached the animation section
      if (containerTop <= 0 && !isAnimationActive && !isLocked) {
        // Start animation and lock scroll
        setIsAnimationActive(true);
        setScrollLockPosition(window.scrollY);
        setAccumulatedScroll(0);
        isLocked = true;
        document.body.style.overflow = 'hidden';
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isAnimationActive && animationProgress < 1) {
        e.preventDefault();
        
        // Accumulate scroll delta to drive animation
        const newAccumulated = Math.max(0, accumulatedScroll + e.deltaY);
        setAccumulatedScroll(newAccumulated);
        
        // Convert accumulated scroll to progress (adjust 2000 to control animation speed)
        const progress = Math.min(1, newAccumulated / 2000);
        setAnimationProgress(progress);
        
        // If animation is complete, unlock scrolling
        if (progress >= 1) {
          setIsAnimationActive(false);
          document.body.style.overflow = 'auto';
          isLocked = false;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = 'auto';
    };
  }, [isAnimationActive, animationProgress, accumulatedScroll]);

  const cards: FloatingCard[] = [
    {
      id: "card1",
      initialX: 15,
      initialY: 25,
      width: 200,
      height: 200,
      borderColor: "",
      glowColor: "",
      content: (
        <div className="w-full h-full bg-white rounded-lg" />
      )
    },
    {
      id: "card2",
      initialX: 80,
      initialY: 20,
      width: 180,
      height: 180,
      borderColor: "",
      glowColor: "",
      content: (
        <div className="w-full h-full bg-white rounded-lg" />
      )
    },
    {
      id: "card3",
      initialX: 10,
      initialY: 65,
      width: 180,
      height: 180,
      borderColor: "",
      glowColor: "",
      content: (
        <div className="w-full h-full bg-white rounded-lg" />
      )
    },
    {
      id: "card4",
      initialX: 85,
      initialY: 45,
      width: 180,
      height: 180,
      borderColor: "",
      glowColor: "",
      content: (
        <div className="w-full h-full bg-white rounded-lg" />
      )
    },
    {
      id: "card5",
      initialX: 75,
      initialY: 75,
      width: 180,
      height: 180,
      borderColor: "",
      glowColor: "",
      content: (
        <div className="w-full h-full bg-white rounded-lg" />
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
            opacity: animationProgress < 0.9 ? 1 - animationProgress * 1.2 : 0,
            transform: `scale(${Math.max(0.1, 1 - animationProgress * 0.9)})`,
            transition: 'all 0.1s ease-out'
          }}
        >
          <div className="text-center">
            <h2 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-blue-500 leading-none">
              Unify Your
            </h2>
            <h2 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-blue-500 leading-none">
              Finances
            </h2>
          </div>
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