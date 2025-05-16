import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Get to Know the Soul Behind Your Favorite Dining Companion!</p>
            </div>
            <p className="mid">
            At DineEase, we're more than just a reservation platform; we're your gateway to unforgettable dining moments. With a commitment to seamless service and culinary excellence, we invite you to indulge in a journey of taste and refinement. Join us as we redefine the art of dining, one reservation at a time.
            </p>
            <Link to="menu" spy={true} smooth={true} duration={500}>
              Our Bestsellers!{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;