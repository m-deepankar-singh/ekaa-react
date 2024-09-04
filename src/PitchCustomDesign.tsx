/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Phone, Check, ChevronLeft, ChevronRight } from "lucide-react";
import first from "./images/custom-design/Team working on pitchdeck.png"
import second from "./images/custom-design/Pitch prsentation meeting.png"
import third from "./images/custom-design/Our Process.jpg"
import fourth from "./images/custom-design/man looking.png"
import fifth from "./images/custom-design/linqpa.jpg"
import sixth from "./images/custom-design/fundraising statergy.png"
import work1 from "./images/Our Works/Ekaa-Pitch-Our-Works-1.jpg";
import work2 from "./images/Our Works/Ekaa-Pitch-Our-Works-10.jpg";
import work3 from "./images/Our Works/Ekaa-Pitch-Our-Works-11.jpg";
import work4 from "./images/Our Works/Ekaa-Pitch-Our-Works-12.jpg";
import work5 from "./images/Our Works/Ekaa-Pitch-Our-Works-14.jpg";
import work6 from "./images/Our Works/Ekaa-Pitch-Our-Works-2.jpg";
import work7 from "./images/Our Works/Ekaa-Pitch-Our-Works-4.jpg";
import work8 from "./images/Our Works/Ekaa-Pitch-Our-Works-7.jpg";
import work9 from "./images/Our Works/Ekaa-Pitch-Our-Works-8.jpg";
import work10 from "./images/Our Works/Picture1 (1).jpg";
import work11 from "./images/Our Works/Picture1 (1).png";
import work12 from "./images/Our Works/Picture11.jpg";
import work13 from "./images/Our Works/Picture2 (1).jpg";
import work14 from "./images/Our Works/Picture5.jpg";
import work15 from "./images/Our Works/Picture6.jpg";
import work16 from "./images/Our Works/Picture7.jpg";
import work17 from "./images/Our Works/Picture8.jpg";
import work18 from "./images/Our Works/pitvh_77-1.jpg";
import client1Logo from "./images/Clients/Dr._Reddys_Laboratories_logo.png";
import client2Logo from "./images/Clients/ReNew-Power.jpg";
import client3Logo from "./images/Clients/Untitled-1_0000_02.jpg";
import client4Logo from "./images/Clients/Untitled-1_0001_Zero-40.jpg";
import client5Logo from "./images/Clients/Untitled-1_0002_Sagar-Ratna-Logo.jpg";
import client6Logo from "./images/Clients/Untitled-1_0003_PurpleDrone_LOGO-01.jpg";
import client7Logo from "./images/Clients/Untitled-1_0004_LVLUP.jpg";
import client8Logo from "./images/Clients/Untitled-1_0005_logo_1630993464.jpg";
import client9Logo from "./images/Clients/Untitled-1_0006_Logo-File.jpg";
import client10Logo from "./images/Clients/Untitled-1_0007_Logo-Akshara-Orchard.jpg";
import client11Logo from "./images/Clients/Untitled-1_0008_Logo-Akshara-Orchard-01.jpg";
import client12Logo from "./images/Clients/Untitled-1_0009_Lens-Caravan.jpg";
import client13Logo from "./images/Clients/Untitled-1_0010_Concept-Games-01.jpg";
import client14Logo from "./images/Clients/asseshomes-2.jpg";
import client15Logo from "./images/Clients/rusk-logo-1.jpg";
import icon1 from "./images/Achivements/icon1.png";
import icon2 from "./images/Achivements/icon2.png";
import icon3 from "./images/Achivements/icon3.png";
import icon4 from "./images/Achivements/icon4.png";
import banner from "./images/Banners/Investor Pitch Deck Custom Design.jpg"
import { Link } from "react-router-dom";




const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`container mx-auto px-4 ${className} max-w-6xl`}>
    {children}
  </div>
);

const works = [
  { image: work1, title: "Growth Strategy", company: "Company A" },
  { image: work2, title: "Network of Stores", company: "Company B" },
  { image: work3, title: "Mission & Vision", company: "Company C" },
  { image: work4, title: "Financial Overview", company: "Company D" },
  { image: work5, title: "Market Analysis", company: "Company E" },
  { image: work6, title: "Product Showcase", company: "Company F" },
  { image: work7, title: "Team Introduction", company: "Company G" },
  { image: work8, title: "Business Model", company: "Company H" },
  { image: work9, title: "Competitive Advantage", company: "Company I" },
  { image: work10, title: "Future Roadmap", company: "Company J" },
  { image: work11, title: "Investment Opportunity", company: "Company K" },
  { image: work12, title: "Customer Testimonials", company: "Company L" },
  { image: work13, title: "Global Expansion", company: "Company M" },
  { image: work14, title: "Sustainability Goals", company: "Company N" },
  { image: work15, title: "Technology Stack", company: "Company O" },
  { image: work16, title: "Marketing Strategy", company: "Company P" },
  { image: work17, title: "Revenue Projections", company: "Company Q" },
  { image: work18, title: "Exit Strategy", company: "Company R" },
];
const clientLogos = [
  { name: "Client 1", logo: client1Logo },
  { name: "Client 2", logo: client2Logo },
  { name: "Client 3", logo: client3Logo },
  { name: "Client 4", logo: client4Logo },
  { name: "Client 5", logo: client5Logo },
  { name: "Client 6", logo: client6Logo },
  { name: "Client 7", logo: client7Logo },
  { name: "Client 8", logo: client8Logo },
  { name: "Client 9", logo: client9Logo },
  { name: "Client 10", logo: client10Logo },
  { name: "Client 11", logo: client11Logo },
  { name: "Client 12", logo: client12Logo },
  { name: "Client 13", logo: client13Logo },
  { name: "Client 14", logo: client14Logo },
  { name: "Client 15", logo: client15Logo },
];
const count = [icon1,icon2,icon3,icon4]
interface ArrowProps {
  onClick: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md z-10"
  >
    <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
  </button>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 md:p-2 shadow-md z-10"
  >
    <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
  </button>
);

const stats = [
  { image: icon1, number: "500+", text: "Satisfied Clients" },
  { image: icon2, number: "14+", text: "Countries" },
  { image: icon3, number: "180+", text: "INR Crs Raised Collectively" },
  { image: icon4, number: "22+", text: "Dynamic Industries" },
];


const PitchCustomDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
};

const prevSlide = () => {
  setCurrentIndex(
    (prevIndex) => (prevIndex - 1 + works.length) % works.length
  );
};

useEffect(() => {
  const intervalId = setInterval(nextSlide, 5000);
  return () => clearInterval(intervalId);
}, []);

const [currentIndex1, setCurrentIndex1] = useState(0);
const [visibleLogos, setVisibleLogos] = useState(5);
const logoCount = clientLogos.length;

const nextSlide1 = () => {
  setCurrentIndex1((prevIndex) =>
    prevIndex === logoCount - visibleLogos ? 0 : prevIndex + 1
  );
};

const prevSlide1 = () => {
  setCurrentIndex1((prevIndex) =>
    prevIndex === 0 ? logoCount - visibleLogos : prevIndex - 1
  );
};

useEffect(() => {
  const interval = setInterval(nextSlide, 3000);
  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setVisibleLogos(2);
    } else if (window.innerWidth < 768) {
      setVisibleLogos(3);
    } else if (window.innerWidth < 1024) {
      setVisibleLogos(4);
    } else {
      setVisibleLogos(5);
    }
  };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <div className="bg-white py-16">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={banner}
          alt="Pitch deck custom design hero"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Container>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Investor Pitch Deck Custom Design
              </h1>
              <nav className="text-sm text-white">
                    <a href="/" className="hover:underline">
                      Home
                    </a>{" "}
                    /
                    <a href="/services" className="hover:underline">
                      {" "}
                      Our Services
                    </a>{" "}
                    /
                   <span > Investor Pitch Deck Custom Design</span>
              </nav>
            </div>
          </Container>
        </div>
      </div>

      <Container className="py-12">
        {/* Purple Box */}
        <div className="bg-purple-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-2">Custom Pitch Deck Design</h2>
          <p className="text-lg">
            Fully Custom Designed – Compelling, Professional Pitch Decks
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <p className="text-lg text-gray-700">
            At Ekaa Pitch Deck Services, our goal is to create the ideal pitch
            deck for your company. We prioritize elegance and impressiveness,
            providing custom investor pitch deck design solutions that are
            investor-friendly. Our eye-catching decks encompass all key points
            investors seek, ensuring the potential for substantial funding that
            can drive your business toward success.
          </p>

          <div className="md:flex md:items-center md:space-x-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <p className="text-lg text-gray-700">
                We take pride in crafting custom pitch decks that showcase your
                business positively. Effective communication with clients is a
                priority throughout the process. Our Ekaa Pitch team conducts
                thorough Q&A sessions to gather essential information for
                creating a compelling investor pitch deck tailored to secure the
                funding you require. With meticulous attention to detail, we
                structure slides to clearly depict your ideas, leaving no aspect
                overlooked.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={first}
                alt="Team working on pitch deck"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </Container>
      <Container className="py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <img
              src={second}
              alt="Pitch presentation meeting"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Smart, beautiful, and effective investor presentations for
                startups.
              </h2>
              <p className="text-gray-700">
                Our Investor Pitch Deck is entirely customized to meet your
                specific requirements, avoiding generalization for maximum
                investor impact. As a leading pitch deck design service in
                India, we deliver premium-quality results. With a decade of
                industry expertise, we combine experience and the latest trends
                to craft a compelling presentation that intrigues and engages
                your investors. Our carefully designed content portrays your
                business in the best light, incorporating core factors and
                cutting-edge technology for an exceptional sales pitch deck.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Our Process:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="font-bold mr-2">1. Discovery:</span>
                <p>
                  We initiate with a deep understanding of your business,
                  objectives, and target audience.
                </p>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2. Outline:</span>
                <p>
                  We create a content outline to ensure your story is
                  strategically structured.
                </p>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3. Design:</span>
                <p>
                  We develop your story, visualizing data and aligning design
                  with your brand identity.
                </p>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">4. Review:</span>
                <p>
                  We engage in a feedback loop, incorporating your inputs until
                  you're fully satisfied.
                </p>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">5. Delivery:</span>
                <p>
                  We finalize and deliver a compelling, high-quality investor
                  pitch deck or collateral.
                </p>
              </li>
            </ol>
            <img
              src={third}
              alt="Pitch deck process illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Container>
      <Container className="py-12">
        <div className="space-y-16">
          

          
        </div>
      </Container>
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-8">
        <Container className="flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white md:w-2/3">
            Design Services: Get our Team of Experts to Design your Pitch Deck
          </h2>
          <Link to={"/contact-us"} ><button className="bg-white text-purple-600 px-4 py-2 rounded-full flex items-center text-sm">
            <Phone className="mr-2" size={16} />
            Contact US
          </button>
          </Link>
        </Container>
      </div>

      {/* Content Sections */}
      <Container className="py-12 space-y-12">
        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 text-sm">
              We provide a comprehensive service, offering two revision rounds
              to address any issues and ensure perfection. Our Ekaa Pitch team
              is dedicated to delivering error-free presentations. To facilitate
              easy editing, final files are delivered in spreadsheet or
              presentation formats. Check out our deck samples to assess our
              work. For urgent projects, opt for our express delivery with a 50%
              fee increment. Your satisfaction is our priority.
            </p>
          </div>
          <div>
            <img
              src={fourth}
              alt="Man looking at financial symbols"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <h3 className="text-xl font-bold mb-3">Custom Pitch Deck Design</h3>
            <p className="text-gray-700 text-sm mb-6">
              We understand that each startup is unique and we take the leap
              beyond the usual to create a theme-based pitch deck design for
              your startup. This design is informative, attractive, while at the
              same time not too cluttered.
            </p>
            <h3 className="text-xl font-bold mb-3">Pitch Deck Content</h3>
            <p className="text-gray-700 text-sm">
              Investors like to see data and they read within the lines. So, we
              make sure that the content of your pitch deck is top-notch and has
              all the key data points from your vision, mission, problem
              statement, and solution.
            </p>
          </div>
          <div className="md:order-1">
            <img
              src={fifth}
              alt="LINQpay Investor Pitch Deck"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
      <Container className="py-12 space-y-16">
        {/* Fundraising Strategy and Design Process */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Fundraising Strategy</h3>
            <p className="text-gray-700 mb-6">
              We will also help you with financial forecasts that represent the
              company's need for funds and how it plans to use them. This will
              help you build the perfect fundraising strategy for your startup.
            </p>

            <h3 className="text-2xl font-bold mb-4">The Design Process</h3>
            <p className="text-gray-700">
              The design begins with an in-depth Q/A session between you and the
              Ekaa Pitch team. This will help us understand your project details
              and we will create a design accordingly. Once the Q/A is over, the
              team starts working on a template and gets your approval. After
              rounds of changes (if any) the content team works on the template
              to write a copy that can land you investors.
            </p>
          </div>
          <div>
            <img
              src={sixth}
              alt="Financial charts and graphs"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* What's Included Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">
            What's Included in our Custom Pitch Decks?
          </h2>
          <ul className="space-y-2 mb-6">
            <li>
              • Our pitch decks follow an industry-standard method to capture
              the attention of the readers from the onset.
            </li>
            <li>
              • The pitch decks are typically 15 slides in length and include a
              financial model.
            </li>
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Introduction",
              "Company Mission",
              "Industry Problem",
              "Company Solution",
              "Why Now",
              "Market Size",
              "Competitive Landscape",
              "Value Proposition",
              "Go-To-Market Strategy",
              "The Team",
              "Unit Economics/Assumptions",
              "Financial Highlights",
              "Conclusion with Contact Info",
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <Check className="text-green-500 mr-2" size={16} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Investors Should Collaborate Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">
            Why investors should collaborate with your agency to secure funding
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Ignite Investor Excitement",
                description:
                  "We craft pitch decks that spark immediate interest and showcase your startup's unique edge, like a captivating story you can't put down.",
              },
              {
                title: "Build Investor Confidence",
                description:
                  "Our decks go beyond flashy visuals. We demonstrate deep market knowledge, dissect your competition, and pinpoint your ideal audience, building trust and credibility from the ground up.",
              },
              {
                title: "Chart a Clear Path to Profit",
                description:
                  "We don't just paint a picture, we paint a roadmap. Our decks lay out transparent financial projections and highlight the potential returns for investors, leaving them confident in your ability to deliver.",
              },
              {
                title: "Design that Delivers",
                description:
                  "Forget generic templates. We design compelling pitch decks that visually echo your vision, passion, and expertise, ensuring your presentation resonates with investors on every level.",
              },
            ].map((card, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <section className="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-10">
        <Container>
          <div className="flex justify-between items-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <img
                  src={stat.image}
                  alt={stat.text}
                  className="h-16 mx-auto mb-2"
                />
                <div className="text-3xl font-bold">{stat.number}</div>
                <div>{stat.text}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
      <Container>
        <h2 className="text-4xl font-bold mb-4 text-center">Our Works</h2>
        <p className="text-center mb-12">
          Some samples of our presentation design work
        </p>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {works.map((work, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-2">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </Container>
    </section>

    <section className="py-12 md:py-16 bg-white">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800">
          Our Trusted Clients
        </h2>
        <div className="relative px-8 md:px-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex1 * (100 / visibleLogos)}%)`,
              }}
            >
              {clientLogos.map((client, index) => (
                <div key={index} className={`flex-shrink-0 w-1/${visibleLogos} px-2 md:px-4`}>
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-16 sm:h-20 md:h-24 lg:h-32 mx-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <PrevArrow onClick={prevSlide1} />
          <NextArrow onClick={nextSlide1} />
        </div>
      </Container>
    </section>    </div>
  );
};

export default PitchCustomDesign;
