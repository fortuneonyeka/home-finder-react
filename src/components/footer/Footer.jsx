import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
        <Link to="/">
          <img
            src="./homefinderlogo.png"
            alt="logo"
            width={90}
            className="logo"
            />
            </Link>
          <span className="secondaryText">
            We specialize in unlocking your dream home,
            <br />
            where imagination meets reality
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Our Location</span>
          <span className="secondaryText">
            G4 Road 12 Iceland Avenue, Banana Island, Lagos Nigeria
          </span>
          <div className="flexCenter f-menu">
            <span><Link to="/properties">Properties</Link></span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
