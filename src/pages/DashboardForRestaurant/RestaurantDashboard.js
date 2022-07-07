import React, {useCallback} from "react";
import RestarauntFoodCard from "./restarauntFoodCard";
import img from "./lettuceTestImage.svg";
import {useDropzone} from 'react-dropzone';
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
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>

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

      <RestarauntFoodCard
        image={img}
        foodTitle="lettuce"
        days="3"
        quantity="25"
        old="3"
      />
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
     
    </div>
  );
}

export default RestaurantDashboard;
