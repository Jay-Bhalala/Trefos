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

function RestaurantInfo(props) {
  const [fullName, setFullName] = useState("Joe Abraham");
  const [showInputEle, setShowInputEle] = useState(false);

  const [fullNumber, setFullNumber] = useState("123456789");
  const [showInputEle2, setShowInputEle2] = useState(false);

  const [fullEmail, setFullEmail] = useState("jayisafag@gmail.com");
  const [showInputEle3, setShowInputEle3] = useState(false);

  return (
    <>
      <script
        src="https://kit.fontawesome.com/59be458d1a.js"
        crossorigin="anonymous"
      ></script>
      <div>
        <Card style={{ width: "30rem", height: "auto" }}>
          {/* <Card.Img variant="top" src={Test} /> */}
          <StaticMap lat1={props.lat2} lng1={props.lng2} />
          <Card.Body>
            <Card.Title>Contact Info</Card.Title>
            <Card.Text>
              <FontAwesomeIcon icon={faThumbTack} /> Address:
              <Edit
                value={fullName}
                handleChange={(e) => setFullName(e.target.value)}
                handleDoubleClick={() => setShowInputEle(true)}
                handleBlur={() => setShowInputEle(false)}
                showInputEle={showInputEle}
              />
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faPhone} /> Phone Number:
              <Edit
                value={fullNumber}
                handleChange={(e) => setFullNumber(e.target.value)}
                handleDoubleClick={() => setShowInputEle2(true)}
                handleBlur={() => setShowInputEle2(false)}
                showInputEle={showInputEle2}
              />
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faMailForward} /> Email:
              <Edit
                value={fullEmail}
                handleChange={(e) => setFullEmail(e.target.value)}
                handleDoubleClick={() => setShowInputEle3(true)}
                handleBlur={() => setShowInputEle3(false)}
                showInputEle={showInputEle3}
              />
            </Card.Text>
            {/* <Button variant="primary"><FontAwesomeIcon icon={faMarker} /> Edit Info</Button> */}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default RestaurantInfo;
