import React, { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Projects from "./components/3-main/Projects";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import About from "./components/About/About"; // Assuming About is correct path

const App = () => {
  // State for controlling the visibility of the scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Effect to handle scroll event and toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled down more than 300px
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to smoothly scroll to the top of the page (Optional: using behavior)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="up" className="container">
      <Header />

      {/* Hero Section */}
      <div className="divider" />
      <div id="home">
        <Hero />
      </div>

      {/* About Section */}
      <div className="divider" />
      <div id="about">
        <About />
      </div>

      {/* Projects Section */}
      <div className="divider" />
      <div id="projects">
        <Projects />
      </div>

      {/* Contact Section */}
      <div className="divider" />
      <div id="contact">
        <Contact />
      </div>

      <div className="divider" />
      <Footer />

      {/* Scroll To Top Button */}
      <a
        // Using inline style for smooth opacity transition based on state
        style={{ opacity: showScrollTop ? 1 : 0, transition: "1s" }}
        href="#up"
        // Optional: Using onClick to ensure smooth scroll even if browser default behavior is changed
        onClick={scrollToTop}
      >
        <button className="scrolltoup icon-keyboard_arrow_up" aria-label="Scroll to top" />
      </a>
    </div>
  );
};

export default App;