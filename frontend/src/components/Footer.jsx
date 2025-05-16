import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">DineEase</div>
          <div className="right">
            <p>123 Elm Street,</p>
            <p>Springfield, Anytown</p>
            <p>Open: 08:00 AM - 11:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Contact Us: +91 9123456789</p>
          </div>
          <div className="right">
            <p>All Rights Reserved. </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;