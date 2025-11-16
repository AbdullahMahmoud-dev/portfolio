import React from "react";
import "./footer.css";

// Footer component displaying navigation links and copyright year
const Footer = () => {
  return (
    <footer className="flex">
      {/* Footer Navigation Links */}
      <ul className="footerend flex">
        <li>
          <a href="#home">About</a> {/* Added # to href for typical navigation */}
        </li>
        <li>
          <a href="#projects">Projects</a> {/* Added # to href for typical navigation */}
        </li>
        <li>
          <a href="#contact">Speaking</a> {/* Added # to href for typical navigation */}
        </li>
        <li>
          <a href="#uses">Uses</a> {/* Added # to href for typical navigation */}
        </li>
      </ul>
      
      {/* Copyright/Year Text */}
      <p>© 2024</p> {/* Added © symbol for completeness */}
    </footer>
  );
};

export default Footer;