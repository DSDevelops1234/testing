import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const Features = () => {
  return (
    <section className="container mx-auto py-10 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Trigger animation when it comes into view
          transition={{ duration: 0.5 }}
        >
          <p className="inline-block border-2 border-blue-900 rounded text-blue-900 open-sans-medium text-base py-1 px-3">
            Why Choosing Us!
          </p>
          <h1 className="text-5xl jost-bold mt-4 mb-4">
            Why Partner with Our Trusted Financial Services?
          </h1>
          <p className="mb-4 text-gray-600 open-sans-regular text-base">
            We offer customized financial solutions to meet your needs, ensuring
            secure investments, expert advice, and quick approvals.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white py-3 px-5 rounded-lg open-sans-medium text-base inline-block"
          >
            Explore More
          </a>
        </motion.div>

        {/* Right Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Quick Loan Approvals",
              description:
                "Experience fast and efficient loan approval processes that allow you to access funds quickly, ensuring timely financial support.",
            },
            {
              title: "Expert Financial Guidance",
              description:
                "Benefit from the advice of experienced financial advisors who guide you in making informed decisions for a secure financial future.",
            },
            {
              title: "Secure Investment Plans",
              description:
                "We offer a variety of investment opportunities that ensure your money grows securely and consistently, tailored to your risk preferences.",
            },
            {
              title: "Flexible Repayment Options", // New feature added here
              description:
                "Our NBFC offers a variety of flexible repayment options to ensure that your financial journey is smooth and manageable, according to your needs.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="group border-2 border-white rounded-lg p-5 bg-white shadow-md transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // Trigger animation when it comes into view
              transition={{ duration: 2, delay: index * 0.2 }}
            >
              <FaCheck className="text-blue-500 text-3xl mb-3 group-hover:text-white" />
              <h4 className="jost-semi-bold text-2xl mb-2 group-hover:text-white">
                {feature.title}
              </h4>
              <p className="text-gray-600 open-sans-regular text-base mb-3 group-hover:text-white">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
