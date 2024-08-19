import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import elogo from "./images/Logos/E  white.png";
import logo from "./images/Logos/Ekaa In white-10.png";

const Footer: React.FC = () => {
  const address =
    "A1&2, II Floor, Green Channel Apts, Khairtabad, Hyderabad-500 004, Telangana, India";
  const encodedAddress = encodeURIComponent(address);
  const phoneNumber = "+91-901-022-1000";
  const email = "info@ekaapitch.com";

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="EKAA Pitch Services" className="h-12 mb-4" />
            <p className="text-sm mb-4">
              Ekaa Pitch Deck Services came into existence from the ingenuity
              and brilliance of the founder of one of the leading business
              planning and strategy firms.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Ekaapitch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook
                  className="text-blue-500 hover:text-blue-400"
                  size={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/ekaa-pitch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin
                  className="text-blue-500 hover:text-blue-400"
                  size={24}
                />
              </a>
              <a
                href="https://twitter.com/EkaaPitch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter
                  className="text-blue-500 hover:text-blue-400"
                  size={24}
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Short Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About Us",
                "Blog",
                "Privacy Policy",
                "Cookies Policy",
                "Faq's",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/['\s]/g, "-")}`}
                    className="hover:text-gray-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Ekaa Business Solutions</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start mb-2 hover:text-gray-300"
            >
              <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
              <span>{address}</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center mb-2 hover:text-gray-300"
            >
              <Mail size={18} className="mr-2" />
              <span>{email}</span>
            </a>
            <a
              href={`tel:${phoneNumber.replace(/[-\s]/g, "")}`}
              className="flex items-center hover:text-gray-300"
            >
              <Phone size={18} className="mr-2" />
              <span>{phoneNumber}</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-700 flex justify-between items-center">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} Ekaa Business Solution
          </p>
          <img src={elogo} alt="E Logo" className="h-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
