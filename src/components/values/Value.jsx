import React from 'react'
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
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
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
              {accordionData.map((data, i) => (
                <AccordionItem className="accordionItem" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <div className="flexCenter icon">{data.icon}</div>
                      <span className="primaryTex">{data.heading}</span>
                      <div className="flexCenter icon"><MdOutlineArrowDropDown size={20}/></div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{data.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value