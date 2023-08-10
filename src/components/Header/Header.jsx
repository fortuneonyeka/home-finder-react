import React, { useState } from "react";
import "./Header.css";
import useHeaderColor from "../../hooks/useHeaderColor";
import { Link, NavLink } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const headerColor = useHeaderColor();

  const getMeuStyles = (openMenu) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !openMenu && "-100%" };
    }
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img
            src="./homefinderlogo.png"
            alt="logo"
            width={70}
            className="logo"
          />
        </Link>
        <OutsideClickHandler
        onOutsideClick={()=>setOpenMenu(false)}
        >
          <div className="flexCenter h-menu" style={getMeuStyles(openMenu)}>
            
            <NavLink to="/properties">Properties</NavLink>
           
              <a href="mailto:ihedfortune@gmail.com">Contact</a>

              <button className="button">Login</button>
          
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
