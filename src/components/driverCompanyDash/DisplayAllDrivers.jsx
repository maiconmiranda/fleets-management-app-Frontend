import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// Logic to fetch All Drivers that belongs to company
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
      {/* display the fethced data */}
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
    </>
  );
}
