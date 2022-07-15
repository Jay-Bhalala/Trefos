import React from "react";
import { MDBRow } from "mdb-react-ui-kit";
import RestaurantCard from "../RestaurantCard.js";

function Liked(props) {
  return (
    <div
    style={{
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: '2rem',
    }}
  >
      <h2>Restaurants You Have Liked</h2>
      <div style={{ padding: "2rem" }}>
        <MDBRow className="row-cols-1 row-cols-md-4 g-4">
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/foodbank/liked/sample-restaurant-info"
          />
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/foodbank/liked/sample-restaurant-info"
          />
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/foodbank/liked/sample-restaurant-info"
          />
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/foodbank/liked/sample-restaurant-info"
          />
          <RestaurantCard
            restaurantName="Sample Restaurant"
            src1="https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg"
            href1="/foodbank/liked/sample-restaurant-info"
          />
        </MDBRow>
      </div>
    </div>
  );
}

export default Liked;
