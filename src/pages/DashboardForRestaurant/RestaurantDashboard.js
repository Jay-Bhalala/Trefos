import React from "react";
import RestarauntFoodCard from "../Restaraunt-Info/restarauntFoodCard";
import RestaurantInfo from "../Restaraunt-Info/restaurantInfo.js";
import img from "../Restaraunt-Info/lettuceTestImage.svg";

function RestaurantDashboard(props) {
  return (
    <div>
      <h2>{props.companyName}</h2>
      <RestaurantInfo
        address="skdjghdhb"
        phoneNumber="098726345"
        email="hfehebv@ijfhvdfnjv.com"
        lat2="20.5937"
        lng2="78.9629"
      />
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
