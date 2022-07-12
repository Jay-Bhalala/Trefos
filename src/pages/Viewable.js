import React, { useEffect } from "react";
import RestarauntFoodCard from "./DashboardForRestaurant/restarauntFoodCard";
import RestaurantInfo from "./Restaraunt-Info/viewableRestaurantInfo.js";
import img from "./DashboardForRestaurant/lettuceTestImage.svg";
import "./css-files/RestaurantDashboard.css";
import { listFoods } from "../graphql/queries.js";
import { API } from "aws-amplify";

function Viewable(props) {
  return (
    <div>
      <h2>{props.companyName}</h2>

      <div className="dashboard-layout">
        <div>
          <RestaurantInfo
            location="skdjghdhb"
            number="098726345"
            mail="hfehebv@ijfhvdfnjv.com"
            lat2="20.5937"
            lng2="78.9629"
          />
        </div>
        <div>
          <h1>Avaiable Foods</h1>
          <div className="food-card-grid">
            <div>
              <RestarauntFoodCard
                image={img}
                foodTitle="lettuce"
                days="3"
                quantity="25"
                old="3"
              />
            </div>
            <div>
              <RestarauntFoodCard
                image={img}
                foodTitle="lettuce"
                days="3"
                quantity="25"
                old="3"
              />
            </div>
            <div>
              <RestarauntFoodCard
                image={img}
                foodTitle="lettuce"
                days="3"
                quantity="25"
                old="3"
              />
            </div>
            <div>
              <RestarauntFoodCard
                image={img}
                foodTitle="lettuce"
                days="3"
                quantity="25"
                old="3"
              />
            </div>
            <div>
              <RestarauntFoodCard
                image={img}
                foodTitle="lettuce"
                days="3"
                quantity="25"
                old="3"
              />
            </div>
            <div>
              <RestarauntFoodCard
                image={img}
                foodTitle="lettuce"
                days="3"
                quantity="25"
                old="3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewable;
