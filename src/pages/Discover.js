import React, { useState } from "react";
import { MDBRow } from "mdb-react-ui-kit";
import RestaurantCard from "./RestaurantCard";
import { MDBCol } from "mdbreact";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./css-files/Discover.css";
import { Link } from "react-router-dom";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function Discover(props) {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Discover Restaurants</h2>
        <MDBCol md="6">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </MDBCol>
        <div className="slider-box">
          <h1 style={{ fontSize: "1.25rem", width: "100%" }}>
            Distance in Miles:{" "}
          </h1>
          <Slider
            className="slider-text-style"
            aria-label="Always visible"
            defaultValue={80}
            getAriaValueText={valuetext}
            step={5}
            marks={marks}
            valueLabelDisplay="on"
          />
        </div>
        <div className="slider-box-2">
          <h1 style={{ fontSize: "1.25rem", width: "100%" }}>
            Weight of Food Available in Pounds:
          </h1>
          <Slider
            className="slider-text-style"
            aria-label="Always visible"
            defaultValue={80}
            getAriaValueText={valuetext}
            step={5}
            marks={marks}
            valueLabelDisplay="on"
          />
        </div>
      </div>
      <div className="disover-buttons-outside-container">
        <div className="discover-buttons-container">
          <div>
            <Link to="/liked" className="link-button">
              Liked
            </Link>
          </div>
          <div>
            <Link to="/map" className="link-button">
              Map
            </Link>
          </div>
        </div>
      </div>
      <div style={{ padding: "2rem" }}>
        <MDBRow className="row-cols-1 row-cols-md-4 g-4">
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/sample-restaurant-info"
          />
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/sample-restaurant-info"
          />
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/sample-restaurant-info"
          />
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/sample-restaurant-info"
          />
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/sample-restaurant-info"
          />
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/sample-restaurant-info"
          />
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/sample-restaurant-info"
          />
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/sample-restaurant-info"
          />
        </MDBRow>
      </div>
    </>
  );
}

export default Discover;
