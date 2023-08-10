import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
// import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../propertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import { PulseLoader } from "react-spinners";
const Redidencies = () => {
  const {data, isError, isLoading} = useProperties()
  if (isError) {
    return(
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    )
  }

  if (isLoading) {
    return(
      <div className="wrapper flexCenter" style={{height: "60vh"}}>
        <PulseLoader height="80" width="80" radius={1} color="#4066ff" aria-label="puff-loading "/>
      </div>
    )
  }

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Options</span>
          <span className="primaryText">Popular Residences</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.slice(0,8).map((card, i) => (
            <SwiperSlide key={i}>
             <PropertyCard card={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Redidencies;

const SliderButtons = () => {
  const swiper = useSwiper();  
  return (
    <div className="flexCenter r-buttons">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}
