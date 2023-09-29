import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/devexchange-logo.png";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="90" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Sign In</Nav.Link>
            <Nav.Link>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
