import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const headings = [
  "Your Financial Status Is Our Goal",
  "True Financial Support For You",
];

const TypingEffect = ({ text, speed = 100, delay = 1500 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (!isDeleting && displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, speed / 2);
    } else if (!isDeleting && displayText.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setLoopIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-start px-6 md:px-12 lg:px-10 pt-60">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-3/4 flex flex-col items-start justify-center gap-4"
      >
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-block border-2 border-blue-900  text-blue-900 font-semibold py-1 px-3 open-sans-medium rounded text-base md:text-base"
        >
          Welcome to Fuji Global Finance
        </motion.p>

        {/* Dynamic Typing Hero Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-5xl lg:text-6xl font-bold jost-bold text-gray-900 leading-tight "
        >
          <TypingEffect text={headings[0]} />
        </motion.h1>

        {/* CTA Button */}
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-blue-600 text-base open-sans-medium text-white py-3 px-5 rounded shadow-md hover:bg-blue-700 transition-all"
        >
          Explore More
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
