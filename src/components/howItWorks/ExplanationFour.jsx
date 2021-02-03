import React from "react";
import { Card } from "react-bootstrap";
import { Wrap } from "./HowItWorkStyle";
import tablet_and_guy from "../../assets/tablet_and_guy.svg";

export function ExplanationFour() {
  const img_style = { with: "150px", height: "150px" };
  const cardStyle = { height: "350px" };
  const cardTextColor = { color: "#1F718F" };
  return (
    <Wrap>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={tablet_and_guy} style={img_style} />
        <Card.Body>
          <Card.Text style={cardTextColor}>
            Everyday before the shift starts each driver will login into Fleets
            and select the vehicle is going to use, then add the odometer km.
            Before finishing the shift the drivers will fill up the form which
            contains fields about expenses, incidents as well vehicle
            conditions.
          </Card.Text>
        </Card.Body>
      </Card>
    </Wrap>
  );
}
