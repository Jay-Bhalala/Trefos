import React, { useState, useEffect } from "react";
import { MDBRow } from "mdb-react-ui-kit";
import RestaurantCard from "./RestaurantCard";
import { MDBCol } from "mdbreact";
import Slider from "@mui/material/Slider";
import "./css-files/Discover.css";
import { Link } from "react-router-dom";
import { API, graphqlOperation, input } from "aws-amplify";
import { listRestaurants } from "../graphql/queries";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import { searchRestaurants } from "../graphql/queries";

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
  }, []);

  const fetchRestaurants = async () => {
    try {
      const restaurantData = await API.graphql({
        query: listRestaurants,
        authMode: "AWS_IAM",
      });
      const restaurantList = restaurantData.data.listRestaurants.items;
      setRestarauntInfo(restaurantList);
      console.log(restaurantList);
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

  const fetchRestaurantsByAsc = async () => {
    try {
      const restarauntAscData = await API.graphql({
        query: searchRestaurants,
        variables: {
          sort: {
            direction: "asc",
            field: "pounds",
          },
        },
        authMode: "AWS_IAM",
      });
      const restaurantAscDataList =
        restarauntAscData.data.searchRestaurants.items;
      console.log(restaurantAscDataList);
      setRestarauntInfo(restaurantAscDataList);
    } catch (e) {
      console.log("error fetching asc", e);
    }
  };

  const fetchRestaurantsByDesc = async () => {
    try {
      const restarauntAscData = await API.graphql({
        query: searchRestaurants,
        variables: {
          sort: {
            direction: "desc",
            field: "pounds",
          },
        },
        authMode: "AWS_IAM",
      });
      const restaurantAscDataList =
        restarauntAscData.data.searchRestaurants.items;
      console.log(restaurantAscDataList);
      setRestarauntInfo(restaurantAscDataList);
    } catch (e) {
      console.log("error fetching desc", e);
    }
  };

  const handleSelect = (e) => {
    if (e == "fetchAsc") {
      fetchRestaurantsByAsc();
    }
    if (e == "fetchDesc") {
      fetchRestaurantsByDesc();
    }
    if (e == "default") {
      fetchRestaurants();
    }
  };

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        console.log("no Input");
      } else {
        const restaurantSearchData = await API.graphql({
          query: searchRestaurants,
          variables: {
            filter: {
              name: {
                matchPhrasePrefix: e.target.value.toString(),
              },
            },
          },
          authMode: "AWS_IAM",
        });
        const restaurantSearchDataList =
          restaurantSearchData.data.searchRestaurants.items;
        setRestarauntInfo(restaurantSearchDataList);
        setSearchValue("");
      }
    }
  };

  const [searchValue, setSearchValue] = useState("");

  return (
    <div style={{ paddingRight: ".75rem", paddingLeft: ".75rem" }}>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Discover Restaurants</h2>

        <div className="disover-buttons-outside-container">
          <Link to="/map" className="link-button">
            Map Of All Registered Restaurants
          </Link>
        </div>
        <div className="discover">
          <MDBCol md="6">
            <input
              onKeyDown={handleSearch}
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </MDBCol>
          {/* <div className="discover"> */}
          <DropdownButton
            align={{ lg: "end" }}
            title="Sort By:"
            id="dropdown-menu-align-responsive-1"
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="default">
              Newly Added (Default)
            </Dropdown.Item>
            <Dropdown.Item eventKey="fetchAsc">
              Ascending Weight of Food Available
            </Dropdown.Item>
            <Dropdown.Item eventKey="fetchDesc">
              Descending Weight of Food Available
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <MDBRow className="row-cols-1 row-cols-xl-4 row-cols-md-2 row-cols-lg-2  g-4">
          {/* <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/sample-restaurant-info"
          /> */}
          {restarauntInfo.map((restaurant) => {
            return (
              <RestaurantCard
                restaurantName={stringUrl(restaurant.name)}
                src1={restaurant.image}
              />
            );
          })}
        </MDBRow>
      </div>
    </div>
  );
}

export default Discover;
