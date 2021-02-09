import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";

// Added instyle to overwide bootstrap
const CardFooterStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  borderBottom: "1px solid #227C9D",
  borderTop: "1px solid #227C9D",
  backgroundColor: "white",
};

// Display one selected driver
export function DisplayOneDriver(props) {
  const location = useLocation();
  const history = useHistory();
  const driver = location.data;
  console.log(driver)

  // the driver data is passed through the history and displayed, here the driver id is passed to confirm delete
  async function onDeleteClick(e, driver) {
    console.log(driver.id)
    try {
      e.preventDefault();
      if (window.confirm(`Would you like to delete ${driver.user_name}?`)) {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${driver.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          },
        });
        // redirect to company dashboard
        history.push('/company')
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <h3>View Driver</h3>
      <Card className="card card-body h-100">
        <div classname="col-sm-4 py-2">
          {/* driver details */}
          <Card.Body>
            <Card.Title>Driver Name: {driver.user_name}</Card.Title>
            <Card.Text>
              <p>Email: {driver.email}</p>
              <p>License Number: {driver.driver_license_number}</p>
              <p>License Expiry Date: {driver.driver_license_expiry}</p>
              <p>Driver Id: {driver.id}</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer style={CardFooterStyle}>
            <Link to={{ pathname: "/view-reports", data: driver }}>
              <Button variant="info">Reports</Button>
            </Link>
            <Link to="/company">
              <Button variant="danger" onClick={(e) => onDeleteClick(e, driver)}>Remove</Button>
            </Link>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
}