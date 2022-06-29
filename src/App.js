import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarNoLogIn from "./navbars/NavbarNoLogIn.js";
import NavbarFoodBank from "./navbars/NavbarFoodBank.js";
import NavbarRestaurant from "./navbars/NavbarRestaurant.js";

import Home from "./pages/Home.js";
import LoginSignupNonProfit from "./pages/LoginSignupNonProfit.js";
import LoginSignupRestaurant from "./pages/LoginSignupRestaurant.js";
import Contact from "./pages/Contact.js";
import AboutUs from "./pages/AboutUs.js";

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

        <Route path="/nonprofit" element={<NavbarFoodBank />} />
        <Route exact path="/nologin/home" element={<><NavbarFoodBank /><Home/></>} />
        <Route exact path="/nologin/loginsignupfoodbank" element={<><NavbarFoodBank /><LoginSignupNonProfit /></>} />
        <Route exact path="/nologin/loginsignuprestaurant" element={<><NavbarFoodBank /><LoginSignupRestaurant /></>} />
        <Route exact path="/nologin/aboutus" element={<><NavbarFoodBank /><AboutUs /></>} />
        <Route exact path="/nologin/contactus" element={<><NavbarFoodBank /><Contact /></>} />

        <Route path="/restaurant" element={<NavbarRestaurant />} />
        <Route exact path="/nologin/home" element={<><NavbarRestaurant /><Home/></>} />
        <Route exact path="/nologin/loginsignupfoodbank" element={<><NavbarRestaurant /><LoginSignupNonProfit /></>} />
        <Route exact path="/nologin/loginsignuprestaurant" element={<><NavbarRestaurant /><LoginSignupRestaurant /></>} />
        <Route exact path="/nologin/aboutus" element={<><NavbarRestaurant /><AboutUs /></>} />
        <Route exact path="/nologin/contactus" element={<><NavbarRestaurant /><Contact /></>} />

      </Routes>
    </>
  );
}

export default App;