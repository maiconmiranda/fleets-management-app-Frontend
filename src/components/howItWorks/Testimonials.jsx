import React from "react";
import { Carousel } from "react-bootstrap";
import { CarouselWrapper } from "./HowItWorkStyle";

export function Testimonials() {
  return (
    <CarouselWrapper>
      <h1>Client Testimonials</h1>
      <Carousel>
        <Carousel.Item>
          <h2 style={{ color: "blue" }}>David, Delivery Co.</h2>
          <img
            className="d-block w-100"
            src="https://placeimg.com/150/50/peoplegrayscale"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>AMAZING APP!</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h2 style={{ color: "blue" }}>John, Distry Pty</h2>
          <img
            className="d-block w-100"
            src="https://placeimg.com/150/50/arch/grayscale"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>EASY TO USE!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h2 style={{ color: "blue" }}>Carol, MMM Pty</h2>
          <img
            className="d-block w-100"
            src="https://placeimg.com/150/50/tech/grayscale"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>AWESOME!</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  );
}
