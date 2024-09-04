import React, { useEffect, useState } from "react";
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
import banner1 from "./images/Ekkabanner.jpg";
import banner2 from "./images/banner_1-1.jpg";
import help from "./images/We Help Founders/Img-r2-2.jpg";
import icon1 from "./images/Achivements/icon1.png";
import icon2 from "./images/Achivements/icon2.png";
import icon3 from "./images/Achivements/icon3.png";
import icon4 from "./images/Achivements/icon4.png";
import redesign from "./images/Our Services/re-design.png";
import customdesign from "./images/Our Services/Custom-design.png";
import businessplan from "./images/Our Services/Business-plan.png";
import financialmodel from "./images/Our Services/Financials.png";
import creativeTeam from "./images/We Specialize In/icon_1.png";
import stories from "./images/We Specialize In/icon_2.png";
import pricing from "./images/We Specialize In/icon_3.png";
import ourprocess1 from "./images/Our Process/1-120x120.png";
import ourprocess2 from "./images/Our Process/2-120x120.png";
import ourprocess3 from "./images/Our Process/3-120x120.png";
import ourprocess4 from "./images/Our Process/4-120x120.png";
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
import { ChevronLeft, ChevronRight } from "lucide-react";

const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`container mx-auto px-4 ${className} max-w-6xl`}>
    {children}
  </div>
);

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Pitch Deck Design for Startups",
      subtitle: "We research, write & design investor pitch decks",
      image: banner2,
    },
    {
      title: "Empower Your Vision",
      subtitle: "Transform ideas into compelling presentations",
      image: banner1,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative h-screen bg-gradient-to-r from-purple-700 to-blue-600 overflow-hidden"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-700 opacity-20"></div>
      <Container className="relative h-full flex items-center">
        <div className="w-1/2 text-white">
          <h1 className="text-5xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl mb-8">{slides[currentSlide].subtitle}</p>
          {/* <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
            Get Started
          </button> */}
        </div>
      </Container>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

const MainContent: React.FC = () => (
  <section className="py-16">
    <Container>
      <div className="flex items-center space-x-12">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            We Help Founders Prepare their Investor Pitch Deck.
          </h2>
          <p className="mb-4">
            Welcome to Ekaa Pitch, your trusted partner in crafting compelling
            investor collaterals. With our rich experience in organizing funding
            events, we understand the intricacies of the funding world. Our
            specialized services include designing Investor Pitch Decks,
            Business Plans, Executive Summaries, Information Memorandums,
            Financial Modeling, and DCF Valuations.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700">
            Read More »
          </button>
        </div>
        <div className="w-1/2">
          <img
            src={help}
            alt="Team meeting"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </Container>
  </section>
);

const StatsSection: React.FC = () => {
  const stats = [
    { image: icon1, number: "500+", text: "Satisfied Clients" },
    { image: icon2, number: "14+", text: "Countries" },
    { image: icon3, number: "180+", text: "INR Crs Raised Collectively" },
    { image: icon4, number: "22+", text: "Dynamic Industries" },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <img
                src={stat.image}
                alt={stat.text}
                className="h-20 w-20 object-contain mx-auto mb-4"
              />
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg">{stat.text}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    { name: "Investor Pitch Deck", image: redesign },
    { name: "Pitch Deck Design", image: customdesign },
    { name: "Business Plan", image: businessplan },
    { name: "Financial Model", image: financialmodel },
  ];

  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <p className="mb-8 text-center max-w-3xl mx-auto">
          We help founders prepare their Investor pitch deck to become 'Investor
          Focused' rather than what we normally see, which is product or service
          intensive. Missing out key elements that investors need to see in a
          pitch deck can lead to investors passing on your investment or that
          essential meeting to explain your offer.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg mb-12">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Pitch Deck Services Tailored For Your Needs
          </h3>
          <p className="text-center">
            India's leading pitch deck design agency. We make investor-ready
            pitch decks for businesses. We offer Fast, Affordable Presentation
            Design Solutions. Professional Service. Quick turnaround.
            Professional Presentation Designers. Delivered top-notch
            presentations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={service.image}
                alt={service.name}
                className="h-20 w-20 object-contain mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-2">{service.name}</h4>
              <p>Brief description of the {service.name} service.</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const WhatsIncluded: React.FC = () => {
  const sections = [
    {
      title: "Investor Pitch Deck",
      items: [
        "Pitch Deck 10-15 Slides",
        "Infographics, Icons and Images",
        "Editable Open Files",
        "Upto 2 Revision",
      ],
    },
    {
      title: "Pitch Deck Design",
      items: [
        "Financial Projection 3/5 Years",
        "Upto 2 Revision",
        "Review with expert",
      ],
    },
    {
      title: "Business Plan",
      items: ["DCF Model", "Investors play", "Review with expert"],
    },
    {
      title: "Financial Model",
      items: [
        "Financial forecast development",
        "Company valuations",
        "Strategy and business model development",
        "Market & competitor research and analysis",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center">
          What's Included?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const WhyChooseUs: React.FC = () => (
  <section className="py-16">
    <Container>
      <h2 className="text-3xl font-bold mb-8 text-center">
        Why Choose Ekaa Pitch?
      </h2>
      <p className="text-left mb-12 max-w-3xl mx-auto">
        Expertise in Investor Collaterals: At Ekaa Pitch, we specialize in
        creating compelling Investor Pitch Decks, Business Plans, Executive
        Summaries, and Information Memorandums. We also offer services in
        Financial Modeling and DCF Valuation.
      </p>
      <p className="text-left mb-12 max-w-3xl mx-auto">
        Understanding of the Funding World: We leverage our past experience in
        organizing funding events to give you a competitive edge, offering
        insights into what investors want to see.
      </p>
      <p className="text-left mb-12 max-w-3xl mx-auto">
        Versatile Presentation Design: Our offerings extend beyond investor
        materials. We design engaging Corporate and Product presentations, as
        well as presentations for bidding purposes.
      </p>
      <p className="text-left mb-12 max-w-3xl mx-auto">
        Experienced Team: Our team brings together a wealth of experience,
        ensuring the delivery of high-quality, professional materials tailored
        to your needs.
      </p>
      <p className="text-left mb-12 max-w-3xl mx-auto">
        Client-Centric Approach: We prioritize our client’s unique needs and
        work collaboratively to transform complex ideas into persuasive
        narratives. Choose Ekaa Pitch and let us help you pave the way to your
        business success.
      </p>
      {/* Add reasons here */}
    </Container>
  </section>
);

const Specializations: React.FC = () => {
  const specializations = [
    {
      title: "Investor Pitch Deck Design",
      description:
        "Crafting visually captivating presentations that effectively convey your ideas and captivate your audience.",
    },
    {
      title: "Sales Deck/Presentation",
      description:
        "Developing compelling sales materials that highlight the unique value proposition of your products or services.",
    },
    {
      title: "Corporate Presentation",
      description:
        "Crafting impactful corporate presentations to amplify your brand's story and vision Customizable and easy to edit, of course.",
    },
    {
      title: "Business Plan",
      description:
        "Designing professional and impactful presentations to communicate your business strategies, plans, and results effectively.",
    },
  ];

  const specializations2 = [
    {
      title: "Our Creative Team Works to Create a Memorable Experience",
      image: creativeTeam,
    },
    {
      title:
        "Visually Compelling Stories that Help to Communicate in a Persuasive Manner",
      image: stories,
    },
    {
      title:
        "Transparent Pricing. What you see, is what you pay. No hidden charges.",
      image: pricing,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center">
          We Specialize In
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-bold mb-2">{spec.title}</h3>
              <p>{spec.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specializations2.map((spec, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={spec.image}
                alt={spec.title}
                className="h-16 w-16 object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{spec.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const ProcessSection: React.FC = () => {
  const steps = [
    { name: "IDEATE", image: ourprocess1 },
    { name: "WRITE", image: ourprocess2 },
    { name: "CREATE", image: ourprocess3 },
    { name: "DELIVER", image: ourprocess4 },
  ];

  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <img
                src={step.image}
                alt={step.name}
                className="h-24 w-24 object-contain mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-2">{step.name}</h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const OurWorksSection: React.FC = () => {
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

  return (
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
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      text: "If you are startup and came across Ekaa Pitch then don’t think about any other player into the market. Dinesh and team does have decades of experience in this field and his experience can be seen as you have interactions with him/team.",
      author: "Sagar Shinde",
      position: "Entrepreneur, AgroBEET AgriTech",
    },
    {
      text: "We are much delighted for having received services from Ekaa Pitch and the professionalism and commitment of their team. We wishes all the best.",
      author: "S. C. Mittal",
      position: "MD, DMR Hydroengineering & Infrastructures",
    },
    {
      text: "Amazing designs.. Very responsive.. Mr Dinesh and Ms Pradeepa are always available.",
      author: "Nagendra Kumar",
      position: "Director, PROFCI Agrotech and Retail",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-bold mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                {/* <img
                  src={`/path-to-avatar-${index + 1}.jpg`}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                /> */}
                <div>
                  <h5 className="font-bold">{testimonial.author}</h5>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const ElfsightWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="elfsight-app-fc279dfe-e585-4cec-a3e0-99d4701d9442"></div>
      </Container>
    </section>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What is the expected delivery timeframe?",
      answer:
        "The first draft is delivered within 5-7 business days after receiving the required information. Revisions are completed within a few days, depending on client response time.",
    },
    {
      question: "What topics will be included in the pitch deck?",
      answer:
        "The pitch deck will comprehensively cover all key elements required for an effective investor presentation, including the problem, solution, market opportunity, product, business model, team, financials, and investment ask. Each section is designed to provide a clear and compelling narrative that addresses investor needs and expectations.",
    },
    {
      question: "What information do I need to provide?",
      answer:
        "We require comprehensive information about your company, including the business model, financial projections, team profiles, and any other details necessary for crafting a compelling investor pitch deck.",
    },
    {
      question: "In what format is the Investor Pitch Deck prepared and delivered?",
      answer:
        "The Investor Pitch Deck is prepared and delivered in PowerPoint (PPT) format, with the option to provide a PDF version if needed.",
    },
    {
      question: "How many slides does the pitch deck contain?",
      answer:
        "The pitch deck typically contains 12-15 slides, depending on the project’s requirements.",
    },
    {
      question: "What is the process to initiate the project?",
      answer:
        "To initiate the project, we will start by sharing the engagement letter and invoice. Once the engagement formalities are completed, we can begin the work.",
    },
    {
      question: "Will you be facilitating introductions to investors?",
      answer:
        "While we specialize in creating pitch decks, we do not directly connect clients with investors.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <Container>
        <h2 className="text-4xl font-bold mb-12 text-center">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white p-4 rounded-lg shadow-md">
              <summary className="text-md font-bold cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-4">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
};

const ConsultationSection: React.FC = () => (
  <section className="py-12 bg-blue-50">
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            Having Questions
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-purple-600 mt-2">
            Ask for Free Consultation Now
          </p>
        </div>
        <div className="text-center md:text-right">
          <a
            href="tel:+919010221000"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300"
          >
            +91-9010-221-000
          </a>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            09:30 AM - 06:30 PM IST
          </p>
        </div>
      </div>
    </Container>
  </section>
);

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

const ClientLogos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleLogos, setVisibleLogos] = useState(5);
  const logoCount = clientLogos.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logoCount - visibleLogos ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
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
                transform: `translateX(-${
                  currentIndex * (100 / visibleLogos)
                }%)`,
              }}
            >
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-1/${visibleLogos} px-2 md:px-4`}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-16 sm:h-20 md:h-24 lg:h-32 mx-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </div>
      </Container>
    </section>
  );
};
const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <MainContent />
      <StatsSection />
      <ServicesSection />
      <WhatsIncluded />
      <WhyChooseUs />
      <Specializations />
      <ProcessSection />
      <OurWorksSection />
      <TestimonialsSection />
      <ElfsightWidget />
      <FAQSection />
      <ConsultationSection />
      <ClientLogos />
    </>
  );
};

export default HomePage;
