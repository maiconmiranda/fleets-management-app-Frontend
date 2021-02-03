import React from "react";
import { Button } from "react-bootstrap";
import { HomeNavBar } from "../../components/homeNavBar/HomeNavBar";
import { Link } from "react-router-dom";
import { ExplanationOne } from "./ExplanationOne";
import { ExplanationTwo } from "./ExplanationTwo";
import { ExplanationThree } from "./ExplanationThree";
import { ExplanationFour } from "./ExplanationFour";
import { ExplanationFive } from "./ExplanationFive";
import { Testimonials } from "./Testimonials";
import { ButtonWrapper, FooterWrapper } from "./HowItWorkStyle";
import { Footer } from "../footer/Footer";

export function HowItWorks() {
  return (
    <>
      <div>
        <HomeNavBar />
      </div>
      <h3
        style={{
          textAlign: "center",
          paddingTop: "150px",
          width: "70%",
          margin: "0 auto 100px",
          lineHeight: "30px",
          fontFamily: "sans-serif",
          fontSize: "25px",
          color: "red",
        }}
      >
        Fleets keep track of the daily expenses and reports made by the drivers,
        such as fuel expenses, fines, vehicle conditions and much more.{" "}
      </h3>
      <ExplanationOne />
      <ExplanationTwo />
      <ExplanationThree />
      <ExplanationFour />
      <ExplanationFive />
      <ButtonWrapper>
        <div>
          <Link to="/create-account">
            <Button variant="danger" size="lg">
              SIGN UP NOW
            </Button>{" "}
          </Link>
        </div>
      </ButtonWrapper>
      <Testimonials />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
}
