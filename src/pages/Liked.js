import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import RestaurantCard from "./RestaurantCard.js";

function Liked(props) {
  return (
    <>
    <h2>Restaurants You Have Liked</h2>
    <div className="liked container">
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
        <RestaurantCard
          restaurantName="Sample Restaurant"
          src1='https://alderuccio.com.au/wp-content/uploads/2017/06/crust-gourmet-pizza-logo-jpg.jpg'
          href1="/foodbank/liked/sample-restaurant-info"
        />
      </MDBRow>
    </div>
    </>
  );
}

export default Liked;