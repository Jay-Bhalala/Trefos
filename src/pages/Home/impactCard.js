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
              Restaurants only have to create a profile and 
              update when they have food avaliable to donate.
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
              Food banks just have to sign into the 
              website, select which restaurant and product 
              preferences they would like, and can choose to 
              pick up or have to the food deliver to them.

            </p>
          </div>
        </div>
        <div className="impact-text-card">
          <div>
            <img src={connectIcon} className="image" />
          </div>
          <div className="little-text">
            <p className="heading-text-container">Volunteers</p>
            <p>
              Volunteers can aid the in the deliver of food,
              and assist local food bank.
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
