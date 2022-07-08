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
            heading="Discover"
            description="The Trefo team first looks for potiential restaurants and their quality of food to decided if it can be donated"
          />
        </div>
        <AboutCard
          image={nonProfitIcon}
          heading="Connects"
          description="The Trefo team connect restaurants to local food banks in the area that help serve the community."
        />
        <AboutCard
          image={foodIcon}
          heading="Deliver"
          description="The Trefo team helps deliver the food from the restaurants to the food banks."
        />
        <AboutCard
          image={foodIcon}
          heading="Non Profit"
          description="Trefo is a non profit and every donation will be given to a local food bank in the area."
        />
      </div>
    </div>
  );
}

export default homeAbout;
