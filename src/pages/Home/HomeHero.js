import React from "react";
import icon from "./hhicon.svg";
import "../css-files/HomeHero.css";

function HomeHero(props) {
  return (
    <div>
      <div className="container">
        <div className="text-container">
          <div>
            <h1 className="large-text">Providing Food To The Hungry</h1>
          </div>
          <div>
            <p className="description-text">
              Trefos aims to reduce the amount of food waste in our
              community by connecting local restaurants to nearby food banks
            </p>
          </div>
        </div>
        <div>
          <img src={icon} className="image" />
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
