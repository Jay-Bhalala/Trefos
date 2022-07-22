import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarDefault from "./navbars/NavbarDefault.js";
import Home from "./pages//Home/Home.js";
import Contact from "./pages/Contact.js";
import AboutUs from "./pages/AboutUs.js";
import RestaurantDashboard from "./pages/DashboardForRestaurant/RestaurantDashboard.js";
import Discover from "./pages/Discover.js";
import MapDisplay from "./pages/MapDisplay.js";
import Footer from "./Footer.js";
import Viewable from "./pages/Viewable";
import Volunteer from "./pages/Volunteer";

import { listFoods, listRestaurants } from "./graphql/queries";
import { API } from "aws-amplify";

function App() {
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

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <NavbarDefault />
              <Home />
              <Footer />
            </div>
          }
        />
        <Route
          exact
          path="/aboutus"
          element={
            <div>
              <NavbarDefault />
              <AboutUs />
              <Footer />
            </div>
          }
        />
        <Route
          exact
          path="/contactus"
          element={
            <div>
              <NavbarDefault />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route
          exact
          path="/volunteer"
          element={
            <div>
              <NavbarDefault />
              <Volunteer />
              <Footer />
            </div>
          }
        />
        <Route
          exact
          path="/discover"
          element={
            <div>
              <NavbarDefault />
              <Discover />
              <Footer />
            </div>
          }
        />
        {restarauntInfo.map((restaurant) => {
          return (
            <Route
              exact
              path={`/discover/${restaurant.name}`}
              element={
                <div>
                  <NavbarDefault />
                  <Viewable
                    companyName={restaurant.name}
                    address={restaurant.address}
                    phone={restaurant.phone}
                    email={restaurant.email}
                    food={restaurant.Foods}
                    id={restaurant.id}
                    l2={restaurant.latitude}
                    lg2={restaurant.longitude}
                  />
                  <Footer />
                </div>
              }
            />
          );
        })}
        <Route
          exact
          path="/map"
          element={
            <div>
              <NavbarDefault /> <MapDisplay /> <Footer />
            </div>
          }
        />
        <Route
          path="/restaurant"
          element={<RestaurantDashboard companyName="Example Company Name" />}
        />
      </Routes>
    </>
  );
}

export default App;
