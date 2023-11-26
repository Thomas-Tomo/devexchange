import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimeStamp } from "../../utils/utils";
import useAlert from "../../hooks/useAlert";

const SignUpForm = () => {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");
  const { setAlert } = useAlert();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimeStamp(data);
      history.goBack();
      setAlert(`${username} you logged in successfully!`, "success");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <div className={styles.Container}>
      <Row className={`${styles.Row} m-2`}>
        <Col className="m-auto py-2 p-md-2" md={8}>
          <Container className="p-4">
            <h1 className={styles.Header}>Sign In</h1>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}

              <button
                className={`${btnStyles.Button} ${btnStyles.Wide}`}
                type="submit"
              >
                Sign In
              </button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Container>
          <Container className="mt-3 mb-2 text-center">
            <Link
              className={`${styles.Link} ${styles.ContainerLink}`}
              to="/signup"
            >
              Don't have an account? <span>Sign Up</span>
            </Link>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default SignUpForm;
