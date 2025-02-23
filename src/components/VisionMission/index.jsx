import { motion } from "framer-motion";
import Mission from "../../assets/icons/mission.png";
import Vision from "../../assets/icons/vision.png";

const MissionVision = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Mission Section */}
        <motion.div
          className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center justify-between text-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -40 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
            damping: 25,
          }}
        >
          {/* Mission Image */}
          <motion.div
            className="mb-6 text-blue-950"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 120,
              damping: 25,
            }}
          >
            <img src={Mission} alt="Mission" />
          </motion.div>

          {/* Mission Heading */}
          <motion.h2
            className="text-3xl font-bold text-blue-950 mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            Mission
          </motion.h2>

          {/* Mission Text */}
          <motion.p
            className="text-lg text-gray-700 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
          >
            Our mission is to accelerate progress through cutting-edge
            technology that empowers communities to achieve their dreams.
          </motion.p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center justify-between text-center"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 120,
            damping: 25,
          }}
        >
          {/* Vision Image */}
          <motion.div
            className="mb-6 text-blue-950"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 120,
              damping: 25,
            }}
          >
            <img src={Vision} alt="Vision" />
          </motion.div>

          {/* Vision Heading */}
          <motion.h2
            className="text-3xl font-bold text-blue-950 mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          >
            Vision
          </motion.h2>

          {/* Vision Text */}
          <motion.p
            className="text-lg text-gray-700 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
          >
            Our vision is to illuminate the path toward a brighter future where
            technology fosters sustainable change and global unity.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVision;
