import React, { useState, useEffect } from "react";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import breadcrumbbg from "../../assets/images/Breadcrumb/breadcrumb-bg.jpg";
import BusinessLoanContent from "../../components/Services/BusinessLoan";
import ServiceTabs from "../../components/Services/Tabs";
import QueryUs from "../../components/Query";
import BusinessLoanTabs from "../../components/Services/BusinessLoan/tabs";
import EMICalculator from "../../components/EMICalculator";

const Businessloan = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className="h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${breadcrumbbg})` }}
      >
        {/* Topbar - Only visible on Desktop (lg & above) */}
        <div
          className={`fixed top-0 left-0 w-full transition-transform duration-500 ease-in-out z-50 
            ${
              isScrolled ? "-translate-y-full" : "translate-y-0"
            } hidden lg:block`}
        >
          <Topbar />
        </div>

        {/* Navbar - Adjusts position based on Topbar visibility */}
        <div
          className={`fixed top-0 left-0 w-full transition-all duration-500 ${
            isScrolled ? "top-0" : "lg:top-[30px]" // Push Navbar down when Topbar is visible on large screens
          }`}
        >
          <Navbar isScrolled={isScrolled} />
        </div>
        <Breadcrumb />
      </div>
      {/* ---------------------------------------------------------- */}
      <div className="container mx-auto py-6 px-10 lg:px-52">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Left Side - Image & Description */}
          <div className="md:col-span-4">
            <BusinessLoanContent />
            <BusinessLoanTabs />
          </div>
          {/* Right Side - Contact Info */}
          <div className="md:col-span-2">
            <ServiceTabs />
            <QueryUs />
          </div>
        </div>
        <EMICalculator />
      </div>

      <Footer />
    </div>
  );
};

export default Businessloan;
