import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="max-w-7xl mx-auto py-20 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <nav className="text-sm mb-8">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
                <span className="mx-2 text-gray-500">/</span>
              </li>
              <li className="text-gray-500">Cookie Policy</li>
            </ol>
          </nav>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies Policy of Ekaa Business Solutions (Ekaa Pitch Solutions)</h2>
              
              <p className="mb-4">
                <strong>Effective Date:</strong> August 18, 2024
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Introduction</h3>
              <p className="mb-4">
                Ekaa Business Solutions (Ekaa Pitch Solutions) respects the privacy of our website visitors. This Cookies Policy outlines how we use cookies and similar tracking technologies to collect information during your visits to our website.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">About Cookies</h3>
              <p className="mb-4">
                Cookies are small text files stored on your device to enhance site functionality and user experience. We use both session-based cookies, which expire after your browser session ends, and persistent cookies, which remain until they are deleted, to improve website navigation and provide personalized content.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Use of Cookies</h3>
              <ul className="list-disc pl-5 mb-4">
                <li><strong>Required Cookies:</strong> Necessary for website functionality, such as authenticating logins and managing user sessions.</li>
                <li><strong>Functional Cookies:</strong> Enhance browsing experience by remembering your visits and preferences, helping to customize our website accordingly.</li>
                <li><strong>Analytical Cookies:</strong> We analyze site usage to improve service delivery, understanding traffic patterns and user engagement.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Third-Party Cookies</h3>
              <p className="mb-4">
                Some third-party services may set cookies through our website for advertising or to gather analytics. These cookies may track your browsing habits and gather information that is linked with your personal data, as per our Privacy Policy.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Do Not Track (DNT)</h3>
              <p className="mb-4">
                Our response to DNT signals is dependent on the availability and acceptance of industry standards. We continue to monitor DNT technology developments.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">IP Addresses</h3>
              <p className="mb-4">
                We may collect IP addresses to understand the geographic distribution of our users and optimize our services accordingly.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Contact Us</h3>
              <p className="mb-2">
                For questions about our cookie practices, contact us at <a href="mailto:info@ekaapitch.com" className="text-blue-600 hover:text-blue-800">info@ekaapitchl.com</a>.
              </p>
              <p className="mb-2">
                You may also write to us at:
              </p>
              <p className="mb-4">
                Ekaa Business Solution (Ekaa Pitch)<br />
                A1&2, II Floor, Green Channel Apts,<br />
                Khairtabad, Hyderabad-500 004<br />
                Telangana, India.
              </p>

              <p className="mt-6">
                This policy aims to transparently inform how data is collected and used on our website to enhance user experience, adhering to legal standards.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;