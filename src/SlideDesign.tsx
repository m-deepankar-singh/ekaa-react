import React, { useState } from 'react';
import { X } from 'lucide-react';
import slide1 from "./images/Slide Design/1.jpg"
import slide2 from "./images/Slide Design/2.jpg"
import slide3 from "./images/Slide Design/3.jpg"
import slide4 from "./images/Slide Design/4.jpg"
import slide5 from "./images/Slide Design/5.jpg"
import slide6 from "./images/Slide Design/6.jpg"
import slide7 from "./images/Slide Design/7.jpg"
import slide8 from "./images/Slide Design/8.jpg"
import slide9 from "./images/Slide Design/9.jpg"
import slide10 from "./images/Slide Design/10.jpg"
import slide11 from "./images/Slide Design/11.jpg"
import slide12 from "./images/Slide Design/12.jpg"
import slide13 from "./images/Slide Design/13.jpg"

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


interface ImageData {
  id: number;
  src: string;
}

const images: ImageData[] = [
  { id: 1, src: slide1 },
  { id: 2, src: slide2 },
  { id: 3, src: slide3},
  { id: 4, src: slide4},
  { id: 5, src: slide5},
  { id: 6, src: slide6},
  { id: 7, src: slide7},
  { id: 8, src: slide8},
  { id: 9, src: slide9},
  { id: 10, src: slide10},
  { id: 11, src: slide11},
  { id: 12, src: slide12},
  { id: 13, src: slide13},
];

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
  

const SlideDesign: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const openModal = (image: ImageData) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full">
      {/* Full-width Banner */}
      <div className="w-full bg-purple-900 text-white py-28 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Slide Design</h1>
          {/* <p className="text-xl md:text-2xl">Checkout some of our slide designs from over the years</p> */}
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full mx-4">
            <div className="flex justify-end mb-2">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <img
              src={selectedImage.src}
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
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

export default SlideDesign;