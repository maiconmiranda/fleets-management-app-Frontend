import React from "react";
import { Card } from "react-bootstrap";
import { Wrap } from "./HowItWorkStyle";
import on_scooter from "../../assets/on_scooter.svg";

export function ExplanationThree() {
  const img_style = { with: "150px", height: "150px" };
  const cardStyle = { height: "350px" };
  const cardTextColor = { color: "#1F718F" };
  return (
    <Wrap>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={on_scooter} style={img_style} />
        <Card.Body>
          <Card.Text style={cardTextColor}>
            The final step for setting-up is adding the drivers. Once the driver
            is added they will receive an email with link so they can login and
            starting use Fleets
          </Card.Text>
        </Card.Body>
      </Card>
    </Wrap>
  );
}
