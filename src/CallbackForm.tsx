import { Mail, MapPin, Phone, User } from "lucide-react";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const CallbackForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    message: "",
  });
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<{ status: string; message: string } | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaValue) {
      setSubmitStatus({ status: "error", message: "Please complete the reCAPTCHA verification." });
      return;
    }
    try {
      const response = await axios.post('/contact.php', {
        ...formData,
        regarding: "Callback Request", // Add this field for the PHP script
        recaptchaToken: recaptchaValue,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setSubmitStatus(response.data);
      if (response.data.status === 'success') {
        setFormData({
          name: "",
          location: "",
          email: "",
          phone: "",
          message: "",
        });
        recaptchaRef.current?.reset();
        setRecaptchaValue(null);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ status: "error", message: "An error occurred. Please try again later." });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Request a Callback</h2>
      {/* {submitStatus && (
        <div className={`mb-4 p-2 rounded ${submitStatus.status === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {submitStatus.message}
        </div>
      )} */}
      {/* <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name *
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location *
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="location"
              id="location"
              required
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter Location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address *
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number *
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Verify you're human *
          </label>
          <div className="mt-1">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={handleRecaptchaChange}
            />
          </div>
        </div>
        <div>
          <button 
            type="submit" 
            className={`w-full py-2 px-4 rounded-md transition duration-150 ease-in-out ${
              recaptchaValue
                ? 'bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!recaptchaValue}
          >
            Send
          </button>
        </div>
      </form> */}
            <div className="elfsight-app-1f8f79ea-76bf-4d99-9735-22168c396f41" data-elfsight-app-lazy></div>

    </div>
  );
};

export default CallbackForm;