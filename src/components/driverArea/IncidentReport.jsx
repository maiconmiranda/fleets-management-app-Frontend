import React, { useState } from "react";
import { Form, FormWrap, Button } from "react-bootstrap";



// Display the form for incidents or report conditions.
export function DriverIncidentReport(vehicleId, dailyTrackId) {
    const [incidentDescription, setIncidentDescription] = useState("");
    const [carId, setCarId] = useState(vehicleId);
    const [trackId, setTrackId] = useState(dailyTrackId);

    async function onFormSubmit(e) {
        try {
            e.preventDefault();
            await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/incidents/`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({
                        daily_track: {
                            description: incidentDescription,
                            vehicle_id: carId,
                            daily_track_id: trackId,
                        },
                    }),
                }
            );
            // history.push("/driver-report");
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <FormWrap style={{ marginTop: "50px" }}>
                <Form onSubmit={onFormSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="incidentDescription">
                            Condition Description
                          </Form.Label>
                        <Form.Control
                            type="text"
                            name="incidentDescription"
                            id="incidentDescription"
                            placeholder="Describe any Incidents"
                            value={incidentDescription}
                            onChange={(e) => setIncidentDescription(e.target.value)}
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