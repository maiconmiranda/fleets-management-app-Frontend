import React, { useState, useEffect } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { Wrapper } from "./ViewDailyTrackStyle";
import { GetVehicleFromCompany, GetVehicles } from '../vehicle/GetVehicles';


export function ViewDailyTrackVehicle() {
    const vehicles = GetVehicles()

    const [vehicleId, setVehicleId] = useState(null)
    const [dailyTracks, setDailyTracks] = useState([]);
    const vehicle = GetVehicleFromCompany(vehicleId)

    function fetchDailyTracksByVehicle() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/daily-tracks-by-vehicle/${vehicleId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setDailyTracks(data);
            });
    }

    useEffect(() => {
        fetchDailyTracksByVehicle();

    }, [vehicleId]);

    const getVehiclesByRego = vehicles.map(vehicle => {
        const vehicleRegistration = {}
        vehicleRegistration.rego = vehicle.rego
        vehicleRegistration.id = vehicle.id
        return vehicleRegistration
    })

    console.log(vehicle)

    // // get the dailyTrack costs ---------------/
    // const getCosts = dailyTracks.map((dailyTrack) => {
    //     const costs = []
    //     costs.push(dailyTrack.fuel_fee,
    //         dailyTrack.parking_fee,
    //         dailyTrack.fines,
    //         dailyTrack.other_fee)
    //     return costs
    // })
    // // --------------------------------------/
    // const costs = getCosts.map((cost) =>
    //     cost.map(Number).map(Number).reduce((a, b) => a + b).toFixed(2)
    // )


    return (
        <>
            <Wrapper>
                <div>
                    <h3>Daily Track Reports by Vehicle</h3>
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
                    {dailyTracks.map((dailyTrack) => {
                        return (
                            <div style={{ marginTop: "10px" }}>
                                {/* <ListGroup.Item as="li" variant="primary">Rego: {vehicle[0].rego}</ListGroup.Item>
                                <ListGroup.Item as="li" variant="info">Fleet Id: {vehicle[0].fleet_id}</ListGroup.Item> */}
                                <ListGroup.Item as="li" >Date: {dailyTrack.date}</ListGroup.Item>
                                <ListGroup.Item as="li">Odometer Start: {dailyTrack.odometer_start}</ListGroup.Item>
                                <ListGroup.Item as="li">Odometer end: {dailyTrack.odometer_end}</ListGroup.Item>
                                <ListGroup.Item as="li">Fuel fee: {dailyTrack.fuel_fee}</ListGroup.Item>
                                <ListGroup.Item as="li">Parking fee: {dailyTrack.parking_fee}</ListGroup.Item>
                                <ListGroup.Item as="li">Fines: {dailyTrack.fines}</ListGroup.Item>
                                <ListGroup.Item as="li">Other Expenses: {dailyTrack.other_fee}</ListGroup.Item>
                                <ListGroup.Item as="li">Expense Description: {dailyTrack.other_fee_description}</ListGroup.Item>
                            </div>
                        )
                    })}
                </ListGroup>
            </Wrapper>
        </>
    );
}