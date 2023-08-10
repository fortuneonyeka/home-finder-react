import React from 'react'
import "./contact.css"
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"
import {motion,easeIn} from "framer-motion"

const Contacts = () => {
  return (
    <section className="c-wrapper">
    <div className="paddings innerWidth flexCenter c-container ">
      <div className="flexColStart c-left">
        <span className="orangeText">Our Contacts</span>
        <span className="primaryText">Contact Us The Easy Way</span>
        <span className="secondaryText c-text">We have the needed Experience and Expertise To Help You find you THE place, a dream home</span>


        <div className="flexColStart contactModes">
          {/* first row */}
            <motion.div className=" flexStart row"
            initial={{x: "-7rem", opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{duration: 2, type:easeIn}}
            >
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
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
            
            <motion.div className=" flexStart row"
            initial={{x: "7rem", opacity: 0}}
            animate={{x:0, opacity: 1}}
            transition={{duration: 2, type:easeIn}}
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
                <div className="flexCenter button"><a href="mailto:ihedfortune@gmail.com">Email Us Now</a></div>
              </div>
            </motion.div>
        </div>
      </div>

      <div className="c-right">
        <motion.div className="image-container"
          initial={{y: "7rem", opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: 2, type:easeIn}}
        >
          <img src="./contact.jpg" alt="" />
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default Contacts