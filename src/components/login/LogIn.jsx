import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { HomeNavBar } from "../../components/homeNavBar/HomeNavBar";
import { FormWrap, Wrap } from "./LogInStyle";
import { Footer } from "../footer/Footer";
import { useHistory } from "react-router-dom";
import { AlertDismissibleExample } from "./ErrorLogin"

// Login Page Logic
export function LogIn() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  // Post the login details
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
        throw new Error(AlertDismissibleExample());
      } else {
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
      }
      // Check if the user is Admin or Not
      const userFinder = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const selectedUser = data.find((el) => el.email === email);
          const id = selectedUser.company_id;
          const isAdmin = selectedUser.is_admin;
          const isUser = selectedUser.user_name;
          console.log(selectedUser);
          console.log(id);
          console.log(isAdmin);
          // Redirect User to dashboard if is Admin, otherwise it will go to Drivers page
          isAdmin ? history.push({ pathname: "/company", state: { companyId: id, userName: isUser } }) : history.push("/driver-home");
        });

    } catch (err) {
      setErrMessage(err.message);
    }
  }
  return (
    <>
      <Wrap>
        {/* Top Navbar */}
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
        {/* login form */}
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
