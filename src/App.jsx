import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import Approuter from "../src/routes/approuter";
import ImportantInfoModal from "../src/components/ImportantInfoModal";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds
    const modalTimer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);

    // Show back to top button when scrolled down
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(modalTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <Approuter />
      <ImportantInfoModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      {/* Back to Top Button - Visible on All Pages */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-blue-700"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </Router>
  );
}

export default App;
