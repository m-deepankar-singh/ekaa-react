/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import ReactCompareImage from "react-compare-image";
import img1 from "./images/redesign/Before-3.jpg";
import img2 from "./images/redesign/After-3.jpg";
import data from './images/redesign/Untitled-design22-1.png'
import user from './images/redesign/Untitled-design23.png'
import business from './images/redesign/Untitled-design24.png'
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
import banner from "./images/Banners/Investor Pitch Deck Re-Design.jpg"
import { Award, ChevronLeft, ChevronRight, DollarSign, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

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


const faqs = [
  { question: "How fast can you provide a first draft?", answer: "" },
  { question: "Will I be able to edit the final deck myself?", answer: "" },
  { question: "Will my pitch deck be kept confidential?", answer: "" },
  {
    question: "Can you assist with research and content creation?",
    answer: "",
  },
  { question: "What is the average pitch deck design cost?", answer: "The cost varies depending on the scope of work, and we can provide more details based on your specific requirements." },
];

const PitchReDesign: React.FC = () => {

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-white-900 text-white py-20">
        <div className="absolute inset-0 "></div>
        <img
          src={banner}
          alt="Hero Background"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold mb-2">
            Investor Pitch Deck Re-Design
          </h1>
          <nav className="text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            /
            <a href="/services" className="hover:underline">
              {" "}
              Our Services
            </a>{" "}
            /<span> Investor Pitch Deck Re-Design</span>
          </nav>
        </div>
      </div>

      <main className="py-8">
        <Container>
          {/* Maximize Your Impact Section */}
          <section className="bg-purple-600 text-white p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center">
              Maximize Your Impact: Elevate Your Pitch with Our Deck Redesign
              Service.
            </h2>
          </section>

          {/* Description */}
          <section className="mb-16">
            <p className="text-gray-700">
              Ekaa Pitch specializes in assisting entrepreneurs with creating
              and redesigning their investor pitch decks. We understand the
              immense challenge of capturing an investor's attention and the
              importance of a well-crafted pitch. Our team not only creates
              pitch decks from scratch but also helps entrepreneurs identify
              areas for improvement and redesign their existing decks to
              maximize their chances of success.
            </p>
            <p className="text-gray-700 mt-4">
              At Ekaa Pitch, we not only create pitch decks from scratch but we
              also help entrepreneurs redesign their pitch to land investors.
              But before we get into the details of that, let's give you a brief
              idea over how what kind of redesigning is ideal for an investor
              pitch deck and what we do.
            </p>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-4">
              Why Choose Our Pitch Deck Redesign Service?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white shadow rounded-lg p-4">
                <h4 className="font-bold mb-2">Expert Design</h4>
                <p className="text-sm">
                  Collaborate closely with our team of seasoned designers and
                  content experts to craft an eye-catching and persuasive pitch
                  deck that captivates your audience.
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <h4 className="font-bold mb-2">Tailored To Your Audience</h4>
                <p className="text-sm">
                  No matter your audience—venture capitalists, angel investors,
                  or potential partners—we will customize your pitch deck to
                  deeply resonate with their unique needs, motivations, and
                  interests.
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <h4 className="font-bold mb-2">Streamlined Structure</h4>
                <p className="text-sm">
                  With our expertise, we guarantee clarity, coherence, and a
                  seamless logical flow in your pitch deck. Every slide will
                  play a vital role in crafting a cohesive and compelling
                  narrative, guiding your audience effortlessly through your
                  business proposition.
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-4">
                <h4 className="font-bold mb-2">Visual Impact</h4>
                <p className="text-sm">
                  Let us breathe life into your data, effectively communicate
                  complex concepts, and leave an indelible impression on your
                  audience.
                </p>
              </div>
            </div>
          </section>

          {/* Data Storytelling Section */}
          <section className="mb-16 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <h2 className="text-3xl font-bold mb-4">
                Your data tells a story that they haven't heard.
              </h2>
              <p className="text-gray-700">
                At Ekaa Pitch, we believe in creating investor pitch decks that
                go beyond mere data and statistics. Instead, we focus on
                incorporating storytelling elements into the deck, presenting
                information in visually engaging ways such as animations and
                explainer videos. This approach ensures better understanding and
                retention of the content, as videos are known to convey and
                store information more effectively than plain data.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={data}
                alt="Data Visualization"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* User Personas Section */}
          <section className="mb-16 flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 pl-8">
              <h2 className="text-3xl font-bold mb-4">
                User personas that define your target.
              </h2>
              <p className="text-gray-700">
                If you've made the mistake of presenting data and your target
                audience simply as "customers" then that won't lay down the
                precision. To be more precise and to show that you know what and
                who you are after, you need to define user/customer personas.
                Redesign your pitch to get your customer persona in detail, this
                includes everything you can possibly find out about them that
                affects your business.
              </p>
              <p className="text-gray-700 mt-4">
                What's your customer's daily routine? How does he work? What
                causes him frustration? What's the problem that he faces and
                that you're trying to resolve? How much time he wastes in that
                problem? How can his daily routine change with your solution?
                And how aggressively is he looking for a solution, are some of
                the questions that you should be answering in your user persona.
                A detailed user persona also indicates that you have studied
                your potential customer thoroughly.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={user}
                alt="User Persona"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </section>

          {/* CTA Banner */}
          <div className="bg-purple-600 text-white py-8">
            <Container className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">
                YOUR PITCH DECK NEEDS TO STAND OUT
              </h2>
              <Link to="/contact-us">
                <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-bold hover:bg-purple-100 transition duration-300">
                  Contact Us
                </button>
              </Link>
            </Container>
          </div>

          {/* Where do you plan to go? Section */}
          <section className="mb-16 flex flex-col md:flex-row items-center py-20">
            <div className="md:w-1/2 pr-8">
              <img
                src={business}
                alt="Business Meeting"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h2 className="text-3xl font-bold mb-4">
                Where do you plan to go?
              </h2>
              <p className="text-gray-700 mb-4">
                Although very similar to the 'where do you see yourself in 5
                years' question of an interview. This is something that you
                would ideally also layout in the funding/growth goal. But what
                that part doesn't include is how this growth will affect the
                existing customers and how it'll promote your company in a
                better way.
              </p>
              <p className="text-gray-700">
                We at Ekaa Pitch Deck follow all these steps and even more to
                redesign your investor pitch deck in such a way that it can help
                you get multiple investors interested. We not only have
                pre-existing pitch deck templates, but we can also offer
                custom-made templates for you. Can't wait? Connect with us here.
              </p>
            </div>
          </section>

          {/* Having Questions Section */}
          <section className="mb-16 bg-blue-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-purple-700 mb-2">
                  Having Questions
                </h2>
                <p className="text-xl text-purple-600">
                  Ask for Free Consultation Now
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <a
                  href="tel:+919010221000"
                  className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition duration-300 inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91-9010-221-000
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  09:30 AM - 06:30 PM IST
                </p>
              </div>
            </div>
          </section>

          {/* Before / After Comparison Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Before / After Comparison of Pitch Deck
            </h2>
            <div className="w-full max-w-3xl mx-auto">
              <div className="aspect-w-16 aspect-h-9">
                <ReactCompareImage
                  leftImage={img1}
                  rightImage={img2}
                  sliderLineWidth={2}
                  sliderLineColor="#6B46C1"
                  handle={
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "#6B46C1",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0 0 0 5px rgba(107, 70, 193, 0.2)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 18L9 12L15 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 18L3 12L9 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  }
                />
              </div>
            </div>
          </section>
        </Container>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem
              icon={<Award size={32} />}
              value="450+"
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


        <div className="mt-16">
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

        <section className="py-16 bg-gray-100">
          <Container>
            <h2 className="text-4xl font-bold mb-12 text-center">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <summary className="text-md font-bold cursor-pointer">
                    {faq.question}
                  </summary>
                  <p className="mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
        {/* <section className="py-16">
          <Container>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Some of Our Happy Clients
            </h2>
            <div className="flex justify-between items-center flex-wrap">
              {["client1", "client2", "client3", "client4", "client5"].map(
                (client, index) => (
                  <img
                    key={index}
                    src={`/path-to-${client}-logo.png`}
                    alt={`${client} logo`}
                    className="h-12 mb-4"
                  />
                )
              )}
            </div>
          </Container>
        </section> */}
      </main>
    </div>
  );
};

export default PitchReDesign;
