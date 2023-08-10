import React from 'react'
import {AiFillHeart} from "react-icons/ai"
import "./propertyCard.css"
import {truncate} from "lodash"

const PropertyCard = ({card}) => {
  console.log(card.currency);
  return (
    <div className="flexColStart r-card">
    <AiFillHeart size={24} color="gold"/>
    <img src={card.image} alt="home" />
    <span className="secondaryText r-price">
      <span style={{ color: "gold" }}>${card.currency}</span>
      <span>{card.price}</span>
    </span>
    <span className="primaryText">{truncate(card.title, {length: 15})}</span>
    <span className="secondaryText">{truncate(card.description, {length:80})}</span>
  </div>
  )
}

export default PropertyCard