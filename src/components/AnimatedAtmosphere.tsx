import { useEffect, useRef } from 'react';

const AnimatedAtmosphere = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'atmosphere-particle';
      
      // Random positioning and size
      const size = Math.random() * 300 + 100;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * 5;
      
      particle.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle at 30% 30%, 
          rgba(59, 130, 246, 0.8) 0%, 
          rgba(37, 99, 235, 0.6) 30%, 
          rgba(29, 78, 216, 0.4) 60%, 
          rgba(30, 64, 175, 0.2) 80%, 
          transparent 100%);
        border-radius: 50%;
        filter: blur(2px);
        animation: atmosphereFloat ${duration}s ease-in-out infinite ${delay}s;
        pointer-events: none;
        z-index: 1;
      `;
      
      container.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, (duration + delay) * 1000);
    };

    // Create initial particles
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createParticle(), i * 500);
    }

    // Create new particles periodically
    const particleInterval = setInterval(createParticle, 3000);

    return () => {
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {/* Large atmospheric orb 1 */}
      <div className="absolute -top-40 -right-40 w-96 h-96 atmosphere-orb-1">
        <div className="w-full h-full rounded-full bg-gradient-radial from-blue-500/30 via-blue-600/20 to-transparent blur-xl animate-pulse-slow"></div>
      </div>
      
      {/* Large atmospheric orb 2 */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 atmosphere-orb-2">
        <div className="w-full h-full rounded-full bg-gradient-radial from-cyan-400/25 via-blue-500/15 to-transparent blur-lg animate-float-slow"></div>
      </div>
      
      {/* Medium atmospheric orb 3 */}
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 atmosphere-orb-3">
        <div className="w-full h-full rounded-full bg-gradient-radial from-blue-400/35 via-indigo-500/20 to-transparent blur-md animate-drift"></div>
      </div>
      
      {/* Curved atmospheric edge - inspired by your image */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <svg 
          viewBox="0 0 1200 800" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="atmosphereGrad" cx="0.3" cy="0.8" r="0.8">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="30%" stopColor="rgba(37, 99, 235, 0.4)" />
              <stop offset="60%" stopColor="rgba(29, 78, 216, 0.3)" />
              <stop offset="80%" stopColor="rgba(30, 64, 175, 0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter id="atmosphereBlur">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          <path 
            d="M0,600 Q300,400 600,450 T1200,500 L1200,800 L0,800 Z" 
            fill="url(#atmosphereGrad)"
            filter="url(#atmosphereBlur)"
            className="animate-atmosphere-wave"
          />
        </svg>
      </div>
      
      {/* Floating energy wisps */}
      <div className="absolute top-1/2 left-1/3 w-32 h-32 animate-wisp-1">
        <div className="w-full h-full rounded-full bg-gradient-radial from-cyan-300/40 to-transparent blur-sm"></div>
      </div>
      
      <div className="absolute top-3/4 right-1/3 w-24 h-24 animate-wisp-2">
        <div className="w-full h-full rounded-full bg-gradient-radial from-blue-300/35 to-transparent blur-sm"></div>
      </div>
    </div>
  );
};

export default AnimatedAtmosphere;