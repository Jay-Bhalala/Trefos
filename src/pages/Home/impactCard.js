import React from "react";
import "../css-files/impactCard.css";
import foodBank from "./foodbank.svg";
import connectIcon from "./connectIcon.svg";

function impactCard(props) {
  return (
    <div className="large-container">
      <div>
        <div className="impact-text">
          <h1>Impacting the community</h1>
        </div>
        <div className="impact-text-card">
          <div>
            <img src={connectIcon} className="image" />
          </div>
          <div className="little-text">
            <p className="heading-text-container">Connect</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
        <div className="impact-text-card">
          <div>
            <img src={connectIcon} className="image" />
          </div>
          <div className="little-text">
            <p className="heading-text-container">Connect</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
        </div>
        <div className="impact-text-card">
          <div>
            <img src={connectIcon} className="image" />
          </div>
          <div className="little-text">
            <p className="heading-text-container">Connect</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
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
