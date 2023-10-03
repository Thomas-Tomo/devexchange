import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { Form, Button, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={`${styles.Row} m-2`}>
      <Col className="m-auto py-2 p-md-2" md={8} >
        <Container className="p-4">
          <h1 className={styles.Header}>Create an account</h1>

          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Enter Username"
              />
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="password2">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Button className={`${btnStyles.Button} ${btnStyles.Wide}`} type="submit">
              Sign Up
            </Button>
          </Form>
        </Container>
        <Container className="mt-3 mb-2 text-center">
          <Link className={`${styles.Link} ${styles.ContainerLink}`} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
