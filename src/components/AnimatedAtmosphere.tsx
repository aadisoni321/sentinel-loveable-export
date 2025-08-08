import { useEffect, useRef } from 'react';

const AnimatedAtmosphere = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flowing Wave Layer 1 */}
      <div className="absolute inset-0">
        <svg 
          viewBox="0 0 1200 800" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="25%" stopColor="rgba(37, 99, 235, 0.6)" />
              <stop offset="50%" stopColor="rgba(29, 78, 216, 0.7)" />
              <stop offset="75%" stopColor="rgba(30, 64, 175, 0.5)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
            </linearGradient>
            <filter id="waveBlur1">
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>
          <path 
            d="M0,200 Q300,150 600,180 T1200,160 Q1000,300 800,280 T400,320 Q200,250 0,280 Z" 
            fill="url(#waveGrad1)"
            filter="url(#waveBlur1)"
            className="animate-wave-flow-1"
          />
        </svg>
      </div>

      {/* Flowing Wave Layer 2 */}
      <div className="absolute inset-0">
        <svg 
          viewBox="0 0 1200 800" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(96, 165, 250, 0.6)" />
              <stop offset="30%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="60%" stopColor="rgba(37, 99, 235, 0.5)" />
              <stop offset="100%" stopColor="rgba(29, 78, 216, 0.3)" />
            </linearGradient>
            <filter id="waveBlur2">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>
          <path 
            d="M1200,400 Q900,350 600,380 T0,360 Q200,500 400,480 T800,520 Q1000,450 1200,480 Z" 
            fill="url(#waveGrad2)"
            filter="url(#waveBlur2)"
            className="animate-wave-flow-2"
          />
        </svg>
      </div>

      {/* Flowing Wave Layer 3 */}
      <div className="absolute inset-0">
        <svg 
          viewBox="0 0 1200 800" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGrad3" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 197, 253, 0.4)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(30, 64, 175, 0.3)" />
            </linearGradient>
            <filter id="waveBlur3">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          <path 
            d="M0,600 Q400,550 800,580 T1200,560 Q1000,700 600,680 T0,720 Z" 
            fill="url(#waveGrad3)"
            filter="url(#waveBlur3)"
            className="animate-wave-flow-3"
          />
        </svg>
      </div>

      {/* Energy Stream Lines */}
      <div className="absolute inset-0">
        <svg 
          viewBox="0 0 1200 800" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="70%" stopColor="rgba(96, 165, 250, 0.6)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path 
            d="M-100,300 Q300,280 600,300 T1300,320" 
            stroke="url(#streamGrad)"
            strokeWidth="3"
            fill="none"
            className="animate-energy-stream-1"
          />
          <path 
            d="M-100,500 Q400,480 700,500 T1300,520" 
            stroke="url(#streamGrad)"
            strokeWidth="2"
            fill="none"
            className="animate-energy-stream-2"
          />
        </svg>
      </div>

      {/* Floating Energy Particles */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/60 rounded-full animate-particle-float-1 blur-sm"></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-cyan-300/70 rounded-full animate-particle-float-2 blur-sm"></div>
      <div className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-blue-300/50 rounded-full animate-particle-float-3 blur-sm"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-indigo-400/80 rounded-full animate-particle-float-4 blur-sm"></div>
    </div>
  );
};

export default AnimatedAtmosphere;