import React from "react";
import icon from "./hhicon.svg";
import "../css-files/HomeHero.css";
import NavbarNoLogin from "../../navbars/NavbarNoLogIn";

function HomeHero(props) {
  return (
    <div>
      <div className="container">
        <div className="text-container">
          <div>
            <h1 className="large-text">Connecting resources to need</h1>
          </div>
          <div>
            <p className="description-text">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
          </div>
          <div>
            <button className="button">Learn More!</button>
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
