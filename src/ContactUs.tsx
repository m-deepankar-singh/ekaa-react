import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Users, MapPin, Phone } from 'lucide-react';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`container mx-auto px-4 ${className} max-w-6xl`}>{children}</div>
);

const ContactPage: React.FC = () => {
  const position: [number, number] = [17.412534692566894, 78.45998225173368]; // Coordinates for Hyderabad

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-yellow-400 py-28">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
              <p className="text-sm text-gray-600">Home / Contact Us</p>
            </div>
            <div className="flex space-x-6">
              <Users size={24} />
              <MapPin size={24} />
              <Phone size={24} />
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <Container className="py-12">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Hyderabad Office</h2>
            <p className="font-semibold">Ekaa Pitch (Ekaa Business Solutions)</p>
            <p>6-3-634, A1&2, II Floor,</p>
            <p>Green Channel Apts, Khairtabad,</p>
            <p>Hyderabad-500 004, Telangana, India</p>
            <p className="mt-4">Mobile: +91-9010221000</p>
            <p>Office: +91-40-40266148</p>
            <p>Enquiry: info@ekaapitch.com</p>
            <p>Sales: sales@ekaapitch.com</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-800">Bangalore Office</h2>
            <p className="font-semibold">Ekaa Pitch</p>
            <p>Workflo - Ranka Junction</p>
            <p>Property No – 224, 3rd Floor,</p>
            <p>#80/3, Vijinapur Village, Old Madras Road </p>
            <p>K R Puram Hobli, Bengaluru – 560016</p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-800">Registered Office</h2>
            <p className="font-semibold">Ekaa Business Solutions (Ekaa Pitch)</p>
            <p>3-6-242/6/ Himayat Nagar X Road</p>
            <p>Himayatnagar, Hyderabad</p>
            <p>Telangana – 500029</p>

            
          </div>

          {/* Map and Form */}
          <div className="lg:w-2/3 mt-10 lg:mt-0">
            

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Reach Us</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input type="text" id="name" placeholder="Enter Name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input type="tel" id="phone" placeholder="Enter Phone Number" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address *</label>
                  <input type="email" id="email" placeholder="Enter Email address" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" required />
                </div>
                <div>
                  <label htmlFor="regarding" className="block text-sm font-medium text-gray-700 mb-1">Regarding *</label>
                  <select id="regarding" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" required defaultValue="">
                    <option value="Call Back/Free Consultation" >Call Back/Free Consultation</option>
                    <option value="redesign">Re-design</option>
                    <option value="custom-design">Custom Design</option>
                    <option value="forecast-valuation">Forecast & Valuation</option>
                    <option value="Business-paln">Business Plan</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="other">Other</option>

                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea id="message" placeholder="Enter Your Message" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" rows={4}></textarea>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="human" className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded" required />
                  <label htmlFor="human" className="ml-2 block text-sm text-gray-900">I'm not a robot</label>
                </div>
                <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-150 ease-in-out">
                  Submit
                </button>
              </form>
            </div>
            <div className="h-96 mb-10 shadow-md rounded-lg overflow-hidden relative z-0">
              <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>Ekaa Business Solutions</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;