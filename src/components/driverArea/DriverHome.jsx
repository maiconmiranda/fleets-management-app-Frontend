import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { HomeNavBar } from "../../components/homeNavBar/HomeNavBar";
import { Footer } from "../footer/Footer";
import { DriverTrack } from './DriverTrack';

export function DriverHome() {
 


    return (
        <>
            <div>
                <HomeNavBar />
            </div>
            <div style={{marginBottom: "60px"}}>
            <div style={{marginTop: "40px", display: "flex", justifyContent: "center"}}>
                <Card style={{fontStyle: "italic", width: "550px"}}>
                    <Card.Header>Driver Area</Card.Header>
                    <Card.Body>
                        <Card.Title variant="info">Start your day</Card.Title>
                        <Card.Text>
                            In this area before the start of your journey, add the odometer of the selected vehicle.
                            Before the end of your shift add all your the expenses, such as fuel, parking and others.
                            
                      </Card.Text>
                        <Card.Text>
                            
                            Before the end of your shift add all your the expenses, 
                            such as fuel, parking and others.
                            
                      </Card.Text>
                        <Card.Text>
                            Once you submit the tracking details, you will have a page that you can describe any condition
                            about the vehicle.
                      </Card.Text>
                        <Card.Text>
                            If you have any incident, please submit your tracking and describe the incident on next page.
                      </Card.Text>
                    </Card.Body>
                </Card>
            </div>
                <DriverTrack />
            </div>
            <Footer />
        </>
    );
}