import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll"; // Alias import for react-scroll
import { Link as RouterLink } from "react-router-dom"; // Alias import for react-router-dom
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">DineEase</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <ScrollLink
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </ScrollLink>
            ))}
          </div>
          <RouterLink to="/dishes">
            <button className="menuBtn">OUR MENU</button>
          </RouterLink>
          <RouterLink to="/login">
            <button className="menuBtn">LOGIN</button>
          </RouterLink>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
