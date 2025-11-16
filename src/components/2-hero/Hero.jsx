import React, { useState } from "react";
import Lottie from "lottie-react";
import developerAnimation from "../../animation/devloper.json";
import { motion } from "framer-motion";
import "./hero.css";
import Abdo from "../../assets/Abdo.jpg";

// Hero section component
const Hero = () => {
  // State to manage the language toggle (false = English, true = Arabic)
  const [isArabic, setIsArabic] = useState(false);

  // Animation variants for text appearance
  const textAnimation = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 }, // Changed scale(1.1) to scale(1) for smoother default
    transition: { duration: 0.5 },
  };

  // English content paragraph
  const englishText = (
    <motion.p
      {...textAnimation}
      className="sub-title"
    >
      I am a Frontend Developer specialized in building modern, responsive
      interfaces using JavaScript and ReactJS. I graduated from Al-Azhar
      University, Faculty of Mass Communication (Class of 2025), majoring in
      Public Relations and Advertising. I have been passionate about programming
      from a young age, and I’m constantly improving my skills to create clean,
      fast, and user-focused digital experiences with a professional touch.
      <span className="translate-inline" onClick={() => setIsArabic(true)}>
        ترجمة إلى العربية
      </span>
    </motion.p>
  );

  // Arabic content paragraph
  const arabicText = (
    <motion.p
      {...textAnimation}
      className="sub-title"
      dir="rtl"
      style={{ textAlign: "right" }}
    >
      أنا مبرمج واجهات أمامية متخصص في إنشاء واجهات حديثة ومتجاوبة. تخرجت من
      جامعة الأزهر، كلية الإعلام (دفعة 2025)، قسم العلاقات العامة والإعلان. من
      صغري وأنا شغوف بمجال البرمجة، وبطوّر مهاراتي باستمرار علشان أقدم تجارب
      استخدام نظيفة، سريعة، ومريحة، وبلمسة احترافية تهتم بكل التفاصيل.
      <span className="translate-inline" onClick={() => setIsArabic(false)}>
        English
      </span>
    </motion.p>
  );

  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar">
          {/* Avatar Image */}
          <img src={Abdo} className="avatar" alt="Abdullah Mahmoud" />
          <span className="icon-verified" />

          {/* Main Title */}
          <motion.h1
            className="title"
            {...textAnimation}
          >
            {isArabic
              ? " مرحباً، أنا عبدالله محمود 👋. مبرمج واجهات أمامية محترف"
              : "Hi, I'm Abdullah Mahmoud👋, Frontend Developer"}
          </motion.h1>

          {/* Paragraph (Toggled by Language) */}
          {isArabic ? arabicText : englishText}

          {/* Social media icons */}
          <div className="all-icons flex">
            <a
              href="https://github.com/AbdullahMahmoud-dev"
              className="icon icon-github"
              target="_blank"
              rel="noopener noreferrer" // Best practice for security
            />
            <a
              href="https://www.linkedin.com/in/abdullah-mahmoud-arb/"
              className="icon icon-linkedin"
              target="_blank"
              rel="noopener noreferrer" // Best practice for security
            />
          </div>
        </div>
      </div>

      {/* Right section with Lottie animation */}
      <div className="right-section animation-dev">
        <Lottie animationData={developerAnimation} />
      </div>
    </section>
  );
};

export default Hero;