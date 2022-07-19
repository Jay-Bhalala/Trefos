import React from "react";
import "../css-files/howitWorks.css";
import notiIcon from "./noti.svg";
import deliveryIcon from "./delivery.svg";
import distributeIcon from "./distribution.svg";
import HowitWorksCard from "./howItWorksCard";

function howitWorks(props) {
  return (
    <div className="how-work-container">
      <div className="heading-text">How Trefos Works</div>
      <div className="work-container">
        <HowitWorksCard
          number="1"
          image={notiIcon}
          heading=""
          description="Be informed when a restaurant near your food bank has a excess of food"
        />
        <hr className="h-2" />
        <HowitWorksCard
          number="2"
          image={deliveryIcon}
          heading=""
          description="Get the neccesary information from our database of contact information to get in touch with the restaurant to pick up the food"
        />
        <hr className="h-2" />
        <HowitWorksCard
          number="3"
          image={distributeIcon}
          heading=""
          description="Repeat the process again to continously keep your food bank supplied and reduce food waste in your community"
        />
        <hr className="h-2" />
      </div>
    </div>
  );
}

export default howitWorks;
