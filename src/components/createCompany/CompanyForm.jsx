import React from "react";
import { FormWrap, ButtonWrap } from "../logIn/LogInStyle";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CompanyForm() {
  return (
    <>
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
            <Link to="/company">
              <Button
                variant="primary"
                size="lg"
                id="submit"
                type="submit"
                value="Submit"
              >
                Submit
              </Button>
            </Link>
          </ButtonWrap>
        </Form>
      </FormWrap>
    </>
  );
}
