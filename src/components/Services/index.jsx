import { useState } from "react";
import { FaBars, FaCheck } from "react-icons/fa"; // Importing icons
import LAP from "../../assets/images/Services/lap.jpg";
import GoldLoan from "../../assets/images/Services/goldloan.jpg";
import BusinessLoan from "../../assets/images/Services/businessloan.jpg";

const Services = () => {
  const [activeTab, setActiveTab] = useState(1); // Default active tab

  return (
    <section className="container mx-auto py-10 px-10">
      <div className="text-center mx-auto max-w-2xl mb-12">
        <p className="inline-block border-2 border-blue-900 rounded text-blue-900 open-sans-medium text-base py-1 px-3">
          Our Services
        </p>
        <h1 className="text-5xl jost-bold mt-3 mb-6">
          Innovative Financing for Personal and Business Growth
        </h1>
      </div>

      <div className="flex flex-wrap">
        {/* Tab Navigation */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <div className="flex flex-col space-y-4">
            {["Loan Against Property (LAP)", "Gold Loan", "Business Loan"].map(
              (service, index) => (
                <button
                  key={index}
                  className={`group flex items-center justify-between w-full p-4 rounded-lg text-left border-2 transition-all duration-300 ${
                    activeTab === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-blue-500 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(index + 1)}
                >
                  <h5 className="flex items-center text-xl jost-medium">
                    <FaBars
                      className={`mr-3 ${
                        activeTab === index + 1
                          ? "text-white"
                          : "text-black group-hover:text-white"
                      }`}
                    />
                    {service}
                  </h5>
                </button>
              )
            )}
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full sm:w-3/4 pl-0 sm:pl-10">
          <div className="tab-content">
            {/* Loan Against Property (LAP) */}
            {activeTab === 1 && (
              <div className="tab-pane fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-[350px]">
                    <img
                      className="absolute rounded w-full h-full object-cover"
                      src={LAP}
                      alt="Loan Against Property"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl jost-semi-bold mb-4">
                      Loan Against Property (LAP)
                    </h3>
                    <p className="mb-4 open-sans-regular text-base text-gray-600">
                      Loan Against Property (LAP) allows you to leverage your
                      property as collateral to secure a loan. It offers higher
                      loan amounts and longer repayment tenures.
                    </p>
                    <ul className="text-gray-600 space-y-2 open-sans-regular text-base">
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        Secured Loans
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        High Loan Amounts
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        Longer Repayment Tenure
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="bg-blue-500 text-white py-3 px-5 rounded-lg font-semibold mt-4 inline-block"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Gold Loan */}
            {activeTab === 2 && (
              <div className="tab-pane fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-[350px]">
                    <img
                      className="absolute rounded w-full h-full object-cover"
                      src={GoldLoan}
                      alt="Gold Loan"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl jost-semi-bold mb-4">Gold Loan</h3>
                    <p className="mb-4 open-sans-regular text-base text-gray-600">
                      A Gold Loan allows you to pledge your gold as collateral
                      to get a quick loan. It offers a hassle-free process with
                      minimal documentation.
                    </p>
                    <ul className="text-gray-600 space-y-2 open-sans-regular text-base">
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        Quick Disbursement
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        Minimal Documentation
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        Low-Interest Rates
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="bg-blue-500 text-white py-3 px-5 rounded-lg font-semibold mt-4 inline-block"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Business Loan */}
            {activeTab === 3 && (
              <div className="tab-pane fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-[350px]">
                    <img
                      className="absolute rounded w-full h-full object-cover"
                      src={BusinessLoan}
                      alt="Business Loan"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl jost-semi-bold mb-4">
                      Business Loan
                    </h3>
                    <p className="mb-4 open-sans-regular text-base text-gray-600">
                      Business loans are ideal for entrepreneurs and businesses
                      looking to expand or cover operational costs. These loans
                      offer flexible repayment terms.
                    </p>
                    <ul className="text-gray-600 space-y-2 open-sans-regular text-base">
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        Working Capital
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        Low-Interest Rates
                      </li>
                      <li className="flex items-center">
                        <FaCheck className="text-blue-500 mr-2" />
                        Flexible Repayment Terms
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="bg-blue-500 text-white py-3 px-5 rounded-lg font-semibold mt-4  inline-block"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
