import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import LogoII from "../../assets/images/Logo/fujiglobal-II.png";

const NACHCancellationRequest = ({ isOpen, onClose }) => {
  const [umrn, setUmrn] = useState("");
  const [loanNo, setLoanNo] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form submission handler with validation
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (umrn && loanNo) {
      setFormError("Please enter either UMRN or Loan Number, not both.");
      return;
    }
    if (!umrn && !loanNo) {
      setFormError("Please enter either UMRN or Loan Number.");
      return;
    }
    if (umrn && !/^[a-zA-Z0-9]{1,20}$/.test(umrn)) {
      setFormError("UMRN must be alphanumeric and up to 20 characters.");
      return;
    }
    if (loanNo && !/^FG0ML200\d{3}$/.test(loanNo)) {
      setFormError("Loan Number must follow format FG0ML200XXX.");
      return;
    }
    setFormError("");
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setUmrn("");
      setLoanNo("");
    }, 2000);
  };

  const handleUmrnChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 20);
    setUmrn(value);
  };

  const handleLoanNoChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
    setLoanNo(value);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-gray-500 opacity-50"
            onClick={onClose}
          ></div>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white p-6 rounded-xl shadow-lg z-10 w-full max-w-xl"
          >
            <button className="absolute top-3 right-3" onClick={onClose}>
              <AiOutlineClose className="text-2xl" />
            </button>

            <div className="flex items-center justify-center mb-4">
              <img src={LogoII} alt="Icon" className="w-10 rounded-full mr-2" />
              <h2 className="text-2xl jost-medium border-b-2">
                NACH Mandate Cancellation Request
              </h2>
            </div>
            <p className="mb-4 text-center open-sans-medium text-lg ">
              Fuji Global Finance Pvt. Ltd.
            </p>

            {isSubmitted ? (
              <div className="flex flex-col items-center">
                <AiOutlineCheckCircle className="text-green-500 text-6xl mb-4 animate-bounce" />
                <p className="text-lg font-semibold text-gray-700">
                  Submission Successful!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="space-y-4 p-6 bg-[#e7e5f2]  border-t-4 rounded-lg open-sans-regular"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="umrn" className="block">
                      Enter UMRN
                    </label>
                    <input
                      type="text"
                      id="umrn"
                      value={umrn}
                      onChange={handleUmrnChange}
                      className="mt-1 w-full border bg-white border-gray-600 focus:outline-none px-3 py-2"
                      placeholder="ABCDXXXXXXXXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="loanNo" className="block">
                      Enter Loan No.
                    </label>
                    <input
                      type="text"
                      id="loanNo"
                      value={loanNo}
                      onChange={handleLoanNoChange}
                      className="mt-1 w-full border bg-white border-gray-600 focus:outline-none px-3 py-2"
                      placeholder="FG0ML200XXX"
                    />
                  </div>
                </div>

                {formError && (
                  <p className="text-red-500 text-sm">{formError}</p>
                )}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Submit
                  </button>
                </div>
                <div
                  className="flex items-center bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-2"
                  role="alert"
                >
                  <AiOutlineInfoCircle className="text-base mr-2" />
                  <p className="text-xs open-sans-regular">
                    You can enter either UMRN or Loan Number or both.{" "}
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NACHCancellationRequest;
