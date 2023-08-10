import React from "react";
import "./properties.css"
import SeachBar from "../../components/searchBar/SeachBar";
import useProperties from "../../hooks/useProperties";
import { PuffLoader} from "react-spinners"
import PropertyCard from "../../components/propertyCard/PropertyCard";

const Properties = () => {
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
        <PuffLoader height="80" width="80" radius={1} color="#4066ff" aria-label="puff-loading "/>
      </div>
    )
  }
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SeachBar />

        <div className="paddings flexCenter properties">
          {data.map((card,i) =>(
            <PropertyCard card={card} key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
