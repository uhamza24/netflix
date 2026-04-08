import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CinematicDivider from './components/CinematicDivider';
import TrendingSection from './components/TrendingSection';
import ReviewSection from './components/ReviewSection';
import FAQSection from './components/FAQSection';
import SecuritySection from './components/SecuritySection';
import Footer from './components/Footer';
import BackgroundGlow from './components/BackgroundGlow';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-netflix-red/30">
      <BackgroundGlow />
      <Navbar />
      <main>
        <Hero />
        <CinematicDivider />
        <TrendingSection />
        <ReviewSection />
        <FAQSection />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;