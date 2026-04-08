import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-50 w-full px-2 pt-0 pb-6 md:px-4 flex items-center justify-between opacity-0 animate-slide-down">
      <div className="flex items-center gap-1.5 group cursor-pointer">
        {/* Official N Ribbon Style Netflix Logo - Simplified & Large */}
        <div className="relative w-24 h-24 md:w-36 md:h-36 transition-all duration-500 group-hover:scale-105 flex items-center justify-center">
          <img 
            src="https://i.postimg.cc/sDhGThRF/151-1510639-netflix-app-icon-png-Photoroom.png" 
            alt="Netflix Logo" 
            className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(229,9,20,0.7)] relative z-10"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="flex flex-col justify-center -ml-1">
          <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-netflix-red uppercase leading-tight">
            EARLY ACCESS
          </span>
          <span className="text-[8px] md:text-[9px] font-medium tracking-[0.3em] text-white/30 uppercase">
            BETA PROGRAM
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer group">
          <img 
            src="https://i.postimg.cc/X7jpdFZm/images-(4).png" 
            alt="Profile" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;