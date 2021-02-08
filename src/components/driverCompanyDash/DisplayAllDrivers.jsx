import React, { useState, useEffect } from "react";
import { CardColumns, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


const CardFooterStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  borderBottom: "1px solid #227C9D",
  borderTop: "1px solid #227C9D",
  backgroundColor: "white",
};

export function DisplayAllDrivers() {
  const [drivers, setDrivers] = useState([]);

  function fetchDrivers() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users-company`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDrivers(data);
      });
  }

  useEffect(() => {
    fetchDrivers();
  }, []);

  console.log(drivers)

  return (
    <>
      <div style={{ marginBottom: "20px", marginTop: "30px", textAlign: "center" }}>
        <h3>View Drivers</h3>
      </div>
      <div>
        <ListGroup variant="flush">
          <ListGroup.Item>To view the driver details select the card corresponding the driver</ListGroup.Item>
        </ListGroup>

      </div>

      <ListGroup as="ul">
        {drivers.map((driver) => {
          return (
            <div style={{ marginTop: "10px" }}>
              <Link to={{ pathname: "/view-driver", data: driver }} style={{ textDecoration: "none" }}>
                <ListGroup.Item as="li" variant="info">Driver: {driver.user_name}</ListGroup.Item>
                <ListGroup.Item as="li">Email: {driver.email}</ListGroup.Item>
                <ListGroup.Item as="li">Driver ID: {driver.driver_id}</ListGroup.Item>
                <ListGroup.Item as="li">License Number: {driver.driver_license_number}</ListGroup.Item>
              </Link>
            </div>
          )
        })}
      </ListGroup>
      {/* <CardColumns style={{ marginTop: "50px" }}>
        {drivers.map((driver) => {
          return (
            <Card className="card card-body h-100">
              <div classname="col-sm-4 py-2">
                <Card.Body>
                  <Card.Title>Driver: {driver.user_name}</Card.Title>
                  <Card.Text>
                    <p>Email: {driver.email}</p>
                    <p>Driver ID: {driver.driver_id}</p>
                    <p>License Number: {driver.driver_license_number}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={CardFooterStyle}>
                  <Link to="/view-driver">
                    <Button variant="success">View</Button>
                  </Link>
                </Card.Footer>
              </div>
            </Card>
          )
        })}
      </CardColumns> */}
    </>
  );
}
