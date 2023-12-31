import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/ProfilePage.module.css";
import useAlert from "../../hooks/useAlert";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});
  const { setAlert } = useAlert();

  const history = useHistory();
  const { id } = useParams();

  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username);
    } else {
      history.push("/");
    }
  }, [currentUser, history, id]);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username,
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      history.goBack();
      setAlert("Username Updated!", "success");
    } catch (err) {
      // console.log(err);
      setErrors(err.response?.data);
    }
  };
  // Render the form for changing the username
  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={styles.ProfileCard}>
          <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group>
              <Form.Label>Change username</Form.Label>
              <Form.Control
                placeholder="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <button
              className={`${btnStyles.Button}`}
              onClick={() => history.goBack()}
            >
              cancel
            </button>
            <button className={`${btnStyles.Button}`} type="submit">
              save
            </button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UsernameForm;
