import React from "react";
import "../css-files/impactCard.css";
import foodBank from "./foodbank.svg";
import connectIcon from "./connectIcon.svg";

function impactCard(props) {
  return (
    <div className="large-container">
      <div className="connecting-text-container">
        <div>
          <p style={{ fontSize: "4rem", fontWeight: "bold" }}>
            Connecting The Community
          </p>
        </div>
        <div className="impact-text-container">
          <div className="restaurant-text-container">
            <h1>Restaurants</h1>
            <p>
              Restaurants can create a profile and update their food stocks when
              they have food avaliable to donate for all food banks on the
              platform to view
            </p>
          </div>
        </div>
        <div>
          <img src={connectIcon} />
        </div>
        <div className="impact-text-container">
          <div className="restaurant-text-container">
            <h1>Food Banks</h1>
            <p>
              Food banks don't need to sign up and can discover restaurants on
              the platform with just the touch of a button
            </p>
          </div>
        </div>
      </div>
      <div className="help-image-container">
        <img src={foodBank} className="image-hidden" />
      </div>
    </div>
  );
}

export default impactCard;
