import React, { useState } from "react";
import RestarauntFoodCard from "./restarauntFoodCard";
import RestaurantInfo from "../Restaraunt-Info/restaurantInfo.js";
import img from "./lettuceTestImage.svg";
import { useDropzone } from "react-dropzone";
import "../css-files/RestaurantDashboard.css";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "./Popup";
import AddFoodForm from "./addFoodForm";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function RestaurantDashboard(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const [openPopup, setOpenPopup] = useState(false);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Authenticator>
      {({ signOut }) => (
        <div>
          <h2>{props.companyName}</h2>

          <div className="dashboard-layout">
            <div className="restaurant-info-box">
              <RestaurantInfo
                address="skdjghdhb"
                phoneNumber="098726345"
                email="hfehebv@ijfhvdfnjv.com"
                lat2="20.5937"
                lng2="78.9629"
              />
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <div className="drag-drop-button">
                  Drag 'n' drop your restaurant's profile picture here, or click
                  to select a file
                </div>
              </div>
              <aside>
                <ul>{files}</ul>
              </aside>
              <button onClick={signOut} className="sign-out-button">
                Sign Out
              </button>
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
                  <button
                    style={{ background: "none", border: "none" }}
                    onClick={() => setOpenPopup(true)}
                  >
                    <FontAwesomeIcon icon={faPlusCircle} size="5x" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Popup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            title={"add new food"}
          >
            <AddFoodForm></AddFoodForm>
          </Popup>
        </div>
      )}
    </Authenticator>
  );
}

export default RestaurantDashboard;
