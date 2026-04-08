import React, { useEffect, useRef } from 'react';

interface Review {
  id: number;
  name: string;
  role: string;
  time: string;
  likes: string;
  comment: string;
  avatar: string;
  reactions: string[];
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Verified Member",
    time: "2h",
    likes: "1.2K",
    comment: "GUYS IT'S REAL! 😱 Just got my unique login for the Early Access dashboard. I'm literally watching the first episode of the unreleased show Stranger Things: Tales from ’85 right now. The quality is 4K and it's so smooth. If you haven't applied yet, DO IT NOW! 🍿🔥",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=100&w=200&auto=format&fit=crop",
    reactions: ["👍", "❤️", "😮"]
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Accepted Participant",
    time: "5h",
    likes: "854",
    comment: "I was skeptical at first, but I just received my physical welcome kit and the digital pass. Watching episode 9 season 5 of stranger things before my friends even know it exists is the ultimate flex. The application process was super straightforward. Highly recommended! ✅",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=100&w=200&auto=format&fit=crop",
    reactions: ["👍", "😆", "🔥"]
  },
  {
    id: 3,
    name: "David V.",
    role: "Insider Alpha",
    time: "12h",
    likes: "2.4K",
    comment: "This program is a game changer. The exclusive screenings are top-notch. I just gave my feedback on a pilot episode for a new thriller—how cool is it that we might actually influence the final cut? Thank you Netflix for this opportunity! 🙏✨",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=100&w=200&auto=format&fit=crop",
    reactions: ["❤️", "🙏", "😮"]
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Beta Watcher",
    time: "1d",
    likes: "612",
    comment: "Can't believe I'm actually part of this. The bridgerton season 4 part 2 preview was breathtaking. Being an Insider feels so premium. If you love cinema, this is the place to be. 🎬❤️ #NetflixInsider #EarlyAccess",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=100&w=200&auto=format&fit=crop",
    reactions: ["👍", "❤️", "🎉"]
  },
  {
    id: 5,
    name: "Liam O'Connor",
    role: "Beta Reviewer",
    time: "2d",
    likes: "1.5K",
    comment: "The verification was so fast. I applied on Tuesday and had my credentials by Thursday. Currently binge-watching a series that isn't supposed to be out until winter. Best decision ever! ❄️📺",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=100&w=200&auto=format&fit=crop",
    reactions: ["👍", "😆", "🔥"]
  }
];

const ReviewSection: React.FC = () => {
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
    <section className="relative z-10 pt-0 pb-0 px-6 md:px-12 bg-black overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 reveal">
          <h2 className="text-xl md:text-3xl font-black text-white mb-1.5 tracking-tight uppercase">
            Accepted Members <span className="text-white/40">& Reviewers</span>
          </h2>
          <p className="text-white/40 font-medium text-[10px] md:text-sm uppercase tracking-widest">Global Community Feedback</p>
        </div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">
          {reviews.map((review, idx) => (
            <div 
              key={review.id}
              className="reveal flex-none w-[88vw] sm:w-[450px] snap-center bg-[#242526] border border-white/5 rounded-xl shadow-2xl flex flex-col"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={review.avatar} alt={review.name} className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border border-white/10" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center border-2 border-[#242526]">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#e4e6eb] hover:underline cursor-pointer leading-tight">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[13px] text-[#b0b3b8] hover:underline cursor-pointer">{review.time}</span>
                      <span className="text-[#b0b3b8] text-[13px]">·</span>
                      <svg className="w-3 h-3 text-[#b0b3b8]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.5 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <button className="text-[#b0b3b8] hover:bg-white/5 p-2 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>
              </div>

              <div className="px-4 pb-3">
                <p className="text-[15px] text-[#e4e6eb] leading-normal whitespace-pre-line">
                  {review.comment}
                </p>
              </div>

              <div className="px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-1">
                    {review.reactions.map((emoji, i) => (
                      <div key={i} className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ring-2 ring-[#242526] ${
                        emoji === '👍' ? 'bg-blue-500' : 
                        emoji === '❤️' ? 'bg-red-500' : 
                        emoji === '😆' ? 'bg-yellow-500' : 'bg-orange-500'
                      }`}>
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <span className="text-[14px] text-[#b0b3b8] ml-1">
                    {review.likes}
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[14px] text-[#b0b3b8] hover:underline cursor-pointer">42 comments</span>
                  <span className="text-[14px] text-[#b0b3b8] hover:underline cursor-pointer">12 shares</span>
                </div>
              </div>

              <div className="px-1 py-1 flex items-center justify-around">
                <button className="flex-1 flex items-center justify-center gap-2 py-1.5 hover:bg-white/5 rounded-md transition-colors group">
                  <svg className="w-5 h-5 text-[#b0b3b8] group-hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.708c.806 0 1.411.727 1.258 1.508L18.73 17.508a1.5 1.5 0 01-1.472 1.492H7.2a1.5 1.5 0 01-1.5-1.5V8.5a1.5 1.5 0 011.5-1.5h.71a1.5 1.5 0 001.06-.44l1.415-1.414A1.5 1.5 0 0111.45 4.7H12a2 2 0 012 2v3.3z" />
                  </svg>
                  <span className="text-[14px] font-bold text-[#b0b3b8] group-hover:text-blue-500 transition-colors">Like</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-1.5 hover:bg-white/5 rounded-md transition-colors">
                  <svg className="w-5 h-5 text-[#b0b3b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-[14px] font-bold text-[#b0b3b8]">Comment</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-1.5 hover:bg-white/5 rounded-md transition-colors">
                  <svg className="w-5 h-5 text-[#b0b3b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span className="text-[14px] font-bold text-[#b0b3b8]">Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;