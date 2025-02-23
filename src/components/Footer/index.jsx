import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCaretRight,
} from "react-icons/fa";
import {
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Our Office */}
          <div>
            <h4 className="jost-semi-bold text-2xl mb-4">Our Office</h4>
            <p className="flex items-center open-sans-regular text-base mb-2">
              <FaMapMarkerAlt className="mr-3" /> {/* Increased icon size */}
              1st Floor, Diamond Tower 2, Navkar Trade Center, Bhilwara,
              Rajasthan - 311001
            </p>
            <p className="flex items-center open-sans-regular text-base mb-2">
              <FaPhoneAlt className="mr-3" /> {/* Increased icon size */}
              +91 80945-54455
            </p>
            <p className="flex items-center open-sans-regular text-base mb-2">
              <FaEnvelope className="mr-3" /> {/* Increased icon size */}
              fujiglobalfinance@gmail.com
            </p>
            <div className="flex space-x-3 mt-4 open-sans-regular text-base">
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-full transition-all duration-300 hover:bg-blue-500 hover:scale-110"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-full transition-all duration-300 hover:bg-blue-500 hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 rounded-full transition-all duration-300 hover:bg-blue-500 hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="jost-semi-bold text-2xl mb-4">Services</h4>
            {[
              "Loan Against Property (LAP)",
              "Gold Loan",
              "Secure Business Loan",
            ].map((service, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center text-gray-400 hover:text-white open-sans-regular text-base mb-2 transition-transform transform hover:scale-105"
              >
                <FaCaretRight className="mr-2 text-sm" /> {service}
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="jost-semi-bold text-2xl mb-4">Quick Links</h4>
            {[
              "About Us",
              "Contact Us",
              "Our Services",
              "Terms & Condition",
              "Privacy Policy",
            ].map((link, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center text-gray-400 hover:text-white open-sans-regular text-base mb-2 transition-transform transform hover:scale-105 "
              >
                <FaCaretRight className="mr-2 text-sm" /> {link}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="jost-semi-bold text-2xl mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4 open-sans-regular text-base">
              Stay updated with our latest offers and news.
            </p>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Your email"
                className="w-full p-3 rounded bg-white focus:outline-none text-gray-900"
              />
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-500 text-white open-sans-medium text-base px-4 py-2 rounded hover:bg-blue-600">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
