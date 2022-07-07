import React, {useCallback} from "react";
import RestarauntFoodCard from "../Restaraunt-Info/restarauntFoodCard";
import RestaurantInfo from "../Restaraunt-Info/restaurantInfo.js";
import img from "../Restaraunt-Info/lettuceTestImage.svg";
import {useDropzone} from 'react-dropzone';
import { Badge } from "react-bootstrap";

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
      <RestaurantInfo
        address="skdjghdhb"
        phoneNumber="098726345"
        email="hfehebv@ijfhvdfnjv.com"
        lat2="20.5937"
        lng2="78.9629"
      />
      <RestarauntFoodCard
        image={img}
        foodTitle="lettuce"
        days="3"
        quantity="25"
        old="3"
      />
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
