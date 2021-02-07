import React, { useState } from "react";
import { FormWrap, ButtonWrap } from "../logIn/LogInStyle";
import { Form, Button } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import { GetUser } from "../main/GetUser";

export function AddVehicle() {
  const history = useHistory()
  const getUser = GetUser();
  const userId = getUser.id
  const getCompanyId = getUser.company_id

  const [companyId, setCompanyId] = useState(getCompanyId);
  const [fleetId, setFleetId] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [rego, setRego] = useState("");
  const [regoExpiryDate, setRegoExpiryDate] = useState("");
  const [registrationFee, setRegistrationFee] = useState("");
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState("");
  const [insuranceExpiryDate, setInsuranceExpiryDate] = useState("");
  const [insuranceFee, setInsuranceFee] = useState("");
  const [maintenanceFee, setMaintenanceFee] = useState("");
  const { id } = useParams

  console.log(id)


  console.log(userId, getCompanyId)

  async function onFormSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/vehicles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`
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
            rego_fee: registrationFee,
            insurance_provider: insuranceProvider,
            insurance_policy_number: insurancePolicyNumber,
            insurance_expiry_date: insuranceExpiryDate,
            insurance_fee: insuranceFee,
            maintenance_fee: maintenanceFee,
            company_id: getCompanyId
          },
        }),
      });
      // redirect_to
      history.push("/view-all-vehicles");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      {/* <FormWrap> */}
      <Form onSubmit={onFormSubmit}>

        <Form.Group >
          <Form.Label htmlFor="companyId">Company Id</Form.Label>
          <Form.Control
            type="text"
            name="companyId"
            id="companyId"
            // placeholder={getCompanyId}
            value={getCompanyId}
          // onChange={(e) => setCompanyId(e.target.value)}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label htmlFor="fleetId">Fleet Id</Form.Label>
          <Form.Control
            type="text"
            name="fleetId"
            id="fleetId"
            placeholder="Fleet number 01"
            value={fleetId}
            onChange={(e) => setFleetId(e.target.value)}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label htmlFor="make">Make</Form.Label>
          <Form.Control
            type="text"
            name="make"
            id="make"
            placeholder="Honda"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label htmlFor="model">Model</Form.Label>
          <Form.Control
            type="text"
            name="model"
            id="model"
            placeholder="Civic"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </Form.Group>

        <Form.Group style={{ width: "150px" }}>
          <Form.Label htmlFor="year">Year</Form.Label>
          <Form.Control
            type="text"
            name="year"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label htmlFor="color">color</Form.Label>
          <Form.Control
            type="text"
            name="color"
            id="color"
            placeholder="White"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label htmlFor="rego">Rego</Form.Label>
          <Form.Control
            type="text"
            name="rego"
            id="rego"
            placeholder="License Plate"
            value={rego}
            onChange={(e) => setRego(e.target.value)}
          />
        </Form.Group>

        <Form.Group style={{ width: "300px" }}>
          <Form.Label htmlFor="regoExpiryDate">Rego Expiry Date</Form.Label>
          <Form.Control
            type="date"
            name="regoExpiryDate"
            id="regoExpiryDate"
            placeholder="01/01/2020"
            value={regoExpiryDate}
            onChange={(e) => setRegoExpiryDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="RegistrationFee">
          <Form.Label htmlFor="registrationFee">
            Registration fee
            </Form.Label>
          <Form.Control
            type="decimal"
            name="registrationFee"
            id="registrationFee"
            placeholder="500.00"
            value={registrationFee}
            onChange={(e) => setRegistrationFee(e.target.value)}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label htmlFor="insuranceProvider">
            Insurance Provider
            </Form.Label>
          <Form.Control
            type="text"
            name="insuranceProvider"
            id="insuranceProvider"
            placeholder="Alianz"
            value={insuranceProvider}
            onChange={(e) => setInsuranceProvider(e.target.value)}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label htmlFor="insurancePolicyNumber">
            Insurance Policy Number
            </Form.Label>
          <Form.Control
            type="text"
            name="insurancePolicyNumber"
            id="insurancePolicyNumber"
            placeholder="A202020202020"
            value={insurancePolicyNumber}
            onChange={(e) => setInsurancePolicyNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group style={{ width: "300px" }}>
          <Form.Label htmlFor="insuranceExpiryDate">
            Insurance expiry Date
            </Form.Label>
          <Form.Control
            type="date"
            name="insuranceExpiryDate"
            id="insuranceExpiryDate"
            placeholder="01/01/2020"
            value={insuranceExpiryDate}
            onChange={(e) => setInsuranceExpiryDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label htmlFor="InsuranceFee">Insurance Costs</Form.Label>
          <Form.Control
            type="decimal"
            name="insuranceFee"
            id="insuranceFee"
            placeholder="500.00"
            value={insuranceFee}
            onChange={(e) => setInsuranceFee(e.target.value)}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label htmlFor="maintenanceFee">Maitenance Cost</Form.Label>
          <Form.Control
            type="decimal"
            name="maintenanceFee"
            id="maintenanceFee"
            value={maintenanceFee}
            onChange={(e) => setMaintenanceFee(e.target.value)}
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
      {/* </FormWrap> */}
    </>
  );
}
