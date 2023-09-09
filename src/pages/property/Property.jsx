import React, { useContext, useState } from "react";
import "./Property.css";
import { PuffLoader } from "react-spinners";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty, removeBooking } from "../../utils/api";
import { FaShower, FaCar, FaBed } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useMutation } from "react-query";
import Map from "../../components/map/Map";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModel from "../../components/bookingModel/BookingModel";
import UserDetailsContext from "../../context/UserDetailsContext";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import Heart from "../../components/heart/Heart";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const { data, isError, isLoading } = useQuery(["property", id], () =>
    getProperty(id)
  );

  const [modelOpened, setModelOpened ] = useState(false)
  const {validateLogin} = useAuthCheck()
  const {user} = useAuth0()

  const { userDetails: { token, bookings }, setUserDetails} = useContext(UserDetailsContext);

  const {mutate: cancelBooking, isLoading: cancelling} = useMutation({
    mutationFn: () => removeBooking(id, user?.email, token),
    onSuccess: ()=> {
      setUserDetails((prev)=>({
        ...prev,
        bookings:prev.bookings.filter((booking) => booking?.id !== id)
      }))
      toast.success("Inspection is cancelled!", {position: "bottom-right"});
    }
  })

 
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
          <Heart id={id}/>
        </div>

        <img src={data?.image} alt={data.title} />

        <div className="flexCenter property-details">
          {/* left side */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                <span style={{ color: "blue" }}>$ </span>
                <span>{data?.price}</span>
              </span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              <div className="flexStart facility">
                <FaBed size={20} color="#1F3E72" />
                <span>{data.facilities.bedrooms} Bedroom/s</span>
              </div>

              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities.bathrooms} Bathrooms</span>
              </div>
              <div className="flexStart facility">
                <FaCar size={20} color="#1F3E72" />
                <span>{data?.facilities.parking} Parking lot/s</span>
              </div>
            </div>

            {/* description */}
            <span className="secondaryText descriptions">
              {data.description}
            </span>
 
            <d className="flexStart secondaryText" style={{ gap: "1rem" }}>
              <MdLocationOn size={25} />
              <span>{data?.address}</span>
              <span>{data?.city}</span>
              <span>{data?.country}</span>
            </d>

            {/* booking button */}
            {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <Button onClick={() => cancelBooking()} disabled={cancelling} variant="gradient" gradient={{ from: 'orange', to: 'red' }} w={"80%"} ><span>Cancel Inspection</span></Button>
                <span >Your inspection is booked for <span style={{color:"green"}}>{bookings?.filter((booking) => booking?.id === id)[0].date}</span> </span>
              </>
            ) : (<Button onClick={()=> {
              validateLogin() && setModelOpened(true)
              }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} w={"80%"}>Book property inspection</Button>)}

            <BookingModel opened={modelOpened} setOpened ={setModelOpened} propertyId={id} email={user?.email}/>
          </div>

          {/* right side */}
          <div className=" map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
