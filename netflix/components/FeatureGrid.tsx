
import React, { useEffect, useRef } from 'react';

const features = [
  {
    title: "Early Screenings",
    description: "Watch blockbuster movies and indie gems weeks or even months before their official global release date.",
    icon: (
      <svg className="w-6 h-6 text-netflix-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Exclusive Content",
    description: "Access behind-the-scenes footage, director's cuts, and alternative endings available only to program members.",
    icon: (
      <svg className="w-6 h-6 text-netflix-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.14A10.503 10.503 0 0112 6c4.704 0 8.803 3.031 10.247 7.243M9.62 10.406l-4.935-2.849m0 0l4.935-2.849m-4.935 2.849L9.62 10.406zM6 6h.01" />
      </svg>
    )
  },
  {
    title: "Priority Invitations",
    description: "Get first-tier access to red carpet virtual events, live Q&As with creators, and feedback focus groups.",
    isNew: true,
    icon: (
      <svg className="w-6 h-6 text-netflix-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    )
  }
];

const FeatureGrid: React.FC = () => {
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
    <section className="relative z-10 pt-16 pb-16 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <div className="reveal mb-12">
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase">
            Insider Privileges
          </h2>
          <div className="w-12 h-1 bg-netflix-red mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="reveal feature-card group relative p-10 rounded-[2rem] border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/80 transition-all duration-500 cursor-default hover:-translate-y-2"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {feature.isNew && (
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-netflix-red text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-[0_0_15px_rgba(229,9,20,0.4)] animate-subtle-pulse select-none">
                    NEW!
                  </div>
                </div>
              )}
              
              <div className="w-14 h-14 rounded-2xl bg-red-950/20 flex items-center justify-center mb-8 border border-white/5 group-hover:bg-netflix-red transition-all duration-500">
                <div className="group-hover:text-white transition-colors">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { 
                    className: "w-7 h-7 transition-colors group-hover:text-white" 
                  })}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors duration-300 text-white/90">
                {feature.title}
              </h3>
              <p className="text-white/40 leading-relaxed text-sm group-hover:text-white/60 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
