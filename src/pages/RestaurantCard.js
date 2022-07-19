import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "../pages/css-files/restCard.css";

function RestaurantCard(props) {
  return (
    <Link
      to={`/discover/${props.restaurantName}`}
      style={{
        textDecoration: "none",
      }}
    >
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src={props.src1}
            alt="..."
            position="top"
            // style={{ height: "20rem", width: "100%" }}
            className="rest-card-image"
          />
          <MDBCardBody className="text-center">
            <MDBCardTitle>
              {/* <Link
                to={`/discover/${props.restaurantName}`}
                // style={{
                //   textDecoration: "none",
                //   color: "black",
                //   fontWeight: "bold",
                // }}
              >
                {props.restaurantName}
              </Link> */}
              <p
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {props.restaurantName}
              </p>
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </Link>
  );
}

export default RestaurantCard;
