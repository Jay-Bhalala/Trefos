import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarNoLogin from "./navbars/NavbarNoLogIn.js";
import NavbarFoodBank from "./navbars/NavbarFoodBank.js";
import NavbarRestaurant from "./navbars/NavbarRestaurant.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/nologin" element={<NavbarNoLogin />} />
        <Route path="/nonprofit" element={<NavbarFoodBank />} />
        <Route path="/restaurant" element={<NavbarRestaurant />} />
      </Routes>
    </>
  );
}

export default App;
