import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const CardFooterStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  borderBottom: "1px solid #227C9D",
  borderTop: "1px solid #227C9D",
  backgroundColor: "white",
};

export function DisplayOneVehicle(props) {
  const [vehicle, setvehicle] = useState(null);
  const location = useLocation();
  const id = location.data
  console.log(id);


  useEffect(() => {
    // localhost:3000/vehicles/10
    fetch(`${process.env.REACT_APP_BACKEND_URL}/vehicles/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((vehicle) => {
        setvehicle(vehicle);
      });
  }, [id]);

  return (
    vehicle && (
      <div style={{ marginTop: "50px" }}>
        <h3>View Vehicle</h3>
        <Card className="card card-body h-100">
          <div classname="col-sm-4 py-2">
            <Card.Body>
              <Card.Title>Fleet Number: {vehicle.fleet_id}</Card.Title>
              <Card.Text>
                <p>Make: {vehicle.make}</p>
                <p>Model: {vehicle.model}</p>
                <p>Year: {vehicle.year}</p>
                <p>Color: {vehicle.color}</p>
                <p>Rego: {vehicle.rego}</p>
                <p>Rego Expire Date: {vehicle.rego_expiry_date}</p>
                <p>Registration Cost: {vehicle.registration_cost}</p>
                <p>Insurance Provider: {vehicle.insurance_provider}</p>
                <p>Insurance Policy Number: {vehicle.insurance_policy_number}</p>
                <p>Insurance Expiry Date: {vehicle.insurance_expiry_date}</p>
                <p>Insurance Cost: {vehicle.insurance_cost}</p>
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
    ))
}
