import React from 'react'
import "./propertyCard.css"
import {truncate} from "lodash"
import { useNavigate } from "react-router-dom"
import Heart from "../heart/Heart"

const PropertyCard = ({card}) => {
  
  const navigate = useNavigate()
  return (
    <div className="flexColStart r-card" onClick={() =>navigate(`../properties/${card.id}`)}>
    <Heart id={card?.id}/>
    <img src={card.image} alt="home" />
    <span className="secondaryText r-price">
      <span style={{ color: "gold" }}>$ {card.currency}</span>
      <span>{card.price}</span>
    </span>
    <span className="primaryText">{truncate(card.title, {length: 15})}</span>
    <span className="secondaryText">{truncate(card.description, {length:80})}</span>
  </div>
  )
}

export default PropertyCard