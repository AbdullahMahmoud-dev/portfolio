import React from "react";
import "./about.css";
// import Abdo from "../../assets/Abdo.jpg"; // Not used in the current structure

const About = () => {
  return (
    <section id="about" className="about-container">
      <div>
        {/* Skills Section Title */}
        <h3 className="skills-title">My Skills</h3>

        {/* Skills Grid */}
        <div className="skills-grid">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript (ES6+)</div>
          <div className="skill">ReactJS</div>
          <div className="skill">Redux Toolkit</div>
          <div className="skill">Tailwind CSS</div>
          <div className="skill">Bootstrap</div>
          <div className="skill">Git & GitHub</div>
          <div className="skill">Axios / Fetch API</div>
          <div className="skill">Responsive Design</div>
          <div className="skill">Framer Motion</div>
          <div className="skill">Lottie Animations</div>
          <div className="skill">Figma to Code</div>
          <div className="skill">Vite</div>
          <div className="skill">Performance Optimization</div>
          <div className="skill">SEO Basics</div>
          <div className="skill">Node.js (Basics)</div>
        </div>
      </div>
    </section>
  );
};

export default About;