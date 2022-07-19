import React from "react";
import AboutCard from "./aboutCard.js";
import foodIcon from "./food.svg";
import nonProfitIcon from "./nonprofit.svg";
import "../css-files/homeAbout.css";
import glass from "./glass.svg";
import network from "./network.svg";

function homeAbout(props) {
  return (
    <div className="home-about-container">
      <div>
        <p className="h2-home-about">What We Do</p>
      </div>
      <div className="p-home-abput-container">
        <p className="p-home-about">
          The Trefos team connects restaurants to food banks to help save food
          waste by helping the hungry. Our software provides both restaurants and food
          banks with the resources necessary to bridge the hunger gap.
        </p>
      </div>
    </div>
  );
}

export default homeAbout;
