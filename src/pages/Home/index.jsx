import React, { useState, useEffect } from "react";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Facts from "../../components/Facts";
import Features from "../../components/Features";
import Services from "../../components/Services";
import Callback from "../../components/Callback";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/Footer";
import herobg from "../../assets/images/Hero/hero-bg.jpg";

const Home = () => {
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
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${herobg})` }}
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

        <Hero />
      </div>
      <About />
      <Facts />
      <Features />
      <Services />
      <Callback />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
