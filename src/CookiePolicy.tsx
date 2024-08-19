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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">COOKIE POLICY</h2>
              
              <p className="mb-4">
                Effective as of November 02, 2020
              </p>
              
              <p className="mb-4">
                Ekaa Business Solution (Ekaa Pitch) (“Ekaa Business Solution” or the “Company”) respects the privacy of visitors to its Website (as defined in our Privacy Statement). The Ekaa Business Solution Cookies Policy (the “Policy”) applies to the Ekaa Business Solution Website and describes the information we collect by automated means using information-gathering tools, such as cookies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cookies</h3>
              <p className="mb-4">
                Cookies are small pieces of information or text that are issued to your computer when you visit a website and are used to store or track information about your use of the site.
              </p>
              <p className="mb-4">
                Ekaa Business Solution uses both session‑based and persistent‑based cookies. Session‑based cookies exist only during your web session and expire when you close your internet browser. Persistent‑based cookies are files that stay in one of your browser’s subfolders until you delete them manually or your browser deletes them based on the duration period contained within the persistent cookie’s file.
              </p>
              <p className="mb-4">
                Ekaa Business Solution uses cookies for several reasons. Some cookies are strictly necessary to enable core site functionality. We refer to these as “required” cookies. For example, we may use required cookies to authenticate your access to various areas of our Website. Other cookies allow us to enhance your browsing experience, tailor content to your preferences and make your interactions with our Website more meaningful. We refer to these as “functional” cookies. For example, we may use functional cookies to determine whether you have visited our Website before and inform us about site features in which you have an interest, thereby permitting us to better tailor our Website content. Functional cookies also allow us to analyze Website traffic so we can measure and improve performance and speed up your searches.
              </p>
              <p className="mb-4">
                In addition to required and functional cookies, some third parties issue cookies through our Website to serve ads that are relevant to your interests based on your browsing activities. These third parties may also collect your browser history or other information to determine how you reached our Website and the website you visit when you leave our Website. Information gathered through these automated means may be associated with the personal information you previously submitted on our Website.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Do Not Track</h3>
              <p className="mb-4">
                While Ekaa Business Solution attempts to honor do not track (“DNT”) instructions we receive from your browser, we cannot guarantee that Ekaa Business Solution will always respond to such signals, in part because of the lack of common industry standard for DNT technology. We continue to monitor developments in DNT technology and stay apprised of DNT industry standards as they evolve.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">IP Addresses</h3>
              <p className="mb-4">
                An IP address is a unique identifier that certain electronic devices use to identify and communicate with each other on the Internet. When you visit our Website, we may view the IP address of the device you use to connect to the Internet. We use this information to determine the general physical location of the device and the geographic regions of our visitors.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Contact Information</h3>
              <p className="mb-2">
                To ask questions or comment about our information practices, please contact us at <a href="mailto:privacy@ekaadigital.com" className="text-blue-600 hover:text-blue-800">privacy@ekaadigital.com</a>.
              </p>
              <p className="mb-2">
                You may also write to us at:
              </p>
              <p className="mb-4">
                Ekaa Business Solution<br />
                A1&2, II Floor, Green Channel Apts,<br />
                Khairtabad, Hyderabad-500 004<br />
                Telangana, India.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
