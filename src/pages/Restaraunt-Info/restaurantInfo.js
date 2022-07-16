import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbTack,
  faPhone,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import StaticMap from "../DashboardForRestaurant/StaticMap.js";
import Edit from "../DashboardForRestaurant/Edit.js";
import "../css-files/restaurantInfo.css";
import Popup from "../DashboardForRestaurant/Popup.js";
import EditRestForm from "./editRestFrom.js";

function RestaurantInfo(props) {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
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
              <div style={{ display: "flex" }}>
                <div>
                  <FontAwesomeIcon icon={faThumbTack} />
                </div>
                <div style={{ marginLeft: ".25rem" }}>Address:</div>
                <div style={{ marginLeft: ".55rem" }}>{props.address}</div>
              </div>
            </Card.Text>
            <Card.Text>
              <div style={{ display: "flex" }}>
                <div>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div style={{ marginLeft: ".25rem" }}>Phone Number:</div>
                <div style={{ marginLeft: ".55rem" }}>{props.phoneNumber}</div>
              </div>
            </Card.Text>
            <Card.Text>
              <div style={{ display: "flex" }}>
                <div>
                  <FontAwesomeIcon icon={faMailForward} />
                </div>
                <div style={{ marginLeft: ".25rem" }}>Email:</div>
                <div style={{ marginLeft: ".55rem" }}>{props.email}</div>
              </div>
            </Card.Text>
            {/* <Button variant="primary"><FontAwesomeIcon icon={faMarker} /> Edit Info</Button> */}
          </Card.Body>
          <div className="restaurant-info-button-container">
            <button
              className="restaurant-info-button"
              onClick={() => setOpenPopup(true)}
            >
              Edit Profile
            </button>
          </div>
        </Card>
        <Popup
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          title={"Edit Restaraunt Profile"}
        >
          <EditRestForm
            id={props.id}
            // onUpdateRest={() => {
            //   props.onEditRest();
            //   setOpenPopup(false);
            // }}
          />
        </Popup>
      </div>
    </>
  );
}

export default RestaurantInfo;
