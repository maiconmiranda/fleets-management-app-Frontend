import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Display the links to the report pages
export function DisplayReports() {
  return (
    <>
      {/* Links to Daily Tracks Reports */}
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
        {/* Link to Daily Reports, or condition reports */}
        <Card border="primary">
          <Card.Body>
            <Card.Title>Incident Reports</Card.Title>
            <Card.Text>
              View all incidents reported by the drivers involved.
            </Card.Text>
            <Link to="/view-daily-report">
              <Button style={{ width: "100px" }} variant="primary" size="sm">
                View
              </Button>{" "}
            </Link>
          </Card.Body>
        </Card>

        <br />
        {/* Link to Incidents reports */}
        <Card border="primary">
          <Card.Body>
            <Card.Title>Other Reports</Card.Title>
            <Card.Text>
              Get to know the condition of your fleet. Reported by the drivers.
            </Card.Text>
            <Link to="/view-incidents">
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
