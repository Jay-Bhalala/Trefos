import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbTack, faPhone, faMailForward } from "@fortawesome/free-solid-svg-icons";
import StaticMap from "./StaticMap.js";


function RestaurantInfo(props) {
  return (
    <>
    <script src="https://kit.fontawesome.com/59be458d1a.js" crossorigin="anonymous"></script>
    <div >
        <Card style={{ width: '30rem' }}>
            {/* <Card.Img variant="top" src={Test} /> */}
            <StaticMap 
                lat1 = {props.lat2}
                lng1 = {props.lng2}
            />
            <Card.Body>
                <Card.Title>Contact Info</Card.Title>
                <Card.Text>
                    <FontAwesomeIcon icon={faThumbTack} />  Location: {props.address} 
                </Card.Text>
                <Card.Text>
                    <FontAwesomeIcon icon={faPhone} />  Phone Number: {props.phoneNumber} 
                </Card.Text>
                <Card.Text>
                    <FontAwesomeIcon icon={faMailForward} />  Email: {props.email} 
                </Card.Text>
                {/* <Button variant="primary"><FontAwesomeIcon icon={faMarker} /> Edit Info</Button> */}
            </Card.Body>
        </Card>
    </div>
    </>
  );
}

export default RestaurantInfo;