<<<<<<< Updated upstream
import React, {useCallback} from "react";
import RestarauntFoodCard from "./restarauntFoodCard";
import img from "./lettuceTestImage.svg";
import {useDropzone} from 'react-dropzone';
=======
import React, { useCallback, useState } from "react";
import RestarauntFoodCard from "../Restaraunt-Info/restarauntFoodCard";
import RestaurantInfo from "../Restaraunt-Info/restaurantInfo.js";
import img from "../Restaraunt-Info/lettuceTestImage.svg";
import { useDropzone } from "react-dropzone";
>>>>>>> Stashed changes
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import {
  faThumbTack,
  faPhone,
  faMailForward,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import StaticMap from "./StaticMap.js";

function RestaurantDashboard(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
<<<<<<< Updated upstream

      <h2>{props.companyName}</h2>

      {/* RestaurantInfo */}
      <>
      <script
        src="https://kit.fontawesome.com/59be458d1a.js"
        crossorigin="anonymous"
      ></script>
      <div>
        <Card style={{ width: "30rem", height: "auto" }}>
          <StaticMap lat1={props.lat2} lng1={props.lng2} />
          <Card.Body>
            <Card.Title>Contact Info</Card.Title>
            <h1 style={{fontSize: '12px'}}>**Double Click Any Of The 3 Text Fields To Edit Your Information</h1>
            <Card.Text>
              <FontAwesomeIcon icon={faThumbTack} /> Location: <Editing/>
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faPhone} /> Phone Number: <Editing/>
            </Card.Text>
            <Card.Text>
              <FontAwesomeIcon icon={faMailForward} /> Email: <Editing/>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      </>

=======
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>{props.companyName}</h2>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <Badge bg="secondary">
            Drag 'n' drop your restaurant's profile picture here, or click to
            select a file
          </Badge>
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </div>
      <RestaurantInfo
        address="skdjghdhb"
        phoneNumber="098726345"
        email="hfehebv@ijfhvdfnjv.com"
        lat2="20.5937"
        lng2="78.9629"
      />
>>>>>>> Stashed changes
      <RestarauntFoodCard
        image={img}
        foodTitle="lettuce"
        days="3"
        quantity="25"
        old="3"
      />
<<<<<<< Updated upstream
      <FontAwesomeIcon icon={ faPlusCircle } />

      {/* Drag/Drop Files */}
      <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <Badge bg="secondary">Drag 'n' drop your restaurant's profile picture here, or click to select a file</Badge>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
     </section>
     
=======
>>>>>>> Stashed changes
    </div>
  );
}

export default RestaurantDashboard;
