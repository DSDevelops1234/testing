//topbar
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhone } from "react-icons/fa";

const Topbar = () => (
  <div className="bg-transparent container mx-auto flex flex-col md:flex-row justify-between px-4 md:px-9 py-2 items-center text-center md:text-left open-sans-regular text-sm">
    {/* Left Section */}
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt className="text-blue-500" />
        <span>
          1st Floor, Diamond Tower 2, Navkar Trade Center, Bhilwara-311001
        </span>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <FaClock className="text-blue-500" />
        <span>09.30 AM - 06.30 PM</span>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-2 md:mt-0">
      <div className="flex items-center gap-2">
        <FaEnvelope className="text-blue-500" />
        <span>fujiglobalfinance@gmail.com</span>
      </div>
      <div className="flex items-center gap-2">
        <FaPhone className="text-blue-500" />
        <span>+91-80945 54455</span>
      </div>
    </div>
  </div>
);

export default Topbar;
