
import React from 'react';

const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Cinematic Movie Poster Grid Layer - High Clarity & Rich Colors */}
      <div className="absolute inset-0 z-0 opacity-60 transition-opacity duration-1000">
        <div 
          className="absolute inset-[-10%] bg-cover bg-center animate-subtle-drift"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=100&w=2560&auto=format&fit=crop')`,
            transform: 'perspective(1000px) rotateX(15deg) scale(1.1)',
            filter: 'blur(0px) brightness(0.45) saturate(1.2) contrast(1.1)' 
          }}
        />
        {/* Subtle linear gradients */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,1) 0%, transparent 10%, transparent 90%, rgba(0,0,0,1) 100%), 
                              linear-gradient(to bottom, rgba(0,0,0,1) 0%, transparent 15%, transparent 85%, rgba(0,0,0,1) 100%)`,
          }}
        />
      </div>

      {/* Top Cinematic Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] cinematic-glow opacity-30 z-10" />
      
      {/* Deep Cinematic Masking */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-20" />
      <div className="absolute inset-0 bg-radial-vignette opacity-70 z-20" />
      
      {/* Drifting Atmospheric Light */}
      <div className="absolute top-[15%] -left-[10%] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[140px] animate-drift z-30" />
      <div className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] bg-red-800/5 rounded-full blur-[160px] animate-drift z-30" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
    </div>
  );
};

export default BackgroundGlow;
