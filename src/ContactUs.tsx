import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Users, MapPin, Phone } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    regarding: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitStatus, setSubmitStatus] = useState<{ status: string; message: string } | null>(null);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.regarding) newErrors.regarding = "Please select an option";
    if (!recaptchaValue) newErrors.recaptcha = "Please complete the reCAPTCHA";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    // Clear the error for this field if it exists
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
    if (errors.recaptcha) {
      setErrors(prevErrors => ({ ...prevErrors, recaptcha: '' }));
    }
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitStatus(null);
  
  if (!validateForm()) {
    setSubmitStatus({ status: 'error', message: 'Please correct the errors in the form.' });
    return;
  }

  setIsSubmitting(true);

  try {
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key as keyof typeof formData]);
    });
    formDataToSend.append('recaptchaToken', recaptchaValue || '');

    const response = await fetch('/contact.php', {
      method: 'POST', 
      body: formDataToSend,
    });      
    const data = await response.json();
    console.log('Form submission response:', data);
      setSubmitStatus(data);
      if (data.status === 'success') {
        setFormData({ name: '', phone: '', email: '', regarding: '', message: '' });
        recaptchaRef.current?.reset();
        setRecaptchaValue(null);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ status: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              {submitStatus && (
                <div className={`mb-4 p-2 rounded ${submitStatus.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      required
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Phone Number"
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      required
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email address"
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="regarding" className="block text-sm font-medium text-gray-700 mb-1">Regarding *</label>
                  <select
                    id="regarding"
                    name="regarding"
                    value={formData.regarding}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${errors.regarding ? 'border-red-500' : 'border-gray-300'}`}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="Call Back/Free Consultation">Call Back/Free Consultation</option>
                    <option value="redesign">Re-design</option>
                    <option value="custom-design">Custom Design</option>
                    <option value="forecast-valuation">Forecast & Valuation</option>
                    <option value="Business-plan">Business Plan</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.regarding && <p className="mt-1 text-xs text-red-500">{errors.regarding}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter Your Message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LdCPjMqAAAAAHOPs1Jt36RDSnGtwmTwusEy4JR-"
                    onChange={handleRecaptchaChange}
                  />
                </div>
                {errors.recaptcha && <p className="mt-1 text-xs text-red-500 text-center">{errors.recaptcha}</p>}
                <button 
                  type="submit" 
                  className={`w-full py-2 px-4 rounded-md transition duration-150 ease-in-out ${
                    !isSubmitting && recaptchaValue
                      ? 'bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={isSubmitting || !recaptchaValue}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
            <div className="h-96 mt-10 shadow-md rounded-lg overflow-hidden relative z-0">
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