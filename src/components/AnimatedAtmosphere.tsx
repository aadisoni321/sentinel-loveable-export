import { useEffect, useRef } from 'react';

const AnimatedAtmosphere = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Simple Flowing Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-flow animate-gradient-flow"></div>
      
      {/* Secondary flowing layer for depth */}
      <div className="absolute inset-0 bg-gradient-flow-2 animate-gradient-flow-2"></div>
    </div>
  );
};

export default AnimatedAtmosphere;