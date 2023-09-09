import React, { useState } from "react";
import { easeIn, motion } from "framer-motion";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./value.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import accordionData from "../../utils/accordion";

const Value = () => {
  const cardVariants = {
    offscreen: {

    },
    onscreen: {
      y: 40,

      transition: {
        type: "spring",
        bounce: 0.8,
        duration: 0.8,
      },
    },
  };
  const cardVariants2 = {
    offscreen: {
      // x: -10,
    },
    onscreen: {
      // x: 10,

      transition: {
        type: easeIn,

        duration: 2,
      },
      animate: {
        x: 0,
        opacity: 1,
      },
    },
  };
  const cardVariants3 = {
    offscreen: {
      x: 5,
    },
    onscreen: {
      // x: -10,

      transition: {
        type: easeIn,

        duration: 2,
      },
      animate: {
        x: 0,
        opacity: 1,
      },
    },
  };
  const cardVariants4 = {
    offscreen: {
      // x: 10,
      y: -10,
    },
    onscreen: {
      y: 2,
      // x: -10,

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

  const [className, setClassName] = useState(null);
  return (
    <section className="v-wrapper">
      <motion.div
        className="paddings innerWidth flexCenter v-container"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
        initial="offscreen"
        variants={cardVariants}
      >
        {/* left side */}
        <div className="v-left">
          <div
            className="image-container"
           
          >
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Core Values</span>
          <span className="primaryText">What You Get From Us</span>
          <span className="secondaryText">
            Letting you find homes with perfection. <br /> A hassle-free way to
            find your dream homes.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {accordionData.map((data, i) => {
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <motion.div
                    whileInView="onscreen"
                    viewport={{ amount: 0.8 }}
                    initial="offscreen"
                    variants={cardVariants4}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <motion.div
                          className="flexCenter icon"
                          variants={cardVariants2}
                          whileInView="onscreen"
                          viewport={{ amount: 0.8 }}
                          initial="offscreen"
                        >
                          {data.icon}
                        </motion.div>
                        <motion.span
                          className="primaryText"
                          variants={cardVariants4}
                          whileInView="onscreen"
                          viewport={{ amount: 0.8 }}
                          initial="offscreen"
                        >
                          {data.heading}
                        </motion.span>

                        <motion.div
                          className="flexCenter icon"
                          variants={cardVariants3}
                          whileInView="onscreen"
                          viewport={{ amount: 0.8 }}
                          initial="offscreen"
                        >
                          <MdOutlineArrowDropDown size={20} />
                        </motion.div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                  </motion.div>
                  <AccordionItemPanel>
                    <p className="secondaryText">{data.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </motion.div>
    </section>
  );
};

export default Value;
