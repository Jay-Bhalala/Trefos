import React from "react";
import "../css-files/impactCard.css";
import foodBank from "./foodbank.svg";
import connectIcon from "./connectIcon.svg";

function impactCard(props) {
  return (
    <div className="large-container">
      <div>
        <div className="impact-text">
          <h1>Conencting the community</h1>
        </div>
        <div className="impact-text-card">
          <div>
            <img src={connectIcon} className="image" />
          </div>
          <div className="little-text">
            <p className="heading-text-container">Restaurants</p>
            <p>
              Restaurants can create a profile and update their food stocks when they have food avaliable to donate for all food banks on the platform to view.
            </p>
          </div>
        </div>
        <div className="impact-text-card">
          <div>
            <img src={connectIcon} className="image" />
          </div>
          <div className="little-text">
            <p className="heading-text-container">Food Banks</p>
            <p>
              Food banks don't need to sign up and can discover restaurants on the platform with just the touch of a button!
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={foodBank} className="image-hidden" />
      </div>
    </div>
  );
}

export default impactCard;
