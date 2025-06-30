import React, { useEffect, useState } from "react";
import Contact from "./components/4-contact/Contact";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Footer from "./components/5-footer/Footer";

const App = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => { 
      if(window.scrollY > 300){
        setAbdo(true);

      }else{
        setAbdo(false);
      }
     })
    
  }, []);

  const [abdo, setAbdo] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a style={{opacity: abdo ? 1 : 0 , transition: "1s" }}  href="#up">
        <button className="scrolltoup icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
};

export default App;
