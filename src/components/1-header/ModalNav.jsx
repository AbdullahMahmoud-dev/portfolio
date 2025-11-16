import React from "react";

// ModalNav component for mobile navigation
const ModalNav = ({ setShowModal }) => {
  // Function to close the modal after link click
  const handleLinkClick = () => {
    setShowModal(false);
  };

  return (
    // Fixed background overlay
    <div className="fixed">
      {/* Actual modal list */}
      <ul className="modal">
        {/* Close button */}
        <li>
          <button
            className="icon-clear"
            onClick={() => setShowModal(false)}
            aria-label="Close Menu"
          />
        </li>

        {/* Navigation Links */}
        <li>
          <a href="#home" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#skills" onClick={handleLinkClick}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleLinkClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ModalNav;