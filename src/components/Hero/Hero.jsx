import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import {easeIn, motion} from "framer-motion"
import SeachBar from "../searchBar/SeachBar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="gold-circle"/>
            <motion.h1
            initial={{y: "2rem", opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{duration: 2, type:"spring"}}
            >Unlocking <br /> Your Dream <br /> Home</motion.h1>
          </div>

          <div className="flexColStart secondaryText hero-des">
            <span>At HomeFinder Realty, we specialize in unlocking your dream home, </span><span>where imagination meets reality.</span>
          </div>

          <SeachBar />
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
          <motion.div className="image-container"
          initial={{x: "7rem", opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{duration: 2, type:easeIn}}
          >
            <img src="./hero-image.png" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
