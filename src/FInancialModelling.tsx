import React, { useState } from 'react';
import CallbackForm from './CallbackForm';
import { Plus, Minus } from 'lucide-react';
import banner from "./images/Banners/Financial Forecast & DCF Valuation.jpg"

const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`container mx-auto px-4 ${className} max-w-6xl`}>{children}</div>
);

const ExpandableSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {title}
        {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      {isExpanded && <div className="mt-4">{children}</div>}
    </div>
  );
};

const FinancialModelling: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full">
        <img
          src={banner}
          alt="Business Plan Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Financial Modelling
          </h1>
          <nav className="text-sm md:text-base text-gray-300">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <a href="/" className="hover:text-white">
                  Home
                </a>
                <svg
                  className="fill-current w-3 h-3 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li className="flex items-center">
                <a href="/services" className="hover:text-white">
                  Our Services
                </a>
                <svg
                  className="fill-current w-3 h-3 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li>
                <span className="text-gray-500">Financial Modelling</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-grow py-12">
        <Container className="md:flex md:space-x-8">
          <section className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Financial Modelling & Analysis</h2>
            
            <p className="mb-4">
              Ekaa Financial Consulting offers modern solutions for both big companies and budding startups to enhance their financial
              planning and achieve balanced proportions between investments and cash flows. Financial Forecast, DCF Valuation, and
              Financial Modeling are vital processes that stabilize startups and help them achieve their goals. We conduct Q&A sessions to
              understand your requirements and challenges, designing key assumptions for tailored solutions.
            </p>

            <p className="mb-4">
              Our financial consulting services include forecasting your finances and providing projections for the future of your business,
              including cash flow statements, Profit and Loss Projections, and detailed Financial Modeling. We visually represent valuable
              data through decks, tables, and charts to organize your business plans effectively.
            </p>

            <p className="mb-4">
              We empower startups with custom reports to assess the financial impact, guiding you in designing an ideal financial forecast
              for your company's future. Our expert teams follow the best practices of DCF and Financial Modeling to make accurate
              projections of investments and cash flows.
            </p>

            <p className="mb-4">
              As your trusted old friend in financial planning, we simplify the process of strategizing finances and evaluating investment
              opportunities based on projections. With well-trained professionals, we provide effective consulting services and are among
              the leading pitch deck service providers in the country.
            </p>

            <p className="mb-8">
              Through Financial Projections, DCF Valuation, and Financial Modeling, we help you create a comprehensive financial strategy,
              attracting investors and facilitating company growth. Investors value the discounted cash flow method and detailed financial
              models, providing insights into the ROI your startup can generate over time. Partner with Ekaa for strong financial planning
              and support, empowering your business to reach new heights.
            </p>

            <ExpandableSection title="What is Financial Modelling?">
              <p>
                Financial modeling involves building a startup's financial projections for investors to assess future growth prospects. It summarizes expenses, income, and financial
                decisions. Investors rely on credible numeric information to evaluate the viability of a unique business idea. A well-constructed financial model showcases a startup's
                potential value and competitiveness in the market. Creating a financial model varies based on the startup's nature, representing its economic considerations uniquely.
                It is crucial for making vital financial decisions in the corporate world, guiding investors to understand the startup's financial health and prospects effectively.
              </p>
            </ExpandableSection>

            <ExpandableSection title="Where is Financial Modelling Used For?">
              <p>Financial models enable better financial decisions and find applications in various areas:</p>
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li>Valuation: Financial models determine the fair value and startup valuation.</li>
                <li>Long-Term Planning: They aid in setting long-term goals based on different scenarios.</li>
                <li>Cost of Capital: Models assist in deciding the cost of capital for new projects.</li>
                <li>Resource Allocation: They help allocate resources for investments and expenditures.</li>
                <li>Fundraising: Financial models validate numbers presented to investors, facilitating fundraising efforts.</li>
              </ol>
            </ExpandableSection>

            <ExpandableSection title="Who Needs a Financial Model & When Do You Need One?">
              <p>Financial models are essential for various users and scenarios:</p>
              <ol className="list-decimal list-inside ml-4 mt-2">
                <li>Investment Banks: They use financial models for valuations in M&A or fundraising deals.</li>
                <li>Bankers and Credit Analysts: Financial models aid in credit rating decisions for projects or companies.</li>
                <li>Accountants and Valuation Advisors: They use financial models to develop valuation projections.</li>
                <li>Research Analysts: Financial models help in determining buy or sell ratings for securities.</li>
                <li>Companies: Financial models assist in creating funding plans and assessing finances and projects.</li>
                <li>New Entrepreneurs (Startups): They use financial models to impress potential investors and secure funding by presenting their plans and strategies.</li>
              </ol>
            </ExpandableSection>
          </section>

          <aside className="md:w-1/3 mt-8 md:mt-0">
              <CallbackForm />
          </aside>
        </Container>
      </main>
    </div>
  );
};

export default FinancialModelling;