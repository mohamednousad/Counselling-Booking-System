import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Works from "./Works";
import Services from "./Services";
import Resources from "./Resources";
import Assessment from "./Assessment";
import Footer from "./Footer";
// import { Link } from "react-router-dom";

const HomeComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Services />
      <Resources />
      <Assessment />
      <Footer />
    </div>
  );
};

export default HomeComponent;
