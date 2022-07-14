import React, { useState, useEffect } from "react";
import { MDBRow } from "mdb-react-ui-kit";
import RestaurantCard from "./RestaurantCard";
import { MDBCol } from "mdbreact";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./css-files/Discover.css";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { listRestaurants } from "../graphql/queries";

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

function valueLabelFormat(value) {
  const units = ["", "", "", ""];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value) {
  return 2 ** value;
}

function Discover(props) {
  const [restarauntInfo, setRestarauntInfo] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, [restarauntInfo]);

  const fetchRestaurants = async () => {
    try {
      const restaurantData = await API.graphql({
        query: listRestaurants,
        authMode: "AWS_IAM",
      });
      const restaurantList = restaurantData.data.listRestaurants.items;
      setRestarauntInfo(restaurantList);
    } catch (error) {
      console.log("error on fetching", error);
    }
  };

  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  function stringUrl(string) {
    if (string.includes("%20")) {
      return string.replaceAll("%20", " ");
    } else {
      return string;
    }
  }

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
            valueLabelFormat={valueLabelFormat}
            onChange={handleChange}
          />
        </div>

        <div>
          <button className="filter-button" onClick={console.log(value)}>
            {" "}
            Search{" "}
          </button>
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
          {/* <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/sample-restaurant-info"
          /> */}
          {restarauntInfo.map((restaurant) => {
            return (
              <RestaurantCard
                restaurantName={stringUrl(restaurant.name)}
                src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
              />
            );
          })}
        </MDBRow>
      </div>
    </>
  );
}

export default Discover;
