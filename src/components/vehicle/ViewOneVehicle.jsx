import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";

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
  const history = useHistory()
  const id = location.id
  // console.log(id)  


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

              <Card.Text>Make: <p id="card__text">{vehicle.make}</p></Card.Text>

              <Card.Text>Model: <p id="card__text">{vehicle.model}</p></Card.Text>

              <Card.Text>Year: <p id="card__text"> {vehicle.year}</p></Card.Text>

              <Card.Text>Color: <p id="card__text">{vehicle.color}</p></Card.Text>

              <Card.Text>Rego: <p id="card__text">{vehicle.rego}</p> </Card.Text>

              <Card.Text>Rego Expire Date: <p id="card__text">{vehicle.rego_expiry_date}</p></Card.Text>

              <Card.Text>Registration Cost: <p id="card__text">{vehicle.rego_fee}</p></Card.Text>

              <Card.Text>Insurance Provider: <p id="card__text">{vehicle.insurance_provider}</p></Card.Text>

              <Card.Text>Insurance Policy Number: <p id="card__text">{vehicle.insurance_policy_number}</p> </Card.Text>

              <Card.Text>Insurance Expiry Date: <p id="card__text">{vehicle.insurance_expiry_date}</p></Card.Text>

              <Card.Text>Insurance Cost: <p id="card__text">{vehicle.insurance_fee}</p> </Card.Text>

              <Card.Text>Maintenance Cost: <p id="card__text">{vehicle.maintenance_fee}</p></Card.Text>
            </Card.Body>
            <Card.Footer style={CardFooterStyle}>
              <Link to={{ pathname: "/edit-vehicle", data: vehicle }}>
                <Button variant="info">Edit</Button>
              </Link>
              <Link to="/company">
                <Button variant="success">View Reports</Button>
              </Link>
            </Card.Footer>
          </div>
        </Card>
      </div>
    ))
}
