import React, { useEffect, useRef } from 'react';

const SecuritySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative z-10 pt-24 md:pt-32 pb-16 px-6 md:px-12 bg-black" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#00b67a]/5 border border-[#00b67a]/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00b67a] animate-pulse shadow-[0_0_8px_#00b67a]" />
              <span className="text-[10px] font-bold text-[#00b67a] uppercase tracking-[0.2em]">Audited & Secure</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Verified Safety <br className="hidden md:block" /> Standards.
            </h2>
            
            <p className="text-white/40 text-sm md:text-base leading-relaxed mb-10 font-medium">
              Our program undergoes rigorous weekly security audits and real-time monitoring to ensure total data privacy and authentic user experiences for all participants.
            </p>
            
            <div className="flex flex-wrap items-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 cursor-default">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/McAfee_logo.svg/1200px-McAfee_logo.svg.png" alt="McAfee" className="h-5 md:h-6 object-contain" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Norton_LifeLock_logo.svg/2560px-Norton_LifeLock_logo.svg.png" alt="Norton" className="h-5 md:h-6 object-contain" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/DigiCert_Logo.svg/1200px-DigiCert_Logo.svg.png" alt="DigiCert" className="h-5 md:h-6 object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Right Side: Trust & Stats */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-10 lg:gap-16">
            
            {/* Trustpilot Section */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-6 h-6 text-[#00b67a]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                <span className="text-2xl font-black text-white tracking-tighter">Trustpilot</span>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center rounded-sm shadow-lg shadow-[#00b67a]/10">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                  </div>
                ))}
              </div>
              
              <div>
                <p className="text-white font-black text-lg leading-none mb-1">Excellent 4.9/5</p>
                <div className="flex items-center gap-2">
                  <span className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-black">15.2k Verified Users</span>
                  <div className="h-1 w-1 rounded-full bg-white/10" />
                </div>
              </div>
            </div>

            {/* Safety Index Section */}
            <div className="flex flex-col items-start min-w-[200px]">
              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">Safety Index</span>
                <span className="text-blue-500 font-black text-sm">100%</span>
              </div>
              
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-6">
                <div className="h-full bg-blue-500 w-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
              </div>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 w-full">
                {["SSL Secure", "No Fees", "Encrypted", "Verified"].map((label, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[10px] text-white/50 font-black uppercase tracking-widest whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;