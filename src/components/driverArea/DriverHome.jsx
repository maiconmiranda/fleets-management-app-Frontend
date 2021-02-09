import React from "react";
import { Link } from "react-router-dom";
// import { Button, CardDeck, Card } from "react-bootstrap";
import { HomeNavBar } from "../../components/homeNavBar/HomeNavBar";
import { Footer } from "../footer/Footer";

export function DriverHome() {
    return (
        <>
            <div>
                <HomeNavBar />
            </div>
            <div>
                <h1>Driver Area</h1>
            </div>
            <Footer />
        </>
    );
}