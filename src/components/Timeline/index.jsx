"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  TrendingUp,
  Users,
  Building,
  Globe,
  Award,
  Banknote,
} from "lucide-react";

const timelineData = [
  {
    year: 2021,
    title: "Establishment",
    description: "Company established in September 2021.",
    icon: Building,
    color: "bg-blue-500",
  },
  {
    year: 2021,
    title: "Unsecured BL Launched",
    description: "Started Unsecured BL with Bhilwara Branch.",
    icon: TrendingUp,
    color: "bg-green-500",
  },
  {
    year: 2022,
    title: "LAP Introduced",
    description: "Started LAP in April 2022.",
    icon: Globe,
    color: "bg-purple-500",
  },
  {
    year: 2023,
    title: "AUM Milestone",
    description: "Touched an AUM of 10 cr in 2023.",
    icon: Award,
    color: "bg-yellow-500",
  },
  {
    year: 2023,
    title: "Branch Expansion",
    description: "Opened 2 spoke locations: Asin & Mandalgarh.",
    icon: Users,
    color: "bg-red-500",
  },
  {
    year: 2023,
    title: "AU Small Finance Bank Partnership",
    description: "AU Small Finance Bank became our debt partner in 2023.",
    icon: Banknote,
    color: "bg-blue-500",
  },
  {
    year: 2024,
    title: "Growth Continues",
    description: "AUM reached 20 cr in 2024.",
    icon: TrendingUp,
    color: "bg-green-500",
  },
  {
    year: 2024,
    title: "Further Expansion",
    description:
      "Opened 3 new spoke locations: Shahpura, Bijaynagar, Gangapur.",
    icon: Users,
    color: "bg-red-500",
  },
  {
    year: 2024,
    title: "City Union Bank Partnership",
    description: "City Union Bank joined hands with us in 2024.",
    icon: Banknote,
    color: "bg-purple-500",
  },
  {
    year: "2026-27",
    title: "Long-term Target",
    description: "Aiming for 100 cr AUM by 2026-27 financial year.",
    icon: Award,
    color: "bg-yellow-500",
  },
];

const TimelineItem = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-8 flex w-full items-center"
    >
      {index % 2 === 0 ? (
        <>
          <div className="order-1 w-5/12 bg-gray-50 rounded-lg shadow-xl px-6 py-4 text-left">
            <h3 className="mb-3 jost-semi-bold  text-gray-800 text-sm md:text-xl">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm open-sans-regular  leading-snug tracking-wide text-gray-900 text-opacity-100">
              {item.description}
            </p>
          </div>
          <div className="order-1 w-2/12 px-1 py-1 flex flex-col items-center bg-white  relative z-10">
            <p className="mb-2 text-base text-blue-600 jost-medium ">
              {item.year}
            </p>
            <div
              className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center`}
            >
              <item.icon className="text-white w-4 h-4" />
            </div>
          </div>
          <div className="order-1 w-5/12"></div>
        </>
      ) : (
        <>
          <div className="order-1 w-5/12"></div>
          <div className="order-1 w-2/12 px-1 py-1 flex flex-col items-center bg-white  relative z-10">
            <p className="mb-2 text-base text-blue-600 jost-medium ">
              {item.year}
            </p>
            <div
              className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center`}
            >
              <item.icon className="text-white w-4 h-4" />
            </div>
          </div>
          <div className="order-1 w-5/12 bg-gray-50 rounded-lg shadow-xl px-6 py-4 text-right">
            <h3 className="mb-3 jost-semi-bold  text-gray-800 text-sm md:text-xl">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm leading-snug open-sans-regular  tracking-wide text-gray-900 text-opacity-100">
              {item.description}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Timeline = () => (
  <div className="container mx-auto py-10 px-10 w-full h-full">
    <div className="text-center mx-auto max-w-2xl mb-12">
      <p className="inline-block border-2 border-blue-900 rounded text-blue-900 open-sans-medium text-base py-1 px-3">
        Milestones & Achievements
      </p>
      <h1 className="text-5xl jost-bold mt-3 mb-6">Our Path to Success</h1>
    </div>
    <div className="relative wrap overflow-hidden h-full">
      <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border-dotted border left-1/2 top-0 transform -translate-x-1/2 z-0"></div>
      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  </div>
);

export default Timeline;
