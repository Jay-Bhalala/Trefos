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
import { API, graphqlOperation, Auth, Hub } from "aws-amplify";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CreateRestForm from "../Restaraunt-Info/createRestForm";
import { listFoods, listRestaurants } from "../../graphql/queries";
import Geocode from "react-geocode";
import NavbarRestaurant from "../../navbars/NavBarRestaurant";
import NavbarDefault from "../../navbars/NavbarDefault";

function RestaurantDashboard(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const [openPopup, setOpenPopup] = useState(false);

  const [openCreatePopup, setOpenCreatePopup] = useState(false);

  // const [createRestaurant, setCreateRestaurant] = useState(false);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const [foodInfo, setFoodInfo] = useState([]);
  const [check, setCheck] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetchFoods();
  }, [check, loggedIn]);

  const fetchFoods = async () => {
    try {
      const foodData = await API.graphql(graphqlOperation(listFoods));
      const foodList = foodData.data.listFoods.items;
      const restaurantData = await API.graphql(
        graphqlOperation(listRestaurants)
      );
      const restaurantCheck = restaurantData.data.listRestaurants.items;
      setCheck(restaurantCheck);
      setFoodInfo(foodList);
    } catch (error) {
      console.log("error on fetching foods", error);
    }
  };

  useEffect(() => {
    assessLoggedInState();
  }, []);

  const assessLoggedInState = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setLoggedIn(true);
    } catch {
      setLoggedIn(false);
    }
  };

  const signedOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
    } catch (e) {
      console.log("error signing out", e);
    }
  };

  Hub.listen("auth", (data) => {
    const { payload } = data;

    if (payload.event === "signIn") {
      setLoggedIn(true);
    }
  });

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  Geocode.setApiKey("AIzaSyDACU97eVz7BeST6TBxUUJh1GaH36O1kTA");
  Geocode.setLanguage("en");

  // Get latitude & longitude from address.
  Geocode.fromAddress("4400 southpointe drive richardson texas").then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setLatitude(lat);
      setLongitude(lng);
    },
    (error) => {
      console.error(error);
    }
  );

  useEffect(() => {},[latitude]);
  useEffect(() => {},[longitude]);

  return (
    <>
      {loggedIn ? <NavbarRestaurant /> : <NavbarDefault />}
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
                {check.length !== 0 ? (
                  <div>
                    {check.map((restaurant) => {
                      return (
                        <RestaurantInfo
                          address={restaurant.address}
                          phoneNumber={restaurant.phone}
                          email={restaurant.email}
                          lat2={latitude}
                          lng2={longitude}
                        />
                      );
                    })}
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
                <br></br>
                <div>
                  <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    //onClick={() => setOpenCreatePopup(true)}
                  >
                    Update Photo
                  </Button>
                </div>

                <button
                  onClick={() => {
                    signOut();
                    signedOut();
                  }}
                  className="sign-out-button"
                >
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
                    {check.length !== 0 ? (
                      <button
                        style={{ background: "none", border: "none" }}
                        onClick={() => setOpenPopup(true)}
                      >
                        <FontAwesomeIcon icon={faPlusCircle} size="5x" />
                      </button>
                    ) : (
                      <div>Create your Restaraunt!</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Popup
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              title={"add new food"}
            >
              {check.map((restaurant) => {
                return <AddFoodForm id={restaurant.id}></AddFoodForm>;
              })}
            </Popup>
            <Popup
              openPopup={openCreatePopup}
              setOpenPopup={setOpenCreatePopup}
              title="create new restaurant"
            >
              <CreateRestForm></CreateRestForm>
            </Popup>
          </div>
        )}
      </Authenticator>
    </>
  );
}

export default RestaurantDashboard;
