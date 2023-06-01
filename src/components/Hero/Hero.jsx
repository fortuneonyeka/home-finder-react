import React from "react";
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="gold-circle"/>
            <h1>Unlocking <br /> Your Dream <br /> Home</h1>
          </div>

          <div className="flexColStart secondaryText hero-des">
            <span>At HomeFinder Realty, we specialize in unlocking your dream home, </span><span>where imagination meets reality.</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span><CountUp start={8800} end={11000} duration={4}/><span>+</span></span>
              
              <span className="secondaryText">Premium Homes</span>
            </div>
            <div className="flexColCenter stat">
              <span><CountUp start={4000} end={4500} duration={4}/><span>+</span></span>
              
              <span className="secondaryText">Happy Clients</span>
            </div>
            <div className="flexColCenter stat">
              <span><CountUp end={50}/><span>+</span></span>
              
              <span className="secondaryText">Awards</span>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
