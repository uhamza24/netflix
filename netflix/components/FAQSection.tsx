import React, { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    question: "Is this program really free?",
    answer: "Yes, the Netflix Early Access program is completely free for selected participants. We never ask for credit card information or subscription fees during the application process."
  },
  {
    question: "How do I get my login credentials?",
    answer: "Once your application is verified through our partner protocol, your unique credentials will be generated and sent to your provided email address within 24-48 hours."
  },
  {
    question: "What kind of content can I watch?",
    answer: "You'll have access to early screenings of original series, unreleased movies, and exclusive director's cuts. This includes select titles from our partner studios."
  },
  {
    question: "Is my data secure?",
    answer: "We use enterprise-grade encryption and follow strict privacy protocols. Your information is only used to verify your eligibility and deliver your access pass."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-white/40 text-sm md:text-base font-medium">Everything you need to know about the Early Access program.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="reveal border border-white/5 bg-zinc-900/40 rounded-2xl overflow-hidden transition-all duration-300"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-sm md:text-base font-bold text-white/90">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-netflix-red transition-transform duration-300 ${activeIndex === idx ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-500 ease-in-out ${activeIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 pt-0 text-white/40 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;