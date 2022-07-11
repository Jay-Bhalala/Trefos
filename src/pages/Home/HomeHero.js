import React from "react";
import icon from "./hhicon.svg";
import "../css-files/HomeHero.css";

function HomeHero(props) {
  return (
    <div>
      <div className="container">
        <div className="text-container">
          <div>
            <h1 className="large-text">Providing resources to those in need</h1>
          </div>
          <div>
            <p className="description-text">
              Trefo aims to reduce the amount of food being wasted in our
              community by connecting local restaurants to nearby food banks.
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
