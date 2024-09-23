import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  MapPin,
  DollarSign,
  Users,
} from "lucide-react";
import image1 from "./images/About Us/About Ekaa.jpg";
import image2 from "./images/About Us/Constantly Designing.jpg";
import image3 from "./images/About Us/Financial-Forecasting-1.jpg";
import image4 from "./images/About Us/Always on the move.jpg";
import image5 from "./images/About Us/What we believe.jpg";
import image6 from "./images/About Us/About-us.jpg"
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


const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`container mx-auto px-4 ${className} max-w-6xl`}>
    {children}
  </div>
);

const StatItem: React.FC<{
  icon: React.ReactNode;
  value: string;
  label: string;
}> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center">
    <div className="text-white mb-2">{icon}</div>
    <div className="text-white text-2xl font-bold">{value}</div>
    <div className="text-white text-sm">{label}</div>
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


const AboutPage: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [isMobile, setIsMobile] = useState(false);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + works.length) % works.length
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const intervalId = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const visibleWorks = isMobile
    ? [works[currentIndex]]
    : [
        works[currentIndex],
        works[(currentIndex + 1) % works.length],
        works[(currentIndex + 2) % works.length],
      ];

  return (
    <div className="flex flex-col min-h-screen py-24">
      {/* Hero Section */}
      <div className="relative h-40 sm:h-64 lg:h-80 bg-gray-300">
        <img
          src={image6}
          alt="About Us Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white ">
            About Us
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 sm:py-4">
        <Container>
          <p className="text-xs sm:text-sm">
            <span className="text-gray-500">Home</span> /{" "}
            <span className="font-semibold">About Us</span>
          </p>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-8 sm:py-12">
        {/* Section 1: About Ekaa Business Solution */}
        <div className="flex flex-col lg:flex-row items-center mb-12 lg:mb-20">
          <div className="lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              About Ekaa Business Solution
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              At Ekaa Pitch, we have been working together to help startups grow
              to their full potential by securing the funding they seek. This is
              only possible by a team of creative, brilliant minds who work hard
              to understand investor mindset and create investor pitch decks
              that deliver results.
            </p>
            <p className="text-sm sm:text-base">
              Over the course of time, we have worked with multiple startups and
              we have created multiple pitch decks and business plans that have
              helped them achieve their funding goals. We aim towards creating a
              robust platform for startups where they can get pitch decks,
              business plans, financial forecasting, and more under a single
              roof.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={image1}
              alt="Team Meeting"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Section 2: Constantly Designing */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-12 lg:mb-20">
          <div className="lg:w-1/2 lg:pl-8 mb-6 lg:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Constantly Designing
            </h3>
            <p className="text-sm sm:text-base">
              At Ekaa Pitch Deck Services, we blend our experience in developing
              pitch decks with the latest trends and technologies to provide
              excellent visual effects. Our team is full of designing, writing,
              experts who have cumulatively created hundreds of successful
              Investor Pitch Decks.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={image2}
              alt="Constantly Designing"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Section 3: Financial Forecasting Experts */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Financial Forecasting Experts
            </h3>
            <p className="text-sm sm:text-base">
              Our Founders have immense experience in Business and Financial
              consulting. They have also organized multiple successful funding
              events in India and abroad. We know what investors like to see in
              the financial goals, forecasts of a company, and we assign our
              best minds to incorporate them in your company's pitch deck. With
              our Pitch Deck Design services in India, numerous firms and
              start-ups have gained investors over the years. We are committed
              to ensuring that you get the boost that you need to take off your
              firm.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={image3}
              alt="Financial Forecasting Experts"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center mb-12 lg:mb-20 py-24">
          <div className="lg:w-1/2 lg:pl-8 mb-6 lg:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Always on the move!
            </h3>
            <p className="text-sm sm:text-base">
              In order to meet the expectation of today’s entrepreneurs, our
              team constantly updates itself with the latest design trends and
              gives multiple iterations of a pitch deck to satisfy each
              entrepreneur’s design idea. If you want to know more about the
              pitch deck service of Ekaa, you can check out our design samples.
              It will give you an understanding of the kind of work we offer to
              our clients.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={image4}
              alt="Constantly Designing"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              What we believe.
            </h3>
            <p className="text-sm sm:text-base">
              Our unwavering mission is to create impressive pitch decks that
              charm potential investors, making funding acquisition easier and
              enabling your future planning. Client satisfaction is paramount to
              us, as we aim to build trust through collaboration and mutual
              understanding. You’ll be involved in the design process through
              regular contact via phone or email. Our services include Investor
              Presentation Re-design, Investor Presentation Custom Design, and
              Financial Forecast & DCF Valuation. We guarantee the best possible
              solutions for all service types, offering two rounds of revisions
              to ensure your confidence in the final presentation. Additionally,
              we provide the editable final files for your convenience.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={image5}
              alt="Financial Forecasting Experts"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Container>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem
              icon={<Award size={32} />}
              value="500+"
              label="Satisfied Client"
            />
            <StatItem
              icon={<MapPin size={32} />}
              value="14+"
              label="Countries"
            />
            <StatItem
              icon={<DollarSign size={32} />}
              value="180+"
              label="INR Crs Raised Collectively"
            />
            <StatItem
              icon={<Users size={32} />}
              value="22+"
              label="Dynamic Industry"
            />
          </div>
        </Container>
      </div>

      
      <Container className="py-12">
      <h2 className="text-4xl font-bold mb-4 text-center">Our Works</h2>
      <p className="text-center mb-12">
        Some samples of our presentation design work
      </p>
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {visibleWorks.map((work, index) => (
              <div key={index} className={`flex-shrink-0 px-2 ${isMobile ? 'w-full' : 'w-1/3'}`}>
                <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
                  <img
                    src={work.image}
                    alt={work.title}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
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
     </div>
  );
};

export default AboutPage;
