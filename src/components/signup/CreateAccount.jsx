import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HomeNavBar } from "../homeNavBar/HomeNavBar";
import { Wrap, Head, Head2, Text, CardWrap } from "./CreateAccountStyle";
import { Footer } from "../footer/Footer";

export function CreateAccount() {
  return (
    <>
      <Wrap>
        <HomeNavBar />
        <Head>Create Account</Head>
        <Head2>Please select the type of your account</Head2>
        <CardWrap>
          <Card
            style={{ width: "60rem", alignItems: "center", height: "200px" }}
          >
            <Card.Body>
              <Card.Title>For Companies</Card.Title>
              <Card.Text>
                <Text>
                  If you are oppening an account for your Company or
                  Organization, click in the button below.
                </Text>
              </Card.Text>
              <Link to="/create-company">
                <Button variant="primary">I am a Company</Button>
              </Link>
            </Card.Body>
          </Card>
        </CardWrap>
        <CardWrap>
          <Card
            style={{ width: "60rem", alignItems: "center", height: "200px" }}
          >
            <Card.Body>
              <Card.Title>For Drivers</Card.Title>
              <Card.Text>
                <Text>
                  If you are a Driver and your Company already created an
                  account. Then click on the button below to create your
                  account.
                </Text>
              </Card.Text>
              <Link to="/sign-Up">
                <Button variant="primary">I am a Driver</Button>
              </Link>
            </Card.Body>
          </Card>
        </CardWrap>
      </Wrap>
      <Footer />
    </>
  );
}
