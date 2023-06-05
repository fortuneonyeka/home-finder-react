import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import "./Residencies.css"
import data from "../../utils/slider.json"
const Redidencies = () => {

  
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
        <span className="orangeText">Best Options</span>
        <span className="primaryText">Popular Residencies</span>
        </div>
      
        <Swiper
        spaceBetween={50}
        >
          {data.map((card, i) =>(
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r-price">
                <span style={{color: "gold"}}>{card.currency}</span>
                 <span>{card.price}</span> 
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
          
      </div>
    </section>
  )
}

export default Redidencies