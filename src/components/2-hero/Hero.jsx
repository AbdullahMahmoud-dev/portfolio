import React from "react";
import Lottie from "lottie-react";
import developerAnimation from "../../animation/devloper.json";
import { motion } from "framer-motion";
import "./hero.css";

// Hero component (the first section of the portfolio)
const hero = () => {
  return (
    <section className="hero flex">
      {/* Left section - contains avatar and personal info */}
      <div className="left-section ">
        <div className="parent-avatar">
          {/* Profile image */}
          <motion.img
            initial={{ opacity: 0, transform: "scale(0)" }}
            animate={{ opacity: 1, transform: "scale(1.1)" }}
            transition={{ duration: 0.5 }}
            src="/WhatsApp Image 2025-05-04 at 18.40.02_b45db648.jpg"
            className="avatar"
            alt=""
          />
          {/* Verified icon next to the avatar */}
          <span className="icon-verified"></span>

          {/* Main title / name and role */}
          <motion.h1
            className="title"
            initial={{ opacity: 0, transform: "scale(0)" }}
            animate={{ opacity: 1, transform: "scale(1.1)" }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Abdullah Mahmoud. Frontend Developer
          </motion.h1>

          {/* Short description / subtitle */}
          <motion.p
            initial={{ opacity: 0, transform: "scale(0)" }}
            animate={{ opacity: 1, transform: "scale(1.1)" }}
            transition={{ duration: 0.5 }}
            className="sub-title"
          >
            I craft modern, responsive websites and interfaces using
            technologies like React, JavaScript, and Tailwind CSS to deliver
            smooth and engaging user experiences.
          </motion.p>

          {/* Social media icons */}
          <div className="all-icons flex">
            <div className="icon icon-twitter"></div>
            <div className="icon icon-instagram"></div>
            <div className="icon icon-github"></div>
            <div className="icon icon-linkedin"></div>
          </div>
        </div>
      </div>

      {/* Right section - could be used for animation or illustration */}
      <div className="right-section animation-dev ">
        <Lottie animationData={developerAnimation} />
      </div>
    </section>
  );
};

export default hero;
