import React from "react";
import "../css-files/howitWorksCard.css";
import Card from "./aboutCard.js";
import foodIcon from "./food.svg";

function howitWorksCard(props) {
  return (
    <div className="how-it-works-container">
      <div className="circle">
        <div className="content">{props.number}</div>
      </div>
      <div>
        <div className="works-content-container">
          <div>
            <img src={props.image} className="image" />
          </div>
          <div>
            <p>{props.heading}</p>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>{props.description}</p>
          </div>
        </div>
        <hr className="h" />
      </div>
    </div>
  );
}

export default howitWorksCard;
