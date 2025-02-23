"use client";

import { motion } from "framer-motion";
import Statisiticsbg from "../../assets/images/Statistics/statistics-bg.png";
import ausmallogo from "../../assets/images/GrowthPartners/ausmallfinance.png";
import cityunionlogo from "../../assets/images/GrowthPartners/cityunionbank.png";
import idfclogo from "../../assets/images/GrowthPartners/idfcfirstbank.png";

const partners = [
  { name: "AU Small Finance Bank", logo: ausmallogo },
  { name: "City Union Bank", logo: cityunionlogo },
  { name: "IDFC First Bank", logo: idfclogo },
];

const Growthpartners = () => {
  return (
    <section
      className="w-full py-14 bg-contain bg-center flex flex-col justify-center items-center text-white px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(53, 94, 252, .95), rgba(53, 94, 252, .95)), url(${Statisiticsbg})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="inline-block border-2 border-white rounded text-white open-sans-medium text-base py-1 px-3">
          Our Growth Partners
        </p>
        <h1 className="text-3xl md:text-5xl jost-bold mt-3 mb-6">
          Trusted Financial Collaborators
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="flex flex-col items-center justify-center w-full"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-full max-w-[180px] md:max-w-[200px] h-auto object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Growthpartners;
