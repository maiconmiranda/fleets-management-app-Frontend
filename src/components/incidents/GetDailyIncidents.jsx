import React, { useState, useEffect } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { Wrapper } from "../viewDailyTracks/ViewDailyTrackStyle";
import { Link } from "react-router-dom";
import { GetVehicles } from '../vehicle/GetVehicles';

export function ViewIncidents() {

    const vehicles = GetVehicles()

    const [vehicleId, setVehicleId] = useState(null)
    const [incidents, setIncidents] = useState([]);

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

    const getVehiclesByRego = vehicles.map(vehicle => {
        const vehicleRegistration = {}
        vehicleRegistration.rego = vehicle.rego
        vehicleRegistration.id = vehicle.id
        return vehicleRegistration
    })

    // const vehicle = GetVehicleFromCompany(vehicleId)

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
                    {incidents.map((incident) => {
                        return (
                            <div style={{ marginTop: "10px" }}>
                                {/* <ListGroup.Item as="li" variant="primary">Rego: {vehicle[0].rego}</ListGroup.Item>
                                <ListGroup.Item as="li" variant="info">Fleet Id: {vehicle[0].fleet_id}</ListGroup.Item> */}
                                <ListGroup.Item as="li" >Description: {incident.description}</ListGroup.Item>
                                <ListGroup.Item as="li" >Created At: {incident.created_at}</ListGroup.Item>
                            </div>
                        )
                    })}
                </ListGroup>
            </Wrapper>
        </>
    );
}