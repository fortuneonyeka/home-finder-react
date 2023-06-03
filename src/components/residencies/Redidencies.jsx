import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "swiper/css"
import "./Residencies.css"
import swiperData from "../../utils/slider.json"
const Redidencies = () => {
  
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
        <span className="orangeText">Best Options</span>
        <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper>
          {swiperData.map((data, i) =>(
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={data.image} alt="home" />
                <span style={{color: "gold"}}>{data.currency}</span>
                <span className="secondaryText r-price">
                  {data.price}
                </span>
                <span className="primaryText">{data.name}</span>
                <span className="secondaryText">{data.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Redidencies