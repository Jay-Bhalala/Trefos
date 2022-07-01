import React from "react";
import RestarauntFoodCard from "./Restaraunt-Info/restarauntFoodCard";
import img from "./Restaraunt-Info/lettuceTestImage.svg";

function RestaurantDashboard(props) {
  return (
    <div>
      <h2>RestaurantDashboard</h2>
      <RestarauntFoodCard
        image={img}
        foodTitle="lettuce"
        days="3"
        quantity="25"
        old="3"
      />
    </div>
  );
}

export default RestaurantDashboard;
