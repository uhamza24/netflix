import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SupportPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportPopup: React.FC<SupportPopupProps> = ({ isOpen, onClose }) => {
  const steps = [
    { 
      emoji: "📝", 
      title: "Begin Application", 
      desc: "Start by clicking the Apply Now button to open the secure form." 
    },
    { 
      emoji: "✅", 
      title: "Verify Process", 
      desc: "Install our sponsor app and open it for 30 seconds to get exclusive access." 
    },
    { 
      emoji: "🚀", 
      title: "Watch Instantly", 
      desc: "Receive your exclusive entry credentials via email within 48 hours." 
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          {/* Backdrop - Reduced Opacity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Content - Refined Centering & Dimensions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-[420px] max-h-[90vh] bg-zinc-950/90 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_100px_rgba(0,0,0,0.9)] overflow-y-auto backdrop-blur-2xl scrollbar-hide"
          >
            {/* Glass Highlight Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
            
            {/* Background Glows - Refined */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-netflix-red/10 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-red-900/5 blur-[80px] pointer-events-none" />

            {/* Close Button - Refined */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 group z-50"
            >
              <svg className="w-4 h-4 transition-transform group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header - Refined */}
            <div className="mb-10 relative z-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-netflix-red shadow-[0_0_10px_#E50914]" />
                <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em]">Support Center</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-none">
                Access Guide
              </h2>
            </div>

            {/* Steps List - Refined Spacing */}
            <div className="space-y-10 relative z-10">
              {/* Vertical Line - Refined */}
              <div className="absolute left-[19px] top-8 bottom-8 w-[1px] bg-white/10" />

              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-netflix-red/40 transition-all duration-500 shadow-xl">
                    <span className="text-xl grayscale-[0.2] group-hover:grayscale-0 transition-all">{step.emoji}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-[13px] md:text-sm leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer Action - Refined */}
            <div className="mt-12 pt-8 border-t border-white/5 flex justify-center relative z-10">
              <button
                onClick={onClose}
                className="text-[11px] font-black text-white/30 uppercase tracking-[0.5em] hover:text-white transition-colors duration-300"
              >
                Close Guide
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SupportPopup;
