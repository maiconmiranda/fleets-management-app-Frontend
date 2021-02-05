import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { HomeNavBar } from "../homeNavBar/HomeNavBar";
import { FormWrap } from "../logIn/LogInStyle";
import { Footer } from "../footer/Footer";
import { Wrap } from "./SignUpStyle";
import { useLocation, useHistory } from "react-router-dom";

export function SignUp(props) {
  const location = useLocation();
  const isManager = location.state.setManagerName;
  const isEmail = location.state.setEmail;
  const isAdminSet = Boolean(location.state.isAdmin);
  console.log(isAdminSet);
  const history = useHistory();
  const [companies, setCompanies] = useState([]);
  const [email, setEmail] = useState(isEmail);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState(isManager);
  const [driverLicenseNumber, setDriverLicenseNumber] = useState("");
  const [driverLicenseExpiry, setDriverLicenseExpiry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyId, setCompanyId] = useState(null);
  const [driverId, setDriverId] = useState("");
  const [isAdmin, setIsAdmin] = useState(isAdminSet);

  const handleChange = (e) => {
    setIsAdmin(e.target.value);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/companies`);
    const companies = await data.json();
    setCompanies(companies);
    console.log(companies);
  };

  // function companyFinder(e) {
  //   setCompanyId(e.target.id);
  // }

  async function onFormSubmit(event) {
    event.preventDefault();
    console.log(companyId);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/sign-up`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              email: email,
              password: password,
              user_name: userName,
              driver_license_number: driverLicenseNumber,
              driver_license_expiry: driverLicenseExpiry,
              company_name: companyName, // console.log(companyId)
              driver_id: driverId,
              company_id: companyId,
              is_admin: isAdmin,
            },
          }),
        }
      );

      console.log(response);
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        isAdmin ? history.push("/company") : history.push("/");
      }
    } catch (err) {
      console.log(err.message);
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
          Sign Up
        </h1>
        <FormWrap>
          <Form onSubmit={onFormSubmit}>
            <Form.Group>
              <Form.Label htmlFor="userName">Username</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                id="userName"
                placeholder="John Smith"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="driverLicenseNumber">
                Driver License Number
              </Form.Label>
              <Form.Control
                type="text"
                name="driverLicenseNumber"
                id="driverLicenseNumber"
                placeholder="040 000 000"
                value={driverLicenseNumber}
                onChange={(e) => setDriverLicenseNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="driverLicenseExpiry">
                Driver License Expiry
              </Form.Label>
              <Form.Control
                type="date"
                name="driverLicenseExpiry"
                id="driverLicenseExpiry"
                placeholder="1212121212"
                value={driverLicenseExpiry}
                onChange={(e) => setDriverLicenseExpiry(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                id="email"
                placeholder="maicon@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="passwordDigest">Password</Form.Label>
              <Form.Control
                type="password"
                name="passwordDigest"
                id="passwordDigest"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="driverId">Driver ID</Form.Label>
              <Form.Control
                type="text"
                name="driverId"
                id="driverId"
                placeholder="111-11-1111"
                value={driverId}
                onChange={(e) => setDriverId(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="driverId">Driver ID</Form.Label>
              <Form.Control
                type="text"
                name="driverId"
                id="driverId"
                placeholder="111-11-1111"
                value={driverId}
                onChange={(e) => setDriverId(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="companyName">Company Name</Form.Label>
              <Form.Control
                as="select"
                name="company"
                id="companyName"
                value={companyName}
                onChange={(e) => {
                  const index = e.target.selectedIndex;
                  const optionElement = e.target.childNodes[index];
                  const id = optionElement.getAttribute("id");

                  setCompanyName(e.target.value);
                  setCompanyId(id);
                }}
              >
                {companies.map((company) => {
                  return (
                    <option
                      key={company.id}
                      value={company.company_name}
                      id={company.id}
                    >
                      {company.company_name}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                disabled
                type="switch"
                name="is_admin"
                id="is_admin"
                defaultChecked={isAdmin}
                value={isAdmin}
                onChange={handleChange}
                label="is admin"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </FormWrap>
      </Wrap>
      <Footer />
    </>
  );
}
