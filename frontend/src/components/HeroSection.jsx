import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">"Book. Dine. Enjoy."</h1>
          </div>
        </div>
        
      </div>
      <img className="herologo" src="logos.png" alt="logos" />
    </section>
  );
};

export default HeroSection;