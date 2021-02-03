import React from "react";
import { Card } from "react-bootstrap";
import { Wrap } from "./HowItWorkStyle";
import sign_in from "../../assets/sign_in.svg";

export function ExplanationOne() {
  const img_style = { with: "150px", height: "150px" };
  const cardStyle = { height: "350px" };
  const cardTextColor = { color: "#1F718F" };
  return (
    <Wrap>
      <Card style={cardStyle}>
        <Card.Img variant="top" src={sign_in} style={img_style} />
        <Card.Body>
          <Card.Text style={cardTextColor}>
            After Signing Up as Company, you will be directed to a profile page
            and just add the company’s details
          </Card.Text>
        </Card.Body>
      </Card>
    </Wrap>
  );
}
