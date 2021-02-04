import React from "react";
import { FormWrap, ButtonWrap } from "../logIn/LogInStyle";
import { Wrap } from "../signUp/SignUpStyle";
import { HomeNavBar } from "../homeNavBar/HomeNavBar";
import { Form, Button } from "react-bootstrap";
import { Footer } from "../footer/Footer";

export function CreateCompany() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errMessage, setErrMessage] = useState("");

  // async function onFormSubmit(event) {
  //   event.preventDefault();
  //   const body = {
  //     auth: { email, password },
  //   };
  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });
  //     if (response.status >= 400) {
  //       throw new Error("incorrect credentials");
  //     } else {
  //       const { jwt } = await response.json();
  //       localStorage.setItem("token", jwt);
  //       history.push("/subscriptions");
  //     }
  //   } catch (err) {
  //     setErrMessage(err.message);
  //   }
  // }
  return (
    <>
      <Wrap style={{ height: "100%" }}>
        <HomeNavBar />
        <h1
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontFamily: "sans-serif",
            fontSize: "35px",
          }}
        >
          Add your Company Details
        </h1>
        <FormWrap>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label htmlFor="CompanyName">Company Name</Form.Label>
              <Form.Control
                type="text"
                name="CompanyName"
                id="CompanyName"
                placeholder="maicon co."
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label htmlFor="Email">Email</Form.Label>
              <Form.Control
                type="Email"
                name="Email"
                id="Email"
                placeholder="maicon@email.com"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicManagerName">
              <Form.Label htmlFor="ManagerName">Manager Name</Form.Label>
              <Form.Control
                type="text"
                name="ManagerName"
                id="ManagerName"
                placeholder="Maicon Miranda"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicAbn">
              <Form.Label htmlFor="abn">abn</Form.Label>
              <Form.Control
                type="text"
                name="abn"
                id="abn"
                placeholder="1234567890"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicStreetAddress">
              <Form.Label htmlFor="StreetAddress">Street Address</Form.Label>
              <Form.Control
                type="text"
                name="StreetAddress"
                id="StreetAddress"
                placeholder="1 Spencer Street"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSuburb">
              <Form.Label htmlFor="Suburb">Suburb</Form.Label>
              <Form.Control
                type="text"
                name="Suburb"
                id="Suburb"
                placeholder="Melbourne"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSuburb">
              <Form.Label htmlFor="State">State</Form.Label>
              <Form.Control
                type="text"
                name="State"
                id="State"
                placeholder="Victoria"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSuburb">
              <Form.Label htmlFor="ContactNumber">Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="ContactNumber"
                id="ContactNumber"
                placeholder="(+61) 111 111 111"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicSuburb">
              <Form.Label htmlFor="Website">Website</Form.Label>
              <Form.Control
                type="text"
                name="CWebsite"
                id="CWebsite"
                placeholder="https://www.maiconco.com.au"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <ButtonWrap>
              <Button
                variant="primary"
                size="lg"
                id="submit"
                type="submit"
                value="Submit"
              >
                Submit
              </Button>
            </ButtonWrap>
          </Form>
        </FormWrap>
      </Wrap>
      <Footer />
    </>
  );
}
