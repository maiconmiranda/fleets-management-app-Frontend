import React, { useState, useEffect } from "react";
import { CardColumns, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// logic to display fleet
// instyle to overwide bootstrap
const CardFooterStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  borderBottom: "1px solid #227C9D",
  borderTop: "1px solid #227C9D",
  backgroundColor: "white"
};
// function to display fleet
export function DisplayAllVehicles() {
  const [vehicles, setVehicles] = useState([]);

  // fetch vehicle
  function fetchVehicles() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/vehicles`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then((body) => setVehicles(body));
  }

  useEffect(() => {
    fetchVehicles();
  }, []);

  // delete vehicle
  async function onDeleteLinkClick(e, vehicle) {
    try {
      e.preventDefault();
      if (window.confirm("Would you like to delete?")) {
        await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/vehicles/${vehicle.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
          }
        );
        fetchVehicles();
      }
    } catch (err) {
      console.log(err.message);
    }
  }


  return (
    <>
      <div style={{ height: "50px", marginTop: "30px" }}>
        <h3>View your Fleet</h3>
      </div>
      <CardColumns>
        {/* data goes here */}
        {vehicles.map((vehicle) => {
          const vehicleId = vehicle.id
          return (
            <Card className="card card-body h-100" key={vehicle.id}>
              <div >
                <Card.Body>
                  <Card.Title>Fleet Number: {vehicle.fleet_id}</Card.Title>
                  <Card.Text>
                    <p>Make: {vehicle.make}</p>
                    <p>Model: {vehicle.model}</p>
                    <p>Year: {vehicle.year}</p>
                    <p>Color: {vehicle.color}</p>
                    <p>Rego: {vehicle.rego}</p>
                    <p>Rego: {vehicle.id}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={CardFooterStyle}>
                  <Link to={{ pathname: `/view-vehicle/${vehicle.id}`, data: vehicleId }}>
                    <Button variant="success">View</Button>
                  </Link>
                  {/* remove vehicle */}
                  <Link onClick={(e) => onDeleteLinkClick(e, vehicle)}
                    to={`/view-vehicle/${vehicle.id}`}>
                    <Button variant="danger">Remove</Button>
                  </Link>
                </Card.Footer>
              </div>
            </Card>
          )
        })}
      </CardColumns>
    </>

  );
}
