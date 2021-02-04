import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function DisplayReports() {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <Card border="primary">
          <Card.Body>
            <Card.Title>Daily Tracks</Card.Title>
            <Card.Text>
              View all costs reported by day from the drivers.
            </Card.Text>
            <Link to="/view-daily-track">
              <Button style={{ width: "100px" }} variant="primary" size="sm">
                View
              </Button>{" "}
            </Link>
          </Card.Body>
        </Card>
        <br />
        <Card border="primary">
          <Card.Body>
            <Card.Title>Incident Reports</Card.Title>
            <Card.Text>
              View all incidents reported by the drivers involved.
            </Card.Text>
            <Link to="/company">
              <Button style={{ width: "100px" }} variant="primary" size="sm">
                View
              </Button>{" "}
            </Link>
          </Card.Body>
        </Card>
        <br />
        <Card border="primary">
          <Card.Body>
            <Card.Title>Other Reports</Card.Title>
            <Card.Text>
              Get to know the condition of your fleet. Reported by the drivers.
            </Card.Text>
            <Link to="/company">
              <Button style={{ width: "100px" }} variant="primary" size="sm">
                View
              </Button>{" "}
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
