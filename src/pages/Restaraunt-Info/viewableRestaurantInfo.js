import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbTack,
  faPhone,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import StaticMap from "../DashboardForRestaurant/StaticMap.js";

function RestaurantInfo(props) {
  return (
    <div>
      <script
        src="https://kit.fontawesome.com/59be458d1a.js"
        crossorigin="anonymous"
      ></script>
      <div>
        <Card style={{ width: "100%", height: "auto" }}>
          {/* <Card.Img variant="top" src={Test} /> */}
          <StaticMap lat1={props.lat2} lng1={props.lng2} />
          <Card.Body>
            <Card.Title>Contact Info</Card.Title>
            <Card.Text>
              <FontAwesomeIcon icon={faThumbTack} /> Address: {props.location}
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faPhone} /> Phone Number: {props.number}
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faMailForward} /> Email: {props.mail}
            </Card.Text>
            {/* <Button variant="primary"><FontAwesomeIcon icon={faMarker} /> Edit Info</Button> */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default RestaurantInfo;
