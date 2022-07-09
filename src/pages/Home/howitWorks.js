import React from "react";
import "../css-files/howitWorks.css";
import notiIcon from "./noti.svg";
import deliveryIcon from "./delivery.svg";
import distributeIcon from "./distribution.svg";
import HowitWorksCard from "./howItWorksCard";

function howitWorks(props) {
  return (
    <div className="how-work-container">
      <div className="heading-text">How Trefo Works</div>
      <div className="work-container">
        <HowitWorksCard
          number="1"
          image={notiIcon}
          heading="Notification"
          description="A restarunt has excesses food from service and a local food bank is then notified"
        />
        <hr className="h-2" />
        <HowitWorksCard
          number="2"
          image={deliveryIcon}
          heading="Delivery"
          description="The excess food from the restarunt is delivered to and stored at a local food bank"
        />
        <hr className="h-2" />
        <HowitWorksCard
          number="3"
          image={distributeIcon}
          heading="Distrubtion"
          description="The food bank can now provide more food to those in need with our resources"
        />
        <hr className="h-2" />
      </div>
    </div>
  );
}

export default howitWorks;
