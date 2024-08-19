import React, { useEffect, useState } from "react";
import { ArrowRight, Plus, Minus, ChevronRight, ChevronLeft } from "lucide-react";
import redesign from "./images/Our Services/re-design.png";
import business from "./images/Our Services/Business-plan.png";
import finance from "./images/Our Services/Financials.png";
import custom from "./images/Our Services/Custom-design.png";
import choose1 from "./images/Our Services/Icons_Team-of-Experts.png";
import choose2 from "./images/Our Services/Icons_Trustworthiness.png"
import choose3 from "./images/Our Services/icon_3.png"  
import research from "./images/Our Services/Icons_We-research-1.png"
import create from "./images/Our Services/Icons_We-create-1.png"  
import deliver from "./images/Our Services/Icons_We-deliver-1.png"
import hero from "./images/Our Services/services.jpg"
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

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

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



const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="mb-4">
      {typeof icon === 'string' ? (
        <img src={icon} alt={title} className="h-12 w-12 mx-auto" />
      ) : (
        icon
      )}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
    <p className="text-gray-600 mb-4 text-center">{description}</p>
    <button className="text-purple-600 font-semibold flex items-center justify-center w-full">
      Read More <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  </div>
);



const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`container mx-auto px-4 py-16 ${className} max-w-6xl`}>
    {children}
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold">{question}</h3>
        {isOpen ? (
          <Minus className="h-5 w-5 text-purple-600" />
        ) : (
          <Plus className="h-5 w-5 text-purple-600" />
        )}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const Services: React.FC = () => {
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
    <div className="bg-gray-100">
      <div 
        className="bg-white bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Container>
          <div className="py-16 md:py-24 lg:py-32 relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <div className="text-sm mb-8">
              <span className="text-gray-300">Home</span> /{" "}
              <span className="text-purple-300">Our Services</span>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">
            Pitch Decks for Startups & Entrepreneurs
          </h2>
          <p className="text-gray-600 mb-8">
            We help founders prepare their{" "}
            <a href="#" className="text-purple-600 underline">
              Investor pitch deck
            </a>{" "}
            to become 'Investor Focused' rather than what we normally see,
            which is product or service intensive. Missing out key elements
            that investors need to see in a pitch deck can lead to investors
            passing on your investment or that essential meeting to explain
            your offer.
          </p>
        </div>

        <div className="mt-12 bg-purple-600 text-white py-4 px-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-center">
            Customized Design: Compelling, Professional Pitch Decks
          </h3>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Investor Pitch Deck Re-design"
            description="A visual upgrade that helps your pitch deck communicate clearly."
            icon={redesign}
          />
          <ServiceCard
            title="Investor Pitch Deck Custom Design"
            description="A full custom pitch deck created from investor insights from a VC."
            icon={custom}
          />
          <ServiceCard
            title="Financial Forecast & DCF Valuation"
            description="Full financial forecast to explore what your first few years look like."
            icon={finance}
          />
          <ServiceCard
            title="Business Plan"
            description="We create presentations that are entirely aligned with the company's."
            icon={business}
          />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What's Included?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-white p-8 rounded-lg shadow-md">
            <div>
              <h3 className="font-semibold mb-4">Investor Pitch Deck</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Pitch Deck 10-15 Slides
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Infographics, Icons and Images
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Editable Open Files
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Upto 3 Revision
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Financial Projections</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Financial Projection 3/5 Years
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Upto 2 Revision
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Review with expert
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company Valuation</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  DCF Model
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Investors play
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Review with expert
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Business Plan</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Financial forecast development
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Company valuations
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Strategy and business model development
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-600 rounded-full h-2 w-2 mr-2"></span>
                  Market & competitor research and analysis
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Why Choose Ekaa Pitch?
          </h2>
          <p className="text-center mb-8">
            For over a decade, our founders have helped startups and established
            companies tell their stories and secure investment. We are pitch
            deck specialists dedicated to helping founders tell their stories to
            secure investments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <img
                src={choose1}
                alt="Icon"
                className="h-24 w-24 mb-4"
              />
              <p>Our Creative Team Works to Create a Memorable Experience</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={choose2}
                alt="Icon"
                className="h-24 w-24 mb-4"
              />
              <p>
                Visually Compelling Stories that Help to Communicate in a
                Persuasive Manner
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={choose3}
                alt="Icon"
                className="h-24 w-24 mb-4"
              />
              <p>
                Transparent Pricing. What you see, is what you pay. No hidden
                charges.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 px-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src={research}
                alt="We Research"
                className="h-16 w-16 mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">We Research</h3>
              <p>
                Our content expert interacts with you to gather all the
                information necessary to design the best pitch deck. We
                understand your business plan and ensure its perfect
                interpretation into the pitch deck. After all, we are aware of
                the importance of an efficient Pitch Deck.
              </p>
            </div>
            <div className="text-center">
              <img
                src={create}
                alt="We Create"
                className="h-16 w-16 mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">We Create</h3>
              <p>
                We take your suggestion and design from investors point of view.
                Our team will make sure that your ideas and concepts are
                integrated with absolute accuracy and clarity. Moreover, we also
                implement your unique brand identity into the pitch deck.
              </p>
            </div>
            <div className="text-center">
              <img
                src={deliver}
                alt="We Deliver"
                className="h-16 w-16 mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">We Deliver</h3>
              <p>
                Our quality team ensures that there are no errors before giving
                you the ultimate presentation. Moreover, we present the final
                pitch deck in an editable format so that you can make any
                necessary changes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Container className="py-12">
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
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">FAQ</h2>
          <div className="space-y-4">
            <FAQItem
              question="How fast can you provide a first draft?"
              answer="We typically deliver the first draft within 5-7 business days, depending on the complexity of your project and our current workload."
            />
            <FAQItem
              question="Will I be able to edit the final deck myself?"
              answer="Yes, we provide editable files in formats like PowerPoint or Keynote, allowing you to make further adjustments as needed."
            />
            <FAQItem
              question="Will my pitch deck be kept confidential?"
              answer="Absolutely. We treat all client information with the utmost confidentiality and can sign an NDA if required."
            />
            <FAQItem
              question="How can I give feedback on the project?"
              answer="We have a structured feedback process where you can provide comments and suggestions directly on the draft. We also schedule review calls to discuss your feedback in detail."
            />
            <FAQItem
              question="Can you assist with research and content creation?"
              answer="Yes, our team can help with market research, competitor analysis, and content creation to enhance your pitch deck."
            />
            <FAQItem
              question="What is the average pitch deck design cost?"
              answer="The cost varies depending on the scope of work, and we can provide more details based on your specific requirements."
            />
            <FAQItem
              question="How much time does it take to design a 20-slide presentation?"
              answer="On average, a 20-slide presentation takes about 2-3 weeks from initial consultation to final delivery, including revisions."
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
