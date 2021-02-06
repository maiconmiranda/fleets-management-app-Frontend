import React from "react";
import { FormWrap, ButtonWrap } from "../logIn/LogInStyle";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input } from "./Input";

export function AddVehicle() {
  // const [make, setMake] = useState("");
  // const getInitialState= () =>{
  //   const value = new Date().toISOString();
  //   return {
  //     value: value
  //   }
  // }
  // const handleChange= (value, formattedValue) =>{
  //   this.setState({
  //     value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
  //     formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
  //   });
  // }
  // const componentDidUpdate= ()=>{
  //   // Access ISO String and formatted values from the DOM.
  //   const hiddenInputElement = document.getElementById("example-datepicker");
  //   console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
  //   console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
  // },

  return (
    <>
      {/* <FormWrap> */}
      <Form>
        <Input
          name={"make"}
          label={"Make"}
          placeholder={"Honda"}
        // setName={setMake}
        />
        <Input
          name={"model"}
          label={"Model"}
          placeholder={"Civic"}
        // setName={setModel}
        />
        <Input
          name={"year"}
          label={"Year"}
          placeholder={"2020"}
        // setName={setYear}
        />
        <Input
          name={"color"}
          label={"Color"}
          placeholder={"White"}
        // setName={setColor}
        />

        <Form.Group controlId="formBasicRego">
          <Form.Label htmlFor="rego">Rego</Form.Label>
          <Form.Control
            type="text"
            name="rego"
            id="rego"
            placeholder="License Plate"
          // value={rego}
          // onChange={(e) => setrego(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicRego_expiry_date">
          <Form.Label htmlFor="rego_expiry_date">Rego Expiry Date</Form.Label>
          <Form.Control
            type="text"
            name="rego_expiry_date"
            id="rego_expiry_date"
            placeholder="01/01/2020"
          // value={rego_expiry_date}
          // onChange={(e) => setrego_expiry_date(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicRegistration_cost">
          <Form.Label htmlFor="registration_cost">
            Registration Cost
            </Form.Label>
          <Form.Control
            type="text"
            name="registration_cost"
            id="registration_cost"
            placeholder="Victoria"
          // value={registration_cost}
          // onChange={(e) => setregistration_cost(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicInsurance_provider">
          <Form.Label htmlFor="insurance_provider">
            Insurance Provider
            </Form.Label>
          <Form.Control
            type="text"
            name="insurance_provider"
            id="insurance_provider"
            placeholder="Alianz"
          // value={insurance_provider}
          // onChange={(e) => setinsurance_provider(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicInsurance_policy_number">
          <Form.Label htmlFor="insurance_policy_number">
            Insurance Policy Number
            </Form.Label>
          <Form.Control
            type="text"
            name="insurance_policy_number"
            id="insurance_policy_number"
            placeholder="A202020202020"
          // value={insurance_policy_number}
          // onChange={(e) => setinsurance_policy_number(e.target.value)}
          />
        </Form.Group>
        {/* <DatePicker
            id="example-datepicker"
            value={this.state.value}
            onChange={this.handleChange}
          /> */}
        <Form.Group controlId="formBasicinsurance_expiry_date">
          <Form.Label htmlFor="insurance_expiry_date">
            Insurance expiry Date
            </Form.Label>
          <Form.Control
            type="text"
            name="insurance_expiry_date"
            id="insurance_expiry_date"
            placeholder="01/01/2020"
          // value={insurance_expiry_date}
          // onChange={(e) => setinsurance_expiry_date(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicInsurance_costs">
          <Form.Label htmlFor="Insurance_costs">Insurance Costs</Form.Label>
          <Form.Control
            type="text"
            name="insurance_costs"
            id="insurance_costs"
            placeholder="https://www.maiconco.com.au"
          // value={insurance_costs}
          // onChange={(e) => setinsurance_costs(e.target.value)}
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
      {/* </FormWrap> */}
    </>
  );
}
