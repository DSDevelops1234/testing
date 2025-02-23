import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { FaMoneyCheckAlt, FaFileAlt, FaExchangeAlt } from "react-icons/fa";
import aboutimg from "../../assets/images/About/about-professional.jpeg";

const About = () => {
  return (
    <div className="container mx-auto py-10 px-10 lg:px-10">
      <div className="grid lg:grid-cols-2 gap-8 items-end mb-8">
        {/* Left Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutimg}
            alt="Finance Company"
            className="w-full rounded-lg object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="inline-block border-2 border-blue-900  rounded-md text-blue-900 text-base open-sans-medium py-1 px-3">
            About Us
          </p>
          <h1 className="text-5xl jost-bold mt-4 mb-4">
            Your Trusted Financial Partner for Loans
          </h1>
          <p className="mb-4 text-gray-600 open-sans-regular text-base">
            We help individuals and businesses achieve financial stability by
            providing Loan Against Property (LAP), Gold Loans, and Business
            Loans at competitive interest rates.
          </p>

          {/* Tab Navigation with Aceternity UI */}
          <Tabs.Root defaultValue="story">
            <Tabs.List className="flex space-x-4 border-b border-gray-400 mb-3">
              {["story", "mission", "vision"].map((tab) => (
                <Tabs.Trigger
                  key={tab}
                  value={tab}
                  className="px-4 py-2 open-sans-medium text-base transition-all data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 text-gray-500 hover:text-blue-600"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {/* Tab Content with Fixed Height */}
            <div className="relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-700 min-h-[150px] flex items-center"
              >
                <Tabs.Content
                  value="story"
                  className="absolute w-full text-base"
                >
                  <p className="open-sans-regular">
                    Established in September 2021, we began with Unsecured
                    Business Loans (BL) in Bhilwara and expanded into Loan
                    Against Property (LAP) in April 2022.
                  </p>
                  <p>
                    By 2023, we reached an AUM of ₹10 crore, growing to ₹20
                    crore in 2024 with new branches in Shahpura, Bijaynagar, and
                    Gangapur.
                  </p>
                  <p>We aim for ₹100 crore AUM by 2026-27.</p>
                </Tabs.Content>

                <Tabs.Content value="mission" className="absolute w-full">
                  <p className="open-sans-regular">
                    Our mission is to empower individuals and businesses by
                    offering accessible, transparent, and flexible loan
                    solutions.
                  </p>
                  <p className="mb-0">
                    We strive to build financial confidence by making lending
                    simple, secure, and convenient.
                  </p>
                </Tabs.Content>

                <Tabs.Content value="vision" className="absolute w-full">
                  <p className="open-sans-regular">
                    Our vision is to be India’s most trusted financial partner,
                    providing innovative and customer-centric loan services.
                  </p>
                  <p className="mb-0">
                    We aim to help millions achieve their dreams by offering
                    financial support when they need it the most.
                  </p>
                </Tabs.Content>
              </motion.div>
            </div>
          </Tabs.Root>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="border-gray-400 border rounded-lg p-6"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaMoneyCheckAlt className="text-blue-600 text-3xl" />,
              title: "Quick Loan Approval",
              description: "Fast processing to ensure timely access to funds.",
            },
            {
              icon: <FaFileAlt className="text-blue-600 text-3xl" />,
              title: "Minimal Documentation",
              description:
                "Hassle-free loan application with minimal paperwork.",
            },
            {
              icon: <FaExchangeAlt className="text-blue-600 text-3xl" />,
              title: "Flexible Repayment",
              description: "Customized repayment options for your convenience.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center space-x-4"
            >
              <div className="h-14 w-14 flex justify-center items-center bg-blue-100 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-900 jost-semi-bold">
                  {feature.title}
                </h4>
                <p className="text-gray-600 open-sans-regular text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
