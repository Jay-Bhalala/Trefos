import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
} from "mdb-react-ui-kit";
import Like from "./Liked/LikeButton.js";
import { Link } from "react-router-dom";

function RestaurantCard(props) {
  return (
    <>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage src={props.src1} alt="..." position="top" />
          <MDBCardBody className="text-center">
            <MDBCardTitle>
              <Link to={`/discover/${props.restaurantName}`}>
                {props.restaurantName}
              </Link>
            </MDBCardTitle>
            <Like />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
}

export default RestaurantCard;
