import React, { useState, useEffect } from "react";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import OurStory from "../../components/OurStory";
import MissionVision from "../../components/VisionMission";
import CoreValues from "../../components/CoreValues";
import Growthpartners from "../../components/GrowthPartners";
import Timeline from "../../components/Timeline";
import Footer from "../../components/Footer";
import breadcrumbbg from "../../assets/images/Breadcrumb/breadcrumb-bg.jpg";

const About = () => {
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
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Growthpartners />
      <Timeline />
      <Footer />
    </div>
  );
};

export default About;
