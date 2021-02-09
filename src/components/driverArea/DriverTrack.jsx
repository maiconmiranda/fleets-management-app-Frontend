import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { FormWrap } from "../logIn/LogInStyle";
import { GetUser } from "../main/GetUser";

export function DriverTrack() {
    const history = useHistory();
    // params to pass the ids to daily Tracks
    const [driverTrack, setDriverTrack] = useState([]);
    const [trackId, setTrackId] = useState();
    const [vehicleId, setVehicleId] = useState("");
    const [driverId, setDriverId] = useState("");

    //   params for DailyTrack form
    const [date, setDate] = useState("");
    const [odometerStart, setOdometerStart] = useState("");
    const [odometerEnd, setOdometerEnd] = useState("");
    const [fuelFee, setFuelFee] = useState(null);
    const [parkingFee, setParkingFee] = useState(null);
    const [fines, setFines] = useState(null);
    const [otherFee, setOtherFee] = useState(null);
    const [otherFeeDescription, setOtherFeeDescription] = useState("");
    const user = GetUser();
    const count = user.id;
    console.log(count);


    async function onFormSubmit(e) {
        const track_id = trackId;
        console.log(trackId);
        console.log(driverId);
        console.log(vehicleId);
        // Update daily track
        try {
            e.preventDefault();
            await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/daily_tracks/${trackId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({
                        daily_track: {
                            date: date,
                            odometer_start: odometerStart,
                            odometer_end: odometerEnd,
                            fuel_fee: fuelFee,
                            parking_fee: parkingFee,
                            fines: fines,
                            other_fee: otherFee,
                            other_fee_description: otherFeeDescription,

                        },
                    }),
                }
            );
            // Change the state of the driver the is_chosen to false
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${driverId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    user: {
                        is_chosen: false,
                    },
                }),
            });
            // change the is_chosen state of the vehicle to false
            await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/vehicles/${vehicleId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({
                        vehicle: {
                            is_selected: false,
                        },
                    }),
                }
            );
            setDriverTrack('');

            history.push({
                pathname: "/driver-report",
                state: {
                    dailyTrackId: trackId,
                    userId: count,
                    vehicle: vehicleId
                },
            });
        } catch (err) {
            console.log(err.message);
        }
    }
    // fetch the daily tracks and get the one is assigned to the driver and vehicle
    function fetchDailyTracks() {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/daily_tracks`)
            //     Authorization: `Bearer ${localStorage.getItem("token")}`,
            //   },
            .then((res) => res.json())
            .then((tracks) => {
                const thisDriverTracks = tracks.filter(
                    (track) => track.user_id === count
                );
                if (thisDriverTracks.length > 0) {
                    const last = thisDriverTracks[thisDriverTracks.length - 1];
                    setDriverTrack(last);
                    // console.log(last.user_id)
                    setDriverId(last.user_id);
                    // console.log(last.vehicle_id)
                    setVehicleId(last.vehicle_id);
                    // setTrackId(last.id)
                    setTrackId(last.id)

                    console.log(last);
                }
            });
    }

    useEffect(() => {
        fetchDailyTracks();
    }, [count]);

    return (
        <>
            <FormWrap style={{ marginTop: "100px" }}>
                <Form onSubmit={onFormSubmit}>

                    <Form.Group>
                        <Form.Label htmlFor="date">Select the current date</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="odometerStart">Odometer Start</Form.Label>
                        <Form.Control
                            type="text"
                            name="odometerStart"
                            id="odometerStart"
                            placeholder={odometerStart}
                            value={odometerStart}
                            onChange={(e) => setOdometerStart(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="odometerEnd">Odometer End</Form.Label>
                        <Form.Control
                            type="text"
                            name="odometerEnd"
                            id="odometerEnd"
                            placeholder=""
                            value={odometerEnd}
                            onChange={(e) => setOdometerEnd(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="fuelFee">Fuel Expenses</Form.Label>
                        <Form.Control
                            type="text"
                            name="fuelFee"
                            id="fuelFee"
                            placeholder=""
                            value={fuelFee}
                            onChange={(e) => setFuelFee(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="parkingFee">Parking Expense</Form.Label>
                        <Form.Control
                            type="text"
                            name="parkingFee"
                            id="parkingFee"
                            placeholder=""
                            value={parkingFee}
                            onChange={(e) => setParkingFee(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="fines">Fines</Form.Label>
                        <Form.Control
                            type="text"
                            name="fines"
                            id="fines"
                            placeholder=""
                            value={fines}
                            onChange={(e) => setFines(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="otherFee">Other Expenses</Form.Label>
                        <Form.Control
                            type="text"
                            name="otherFee"
                            id="otherFee"
                            placeholder=""
                            value={otherFee}
                            onChange={(e) => setOtherFee(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="otherFeeDescription">
                            Other Fee Description
            </Form.Label>
                        <Form.Control
                            type="text"
                            name="otherFeeDescription"
                            id="otherFeeDescription"
                            placeholder=""
                            value={otherFeeDescription}
                            onChange={(e) => setOtherFeeDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
          </Button>
                </Form>
            </FormWrap>
        </>
    );
}