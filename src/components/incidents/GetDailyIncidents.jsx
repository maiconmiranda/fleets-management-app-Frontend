import React, { useState, useEffect } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { Wrapper } from "../viewDailyTracks/ViewDailyTrackStyle";
import { GetVehicles } from '../vehicle/GetVehicles';

// Logic to display the incidents reports
export function ViewIncidents() {
    // get the vehicles to sort the incidents by vehicle
    const vehicles = GetVehicles()

    const [vehicleId, setVehicleId] = useState(null)
    const [incidents, setIncidents] = useState([]);
    // fetch the incidents
    function fetchincIdentsByVehicle() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/incidents-by-vehicle/${vehicleId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setIncidents(data);
            });
    }

    useEffect(() => {
        fetchincIdentsByVehicle();

    }, [vehicleId]);

    // get the vehicle details to display together with each incident
    const getVehiclesByRego = vehicles.map(vehicle => {
        const vehicleRegistration = {}
        vehicleRegistration.rego = vehicle.rego
        vehicleRegistration.id = vehicle.id
        return vehicleRegistration
    })


    return (
        <>
            <Wrapper>
                <div>
                    <h3>Incidents Report by Vehicle</h3>
                    <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="inlineFormCustomSelect"
                        onChange={(e) => setVehicleId(e.target.value)}
                        custom
                    >
                        <option >
                            Select by Registration</option>
                        {getVehiclesByRego.map((vehicleRego) => {
                            return <option value={vehicleRego.id}>{vehicleRego.rego}</option>
                        })}
                    </Form.Control>
                </div>
                <ListGroup as="ul">
                    {/* data goes here */}
                    {incidents.map((incident) => {
                        return (
                            <div style={{ marginTop: "10px" }}>
                                <ListGroup.Item as="li" variant="danger">Description:
                                <p id="card__text"> {incident.description}
                                    </p></ListGroup.Item>
                                <ListGroup.Item as="li" >Created At:
                                <p id="card__text"> {incident.created_at}
                                    </p></ListGroup.Item>
                            </div>
                        )
                    })}
                </ListGroup>
            </Wrapper>
        </>
    );
}