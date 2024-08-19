import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/Logos/Ekaa Pitch Services-08.png";

const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`container mx-auto px-4 ${className} max-w-6xl`}>
    {children}
  </div>
);

const Dropdown: React.FC<{ items: { label: string; link: string }[] }> = ({
  items,
}) => (
  <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
    <div className="bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-bold"
            role="menuitem"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Header: React.FC = () => {
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
    { label: "Slide designs", link: "/portfolio/slide-designs" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <Container className="py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src={logo} alt="EKA Pitch Services" className="h-10" />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 items-center">
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-purple-700 font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-gray-700 hover:text-purple-700 font-bold"
              >
                About Us
              </Link>
            </li>
            <li className="group relative">
              <Link
                to="/services"
                className="text-gray-700 hover:text-purple-700 font-bold pb-2"
              >
                Services
              </Link>
              <Dropdown items={serviceItems} />
            </li>
            <li className="group relative">
              <Link
                to="/portfolio"
                className="text-gray-700 hover:text-purple-700 font-bold pb-2"
              >
                Portfolio
              </Link>
              <Dropdown items={portfolioItems} />
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-purple-700 font-bold"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-gray-700 hover:text-purple-700 font-bold"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 font-bold"
          onClick={() => (window.location.href = "/contact-us")}
        >
          Request a Call Back
        </button>
      </Container>
    </header>
  );
};

export default Header;
