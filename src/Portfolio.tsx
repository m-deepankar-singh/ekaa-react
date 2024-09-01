import React, { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


// Import before-after images (you'll need to add these to your project)
import work1Before from "./images/Before & After/Before-1.jpg";
import work1After from "./images/Before & After/After-1.jpg";
import work2Before from "./images/Before & After/Before-2.jpg";
import work2After from "./images/Before & After/After-2.jpg";
import work3Before from "./images/Before & After/Before 3.png";
import work3After from "./images/Before & After/After 3.png";

// Import your background image
import backgroundImage from "./images/About Us/About Ekaa.jpg";
import banner from './images/Pitch Deck Banner.jpg'
import agro from "./images/ClientsPortPage/1.jpg";
import bigtruck from "./images/ClientsPortPage/2.jpg";
import codecrux from "./images/ClientsPortPage/3.jpg";
import stay from "./images/ClientsPortPage/4.jpg";
import royal from "./images/ClientsPortPage/5.jpg";
import nn from "./images/ClientsPortPage/6.jpg";
import daisy from "./images/ClientsPortPage/7.jpg";
import workful from "./images/ClientsPortPage/8.jpg";
import geek from "./images/ClientsPortPage/9.jpg";
import g from "./images/ClientsPortPage/10.jpg";
import sampark from "./images/ClientsPortPage/11.jpg";
import pharmacy from "./images/ClientsPortPage/12.jpg";
import rr from "./images/ClientsPortPage/13.jpg";
import pets from "./images/ClientsPortPage/14.jpg";
import play from "./images/ClientsPortPage/15.jpg";
import ranch from "./images/ClientsPortPage/16.jpg";
import sharda from "./images/ClientsPortPage/17.jpg";
import health from "./images/ClientsPortPage/18.jpg";
import dmr from "./images/ClientsPortPage/19.jpg";
import relipay from "./images/ClientsPortPage/20.jpg";
import asset from "./images/ClientsPortPage/21.jpg";
import scalar from "./images/ClientsPortPage/22.jpg";
import drreddy from "./images/ClientsPortPage/23.png";
import renew from "./images/ClientsPortPage/24.jpg";
import rusk from "./images/ClientsPortPage/25.jpg";
import scitext from "./images/ClientsPortPage/26.jpg";
import zero from "./images/ClientsPortPage/27.jpg";
import sagar from "./images/ClientsPortPage/28.jpg";
import purple from "./images/ClientsPortPage/29.jpg";
import level from "./images/ClientsPortPage/30.jpg";
import pulp from "./images/ClientsPortPage/31.jpg";
import reset from "./images/ClientsPortPage/32.jpg";
import akshara from "./images/ClientsPortPage/33.jpg";
import bistro from "./images/ClientsPortPage/34.jpg";
import lens from "./images/ClientsPortPage/35.jpg";
import forest from "./images/ClientsPortPage/36.jpg";

import showcase1 from "./images/Showcase/1/1.jpg";
import showcase2 from "./images/Showcase/1/2.jpg";
import showcase3 from "./images/Showcase/1/3.jpg";
import showcase4 from "./images/Showcase/1/4.jpg";
import showcase5 from "./images/Showcase/1/5.jpg";
import showcase6 from "./images/Showcase/1/6.jpg";
import showcase7 from "./images/Showcase/1/7.jpg";
import showcase8 from "./images/Showcase/1/8.jpg";
import showcase9 from "./images/Showcase/1/9.jpg";
import showcase10 from "./images/Showcase/1/10.jpg";
import showcase11 from "./images/Showcase/1/11.jpg";
import showcase12 from "./images/Showcase/1/12.jpg";
import showcase13 from "./images/Showcase/1/13.jpg";
import showcase14 from "./images/Showcase/1/14.jpg";
import showcase15 from "./images/Showcase/1/15.jpg";
import showcase16 from "./images/Showcase/1/16.jpg";
import showcase17 from "./images/Showcase/1/17.jpg";
import showcase18 from "./images/Showcase/1/18.jpg";

import showcase2_1 from "./images/Showcase/2/1.jpg"
import showcase2_2 from "./images/Showcase/2/2.jpg"
import showcase2_3 from "./images/Showcase/2/3.jpg"
import showcase2_4 from "./images/Showcase/2/4.jpg"
import showcase2_5 from "./images/Showcase/2/5.jpg"
import showcase2_6 from "./images/Showcase/2/6.jpg"
import showcase2_7 from "./images/Showcase/2/7.jpg"
import showcase2_8 from "./images/Showcase/2/8.jpg"
import showcase2_9 from "./images/Showcase/2/9.jpg"
import showcase2_10 from "./images/Showcase/2/10.jpg"
import showcase2_11 from "./images/Showcase/2/11.jpg"
import showcase2_12 from "./images/Showcase/2/12.jpg"
import showcase2_13 from "./images/Showcase/2/13.jpg"
import showcase2_14 from "./images/Showcase/2/14.jpg"
import showcase2_15 from "./images/Showcase/2/15.jpg"
import showcase2_16 from "./images/Showcase/2/16.jpg"
import showcase2_17 from "./images/Showcase/2/17.jpg"
import showcase2_18 from "./images/Showcase/2/18.jpg"
import showcase2_19 from "./images/Showcase/2/19.jpg"
import showcase2_20 from "./images/Showcase/2/20.jpg"

const clientLogos = [
  { name: "AgroBEET", logo: agro },
  { name: "Bigtruck.in", logo: bigtruck },
  { name: "CodeCrux", logo: codecrux },
  { name: "i-stay", logo: stay },
  { name: "Royal Star", logo: royal },
  { name: "Innit", logo: nn },
  { name: "Star and Daisy", logo: daisy },
  { name: "WorkFulcrum", logo: workful },
  { name: "Geekster", logo: geek },
  { name: "GMAC Intelligence", logo: g },
  { name: "Sampark Foundation", logo: sampark },
  { name: "21mg Pharmacy", logo: pharmacy },
  { name: "RR", logo: rr },
  { name: "Pets World", logo: pets },
  { name: "Play Games 24x7", logo: play },
  { name: "Ranch", logo: ranch },
  { name: "Sharda University", logo: sharda },
  { name: "Health", logo: health },
  { name: "DMR", logo: dmr },
  { name: "Relipay", logo: relipay },
  { name: "Asset", logo: asset },
  { name: "Scalar", logo: scalar },
  { name: "Dr. Reddy's", logo: drreddy },
  { name: "Renew", logo: renew },
  { name: "Rusk Media", logo: rusk },
  { name: "Scitext", logo: scitext },
  { name: "Zero Gravity", logo: zero },
  { name: "Sagar Ratna", logo: sagar },
  { name: "Purple", logo: purple },
  { name: "Level", logo: level },
  { name: "Pulp Brew", logo: pulp },
  { name: "Reset", logo: reset },
  { name: "Akshara Foundation", logo: akshara },
  { name: "Bistro", logo: bistro },
  { name: "Lens", logo: lens },
  { name: "Forest Essentials", logo: forest },
];

interface Slide {
  image: string;
}

interface BeforeAfterSlideProps {
  title: string;
  before: string;
  after: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSlideProps> = ({
  title,
  before,
  after,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
  }, []);

  return (
    <div
      className="relative w-full aspect-video max-w-3xl mx-auto my-8 cursor-col-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        handleMouseMove({
          clientX: touch.clientX,
        } as React.MouseEvent<HTMLDivElement>);
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img src={before} alt="Before" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <img src={after} alt="After" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white"
        style={{ left: `${sliderPosition}%` }}
      />
      <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2">
        {title}
      </div>
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1">
        After
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBeforeAfterSlide, setCurrentBeforeAfterSlide] = useState(0);

  const slides: Slide[] = [
    { image: showcase1 },
    { image: showcase2 },
    { image: showcase3 },
    { image: showcase4 },
    { image: showcase5 },
    { image: showcase6 },
    { image: showcase7 },
    { image: showcase8 },
    { image: showcase9 },
    { image: showcase10 },
    { image: showcase11 },
    { image: showcase12 },
    { image: showcase13 },
    { image: showcase14 },
    { image: showcase15 },
    { image: showcase16 },
    { image: showcase17 },
    { image: showcase18 },
  ];

  const slides2: Slide[] = [
    { image: showcase2_1 },
    { image: showcase2_2 },
    { image: showcase2_3 },
    { image: showcase2_4 },
    { image: showcase2_5 },
    { image: showcase2_6 },
    { image: showcase2_7 },
    { image: showcase2_8 },
    { image: showcase2_9 },
    { image: showcase2_10 },
    { image: showcase2_11 },
    { image: showcase2_12 },
    { image: showcase2_13 },
    { image: showcase2_14 },
    { image: showcase2_15 },
    { image: showcase2_16 },
    { image: showcase2_17 },
    { image: showcase2_18 },
    { image: showcase2_19 },
    { image: showcase2_20 },
  ];
  

  const beforeAfterSlides: BeforeAfterSlideProps[] = [
    {
      title: "GMAC Intelligence LLP Pitch Deck",
      before: work1Before,
      after: work1After,
    },
    {
      title: "Koshore Proctor Indian Private Limited",
      before: work2Before,
      after: work2After,
    },
    {
      title: "Ripple",
      before: work3Before,
      after: work3After,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getSlideIndex = (offset: number) => {
    return (currentSlide + offset + slides.length) % slides.length;
  };

  const nextBeforeAfterSlide = () => {
    setCurrentBeforeAfterSlide((prev) => (prev + 1) % beforeAfterSlides.length);
  };

  const prevBeforeAfterSlide = () => {
    setCurrentBeforeAfterSlide(
      (prev) => (prev - 1 + beforeAfterSlides.length) % beforeAfterSlides.length
    );
  };

  return (
    <div className="w-full">
    {/* Hero Section */}
    <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
      <img 
        src={banner} 
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Pitch Deck
          </h1>
          <p className="text-lg md:text-xl text-white">
            Some of our Pitch Deck Examples
          </p>
        </div>
      </div>
    </div>
      {/* 16:9 Rectangle Carousel */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative">
          <div className="flex justify-center items-center">
            {/* Previous Slide Preview */}
            <div className="hidden md:block w-1/5 mr-4 opacity-50 transform scale-75">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={slides[getSlideIndex(-1)].image}
                  alt="Previous slide"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Current Slide */}
            <div className="w-3/5">
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={slides[currentSlide].image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Next Slide Preview */}
            <div className="hidden md:block w-1/5 ml-4 opacity-50 transform scale-75">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={slides[getSlideIndex(1)].image}
                  alt="Next slide"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      {/* 16:9 Rectangle Carousel */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative">
          <div className="flex justify-center items-center">
            {/* Previous Slide Preview */}
            <div className="hidden md:block w-1/5 mr-4 opacity-50 transform scale-75">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={slides2[getSlideIndex(-1)].image}
                  alt="Previous slide"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Current Slide */}
            <div className="w-3/5">
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={slides2[currentSlide].image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Next Slide Preview */}
            <div className="hidden md:block w-1/5 ml-4 opacity-50 transform scale-75">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={slides2[getSlideIndex(1)].image}
                  alt="Next slide"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4">
          {slides2.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Before-After Slider Section */}
      <div className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Pitch Deck Transformations
        </h2>
        <div className="relative">
          <BeforeAfterSlider
            title={beforeAfterSlides[currentBeforeAfterSlide].title}
            before={beforeAfterSlides[currentBeforeAfterSlide].before}
            after={beforeAfterSlides[currentBeforeAfterSlide].after}
          />
          <button
            onClick={prevBeforeAfterSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextBeforeAfterSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots for Before-After Slider */}
        <div className="flex justify-center mt-4">
          {beforeAfterSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBeforeAfterSlide(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentBeforeAfterSlide === index
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>{" "}
      {/* Client Logos Section */}
      <div className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Some Of Our Happy Clients
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {clientLogos.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-8">
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
