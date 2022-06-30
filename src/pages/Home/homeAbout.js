import React from "react";
import AboutCard from "./aboutCard.js";
import foodIcon from "./food.svg";
import nonProfitIcon from "./nonprofit.svg";
import "../css-files/homeAbout.css";

function homeAbout(props) {
  return (
    <div className="home-about-container">
      <div className="section-container">What we Do</div>
      <div className="grid-container">
        <div className="grid-content">
          <AboutCard
            image={foodIcon}
            heading="Food"
            description="Engrossed listening. Park gate sell they west hard for the."
          />
        </div>
        <AboutCard
          image={nonProfitIcon}
          heading="Non Profit"
          description="Engrossed listening. Park gate sell they west hard for the."
        />
        <AboutCard
          image={foodIcon}
          heading="Food"
          description="Engrossed listening. Park gate sell they west hard for the."
        />
        <AboutCard
          image={foodIcon}
          heading="Food"
          description="Engrossed listening. Park gate sell they west hard for the."
        />
      </div>
    </div>
  );
}

export default homeAbout;
