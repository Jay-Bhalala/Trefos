import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarDefault from "./navbars/NavbarDefault.js";

import Home from "./pages//Home/Home.js";
import LoginSignupNonProfit from "./pages/LoginSignupNonProfit.js";
import LoginSignupRestaurant from "./pages/LoginSignupRestaurant.js";
import Contact from "./pages/Contact.js";
import AboutUs from "./pages/AboutUs.js";
import RestaurantDashboard from "./pages/DashboardForRestaurant/RestaurantDashboard.js";
import Discover from "./pages/Discover.js";
import Liked from "./pages/Liked/Liked.js";
import MapDisplay from "./pages/MapDisplay.js";
import Footer from "./Footer.js";
import Viewable from "./pages/Viewable";

function App() {

  return (
    <>
      <NavbarDefault />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/contactus" element={<Contact />} />
        <Route exact path="/discover" element={<Discover />} />
        <Route exact path="/liked" element={<Liked />} />
        <Route exact path="/sample-restaurant-info" element={<Viewable companyName="Sample Restaurant" />} />
        <Route exact path="/map" element={<MapDisplay />} />
        <Route path="/restaurant" element={<RestaurantDashboard companyName="Example Company Name"/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;