import React, { useState } from 'react';
import { FileText, CheckSquare, Rocket, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Hero: React.FC = () => {
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  const handleApply = () => {
    window.open('https://appchecker.space/cl/i/rn7g4v', '_blank');
  };

  const toggleTutorial = () => {
    setIsTutorialOpen(!isTutorialOpen);
  };

  return (
    <section className="relative z-10 pt-16 md:pt-24 pb-20 md:pb-32 px-6 md:px-12 flex flex-col items-center text-center">
      <div className="max-w-4xl w-full">
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6 md:mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-red-500 uppercase">Exclusive Invitation Only</span>
        </motion.div>
        
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 md:mb-10 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent"
        >
          Watch Unreleased <br className="hidden md:block" /> Movies & Series Before <br className="hidden md:block" /> the World.
        </motion.h1>
        
        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-14"
        >
          Join the Netflix Early Access Program and get exclusive previews, 
          private screenings, and insider content before they hit the mainstream.
        </motion.p>

        {/* CTA Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={handleApply}
              className="w-full sm:w-auto group relative flex items-center justify-center gap-4 bg-[#FF0000] text-white px-10 py-5 rounded-md text-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-tighter shadow-[0_0_30px_rgba(255,0,0,0.3)]"
            >
              Apply Now
              <ChevronRight className="w-6 h-6 stroke-[4px] transition-transform group-hover:translate-x-1" />
            </button>

            <button 
              onClick={toggleTutorial}
              className={`w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-md text-xl font-bold transition-all duration-300 border-2 uppercase tracking-tighter group ${
                isTutorialOpen 
                  ? 'bg-white/10 border-white/40 text-white' 
                  : 'bg-transparent border-white/20 text-white hover:border-white/40'
              }`}
            >
              How it Works
              <ChevronDown className={`w-6 h-6 stroke-[4px] transition-transform duration-500 ${isTutorialOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Tutorial Accordion - Enhanced Design */}
          <AnimatePresence>
            {isTutorialOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0, y: -20 }}
                animate={{ height: 'auto', opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="w-full max-w-[480px] overflow-hidden"
              >
                <div className="bg-[#000000]/70 border border-white/10 rounded-[2.5rem] p-10 text-left shadow-[0_0_100px_rgba(0,0,0,0.8)] mt-8 relative overflow-hidden backdrop-blur-2xl">
                  {/* Subtle Background Glows */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-netflix-red/10 blur-[80px] pointer-events-none" />
                  
                  <div className="flex items-center gap-3 mb-12 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-[#FF0000] shadow-[0_0_12px_#FF0000]" />
                    <h3 className="text-white font-black text-sm tracking-[0.3em] uppercase opacity-80">Program Access Guide</h3>
                  </div>
                  
                  <ul className="space-y-12 relative z-10">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-10 bottom-10 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
                    
                    {[
                      { 
                        icon: <FileText className="w-5 h-5 text-white/80" />, 
                        title: "Begin Application", 
                        desc: "Start by clicking the Apply Now button to open the secure form." 
                      },
                      { 
                        icon: <CheckSquare className="w-5 h-5 text-green-500" />, 
                        title: "Verify Process", 
                        desc: "Install our sponsor app and open it for 30 seconds to get exclusive access." 
                      },
                      { 
                        icon: <Rocket className="w-5 h-5 text-white/80" />, 
                        title: "Watch Instantly", 
                        desc: "Receive your exclusive entry credentials via email within 48 hours." 
                      }
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        className="flex gap-6 relative group/item"
                      >
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-lg group-hover/item:border-netflix-red/50 transition-all duration-500">
                          {item.icon}
                        </div>
                        <div className="pt-1">
                          <p className="text-white font-bold text-lg mb-1.5 leading-tight group-hover/item:text-netflix-red transition-colors duration-300">{item.title}</p>
                          <p className="text-white/40 text-[13px] md:text-sm leading-relaxed font-medium group-hover/item:text-white/60 transition-colors duration-300">{item.desc}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;