import React from "react";
import { NavLink } from "react-router-dom";
import { Col } from "react-bootstrap";
import styles from "../styles/SideBar.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const SideBar = () => {
  const currentUser = useCurrentUser();

  const addPostsSideBar = (
    <>
      {/* Left Column */}
      <Col md={2} className={styles.SideBar}>
        <div className={styles.CustomCard}>
          <div className={styles.CardBody}>
            <div className={styles.LinkContainer}>
              <NavLink className={styles.Link} to="/posts/create">
                <i className="fas fa-pencil-alt"></i>Add Post
              </NavLink>
            </div>
            <div className={styles.LinkContainer}>
              <NavLink className={styles.Link} to="/">
                <i className="fas fa-code"></i> Add Job
              </NavLink>
            </div>
          </div>
        </div>
        <div className={`mt-3 ${styles.CustomCard}`}>
          <div>Copyright &copy; Thomas-Tomo Domitrovic</div>
        </div>
      </Col>
    </>
  );

  return <>{currentUser && addPostsSideBar}</>;
};

export default SideBar;
