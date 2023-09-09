import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../searchBar/SearchBar";

const Hero = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
    },
    onscreen: {
      y: 15,
      
      transition: {
        type: "spring",
        bounce: 0.8,
        duration: 0.8,
      },
    },
  };
  const cardVariants2 = {
    offscreen: {
      y: 50,
    },
    onscreen: {
      y: 15,
     
      transition: {
        type: "spring",
        bounce: 0.8,
        duration: 0.8,
      },
    },
  };
  const cardVariants3 = {
    offscreen: {
      y: 100,
    },
    onscreen: {
      y: 10,
      x:10,
     
      transition: {
        type: "spring",
        bounce: 0.8,
        duration: 1,
      },
    },
  };
  return (
    <section className="hero-wrapper">
      <motion.div
        className="paddings innerWidth flexCenter hero-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 1 }}
      >
        {/* Left side */}
        <motion.div
          className="flexColStart hero-left"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{once: true, amount: 1 }}
        >
          <div className="hero-title">
            <motion.div className="gold-circle" 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 1 }}
            variants={cardVariants3}
            />
            <motion.h1
              //

              // variants={cardVariants}
            >
              Unlocking <br /> Your Dream <br /> Home
            </motion.h1>
          </div>

          <div className="flexColStart secondaryText hero-des">
            <span>
              At HomeFinder Realty, we specialize in unlocking your dream home,{" "}
            </span>
            <span>where imagination meets reality.</span>
          </div>

          {/* <SearchBar /> */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={11000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Premium Homes</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={4000} end={4500} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Happy Clients</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={50} />
                <span>+</span>
              </span>

              <span className="secondaryText">Awards</span>
            </div>
          </div>
        </motion.div>
        {/* Right side */}
        <div className="flexCenter hero-right">
          <div
            className="image-container"
            
          >
            <motion.img src="./hero-image.png" alt="hero" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
