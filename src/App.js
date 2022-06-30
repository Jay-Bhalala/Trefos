import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarNoLogIn from "./navbars/NavbarNoLogIn.js";
import NavbarFoodBank from "./navbars/NavbarFoodBank.js";
import NavbarRestaurant from "./navbars/NavbarRestaurant.js";

import Home from "./pages//Home/Home.js";
import LoginSignupNonProfit from "./pages/LoginSignupNonProfit.js";
import LoginSignupRestaurant from "./pages/LoginSignupRestaurant.js";
import Contact from "./pages/Contact.js";
import AboutUs from "./pages/AboutUs.js";
import RestaurantDashboard from "./pages/RestaurantDashboard.js";
import Discover from "./pages/Discover.js";
import Liked from "./pages/Liked.js";
import Map from "./pages/Map.js";
import Footer from "./Footer.js";

function App() {
  return (
    <>
      <Routes>

        <Route exact path="/nologin" element={<NavbarNoLogIn />} />
        <Route exact path="/nologin/home" element={<><NavbarNoLogIn /><Home/></>} />
        <Route exact path="/nologin/loginsignupfoodbank" element={<><NavbarNoLogIn /><LoginSignupNonProfit /></>} />
        <Route exact path="/nologin/loginsignuprestaurant" element={<><NavbarNoLogIn /><LoginSignupRestaurant /></>} />
        <Route exact path="/nologin/aboutus" element={<><NavbarNoLogIn /><AboutUs /></>} />
        <Route exact path="/nologin/contactus" element={<><NavbarNoLogIn /><Contact /></>} />

        <Route path="/foodbank" element={<NavbarFoodBank />} />
        <Route exact path="/foodbank/home" element={<><NavbarFoodBank /><Home/></>} />
        <Route exact path="/foodbank/discover" element={<><NavbarFoodBank /><Discover /></>} />
        <Route exact path="/foodbank/liked" element={<><NavbarFoodBank /><Liked /></>} />
        <Route exact path="/foodbank/map" element={<><NavbarFoodBank /><Map /></>} />

        <Route path="/restaurant" element={<><NavbarRestaurant /><RestaurantDashboard/></>} />
        <Route exact path="/restaurant/home" element={<><NavbarRestaurant /><Home/></>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;