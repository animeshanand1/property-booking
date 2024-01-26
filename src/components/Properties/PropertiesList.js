import React, { useState } from "react";
import "./styles.css";
import PropertiesCardList from "./PropertiesCardList";
function PropertiesList() {
  const [selectedTypes, setSelectedTypes] = useState([]);

  return (
    <div className="properties-container">
      <div className="filter-section">
        <form>
          <h4 className="propertySelect">Property Type</h4>
          <div>
            <input type="checkbox" />
            <label>House</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>Apartment</label>
          </div>
          <div class="draggable-container">
            <h4 className="amountOptions">Price</h4>
            <label for="dragInput">Price Range:</label>
            <input
              type="range"
              id="dragInput"
              class="draggable-input"
              draggable="true"
            />
          </div>
          <div className="houseOption">
            <h4 className="">Status:</h4>
            <div>
              <input type="checkbox" id="unfurnished" />
              <label htmlFor="unfurnished">Unfurnished</label>
            </div>
            <div>
              <input type="checkbox" id="semifurnished" />
              <label htmlFor="semifurnished">Semifurnished</label>
            </div>
            <div>
              <input type="checkbox" id="fullyfurnished" />
              <label htmlFor="fullyfurnished">Fullyfurnished</label>
            </div>
          </div>
        </form>
      </div>
      <div className="project-list">
        <div className="project-property-card">
          <PropertiesCardList
            imageSrc="/assets/images/room(6).jpg"
            name="Krishna Palace"
            amenities="AC,Wi-Fi,Power Backup,Washing Machine,Fridge,Water Supply"
            location="Patna,Bihar"
            phone="9928982121"
            rent="20k"
            brokerage="yes"
            security="20k"/>
        </div>
        <div className="project-property-card">
          <PropertiesCardList
            imageSrc="/assets/images/room(6).jpg"
            name="Suresh Kutir"
            amenities="AC,Wi-Fi,Power Backup,Washing Machine,Fridge"
            location="Patna,Bihar"
            phone="9928982121"
            rent="20k"
            brokerage="yes"
            security="20k"/>
        </div>
        <div className="project-property-card">
          <PropertiesCardList
            imageSrc="/assets/images/room(6).jpg"
            name="Suresh Kutir"
            amenities="AC,Wi-Fi,Power Backup,Washing Machine,Fridge"
            location="Patna,Bihar"
            phone="9928982121"
            rent="20k"
            brokerage="yes"
            security="20k"/>
        </div>
      </div>
    </div>
  );
}

export default PropertiesList;
