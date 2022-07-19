import React from "react";
import "./restarauntFoodCard.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import * as mutations from "../../graphql/mutations";
import { listRestaurants } from "../../graphql/queries";
import { updateRestaurant } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { Card } from "react-bootstrap";

function restarauntFoodCard(props) {
  const foodDetails = {
    id: props.id,
  };

  const deletedFood = async () => {
    try {
      await API.graphql({
        query: mutations.deleteFood,
        variables: { input: foodDetails },
      });

      const restPoundsData = await API.graphql(
        graphqlOperation(listRestaurants)
      );
      const restPounds = restPoundsData.data.listRestaurants.items;

      let restPoundsNum;
      let restID;

      {
        restPounds.map((restaraunt) => {
          restPoundsNum = restaraunt.pounds;
          restID = restaraunt.id;
        });
      }
      await API.graphql({
        query: updateRestaurant,
        variables: {
          input: {
            id: restID,
            pounds: restPoundsNum - props.quantity,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      props.onDelFood();
    } catch (e) {
      console.log("error on delete", e);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body className="restaraunt-food-card-text">
        <Card.Title>{props.foodTitle}</Card.Title>
        <Card.Text>{props.old} Day(s) Old</Card.Text>
        <Card.Text>{props.quantity} lbs</Card.Text>
        <Card.Text>Available To Pick Up For {props.days} Days</Card.Text>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={deletedFood}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default restarauntFoodCard;
