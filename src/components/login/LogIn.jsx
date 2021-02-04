import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { HomeNavBar } from "../../components/homeNavBar/HomeNavBar";
import { FormWrap, Wrap } from "./LogInStyle";
import { Footer } from "../footer/Footer";

export function LogIn(history) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  async function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      auth: { email, password },
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        history.push("/");
      }
    } catch (err) {
      setErrMessage(err.message);
    }
  }
  return (
    <>
      <Wrap>
        <HomeNavBar />
        <h1
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontFamily: "sans-serif",
            fontSize: "35px",
          }}
        >
          Log In
        </h1>
        {errMessage && <span>{errMessage}</span>}
        <FormWrap>
          <Form onSubmit={onFormSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" vaule="Submit">
              Submit
            </Button>
          </Form>
        </FormWrap>
      </Wrap>
      <Footer />
    </>
  );
}
