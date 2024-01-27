import React, { useState } from "react";

const DynamicStar = ({ totalStars = 5, initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);
  let isReadOnly=true

  const handleStarClick = (selectedRating) => {
    if (isReadOnly) {
      return; 
    }
    setRating(selectedRating);
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index + 1)}
          style={{
            cursor: "pointer",
            color: index < rating ? "gold" : "gray",
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default DynamicStar;
