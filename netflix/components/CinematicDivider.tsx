import React from 'react';

const CinematicDivider: React.FC = () => {
  return (
    <div className="relative w-full h-[60px] md:h-[100px] overflow-visible z-20 -mt-10 md:-mt-16">
      {/* The Curved Divider SVG */}
      <div className="absolute top-0 left-0 w-full overflow-visible leading-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Black Fill to separate backgrounds */}
          <path 
            d="M0,100 C400,20 800,20 1200,100 L1200,120 L0,120 Z" 
            className="fill-black" 
          />
          
          {/* Glowing Red Line */}
          <path 
            d="M0,100 C400,20 800,20 1200,100" 
            fill="none" 
            stroke="#E50914" 
            strokeWidth="2" 
            className="drop-shadow-[0_0_20px_rgba(229,9,20,1)] opacity-100"
          />
          
          {/* Secondary Soft Glow Layer */}
          <path 
            d="M0,100 C400,20 800,20 1200,100" 
            fill="none" 
            stroke="#E50914" 
            strokeWidth="6" 
            className="blur-xl opacity-50"
          />
        </svg>
      </div>
    </div>
  );
};

export default CinematicDivider;