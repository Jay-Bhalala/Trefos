import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarDefault from "./navbars/NavbarDefault.js";
import Home from "./pages//Home/Home.js";
import Contact from "./pages/Contact.js";
import AboutUs from "./pages/AboutUs.js";
import RestaurantDashboard from "./pages/DashboardForRestaurant/RestaurantDashboard.js";
import Discover from "./pages/Discover.js";
import Liked from "./pages/Liked/Liked.js";
import MapDisplay from "./pages/MapDisplay.js";
import Footer from "./Footer.js";
import Viewable from "./pages/Viewable";

import { listFoods, listRestaurants } from "./graphql/queries";
import { API } from "aws-amplify";

function App() {
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

      console.log(restaurantList);
      setRestarauntInfo(restaurantList);
    } catch (error) {
      console.log("error on fetching", error);
    }
  };

  return (
    <>
      <NavbarDefault />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/contactus" element={<Contact />} />
        <Route exact path="/discover" element={<Discover />} />
        <Route exact path="/liked" element={<Liked />} />
        {restarauntInfo.map((restaurant) => {
          return (
            <Route
              exact
              path={`/discover/${restaurant.name}`}
              element={
                <Viewable
                  companyName="Sample Restaraunt"
                  address={restaurant.address}
                  phone={restaurant.phone}
                  email={restaurant.email}
                />
              }
            />
          );
        })}
        <Route exact path="/map" element={<MapDisplay />} />
        <Route
          path="/restaurant"
          element={<RestaurantDashboard companyName="Example Company Name" />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
