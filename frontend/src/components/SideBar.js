import React from "react";
import { NavLink } from "react-router-dom";
import { Col } from "react-bootstrap";
import styles from "../styles/SideBar.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { useUserType } from "../contexts/UserTypeContext";

const SideBar = () => {
  const currentUser = useCurrentUser();
  const userType = useUserType();

  const addPostsSideBar = (
    <>
      {/* Left Column */}
      <Col md={12} className={styles.SideBar}>
        <div className={styles.CustomCard}>
          <div className={styles.CardBody}>
            <div className={styles.LinkContainer}>
              <NavLink className={styles.Link} to="/posts/create">
                <i className="fas fa-pencil-alt"></i>Add Post
              </NavLink>
            </div>
            {userType === "employer" && (
              <div className={styles.LinkContainer}>
                <NavLink className={styles.Link} to="/job-posts/create">
                  <i className="fas fa-laptop-code"></i> Add Job
                </NavLink>
              </div>
            )}
          </div>
        </div>
        <div className={`mt-3 text-center ${styles.LinkContainer}`}>
          <div className={styles.Copyright}>
            Copyright &copy; Thomas-Tomo Domitrovic
          </div>
        </div>
      </Col>
    </>
  );

  return <>{currentUser && addPostsSideBar}</>; // currentUser && (reverse after PostPage is set up)
};

export default SideBar;
