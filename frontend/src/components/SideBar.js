import React from "react";
import { NavLink } from "react-router-dom";
import Col from "react-bootstrap/Col";
import styles from "../styles/SideBar.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { useUserType } from "../contexts/UserTypeContext";

const SideBar = () => {
  const currentUser = useCurrentUser();
  const userType = useUserType();

  const addPostsSideBar = (
    <>
      <Col md={12} className={styles.SideBar}>
        <div className={styles.CustomCard}>
          <div className={styles.CardBody}>
            <div className={styles.LinkContainer}>
              <NavLink
                className={styles.Link}
                activeClassName={styles.Active}
                to="/posts/create"
              >
                <i className="fas fa-pencil-alt"></i>Add Post
              </NavLink>
            </div>
            {userType === "employer" && (
              <div className={styles.LinkContainer}>
                <NavLink
                  className={styles.Link}
                  activeClassName={styles.Active}
                  to="/job-posts/create"
                >
                  <i className="fas fa-laptop-code"></i> Add Job
                </NavLink>
              </div>
            )}
          </div>
        </div>
        <div className={`mt-3 text-center ${styles.LinkContainer}`}>
          <div className={styles.Copyright}>
            &copy; Thomas-Tomo Domitrovic
            <div>
              <a
                className=" btn-floating m-1"
                href="https://github.com/Thomas-Tomo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                className="btn btn-floating m-1"
                href="https://www.linkedin.com/in/thomasdomitrovic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </Col>
    </>
  );

  return <>{currentUser && addPostsSideBar}</>; // currentUser && (reverse after PostPage is set up)
};

export default SideBar;
