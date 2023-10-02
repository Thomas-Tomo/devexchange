import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/devexchange-logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top" variant="dark">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="90" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left mt-3">
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/">
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink className={styles.NavLink} to="/">
              <i className="fas fa-suitcase"></i>Jobs
            </NavLink>
            <NavLink className={styles.NavLink} to="/">
              <i className="fas fa-list"></i>Feed
            </NavLink>
            <NavLink className={styles.NavLink} to="/">
              <i className="fas fa-thumbs-up"></i>Liked
            </NavLink>
            <NavLink className={styles.NavLink} to="/">
              <i className="fas fa-bookmark"></i>Saved Jobs
            </NavLink>
            <NavLink className={styles.NavLink} to="/">
              <i className="fas fa-user"></i>Profile
            </NavLink>
            <NavLink className={styles.NavLink} to="/">
              <i className="fas fa-sign-in-alt"></i>Sign In
            </NavLink>
            <NavLink className={styles.NavLink} to="/">
              <i className="fas fa-sign-out-alt"></i>Sign Out
            </NavLink>
            <NavLink className={styles.NavLink} to="/">
              <i className="fas fa-user-plus"></i>Sign Up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
