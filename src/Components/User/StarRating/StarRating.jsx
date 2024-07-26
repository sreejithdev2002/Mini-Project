import React from "react";
import "./StarRating.css";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
        &#9733;
      </span>
    );
  }

  return <div className="inline-flex">{stars}</div>;
};

export default StarRating;