import React from "react";
import "./Property.css";
import { PuffLoader } from "react-spinners";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../../utils/api";
import { AiFillHeart} from "react-icons/ai";
import { FaShower,FaCar, FaBed} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const { data, isError, isLoading } = useQuery(["property", id], () =>
    getProperty(id)
  );

  if (isError) {
    return (
      <div className="wrapper">
        <div className="paddings flexCenter">
          <span>Error while fetching this property details</span>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper " style={{ height: "60vh" }}>
        <div className="paddings flexCenter ">
          <PuffLoader
            height="80"
            width="80"
            radius={1}
            color="#4066ff"
            aria-label="puff-loading "
          />
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="paddings flexColStart innerWidth property-container">
        <div className="like">
          <AiFillHeart size={35} color="gold" />
        </div>
       
        <img src={data?.image} alt={data.title}/>


        <div className="flexCenter property-details">
          {/* left side */}
          <div className="flexColStart left">

            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span> 
              <span className="orangeText" style={{fontSize: "1.5rem"}}>
                <span style={{color:"blue"}}>$ </span>
              <span>{data?.price}</span>
              </span>
            </div>


            {/* facilities */}
            <div className="flexStart facilities">

              <div className="flexStart facility">
              <FaBed size={20} color="#1F3E72"/>
              <span>{data.facilities.bedrooms} Bedroom/s</span>
              </div>

              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72"/>
                <span>{data?.facilities.bathrooms} Bathrooms</span>
              </div>
              <div className="flexStart facility">
              <FaCar size={20} color="#1F3E72"/>
              <span>{data?.facilities.parking} Parking lot/s</span>
              </div>
            </div>



            {/* description */}
            <span className="secondaryText descriptions">
                {data.description}
            </span>


            <d className="flexStart secondaryText" style={{gap:"1rem"}}>
              <MdLocationOn  size={25}/>
              <span>{data?.address}</span> 
              <span >{data?.city}</span> 
              <span >{data?.country}</span> 
            </d>


            {/* booking button */}
            <button className="button">
              Book property inspection
            </button>
          </div>

          {/* right side */}
          <div className=" map">
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
