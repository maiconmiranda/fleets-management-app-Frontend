import React, { useState, useEffect } from "react";
import { Wrap } from "../signUp/SignUpStyle";
import { FormWrap, ButtonWrap } from "../logIn/LogInStyle";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";


export function UpdateCompany() {
  let history = useHistory();
  console.log(history)
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [managerName, setManagerName] = useState("");
  const [abn, setAbn] = useState("");
  const [address, setAddress] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [id, setId] = useState(null)
  const headers = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }

  function fetchCompany() {

    // Call the API
    fetch(`${process.env.REACT_APP_BACKEND_URL}/status`, headers).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    }).then((data) => {
      return fetch(`${process.env.REACT_APP_BACKEND_URL}/companies/` + data.company_id, headers);
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    }).then((company) => {
      setId(company.id)
      setCompanyName(company.company_name)
      setEmail(company.email)
      setManagerName(company.manager_name)
      setAbn(company.abn)
      setAddress(company.address)
      setSuburb(company.suburb)
      setState(company.state)
      setContactNumber(company.contact_number)
      setWebsite(company.website)
    })
      .catch((error) => {
        console.warn(error);
      });
  }
  useEffect(() => {
    fetchCompany();
  }, []);

  async function onFormSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/companies/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          company: {
            company_name: companyName,
            email: email,
            manager_name: managerName,
            abn: abn,
            address: address,
            suburb: suburb,
            state: state,
            contact_number: contactNumber,
            website: website,
          },
        }),
      });
      // redirect_to
      history.push("/company",);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <Wrap style={{ height: "100%" }}>


        <FormWrap>
          <Form onSubmit={onFormSubmit}>
            <Form.Group >
              <Form.Label htmlFor="CompanyName">Company Name</Form.Label>
              <Form.Control
                type="text"
                name="CompanyName"
                id="CompanyName"
                // placeholder=
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </Form.Group>

            <Form.Group >
              <Form.Label htmlFor="Email">Email</Form.Label>
              <Form.Control
                type="Email"
                name="Email"
                id="Email"
                // placeholder="maicon@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group >
              <Form.Label htmlFor="ManagerName">Manager Name</Form.Label>
              <Form.Control
                type="text"
                name="ManagerName"
                id="ManagerName"
                // placeholder="Maicon Miranda"
                value={managerName}
                onChange={(e) => setManagerName(e.target.value)}
              />
            </Form.Group>

            <Form.Group >
              <Form.Label htmlFor="abn">abn</Form.Label>
              <Form.Control
                type="text"
                name="abn"
                id="abn"
                // placeholder="1234567890"
                value={abn}
                onChange={(e) => setAbn(e.target.value)}
              />
            </Form.Group>

            <Form.Group >
              <Form.Label htmlFor="address">Street Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                id="address"
                // placeholder="1 Spencer Street"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group >
              <Form.Label htmlFor="Suburb">Suburb</Form.Label>
              <Form.Control
                type="text"
                name="Suburb"
                id="Suburb"
                // placeholder="Melbourne"
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
              />
            </Form.Group>

            <Form.Group >
              <Form.Label htmlFor="State">State</Form.Label>
              <Form.Control
                type="text"
                name="State"
                id="State"
                // placeholder="Victoria"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </Form.Group>

            <Form.Group >
              <Form.Label htmlFor="ContactNumber">Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="ContactNumber"
                id="ContactNumber"
                // placeholder="(+61) 111 111 111"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group >
              <Form.Label htmlFor="website">Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                id="website"
                // placeholder="https://www.maiconco.com.au"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Form.Group>

            <ButtonWrap>
              <Button
                variant="primary"
                size="lg"
                id="submit"
                type="submit"
                value="submit"
              >
                Submit
            </Button>
            </ButtonWrap>
          </Form>
        </FormWrap>
      </Wrap>
    </>
  );
}
