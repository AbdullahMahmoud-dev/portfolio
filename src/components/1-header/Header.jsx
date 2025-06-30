import React, { useEffect, useState } from "react";
import "./header.css";

// Header Component
const Header = () => {
  // State to control the modal visibility
  const [showmodal, setShowmodal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentmode") ?? "dark"
  );
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);

  return (
    <header className="flex">
      {/* Menu Button (shows modal on click) */}
      <button
        onClick={() => {
          setShowmodal(true);
        }}
        className="menu icon-menu flex"
      />

      {/* Empty div (can be used for layout spacing) */}
      <div />

      {/* Navigation Bar */}
      <nav>
        <ul className="flex">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Articales</a>{" "}
            {/* Note: Typo here, should be "Articles" */}
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Speaking</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mode Toggle Button */}
      <button
        onClick={() => {
          localStorage.setItem(
            "currentmode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentmode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (<span className="icon-moon-o"></span>) : (<span className="icon-sun"></span>)}
      </button>

      {/* Modal (shown only when showmodal is true) */}
      {showmodal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              {/* Clear (Close) Modal Button */}
              <button
                className="icon-clear"
                onClick={() => {
                  setShowmodal(false);
                }}
              />
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Articales</a> {/* Again typo: "Articles" */}
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Speaking</a>
            </li>
            <li>
              <a href="/">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
