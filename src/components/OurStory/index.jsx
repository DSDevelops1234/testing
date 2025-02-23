import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Building from "../../assets/images/OurStory/fujiglobalfinancebuilding.jpg";
import Story from "../../assets/icons/story.png";

const OurStory = () => {
  // Detect when the section is in view
  const { ref: storyRef, inView: storyInView } = useInView({
    triggerOnce: true, // Trigger the animation once
    threshold: 0.3, // Trigger when 30% of the element is in view
  });

  return (
    <div className="container mx-auto px-10 lg:px-10 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Image Above Text */}
        <motion.div
          ref={storyRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: storyInView ? 1 : 0,
            y: storyInView ? 0 : 40,
            scale: storyInView ? 1 : 0.98,
          }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 25,
          }}
          className="lg:w-1/2 flex flex-col items-center lg:items-start"
        >
          <motion.img
            src={Story}
            alt="Story"
            className="mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: storyInView ? 1 : 0,
              y: storyInView ? 0 : 50,
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 120,
              damping: 25,
            }}
          />
          <motion.h2
            className="text-5xl jost-bold text-blue-950 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: storyInView ? 1 : 0,
              y: storyInView ? 0 : 30,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              stiffness: 120,
              damping: 25,
            }}
          >
            Our Story
          </motion.h2>
          <motion.p
            className="text-gray-600 open-sans-regular text-base text-justify leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: storyInView ? 1 : 0,
              y: storyInView ? 0 : 30,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 120,
              damping: 25,
            }}
          >
            Established in September 2021, our journey began with a vision to
            provide financial solutions that empower businesses and individuals.
            We started by offering unsecured business loans through our Bhilwara
            branch, marking the first step in our mission to build a strong
            financial foundation for our customers. In April 2022, we expanded
            our services to include Loan Against Property (LAP), further
            diversifying our portfolio and reaching a broader customer base. By
            2023, we achieved a significant milestone, touching an Asset Under
            Management (AUM) of ₹10 crores. This growth was complemented by our
            expansion into new regions, with the opening of two spoke locations
            in Asind and Mandalgarh. Our momentum continued into 2024, where we
            successfully doubled our AUM to ₹20 crores. To enhance our reach and
            services, we opened three additional spoke locations in Shahpura,
            Bijaynagar, and Gangapur. Looking ahead, our long-term vision is to
            achieve an AUM of ₹100 crores by the financial year 2026-27. We
            remain committed to providing innovative financial solutions,
            expanding our presence, and strengthening our impact in the
            industry.
          </motion.p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: storyInView ? 1 : 0,
            x: storyInView ? 0 : 40,
            scale: storyInView ? 1 : 0.98,
          }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 120,
            damping: 25,
          }}
          className="lg:w-1/2 flex justify-center"
        >
          <motion.img
            src={Building}
            alt="Our Story"
            className="w-full lg:w-3/4 h-auto rounded-xl shadow-lg object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: storyInView ? 1 : 0,
              scale: storyInView ? 1 : 0.95,
            }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 120,
              damping: 25,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
