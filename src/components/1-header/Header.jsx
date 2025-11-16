import React, { useEffect, useState } from "react";
import "./header.css";
import ModalNav from "./ModalNav"; // Import the separated component

// Main Header component
const Header = () => {
  // State for showing/hiding the modal
  const [showModal, setShowModal] = useState(false);

  // Theme state (pulled from localStorage or defaults to "dark")
  const [theme, setTheme] = useState(
    localStorage.getItem("currentmode") ?? "dark"
  );

  // Side effect to apply the theme class to the document body
  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("currentmode", newTheme);
      return newTheme;
    });
  };

  return (
    <header className="flex">
      {/* ⬅️ Menu Button (Mobile) */}
      <button
        onClick={() => setShowModal(true)}
        className="menu icon-menu flex"
        aria-label="Open Menu"
      />

      <div /> {/* Flexible spacing divider */}

      {/* 📚 Navigation Bar (Desktop) */}
      <nav>
        <ul className="flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* ☀️/🌙 Mode Toggle Button */}
      <button onClick={toggleTheme} className="mode flex" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
        {theme === "dark" ? (
          <span className="icon-moon-o" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>

      {/* 📱 Modal Navigation (Mobile) */}
      {showModal && <ModalNav setShowModal={setShowModal} />}
    </header>
  );
};

export default Header;