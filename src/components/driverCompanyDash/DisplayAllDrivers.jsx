import React from "react";
import { CardColumns, Card, Button } from "react-bootstrap";

const CardFooterStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  borderBottom: "1px solid #227C9D",
  borderTop: "1px solid #227C9D",
  backgroundColor: "white",
};

export function DisplayAllDrivers() {
  return (
    <CardColumns style={{ marginTop: "50px" }}>
      <Card className="card card-body h-100">
        <div classname="col-sm-4 py-2">
          <Card.Body>
            <Card.Title>Driver Name</Card.Title>
            <Card.Text>
              <p>Email:</p>
              <p>Contact Number:</p>
              <p>License Number:</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={CardFooterStyle}>
            <Button variant="success">View</Button>
            <Button variant="danger">Remove</Button>
          </Card.Footer>
        </div>
      </Card>
      <Card className="card card-body h-100">
        <div classname="col-sm-4 py-2">
          <Card.Body>
            <Card.Title>Driver Name</Card.Title>
            <Card.Text>
              <p>Email:</p>
              <p>Contact Number:</p>
              <p>License Number:</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={CardFooterStyle}>
            <Button variant="success">View</Button>
            <Button variant="danger">Remove</Button>
          </Card.Footer>
        </div>
      </Card>
      <Card className="card card-body h-100">
        <div classname="col-sm-4 py-2">
          <Card.Body>
            <Card.Title>Driver Name</Card.Title>
            <Card.Text>
              <p>Email:</p>
              <p>Contact Number:</p>
              <p>License Number:</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={CardFooterStyle}>
            <Button variant="success">View</Button>
            <Button variant="danger">Remove</Button>
          </Card.Footer>
        </div>
      </Card>
      <Card className="card card-body h-100">
        <div classname="col-sm-4 py-2">
          <Card.Body>
            <Card.Title>Driver Name</Card.Title>
            <Card.Text>
              <p>Email:</p>
              <p>Contact Number:</p>
              <p>License Number:</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={CardFooterStyle}>
            <Button variant="success">View</Button>
            <Button variant="danger">Remove</Button>
          </Card.Footer>
        </div>
      </Card>
      <Card className="card card-body h-100">
        <div classname="col-sm-4 py-2">
          <Card.Body>
            <Card.Title>Driver Name</Card.Title>
            <Card.Text>
              <p>Email:</p>
              <p>Contact Number:</p>
              <p>License Number:</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={CardFooterStyle}>
            <Button variant="success">View</Button>
            <Button variant="danger">Remove</Button>
          </Card.Footer>
        </div>
      </Card>
      <Card className="card card-body h-100">
        <div classname="col-sm-4 py-2">
          <Card.Body>
            <Card.Title>Driver Name</Card.Title>
            <Card.Text>
              <p>Email:</p>
              <p>Contact Number:</p>
              <p>License Number:</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={CardFooterStyle}>
            <Button variant="success">View</Button>
            <Button variant="danger">Remove</Button>
          </Card.Footer>
        </div>
      </Card>
    </CardColumns>
  );
}
