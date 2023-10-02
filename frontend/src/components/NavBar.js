import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import logo from "../assets/devexchange-logo.png";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" height="90" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink className={styles.NavLink}>
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink className={styles.NavLink}>
              <i className="fas fa-suitcase"></i>Jobs
            </NavLink>
            <NavLink className={styles.NavLink}>
            <i class="fas fa-list"></i>Feed
            </NavLink>
            <NavLink className={styles.NavLink}>
            <i class="fas fa-thumbs-up"></i>Liked
            </NavLink>
            <NavLink className={styles.NavLink}>
            <i class="fas fa-bookmark"></i>Saved Jobs
            </NavLink>
            <NavLink className={styles.NavLink}>
            <i class="fas fa-user"></i>Profile
            </NavLink>
            <NavLink className={styles.NavLink}>
              <i className="fas fa-sign-in-alt"></i>Sign In
            </NavLink>
            <NavLink className={styles.NavLink}>
              <i className="fas fa-user-plus"></i>Sign Up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
