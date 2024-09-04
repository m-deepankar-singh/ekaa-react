import React from "react";
import {
  Camera,
  Clock,
  DollarSign,
  Database,
  Shield,
  CheckCircle,
} from "lucide-react";
import CallbackForm from "./CallbackForm";
import banner from "./images/Banners/Business Plan.jpg"

const Container: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`container mx-auto px-4 ${className} max-w-6xl`}>
    {children}
  </div>
);

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center mb-8">
    <div className="text-blue-500 mb-2">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);


const BusinessPlan: React.FC = () => {
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
            Business Plan
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
                <span className="text-gray-500">Business Plan</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <Container className="py-12">

      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Intelligent Business Plan
            </h2>
            <p className="mb-4 text-gray-700">
              A fail-proof business plan with essential details ensures success.
              Creating the perfect plan, including future projections, can be
              challenging. Our business plan creators use data analysis and
              project scope to make precise financial projections, going beyond
              mere assumptions for small businesses.
            </p>
            <p className="mb-4 text-gray-700">
              We offer comprehensive business plans tailored to various needs.
              Whether you require a business plan ppt for better management, a
              startup plan for investment, or want to transform your idea into a
              new plan, we have you covered. Rely on our expertise, based on
              intensive market research, competitive analysis, market demand,
              and financial considerations, to build a successful, long-term
              business while you focus on operations and production.
            </p>
            <h2 className="text-3xl font-bold mb-8 text-left py-16">
              Why Should you Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureItem
                icon={<Camera size={48} />}
                title="Team of Experts"
                description="We have an experienced team who understand the mindset of Investors and prepare the Business plan keeping the expectations of the Investors."
              />
              <FeatureItem
                icon={<Clock size={48} />}
                title="Turnaround Time"
                description="We understand how essential your time is, so we work hard to fulfill your deadlines while maintaining high quality."
              />
              <FeatureItem
                icon={<DollarSign size={48} />}
                title="Competitive Pricing"
                description="We are committed to offering high-quality valuation services at reasonable prices to all of our clients."
              />
              <FeatureItem
                icon={<Database size={48} />}
                title="Proprietary Data"
                description="Our innovative valuation approach yields the greatest outcomes, and all data from our research is secret."
              />
              <FeatureItem
                icon={<Shield size={48} />}
                title="Trustworthiness"
                description="All financial information received and submitted is kept entirely confidential and securely stored."
              />
              <FeatureItem
                icon={<CheckCircle size={48} />}
                title="Industry Best Practices"
                description="To serve our clients with the best-in-class services, we adopt the best industry methods and methodologies."
              />
            </div>
            <h2 className="text-3xl font-bold mb-8 py-12">
              What will your Business Plan Include?
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Problem Statement
                </h3>
                <p className="text-gray-700">
                  A must for every business plan to be successful. Your business
                  plan should have a clear problem statement that tells what's
                  the problem you are trying to solve. It doesn't matter if you
                  have thousands of competitors, your goal should be clear and
                  we'll help you define that problem statement within your
                  business plan.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Market Analysis</h3>
                <p className="text-gray-700">
                  Every business plan should have details on how the potential
                  market is doing at the present and how it's expected to do in
                  the future. A business plan designed by us will have this data
                  in detail.
                </p>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Solution</h3>
              <p className="text-gray-700">
                Your business plan will also have a separate section that would
                present the solution you are planning to provide to the problem
                mentioned in the problem statement.
              </p>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Competitor Analysis
                </h3>
                <p className="text-gray-700">
                  The business plan will also have a detailed competitor
                  analysis to let you or the investor have a clear picture of
                  how difficult or easy it would be to get your business
                  running.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Strategy & Implementation
                </h3>
                <p className="text-gray-700">
                  This is the main part. How you are going to operate and what
                  would be your strategy to beat the competition and capture the
                  market lies in this section. We focus to create this section
                  with utmost care and make it as data-rich as possible.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Team</h3>
                <p className="text-gray-700">
                  This section of your startup business plan will have data on
                  individual roles within your team. Who's handling what and
                  what do they bring to the table!
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Financial Projections
                </h3>
                <p className="text-gray-700">
                  What are the investors investing for? How much their
                  investment would be worth after a certain period of time, and
                  where would you be using their funds? These are the main
                  questions the financial projection answers.
                </p>
              </div>
            </div>

          {/* Types of Business Plan Section */}
            <h2 className="text-3xl font-bold mb-8 text-left py-12">
              Types of Business Plan according to different requirements
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Angel Investor/Venture Capital Funding:
                </h3>
                <p className="text-gray-700">
                  A business plan created with the idea of getting funding from
                  angel investors has to be very precise and detail-oriented. It
                  should have each and every aspect related to the company's
                  target market, solution, competition, and financials. We
                  create these plans with extensive research and make sure that
                  you land an investor with a custom business plan designed by
                  us.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Family/Friends Funding:
                </h3>
                <p className="text-gray-700">
                  In case of seeking funding from family/friends, the business
                  plan can be less comprehensive in comparison the one mentioned
                  above. Your family and friends probably know about your
                  business already. So what we would add to the business plan is
                  that how it is doing at the moment and how with their help it
                  can do wonders for both you and them.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Bank Funding:</h3>
                <p className="text-gray-700">
                  Banks are more focused on the income-generating part of the
                  business, i.e., sales. With that in mind, we create this
                  particular type of business plan with more focus on revenue
                  streams, future projections, and cash flows.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Internal Management:
                </h3>
                <p className="text-gray-700">
                  Sometimes you need a business plan to better manage your
                  company internally. Whether it's presenting your plan to the
                  board of directors or potential investors or have a clear
                  picture of how things are going to work out in the future,
                  these business plans are a must-have for everyone.
                </p>
              </div>
            </div>

          {/* What's Included Section */}
            <h2 className="text-3xl font-bold mb-8 text-left py-16">
              What's Included in our Custom Business Plans?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Three Year Objectives",
                "SWOT Analysis",
                "Profitability Analysis",
                "Strategy",
                "Keys to Success",
                "Market Research",
                "Company Description",
                "Company Valuation",
                "Personnel Plan",
                "Profit and Loss 5 year",
                "Keys to Success",
                "Balance Sheet 5 year",
                "Executive Summary",
                "Break Even Analysis",
                "Market Analysis",
                "Cash Flows 5 year",
                "Marketing Plan",
                "Ratio Analysis",
                "Sensitivity Analysis",
                "Revenue Forecast Model",
                "Management Team",
                "Competitive Analysis",
                "Product Description",
                "Organizational Chart",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
        </div>
        <div className="md:w-1/3 md:sticky md:top-2 md:h-screen">
          {/* <div className="p-4"> */}
            <CallbackForm />
          {/* </div> */}
        </div>
      </div>
      </Container>
    </div>
  );
};

export default BusinessPlan;
