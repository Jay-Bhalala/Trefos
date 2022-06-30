import React from "react";
import "../css-files/aboutCard.css";

function aboutCard(props) {
  return (
    <div className="about-card-container">
      <div className="image-container">
        <img src={props.image} className="image" />
      </div>
      <div>
        <p className="heading-container">{props.heading}</p>
      </div>
      <div className="about-card-description-container">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default aboutCard;
