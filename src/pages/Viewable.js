import React, { useState, useEffect } from "react";
import RestarauntFoodCard from "./DashboardForRestaurant/foodCardViewable";
import RestaurantInfo from "./Restaraunt-Info/viewableRestaurantInfo.js";
import img from "./DashboardForRestaurant/lettuceTestImage.svg";
import "./css-files/RestaurantDashboard.css";
import { listFoods } from "../graphql/queries.js";
import { API, graphqlOperation } from "aws-amplify";

function Viewable(props) {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  let filter = {
    restaurantID: {
      eq: props.id,
    },
  };

  const fetchFoods = async () => {
    try {
      const restaurantFoods = await API.graphql({
        query: listFoods,
        variables: { filter: filter },
        authMode: "AWS_IAM",
      });

      const restaurantFoodsList = restaurantFoods.data.listFoods.items;

      setFood(restaurantFoodsList);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="dashboard-layout">
      <div className="restaurant-info-box">
        <h2>{props.companyName.replace(/%20/g, " ")}</h2>
        <div style={{ width: "100%" }}>
          <RestaurantInfo
            location={props.address}
            number={props.phone}
            mail={props.email}
            lat2={props.l2}
            lng2={props.lg2}
          />
        </div>
      </div>
      <div className="food-card-grid-container">
        <h1>Avaiable Foods</h1>
        <div className="food-card-grid">
          {food.length === 0 ? (
            <div>No Avaiable Food At This Restaurant</div>
          ) : (
            food.map((foods) => {
              return (
                <div>
                  <RestarauntFoodCard
                    image={img}
                    foodTitle={foods.name}
                    days={foods.pickUp}
                    quantity={foods.pounds}
                    old={foods.daysOld}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Viewable;
