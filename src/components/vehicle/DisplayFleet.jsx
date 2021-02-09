import React, { useState, useEffect } from "react";
import { CardColumns, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const CardFooterStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  borderBottom: "1px solid #227C9D",
  borderTop: "1px solid #227C9D",
  backgroundColor: "white",
};

export function DisplayAllVehicles() {
  const [vehicles, setVehicles] = useState([]);

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
    <div style={{ marginTop: "50px" }}>
      <h3>View your Fleet</h3>
      <CardColumns>
        {vehicles.map((vehicle) => {
          const vehicleId = vehicle.id
          return (
            <Card className="card card-body h-100" key={vehicle.id}>
              <div >
                <Card.Body>
                  <Card.Title>Fleet Number: {vehicle.fleet_id}</Card.Title>
                  <Card.Text>
                    Make: <p id="card__text">{vehicle.make}</p>
                  </Card.Text>
                  <Card.Text>
                    Model: <p id="card__text">{vehicle.model}</p>
                  </Card.Text>
                  <Card.Text>
                    Year: <p id="card__text">{vehicle.year}</p>
                  </Card.Text>
                  <Card.Text>
                    Color: <p id="card__text">{vehicle.color}</p>
                  </Card.Text>
                  <Card.Text>
                    Rego: <p id="card__text">{vehicle.rego}</p>
                  </Card.Text>
                  <Card.Text>
                    Id: <p id="card__text">{vehicle.id}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={CardFooterStyle}>
                  <Link to={{ pathname: `/view-vehicle/${vehicle.id}`, id: vehicleId }}>
                    <Button variant="success">View</Button>
                  </Link>
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
    </div>

  );
}
