import React from "react";
import { useNavigate } from "react-router-dom";

function PropertiesCardList({imageSrc,name,amenities,location,phone,rent,brokerage,security,}) 

{
  const navigate = useNavigate();

  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`);
  };

  const properties = [ { id: 1,name,imageSrc,amenities: amenities ? amenities.split(",").map((amenity) => amenity.trim()): [],
      location,phone,rent,brokerage,security,},];
  return (
    <>
      <div className="product-section" >
        {properties.map((property) => (
          <div className="room-card" key={property.id} onClick={()=>handlePropertyClick(property.id)}>
            <img
              className="roomImg"
              src={property.imageSrc}
              alt={property.name}
            />
            <div className="more-description">
              <h4>{property.name}</h4>
              <ul className="amenities-list">
                {[...new Set(property.amenities)].map((amenity, index) => (
                  <li className="amenity" key={index}>
                    {amenity === "Wi-Fi" && (
                      <i className="fa fa-wifi" aria-hidden="true"></i>
                    )}
                    {amenity === "AC" && (
                      <i className="fa fa-tint" aria-hidden="true"></i>
                    )}
                     {amenity === "Power Backup" && (
                      <i className="fa fa-plug" aria-hidden="true"></i>
                    )}
                     {amenity === "Washing Machine" && (
                      <i className="fa fa-tint" aria-hidden="true"></i>
                    )}
                      {amenity === "Fridge" && (
                      <i className="fa fa-tint" aria-hidden="true"></i>
                    )}
                      {amenity === "Water Supply" && (
                      <i className="fa fa-tint" aria-hidden="true"></i>
                    )}
                   
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
              <div className="address-full">
                <p className="reach-out">
                  <i className="fa-solid fa-location-dot">
                    {property.location}
                  </i>
                </p>
                <p className="connect">
                  <i className="fa-solid fa-phone">
                    Connect Now: {property.phone}
                  </i>
                </p>
              </div>
              <div className="rent-enquiry">
                <p>Rent: {property.rent}</p>
                <p>Brokerage: {property.brokerage}</p>
                <p>Security: {property.security}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PropertiesCardList;
