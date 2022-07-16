import React from "react";
import "./restarauntFoodCard.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import * as mutations from "../../graphql/mutations";
import { API } from "aws-amplify";
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
      props.onDelFood();
    } catch (e) {
      console.log("error on delete", e);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={props.image}
        className="restaraunt-food-card-image"
      />
      <Card.Body className="restaraunt-food-card-text">
        <Card.Title>{props.foodTitle}</Card.Title>
        <Card.Text>{props.old} days old</Card.Text>
        <Card.Text>{props.quantity} lbs</Card.Text>
        <Card.Text>pick up in {props.days} days</Card.Text>
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
