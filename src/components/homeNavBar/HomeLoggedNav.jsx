import React from "react";
import "./HomeNavStyle.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.svg";


// Home nav bar
export function HomeNavBar() {
  return (
    <Navbar collapseOnSelect expand="md" py-5 className="navbar-custom">
      <Navbar.Brand href="#home">
        <img width="344" height="84" src={logo} alt="avatar" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/" className="nav_link" activeClassName="underline">
            Home
          </NavLink>
          <NavLink to="/how-it-works" className="nav_link">
            How It Works
          </NavLink>
          <NavLink to="/login" className="nav_link">
            Log Out
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
