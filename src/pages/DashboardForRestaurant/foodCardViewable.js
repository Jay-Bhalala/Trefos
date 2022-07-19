import React from "react";
import "./restarauntFoodCard.css";
import { Card } from "react-bootstrap";

function foodCardViewable(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body className="restaraunt-food-card-text">
        <Card.Title>{props.foodTitle}</Card.Title>
        <Card.Text>{props.old} Day(s) Old</Card.Text>
        <Card.Text>{props.quantity} lbs</Card.Text>
        <Card.Text>Available To Pick Up For {props.days} Days</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default foodCardViewable;
