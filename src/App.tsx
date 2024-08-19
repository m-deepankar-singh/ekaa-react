// App.tsx
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import AboutPage from './AboutUs';
import Footer from './Footer';
import Services from './Services';
import ContactPage from './ContactUs';
import PitchReDesign from './PitchReDesign';
import PitchCustomDesign from './PitchCustomDesign';
import BusinessPlan from './BusinessPlan';
import FinancialModelling from './FInancialModelling';
import WhatsAppButton from './WhatsApp';
import PrivacyPolicy from './PP';
import CookiePolicy from './CookiePolicy';
import Portfolio from './Portfolio';

// Placeholder components for other pages
const PortfolioPage: React.FC = () => <div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold">Portfolio</h1></div>;
const BlogPage: React.FC = () => <div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold">Blog</h1></div>;

const App: React.FC = () => {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//code.tidio.co/war8lentbmmn1vsomhmejrubemppwncr.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup function to remove the script if the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  console.log('App component rendering');

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/investor-pitch-deck-redesign" element={<PitchReDesign />} />
          <Route path="/services/investor-pitch-deck-custom" element={<PitchCustomDesign />} />
          <Route path="/services/business-plan" element={<BusinessPlan />} />
          <Route path="/services/financial-modeling" element={<FinancialModelling />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiePolicy />} />
          <Route path="/portfolio/pitches" element={<Portfolio />} />
        </Routes>
      </main>
      <Footer />
    </div>
    <WhatsAppButton />
    </>
  );
};

export default App;