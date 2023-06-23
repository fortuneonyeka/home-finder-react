import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const getMeuStyles = (openMenu) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !openMenu && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <a href="/">
          <img
            src="./homefinderlogo.png"
            alt="logo"
            width={70}
            className="logo"
          />
        </a>
        <OutsideClickHandler
        onOutsideClick={()=>setOpenMenu(false)}
        >
          <div className="flexCenter h-menu" style={getMeuStyles(openMenu)}>
            <a href="">Homes</a>
            <a href="">Our Core Values</a>
            <a href="">Contact Us</a>
            <a href=""> Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setOpenMenu((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
