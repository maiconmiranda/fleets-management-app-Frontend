import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { HomeNavBar } from "../../components/homeNavBar/HomeNavBar";
import { Footer } from "../footer/Footer";
import { useHistory } from "react-router-dom";
import { FormWrap } from "../logIn/LogInStyle";
import { GetCompany } from "../createCompany/getCompany";


// Display the form for incidents or report conditions.
export function DriverReporPage(props) {
    const history = useHistory();
    console.log(history.location.state)

    const companyId = GetCompany()
    console.log("The company id:", companyId[3])

    const getVehicleId = history.location.state.vehicle
    console.log("this is the vehicle id", getVehicleId)
    const getTrack = history.location.state.dailyTrackId
    console.log("this it the daily track id", getTrack)



    const [reportDescription, setReportDescription] = useState("");

    const [incidentDescription, setIncidentDescription] = useState("");

    // const [vehicleId, setVehicleId] = useState(getVehicleId);
    // const [dailyTrackId, setDailyTrackId] = useState(getTrack);

    async function onFormSubmit(e) {
        try {
            e.preventDefault();
            await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/daily_reports`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({
                        daily_report: {
                            description: reportDescription,
                            vehicle_id: getVehicleId,
                            daily_track_id: getTrack,
                            company_id: companyId[3]
                        },
                    }),
                }
            );
            history.push("/driver-home")
        } catch (err) {
            console.log(err.message);
        }
    }

    async function onFormSubmitIncident(e) {
        try {
            e.preventDefault();
            await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/incidents`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({
                        incident: {
                            description: incidentDescription,
                            vehicle_id: getVehicleId,
                            daily_track_id: getTrack,
                            company_id: companyId[3]
                        },
                    }),
                }
            );
            history.push("/driver-home")
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <div>
                <HomeNavBar />
            </div>
            <div style={{ marginBottom: "60px" }}>
                <div style={{ marginBottom: "80px", marginTop: "40px", display: "flex", justifyContent: "center" }}>
                    <Card style={{ fontStyle: "italic", width: "550px" }}>
                        <Card.Header>Driver Area</Card.Header>
                        <Card.Body>
                            <Card.Title variant="info">Finish your day</Card.Title>
                            <Card.Text>
                                Thank you for submiting your tracking.
                      </Card.Text>
                            <Card.Text>
                                Please don't forget to submit any conditions
                                about the vehicle or any incidents that you may had.
                      </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <FormWrap>
                    <div>
                        <Form onSubmit={onFormSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="reportDescription">
                                    Condition Description
                          </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="reportDescription"
                                    id="reportDescription"
                                    placeholder="Describe any condition about the car"
                                    value={reportDescription}
                                    onChange={(e) => setReportDescription(e.target.value)}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                         </Button>
                        </Form>
                    </div>
                    <div style={{ marginTop: "50px" }}>
                        <Form onSubmit={onFormSubmitIncident}>
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
                    </div>
                </FormWrap>

            </div>
            <Footer />
        </>
    );
}
