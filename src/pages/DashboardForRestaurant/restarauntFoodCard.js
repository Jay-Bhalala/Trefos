import React from "react";
import "./restarauntFoodCard.css";

import { Card } from "react-bootstrap";

function restarauntFoodCard(props) {
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
      </Card.Body>
    </Card>
  );
}

export default restarauntFoodCard;
