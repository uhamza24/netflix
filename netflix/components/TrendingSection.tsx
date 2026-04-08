import React, { useRef } from 'react';

interface TrendingItem {
  id: number;
  title: string;
  imageUrl: string;
  hasNewEpisode?: boolean;
}

const trendingData: TrendingItem[] = [
  { 
    id: 1, 
    title: "Stranger Things", 
    imageUrl: "https://i.postimg.cc/zXkmfyhs/AAAABet-Fcud-Ulahd-Uopqq-RZd-ZHqahm-BBXOepf-Xu-PV5n985g-Sv-EJq5zrkhrw-K8VA3v-WAKfn-GYl-TOL-y-Ji7RQQi.jpg", 
    hasNewEpisode: true 
  },
  { 
    id: 2, 
    title: "Cyberpunk Edge", 
    imageUrl: "https://i.postimg.cc/q7WBGN1M/latest.png" 
  },
  { 
    id: 3, 
    title: "Gothic Nights", 
    imageUrl: "https://i.postimg.cc/k4Msf5Gp/111.jpg" 
  },
  { 
    id: 4, 
    title: "The Last Frontier", 
    imageUrl: "https://i.postimg.cc/hvDj5f7y/daredevil-born-again-season-2-ep.png" 
  },
  { 
    id: 5, 
    title: "The Witcher", 
    imageUrl: "https://i.postimg.cc/QVL0kGzw/ems-c-HJk-LWVtcy1hc3Nld-HMvd-HZz-ZXJp.png" 
  },
  { 
    id: 6, 
    title: "Arcane Origins", 
    imageUrl: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=100&w=800&auto=format&fit=crop", 
    hasNewEpisode: true 
  },
  { 
    id: 7, 
    title: "Squid Game", 
    imageUrl: "https://i.postimg.cc/bJ2mKx1Q/images.png" 
  },
  { 
    id: 8, 
    title: "Royal Dynasty", 
    imageUrl: "https://i.postimg.cc/1XvVBTfP/images-(1).png" 
  },
  { 
    id: 9, 
    title: "Digital Ghost", 
    imageUrl: "https://i.postimg.cc/FzzHrKsJ/images-(2).png" 
  },
  { 
    id: 10, 
    title: "Midnight Manor", 
    imageUrl: "https://i.postimg.cc/zXmfZqYT/STEEL-BALL-RUN-Jo-Jos-Bizarre-Adv.png", 
    hasNewEpisode: true 
  }
];

const TrendingSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleCoverClick = () => {
    window.open('https://google.com', '_blank');
  };

  return (
    <section className="relative z-10 bg-black pt-16 md:pt-24 pb-12 overflow-visible">
      <div className="px-6 md:px-12 relative z-20">
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-white/90 tracking-tight flex items-center gap-3">
          Trending Now in <span className="text-netflix-red">Early Access</span>
          <span className="h-1 w-1 rounded-full bg-white/20 hidden md:block"></span>
          <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-black hidden md:block">Live Updates</span>
        </h2>
        
        <div ref={scrollRef} className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-2 scroll-smooth">
          {trendingData.map((item) => (
            <div 
              key={item.id} 
              onClick={handleCoverClick}
              className="relative flex-none w-[130px] md:w-[180px] group cursor-pointer transition-transform duration-300 hover:scale-105 first:ml-4"
            >
              <div className="absolute -left-6 bottom-0 z-20 pointer-events-none">
                <span className="text-7xl md:text-9xl font-black text-black select-none leading-none tracking-tighter" 
                      style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)', filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.8))' }}>
                  {item.id}
                </span>
              </div>
              <div className="relative aspect-[2/3] rounded-md overflow-hidden border border-white/5 bg-zinc-900 shadow-xl ml-4">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent opacity-80" />
                {item.hasNewEpisode && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] z-30">
                    <div className="bg-[#E50914] text-white text-[9px] md:text-[11px] font-black py-1 px-1 rounded-sm text-center uppercase tracking-tighter shadow-lg">New Episode</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;