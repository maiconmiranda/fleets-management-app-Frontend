import React from "react";
import { Card } from "react-bootstrap";
import { Wrap } from "./HowItWorkStyle";
import car_on_road from "../../assets/car_on_road.svg";

export function ExplanationTwo() {
  const img_style = { with: "150px", height: "150px" };
  const cardStyle = { height: "350px" };
  const cardTextColor = { color: "#1F718F" };
  return (
    <Wrap>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={car_on_road} style={img_style} />
        <Card.Body>
          <Card.Text style={cardTextColor}>
            Add the details for each vechile, and fixed expenses such as
            insurance costs, registration costs
          </Card.Text>
        </Card.Body>
      </Card>
    </Wrap>
  );
}
