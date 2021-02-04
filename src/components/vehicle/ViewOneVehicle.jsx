import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardFooterStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  borderBottom: "1px solid #227C9D",
  borderTop: "1px solid #227C9D",
  backgroundColor: "white",
};

export function DisplayOneVehicle() {
  return (
    <div style={{ marginTop: "50px" }}>
      <h3>View Vehicle</h3>
      <Card className="card card-body h-100">
        <div classname="col-sm-4 py-2">
          <Card.Body>
            <Card.Title>Fleet Number:</Card.Title>
            <Card.Text>
              <p>Make:</p>
              <p>Model:</p>
              <p>Year:</p>
              <p>Color:</p>
              <p>Rego:</p>
              <p>Rego Expire Date:</p>
              <p>Registration Cost:</p>
              <p>Insurance Provider:</p>
              <p>Insurance Policy Number:</p>
              <p>Insurance Expiry Date:</p>
              <p>Insurance Cost:</p>
              <p>Vehicle Assigned to:</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={CardFooterStyle}>
            <Link to="/edit-vehicle">
              <Button variant="info">Edit</Button>
            </Link>
            <Link to="/company">
              <Button variant="success">View Reports</Button>
            </Link>
            <Link to="/company">
              <Button variant="danger">Remove</Button>
            </Link>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
}
