import React from "react";
import { Link } from "react-router-dom";
import { HomeImage, HomeCollection, Card1, Card2, CardText } from "./HomeStyle";
import { Button, CardDeck, Card } from "react-bootstrap";
import { HomeNavBar } from "../../components/homeNavBar/HomeNavBar";
import car_on_road from "../../assets/car_on_road.svg";
import on_scooter from "../../assets/on_scooter.svg";
import guy_and_coin from "../../assets/guy_and_coin.svg";
import tablet_and_guy from "../../assets/tablet_and_guy.svg";
import { Footer } from "../footer/Footer";

export function Home() {
  return (
    <>
      <div>
        <HomeNavBar />
      </div>
      <HomeCollection>
        <CardDeck>
          <Card1>
            <HomeImage src={guy_and_coin} alt="A man holding a coin" />
            <CardText>Daily expenses of each vehicle </CardText>
          </Card1>
          <Card2>
            <HomeImage src={on_scooter} alt="Woman riding scooter" />
            <CardText>Manage drivers</CardText>
          </Card2>
          <Card1>
            <HomeImage src={car_on_road} alt="car on a curved road" />
            <CardText>
              Keep track of the conditions of your Daily expenses of fleet.
            </CardText>
          </Card1>
          <Card2>
            <HomeImage src={tablet_and_guy} alt="Man next to a tablet" />
            <CardText>Get daily reports</CardText>
          </Card2>
        </CardDeck>
      </HomeCollection>
      <CardDeck>
        <Card.Body className="text-center">
          <Card.Title style={{ color: "#FE6D73" }}>And Much More...</Card.Title>
          <Card.Text className="text-info">
            SIMPLE AND EASY TO USE, LEARN HOW IT WORKS
          </Card.Text>
          <Link to="/how-it-works">
            <Button variant="danger">Click Here</Button>
          </Link>
        </Card.Body>
      </CardDeck>
      <Footer />
    </>
  );
}
