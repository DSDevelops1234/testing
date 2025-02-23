"use client";

import { motion } from "framer-motion";

import integrity from "../../assets/icons/integirty.png";
import customercentric from "../../assets/icons/customer-centric.png";
import financialinclusion from "../../assets/icons/financial-inclusion.png";
import innovationtechnology from "../../assets/icons/innovation-technology.png";
import riskmanagment from "../../assets/icons/riskmanagment.png";
import growthsustainability from "../../assets/icons/growth.png";
import empowermenttrust from "../../assets/icons/empowerment.png";
import accountability from "../../assets/icons/accountability.png";

const ValueCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay / 1000 }}
    className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="p-3 bg-accent-soft rounded-lg group-hover:scale-110 transition-transform duration-300">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      <h3 className="text-xl jost-bold text-primary">{title}</h3>
      <p className="open-sans-regular text-sm text-center leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const CoreValues = () => {
  const values = [
    {
      icon: integrity,
      title: "Integrity & Transparency",
      description:
        "Ensuring honesty, ethical conduct, and clear communication in all financial dealings.",
    },
    {
      icon: customercentric,
      title: "Customer-Centric Approach",
      description:
        "Prioritizing customer needs by offering tailored financial solutions and excellent service.",
    },
    {
      icon: financialinclusion,
      title: "Financial Inclusion",
      description:
        "Providing accessible and affordable credit to underserved and unbanked sectors of society.",
    },
    {
      icon: innovationtechnology,
      title: "Innovation & Technology",
      description:
        "Embracing digital transformation to enhance financial services and customer experience.",
    },
    {
      icon: riskmanagment,
      title: "Risk Management & Compliance",
      description:
        "Adhering to regulatory guidelines and maintaining strong risk management frameworks.",
    },
    {
      icon: growthsustainability,
      title: "Growth & Sustainability",
      description:
        "Focusing on long-term financial stability while fostering economic growth.",
    },
    {
      icon: empowermenttrust,
      title: "Empowerment & Trust",
      description:
        "Building trust through responsible lending and empowering customers to achieve financial independence.",
    },
    {
      icon: accountability,
      title: "Accountability & Responsibility",
      description:
        "Taking ownership of decisions and ensuring responsible financial practices.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-accent-soft">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-center mx-auto max-w-2xl mb-12">
            <p className="inline-block border-2 border-blue-900 rounded text-blue-900 open-sans-medium text-base py-1 px-3">
              Our Foundation
            </p>
            <h1 className="text-5xl jost-bold mt-3 mb-6">Core Values</h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
