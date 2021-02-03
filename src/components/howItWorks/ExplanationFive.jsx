import React from "react";
import { Card } from "react-bootstrap";
import { Wrap } from "./HowItWorkStyle";
import looking_data from "../../assets/looking_data.svg";

export function ExplanationFive() {
  const img_style = { with: "150px", height: "150px" };
  const cardStyle = { height: "350px" };
  const cardTextColor = { color: "#1F718F" };
  return (
    <Wrap>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={looking_data} style={img_style} />
        <Card.Body>
          <Card.Text style={cardTextColor}>
            On your dashboard you will be able to get reports for each vehicle,
            all the daily expenses, any mechanical faults or incidents.
          </Card.Text>
        </Card.Body>
      </Card>
    </Wrap>
  );
}
