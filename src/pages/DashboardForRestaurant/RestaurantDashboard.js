import React from "react";
import RestarauntFoodCard from "./restarauntFoodCard";
import RestaurantInfo from "../Restaraunt-Info/restaurantInfo.js";
import img from "./lettuceTestImage.svg";
import { useDropzone } from "react-dropzone";
import { Badge } from "react-bootstrap";
import "../css-files/RestaurantDashboard.css";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RestaurantDashboard(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <h2>{props.companyName}</h2>

      <div className="dashboard-layout">
        <div>
          <RestaurantInfo
            address="skdjghdhb"
            phoneNumber="098726345"
            email="hfehebv@ijfhvdfnjv.com"
            lat2="20.5937"
            lng2="78.9629"
          />
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
        <div>
          <h1>Avaiable Foods</h1>
          <div className="food-card-grid">
            <div>
              <RestarauntFoodCard
                image={img}
                foodTitle="lettuce"
                days="3"
                quantity="25"
                old="3"
              />
            </div>
            <div>
              <RestarauntFoodCard
                image={img}
                foodTitle="lettuce"
                days="3"
                quantity="25"
                old="3"
              />
            </div>
            <div>
              <RestarauntFoodCard
                image={img}
                foodTitle="lettuce"
                days="3"
                quantity="25"
                old="3"
              />
            </div>
            <div>
              <RestarauntFoodCard
                image={img}
                foodTitle="lettuce"
                days="3"
                quantity="25"
                old="3"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon icon={faPlusCircle} size="5x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDashboard;
