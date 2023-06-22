import React from 'react'
import "./contact.css"

const Contacts = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container ">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Contact Us The Easy Way</span>
          <span className="secondaryText">We have the needed Experience and Expertise To Help You find you THE place, a dream home</span>
        </div>

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts