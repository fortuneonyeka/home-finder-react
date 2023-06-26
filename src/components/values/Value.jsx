import React, {useState} from 'react'
import {easeIn, motion} from "framer-motion"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import "./value.css"
import {MdOutlineArrowDropDown} from "react-icons/md"
import accordionData from "../../utils/accordion"

const Value = () => {
const [className, setClassName] = useState(null)
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <motion.div className="image-container"
          initial={{x: "-7rem", opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{duration: 2, type:easeIn}}>
            <img src="./value.png" alt="" />
          </motion.div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Core Values</span>
          <span className="primaryText">What You Get From Us</span>
          <span className="secondaryText">Letting you find homes with perfection. <br /> A hassle-free way to find your dream homes.</span>

          <Accordion
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]}>
              {accordionData.map((data,i) => {
                return (
                  <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed") }
                        
                      </AccordionItemState>
                      <motion.div className="flexCenter icon"
                      initial={{y: "-7rem", opacity: 0}}
                      animate={{y:0, opacity: 1}}
                      transition={{duration: 2,delay: 1, type:easeIn}}
                      >{data.icon}</motion.div>
                      <motion.span className="primaryText"
                        initial={{y: "-7rem", opacity: 0}}
                        animate={{y:0, opacity: 1}}
                        transition={{duration: 2, type:easeIn}}
                      >{data.heading}</motion.span>

                      <motion.div className="flexCenter icon"
                      initial={{y: "-7rem", opacity: 0}}
                      animate={{y:0, opacity: 1}}
                      transition={{duration: 2,delay: 1, type:easeIn}}
                      ><MdOutlineArrowDropDown size={20}/></motion.div>

                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{data.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
                )
              })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value