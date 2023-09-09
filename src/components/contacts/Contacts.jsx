import React from "react";
import "./contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { easeIn, motion } from "framer-motion";

const Contacts = () => {
  const cardVariants = {
    offscreen: {
      x: 100,
    },
    onscreen: {
      y: 20,
      x: 80,

      transition: {
        type: "spring",
        bounce: 0.8,
        duration: 0.8,
      },
    },
  };
  const cardVariants2 = {
    offscreen: {
      x: 100,
    },
    onscreen: {
      x: 10,

      transition: {
        type: easeIn,

        duration: 2,
      },
      animate: {
        // y: 10,
        opacity: 1,
      },
    },
  };
  const cardVariants3 = {
    offscreen: {
      x: -100,
    },
    onscreen: {
      x: 10,

      transition: {
        type: easeIn,

        duration: 2,
      },
      animate: {
        // y: 10,
        opacity: 1,
      },
    },
  };
  return (
    <section className="c-wrapper">
      <motion.div
        className="paddings innerWidth flexCenter c-container "
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
        initial="offscreen"
        variants={cardVariants}
      >
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Contact Us The Easy Way</span>
          <span className="secondaryText c-text">
            We have the needed Experience and Expertise To Help You find you THE
            place, a dream home
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <motion.div
              className=" flexStart row"
              whileInView="onscreen"
              viewport={{ amount: 0.8 }}
              initial="offscreen"
              variants={cardVariants2}
            >
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} variants={cardVariants} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+2348038852544</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Us Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+2348038852544</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Us Now</div>
              </div>
            </motion.div>
            {/* second row */}

            <motion.div
              className=" flexStart row"
              whileInView="onscreen"
              viewport={{ amount: 0.8 }}
              initial="offscreen"
              variants={cardVariants3}
            >
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+2348038852544</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Us Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">ihedfortune@gmail.com</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="mailto:ihedfortune@gmail.com">Email Us Now</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" variants={cardVariants} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
