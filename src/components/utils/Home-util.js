import React from "react";

const HomeHighlight = ({ parking, ac, yearBuilt, landArea, listed, hoa }) => {
  return (
    <>

      <div className="home-highlight">
        <div className="column-home">
          <ul>
            <li>Parking: {parking}</li>
            <li>A/C: {ac}</li>
            <li>Year Built: {yearBuilt}</li>
          </ul>
        </div>
        <div className="column-home">
          <ul>
            <li>HOA: {hoa}</li>
            <li>Land Area: {landArea}</li>
            <li>Listed: {listed}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeHighlight;
