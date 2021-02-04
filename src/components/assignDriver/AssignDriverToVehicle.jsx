import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Line } from "./AsignDriverStyle";
// import { Link } from "react-router-dom";

export function AssignDriverToVehicle() {
  return (
    <Form>
      <Line>
        <Form.Group as={Col} controlId="formGridEmail">
          <Col sm={7} className="my-1">
            <Form.Label
              className="mr-sm-2"
              htmlFor="inlineFormCustomSelect"
              srOnly
            >
              Registration
            </Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">Drivers</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Line>
      <Line>
        <h3>Select Vehicle</h3>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Col sm={7} className="my-1">
              <Form.Label
                className="mr-sm-2"
                htmlFor="inlineFormCustomSelect"
                srOnly
              >
                Registration
              </Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="0">By Registration</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <p>Or</p>
          <Form.Group as={Col} controlId="formGridPassword">
            <Col sm={7} className="my-1">
              <Form.Label
                className="mr-sm-2"
                htmlFor="inlineFormCustomSelect"
                srOnly
              >
                Fleet Number
              </Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="0">Fleet number</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Button
            style={{ height: "30px", width: "90px" }}
            variant="primary"
            size="sm"
            type="submit"
          >
            Assign
          </Button>
        </Form.Row>
      </Line>
    </Form>
  );
}
