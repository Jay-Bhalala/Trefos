import React, { useState, useEffect } from "react";
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
import { API, graphqlOperation } from "aws-amplify";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CreateRestForm from "../Restaraunt-Info/createRestForm";
import { listFoods, listRestaurants } from "../../graphql/queries";

function RestaurantDashboard(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const [openPopup, setOpenPopup] = useState(false);

  const [openCreatePopup, setOpenCreatePopup] = useState(false);

  const [createRestaurant, setCreateRestaurant] = useState(false);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [foodInfo, setFoodInfo] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, [foodInfo]);

  const fetchFoods = async () => {
    try {
      const foodData = await API.graphql(graphqlOperation(listFoods));
      const foodList = foodData.data.listFoods.items;

      const restarauntData = await API.graphql(
        graphqlOperation(listRestaurants)
      );
      const restarauntList = restarauntData.data.listFoods.items;

      setFoodInfo(foodList);
      if (foodList === 0) {
        setCreateRestaurant(false);
      } else if (foodList != 0) {
        setCreateRestaurant(true);
      }
    } catch (error) {
      console.log("error on fetching foods", error);
    }
  };

  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
          fontSize: "1.5rem",
        }}
      >
        The Following Content Is Only Available For Restaurant Accounts
      </h1>
      <Authenticator>
        {({ signOut }) => (
          <div>
            <h2>{props.companyName}</h2>
            <div className="dashboard-layout">
              <div className="restaurant-info-box">
                {createRestaurant ? (
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
                      <div className="drag-drop-button">
                        Drag 'n' drop your restaurant's profile picture here, or
                        click to select a file
                      </div>
                    </div>
                    <aside>
                      <ul>{files}</ul>
                    </aside>
                  </div>
                ) : (
                  <div>
                    <Button
                      variant="outlined"
                      startIcon={<AddIcon />}
                      onClick={() => setOpenCreatePopup(true)}
                    >
                      Create a Restaraunt
                    </Button>
                  </div>
                )}
                <button onClick={signOut} className="sign-out-button">
                  Sign Out
                </button>
              </div>
              <div>
                <h1>Avaiable Foods</h1>
                <div className="food-card-grid">
                  {/* <div>
                    <RestarauntFoodCard
                      image={img}
                      foodTitle="lettuce"
                      days="3"
                      quantity="25"
                      old="3"
                    />
                  </div> */}
                  {foodInfo.map((food) => {
                    return (
                      <div>
                        <RestarauntFoodCard
                          image={img}
                          foodTitle={food.name}
                          days={food.pickUp}
                          quantity={food.pounds}
                          old={food.daysOld}
                        />
                      </div>
                    );
                  })}
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
            <Popup
              openPopup={openCreatePopup}
              setOpenPopup={setOpenCreatePopup}
              title="create new restaurant"
            >
              <CreateRestForm
                setDashboard={() => setCreateRestaurant(true)}
              ></CreateRestForm>
            </Popup>
          </div>
        )}
      </Authenticator>
    </>
  );
}

export default RestaurantDashboard;
