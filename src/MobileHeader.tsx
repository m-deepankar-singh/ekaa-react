import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/Logos/Ekaa Pitch Services-08.png";

interface MobileHeaderProps {
  onClose: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ onClose }) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const serviceItems = [
    {
      label: "Investor Pitch Deck - ReDesign",
      link: "/services/investor-pitch-deck-redesign",
    },
    {
      label: "Investor Pitch Deck - Custom Design",
      link: "/services/investor-pitch-deck-custom",
    },
    { label: "Business Plan", link: "/services/business-plan" },
    {
      label: "Financial Modeling & Analysis",
      link: "/services/financial-modeling",
    },
  ];

  const portfolioItems = [
    { label: "Pitch Decks", link: "/portfolio/pitches" },
    { label: "Slide designs", link: "/portfolio/slide-design" },
  ];

  const toggleSubmenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="p-4 flex justify-between items-center border-b">
        <Link to="/" className="text-2xl font-bold" onClick={onClose}>
          <img src={logo} alt="EKA Pitch Services" className="h-10" />
        </Link>
        <button onClick={onClose} className="text-gray-700 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="block py-2 px-4 text-gray-700 hover:text-purple-700 font-bold"
              onClick={onClose}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="block py-2 px-4 text-gray-700 hover:text-purple-700 font-bold"
              onClick={onClose}
            >
              About Us
            </Link>
          </li>
          <li>
            <button
              onClick={() => toggleSubmenu('services')}
              className="w-full flex justify-between items-center py-2 px-4 text-gray-700 hover:text-purple-700 font-bold"
            >
              Services
              <span className="ml-1 transition-transform duration-200 ease-in-out transform">
                {expandedMenu === 'services' ? '▲' : '▼'}
              </span>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedMenu === 'services' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {serviceItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="block py-2 px-8 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <button
              onClick={() => toggleSubmenu('portfolio')}
              className="w-full flex justify-between items-center py-2 px-4 text-gray-700 hover:text-purple-700 font-bold"
            >
              Portfolio
              <span className="ml-1 transition-transform duration-200 ease-in-out transform">
                {expandedMenu === 'portfolio' ? '▲' : '▼'}
              </span>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedMenu === 'portfolio' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {portfolioItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="block py-2 px-8 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link
              to="/blog"
              className="block py-2 px-4 text-gray-700 hover:text-purple-700 font-bold"
              onClick={onClose}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="block py-2 px-4 text-gray-700 hover:text-purple-700 font-bold"
              onClick={onClose}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <button
          className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 font-bold"
          onClick={() => {
            window.location.href = "/contact-us";
            onClose();
          }}
        >
          Request a Call Back
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;