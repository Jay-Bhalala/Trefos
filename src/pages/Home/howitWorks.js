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
          heading="Find a Restarunt"
          description="First find a restarunt to conenct with"
        />
        <hr className="h-2" />
        <HowitWorksCard
          number="2"
          image={searchIcon}
          heading="Find a Restarunt"
          description="First find a restarunt to conenct with"
        />
        <hr className="h-2" />
        <HowitWorksCard
          number="3"
          image={searchIcon}
          heading="Find a Restarunt"
          description="First find a restarunt to conenct with"
        />
        <hr className="h-2" />
      </div>
    </div>
  );
}

export default howitWorks;
