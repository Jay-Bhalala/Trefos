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
import NavbarRestaurant from "../../navbars/NavBarRestaurant";
import NavbarDefault from "../../navbars/NavbarDefault";

function RestaurantDashboard(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const [openPopup, setOpenPopup] = useState(false);

  const [openCreatePopup, setOpenCreatePopup] = useState(false);

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
    fetchRest();
  }, [loggedIn]);

  const fetchFoods = async () => {
    try {
      const foodData = await API.graphql(graphqlOperation(listFoods));
      const foodList = foodData.data.listFoods.items;
      setFoodInfo(foodList);
      console.log(foodList);
    } catch (error) {
      console.log("error on fetching foods", error);
    }
  };

  const fetchRest = async () => {
    try {
      const restaurantData = await API.graphql(
        graphqlOperation(listRestaurants)
      );
      const restaurantCheck = restaurantData.data.listRestaurants.items;
      setCheck(restaurantCheck);
      console.log(restaurantCheck);
    } catch (e) {
      console.log("error on fetching restaurant", e);
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

  function stringUrl(string) {
    if (string.includes("%20")) {
      return string.replaceAll("%20", " ");
    } else {
      return string;
    }
  }

  return (
    <div style={{ marginBottom: "3rem" }}>
      {loggedIn ? (
        <NavbarRestaurant />
      ) : (
        <div>
          <NavbarDefault />
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10vh",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            The Following Content Is Only Available For Restaurant Accounts
          </h1>
        </div>
      )}
      <Authenticator>
        {({ signOut }) => (
          <div>
            <div className="dashboard-layout">
              <div className="restaurant-info-box">
                {check.map((restaurant) => {
                  return <h2>{stringUrl(restaurant.name)}</h2>;
                })}
                {check.length !== 0 ? (
                  <div>
                    {check.map((restaurant) => {
                      return (
                        <RestaurantInfo
                          id={restaurant.id}
                          address={restaurant.address}
                          phoneNumber={restaurant.phone}
                          email={restaurant.email}
                          lat2={restaurant.latitude}
                          lng2={restaurant.longitude}
                          imge={restaurant.image}
                          onEditRest={() => {
                            fetchRest();
                          }}
                        />
                      );
                    })}
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
                <h1>Available Foods</h1>
                <div className="food-card-grid">
                  {foodInfo.map((food) => {
                    return (
                      <div>
                        <RestarauntFoodCard
                          image={img}
                          foodTitle={food.name}
                          days={food.pickUp}
                          quantity={food.pounds}
                          old={food.daysOld}
                          id={food.id}
                          onDelFood={() => {
                            fetchFoods();
                          }}
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
              title={"Add New Food"}
            >
              {check.map((restaurant) => {
                return (
                  <AddFoodForm
                    id={restaurant.id}
                    pounds={restaurant.pounds}
                    totalpounds={restaurant.totalpounds}
                    onAddFood={() => {
                      fetchFoods();
                      fetchRest();
                      setOpenPopup(false);
                    }}
                  ></AddFoodForm>
                );
              })}
            </Popup>
            <Popup
              openPopup={openCreatePopup}
              setOpenPopup={setOpenCreatePopup}
              title="Create A New Restaurant Below (All Information Provided Will Be Publicly Viewable)"
            >
              <CreateRestForm
                onAddRest={() => {
                  fetchRest();
                  setOpenCreatePopup(false);
                }}
              ></CreateRestForm>
            </Popup>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default RestaurantDashboard;
