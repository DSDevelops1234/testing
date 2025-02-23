import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const ImportantInfoModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-gray-500 opacity-50"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white p-6 rounded-xl shadow-lg z-10 w-full max-w-xl"
          >
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
              onClick={() => setIsModalOpen(false)}
            >
              <AiOutlineClose className="text-lg" />
            </button>

            <div className="text-center">
              <p className="text-2xl hind-semi-bold  mb-4 text-red-600">
                !! महत्वपूर्ण सूचना !!
              </p>
              <p className="mb-4 hind-regular text-base text-gray-800">
                कृपया किसी भी संभावित धोखाधड़ी से बचने के लिए EMI राशि का भुगतान
                चेक/ईसीएस/यूपीआई के माध्यम से सीधे कंपनी के बैंक खाते में करें।
              </p>

              <p className="text-2xl open-sans-medium  mb-4 text-blue-600">
                !! Important Information !!
              </p>
              <p className="text-gray-800 text-base open-sans-regular ">
                Please pay the EMI Amount directly in the Company’s bank account
                by way of Cheque/ECS/UPI to avoid any potential fraud.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImportantInfoModal;
