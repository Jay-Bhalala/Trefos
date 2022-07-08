import React from "react";
import "../css-files/howitWorks.css";
import searchIcon from "./search.svg";
import HowitWorksCard from "./howItWorksCard";

function howitWorks(props) {
  return (
    <div className="how-work-container">
      <div className="heading-text">How Cratos Works</div>
      <div className="work-container">
        <HowitWorksCard
          number="1"
          image={searchIcon}
          heading="Notification"
          description="A restarunt has excesses food from service and a local food bank is then notified"
        />
        <hr className="h-2" />
        <HowitWorksCard
          number="2"
          image={searchIcon}
          heading="Delivery"
          description="The excess food from the restarunt is delivered to and stored at a local food bank"
        />
        <hr className="h-2" />
        <HowitWorksCard
          number="3"
          image={searchIcon}
          heading="Distrubtion"
          description="The food bank can now provide more food to those in need"
        />
        <hr className="h-2" />
      </div>
    </div>
  );
}

export default howitWorks;
