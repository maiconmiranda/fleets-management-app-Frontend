import React, { useState, useEffect } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Line } from "./AsignDriverStyle";
// import { Link } from "react-router-dom";
import { GetUser } from "../main/GetUser";
import { useLocation, useHistory } from "react-router-dom";

export function AssignDriverToVehicle(props) {
  const location = useLocation();
  const history = useHistory();
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [driverId, setDriverId] = useState(null);
  const [vehicleId, setVehicleId] = useState(null);
  const [driverUserName, setDriverUserName] = useState("");
  const [vehicleFleetId, setVehicleFleetId] = useState(null);
  const [countOne, setCountOne] = useState(null);
  const [countTwo, setCountTwo] = useState(null);
  const company = GetUser();
  const id = company.company_id;
  console.log(id);

  async function onFormSubmit(e) {
    const user_id = driverId;
    const vehicle_id = vehicleId;
    console.log(user_id, vehicle_id, countOne, countTwo);
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/daily_tracks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          daily_track: {
            user_id: driverId,
            vehicle_id: vehicleId,
            company_id: id,
          },
        }),
      });
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${user_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          user: {
            is_chosen: true,
          },
        }),
      });
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/vehicles/${vehicle_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          vehicle: {
            is_selected: true,
          },
        }),
      });

      setDriverUserName("");
      setVehicleFleetId("");
      history.push("/assign-driver");
    } catch (err) {
      console.log(err.message);
    }
  }

  function fetchDrivers() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users-company`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((users) => {
        const availDrivers = users.filter((user) => user.is_chosen === false);
        console.log(availDrivers);
        const countOne = availDrivers.length;
        setDrivers(availDrivers);
        setCountOne(countOne);
        console.log(countOne);
      });
  }

  function fetchVehicles() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/vehicles-company`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((vehicles) => {
        const availVehicles = vehicles.filter(
          (vehicle) => vehicle.is_selected === false
        );
        console.log(availVehicles);
        const countTwo = availVehicles.length;
        setVehicles(availVehicles);
        setCountTwo(countTwo);
        console.log(countTwo);
      });
  }

  useEffect(() => {
    fetchDrivers()
    fetchVehicles()
  }, [driverId, vehicleId]);

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Line>
          <Form.Group as={Col} controlId="formGridEmail">
            <Col sm={7} className="my-1">
              <Form.Label htmlFor="driverUserName" className="mr-sm-2">
                Select Driver
              </Form.Label>
              <Form.Control
                className="mr-sm-2"
                as="select"
                name="driverUserName"
                id="driverUserName"
                // value={driverUserName}
                onChange={(e) => {
                  const index = e.target.selectedIndex;
                  const optionElement = e.target.childNodes[index];
                  const driverId = optionElement.getAttribute("id");

                  setDriverUserName(e.target.value);
                  setDriverId(driverId);

                }}
              >
                {drivers.map((driver) => {
                  return (
                    <option
                      key={driver.id}
                      value={driver.user_name}
                      id={driver.id}
                    >
                      {driver.user_name}
                    </option>
                  );
                })}
              </Form.Control>
            </Col>
          </Form.Group>
        </Line>

        <Line>
          <Form.Group as={Col} controlId="formGridEmail">
            <Col sm={7} className="my-1">
              <Form.Label htmlFor="driverUserName" className="mr-sm-2">
                Select Vehicle
              </Form.Label>
              <Form.Control
                className="mr-sm-2"
                as="select"
                name="vehicleFleetId"
                id="vehicleFleetId"
                // value={vehicleFleetId}
                onChange={(e) => {
                  const index = e.target.selectedIndex;
                  const optionElement = e.target.childNodes[index];
                  const vehicleId = optionElement.getAttribute("id");

                  setVehicleFleetId(e.target.value);
                  setVehicleId(vehicleId);
                }}
              >
                {vehicles.map((vehicle) => {
                  return (
                    <option
                      key={vehicle.id}
                      value={vehicle.fleet_id}
                      id={vehicle.id}
                    >
                      {vehicle.fleet_id}
                    </option>
                  );
                })}
              </Form.Control>
            </Col>
          </Form.Group>
        </Line>
        <Line>
          <Button
            style={{
              height: "40px",
              width: "100px",
              marginLeft: "30px",
              fontSize: "20px",
            }}
            variant="primary"
            size="sm"
            type="submit"
          >
            Assign
          </Button>
        </Line>
      </Form>

      <p
        style={{
          fontSize: "20px",
          color: "cornflowerblue",
          fontFamily: "sans-serif",
        }}
      >
        {vehicleFleetId}
        <span style={{ color: "grey" }}> is assigned to </span>
        {driverUserName}
      </p>
    </>
  );
}