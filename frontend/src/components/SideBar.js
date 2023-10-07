import React from "react";
import { Col, NavLink } from "react-bootstrap";
import styles from "../styles/SideBar.module.css";

const SideBar = () => {
  return (
    <>
      {/* Left Column */}
      <Col md={2} className={styles.SideBar}>
        <div className={styles.CustomCard}>
          <div className={styles.CardBody}>
            <NavLink
              className={styles.NavLink}
              to="/posts/create"
            >
              <i className="fas fa-pencil-alt"></i>Add Post
            </NavLink>
            <NavLink
              className={styles.NavLink}
              to="/posts/create"
            >
              <i className="fas fa-code"></i> Add Job
            </NavLink>
          </div>
        </div>
        <div className={`mt-3 ${styles.CustomCard}`}>
          <div>Copyright &copy; Thomas-Tomo Domitrovic</div>
        </div>
      </Col>
    </>
  );
};

export default SideBar;
