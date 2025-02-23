import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger & Close Icon
import Logo from "../../assets/images/Logo/fujiglobal.png";
import NACHCancellationRequestModal from "../../components/NACHCancellationRequest";
const Navbar = ({ isScrolled }) => {
  const [dropdown, setDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".mobile-menu") && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Services",
      dropdown: [
        { name: "Loan Against Property", link: "/loanagainstproperty" },
        { name: "Gold Loan", link: "/goldloan" },
        { name: "Business Loan", link: "/businessloan" },
      ],
    },
    {
      name: "Careers",
      dropdown: [
        { name: "Life at Fuji Global", link: "#" },
        { name: "Meet the Team", link: "#" },
        { name: "Open Positions", link: "#" },
      ],
    },
    { name: "Contact", link: "#" },
  ];

  return (
    <>
      <div
        className={`container mx-auto flex justify-between items-center open-sans-medium text-base px-6 lg:px-10 py-4 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div>
          <img src={Logo} alt="Fuji Global Logo" className="h-12 lg:h-16" />
        </div>

        {/* Hamburger Menu Button (Tablet & Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <FiMenu className="text-2xl text-gray-700" />
          </button>
        </div>

        {/* Desktop Navigation (Hidden on Tablet & Mobile) */}
        <ul className="hidden lg:flex space-x-6 lg:space-x-8 relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setDropdown(item.dropdown ? index : null)}
              onMouseLeave={() => setDropdown(null)}
            >
              <a
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
                href={item.link}
              >
                {item.name}
                {item.dropdown && (
                  <motion.span
                    animate={{ rotate: dropdown === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoIosArrowDown className="text-gray-500 text-sm" />
                  </motion.span>
                )}
              </a>

              {/* Dropdown Menu */}
              {item.dropdown && dropdown === index && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition duration-200"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          ))}

          {/* Modal Button for Desktop */}
          <li className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2  rounded hover:bg-blue-700 transition-colors"
            >
              NACH Cancellation Request
            </button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-3/4 md:w-2/4 h-full bg-white shadow-lg z-50 p-6 mobile-menu"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiX className="text-2xl text-gray-700" />
              </button>

              {/* Mobile Menu List */}
              <ul className="mt-10 space-y-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      className="flex justify-between w-full text-left text-gray-700 font-medium"
                      onClick={() =>
                        setDropdown(dropdown === index ? null : index)
                      }
                    >
                      {item.name}
                      {item.dropdown && (
                        <motion.span
                          animate={{ rotate: dropdown === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IoIosArrowDown className="text-gray-500 text-lg" />
                        </motion.span>
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {item.dropdown && dropdown === index && (
                      <motion.ul
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-2 space-y-2 pl-4"
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.link}
                              className="block text-gray-600 text-[16px] hover:text-blue-600"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Modal Button for Mobile */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  NACH Cancellation Request
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal Component */}
      <NACHCancellationRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
