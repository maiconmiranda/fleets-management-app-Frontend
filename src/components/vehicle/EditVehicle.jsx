import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { FormWrap, ButtonWrap } from "../logIn/LogInStyle";
import { Form, Button } from "react-bootstrap";

export function EditVehicle(props) {
  const location = useLocation();
  const history = useHistory();
  const id = location.data.id;
  console.log(id);
  const [make, setMake] = useState(location.data.make);
  const [fleetId, setFleetId] = useState(location.data.fleet_id);
  const [model, setModel] = useState(location.data.model);
  const [year, setYear] = useState(location.data.year);
  const [color, setColor] = useState(location.data.color);
  const [rego, setRego] = useState(location.data.rego);
  const [regoExpiryDate, setRegoExpiryDate] = useState(
    location.data.rego_expiry_date
  );
  const [registrationCost, setRegistrationCost] = useState(
    location.data.registration_cost
  );
  const [insuranceProvider, setInsuranceProvider] = useState(
    location.data.insurance_provider
  );
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState(
    location.data.insurance_policy_number
  );
  const [insuranceExpiryDate, setInsuranceExpiryDate] = useState(
    location.data.insurance_expiry_date
  );
  const [insuranceCosts, setInsuranceCosts] = useState(
    location.data.insurance_costs
  );
  const [maintenanceCosts, setMaintenanceCosts] = useState(
    location.data.maintenance_costs
  );


  async function onFormSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/vehicles/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          vehicle: {
            fleet_id: fleetId,
            make: make,
            model: model,
            year: year,
            color: color,
            rego: rego,
            rego_expiry_date: regoExpiryDate,
            registration_fee: registrationCost,
            insurance_provider: insuranceProvider,
            insurance_policy_number: insurancePolicyNumber,
            insurance_expiry_date: insuranceExpiryDate,
            insurance_fee: insuranceCosts,
            maintenance_fee: maintenanceCosts,
          },
        }),
      });
      // redirect_to
      history.push("/company");
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <h1>Edit Vehicle</h1>
        <FormWrap>
          <Form onSubmit={onFormSubmit}>
            <Form.Group controlId="formBasicRego">
              <Form.Label htmlFor="fleetId">Fleet Id</Form.Label>
              <Form.Control
                type="text"
                name="fleet_id"
                id="fleet_id"
                // placeholder={fleetId}
                value={fleetId}
                onChange={(e) => setFleetId(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicRego">
              <Form.Label htmlFor="make">Make</Form.Label>
              <Form.Control
                type="text"
                name="make"
                id="make"
                // placeholder={make}
                value={make}
                onChange={(e) => setMake(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicRego">
              <Form.Label htmlFor="model">Model</Form.Label>
              <Form.Control
                type="text"
                name="model"
                id="model"
                // placeholder={model}
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicRego">
              <Form.Label htmlFor="year">Year</Form.Label>
              <Form.Control
                type="text"
                name="year"
                id="year"
                // placeholder={year}
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicRego">
              <Form.Label htmlFor="color">Color</Form.Label>
              <Form.Control
                type="text"
                name="color"
                id="color"
                // placeholder={color}
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicRego">
              <Form.Label htmlFor="rego">Rego</Form.Label>
              <Form.Control
                type="text"
                name="rego"
                id="rego"
                // placeholder={rego}
                value={rego}
                onChange={(e) => setRego(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicRego_expiry_date">
              <Form.Label htmlFor="rego_expiry_date">
                Rego Expiry Date
              </Form.Label>
              <Form.Control
                type="date"
                name="rego_expiry_date"
                id="rego_expiry_date"
                // placeholder={regoExpiryDate}
                value={regoExpiryDate}
                onChange={(e) => setRegoExpiryDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicRegistration_cost">
              <Form.Label htmlFor="registration_fee">
                Registration Cost
              </Form.Label>
              <Form.Control
                type="text"
                name="registration_fee"
                id="registration_fee"
                // placeholder={registrationCost}
                value={registrationCost}
                onChange={(e) => setRegistrationCost(e.target.value)}
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
                // placeholder={insuranceProvider}
                value={insuranceProvider}
                onChange={(e) => setInsuranceProvider(e.target.value)}
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
                // placeholder={insurancePolicyNumber}
                value={insurancePolicyNumber}
                onChange={(e) => setInsurancePolicyNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicinsurance_expiry_date">
              <Form.Label htmlFor="insurance_expiry_date">
                Insurance expiry Date
              </Form.Label>
              <Form.Control
                type="date"
                name="insurance_expiry_date"
                id="insurance_expiry_date"
                // placeholder={insuranceExpiryDate}
                value={insuranceExpiryDate}
                onChange={(e) => setInsuranceExpiryDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicInsurance_costs">
              <Form.Label htmlFor="Insurance_fee">Insurance Costs</Form.Label>
              <Form.Control
                type="text"
                name="insurance_fee"
                id="insurance_fee"
                // placeholder={insuranceCosts}
                value={insuranceCosts}
                onChange={(e) => setInsuranceCosts(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicInsurance_costs">
              <Form.Label htmlFor="maintenance_fee">
                Maintenance Costs
              </Form.Label>
              <Form.Control
                type="text"
                name="maintenance_fee"
                id="maintenance_fee"
                // placeholder={maintenanceCosts}
                value={maintenanceCosts}
                onChange={(e) => setMaintenanceCosts(e.target.value)}
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
      </div>
    </>
  );
}
