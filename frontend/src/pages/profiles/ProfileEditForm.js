import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/ProfilePage.module.css";

const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    content: "",
    image: "",
    user_type: "regular",
  });
  const { name, content, image, user_type } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, content, image, user_type } = data;
          setProfileData({ name, content, image, user_type });
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "user_type" && user_type !== "employer") {
      setShowModal(true); // Show the modal
    } else if (name !== "user_type") {
      setProfileData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleConfirmChange = () => {
    setProfileData((prevState) => ({
      ...prevState,
      user_type: "employer",
    }));
    setShowModal(false); // Hide the modal
  };

  const handleCancelChange = () => {
    setShowModal(false); // Hide the modal
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);
    formData.append("user_type", user_type);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
    } catch (err) {
      console.log(err);
      setErrors(err.response?.data);
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Account Type</Form.Label>
        <Form.Control
          as="select"
          value={user_type}
          onChange={handleChange}
          name="user_type"
        >
          {user_type !== "employer" && (
            <option value="regular">Regular User</option>
          )}
          <option value="employer">Employer</option>
        </Form.Control>
      </Form.Group>
      <Modal
        show={showModal}
        onHide={handleCancelChange}
        className={styles.Modal}
      >
        <Modal.Header closeButton className={styles.ModalHeader}>
          <Modal.Title>Confirm Change</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.ModalBody}>
          <p>
            Are you sure you want to change your Account status to Employer? You
            won't be able to revert back to Regular user.
          </p>
          <ul>
            <li>
              You will be able to create job posts and set up your company
              details.
            </li>
            <li>
              Your skills won't be shown on your profile page anymore; they will
              be replaced with company details.
            </li>
          </ul>
        </Modal.Body>

        <Modal.Footer className={styles.ModalFooter}>
          <Button
            variant="secondary"
            onClick={handleCancelChange}
            className={btnStyles.Button}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleConfirmChange}
            className={btnStyles.Button}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={content}
          onChange={handleChange}
          name="content"
          rows={7}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={btnStyles.Button}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={btnStyles.Button} type="submit">
        save
      </Button>
    </>
  );

  return (
    <div className={styles.ProfileCard}>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
            <Container>
              <Form.Group>
                {image && (
                  <figure>
                    <Image src={image} fluid />
                  </figure>
                )}
                {errors?.image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                <div>
                  <Form.Label
                    className={`${btnStyles.Button} btn my-auto`}
                    htmlFor="image-upload"
                  >
                    Change the image
                  </Form.Label>
                </div>
                <Form.File
                  id="image-upload"
                  ref={imageFile}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    if (e.target.files.length) {
                      setProfileData({
                        ...profileData,
                        image: URL.createObjectURL(e.target.files[0]),
                      });
                    }
                  }}
                />
              </Form.Group>
              <div className="d-md-none">{textFields}</div>
            </Container>
          </Col>
          <Col
            md={5}
            lg={6}
            className="d-none d-md-block p-0 p-md-2 text-center"
          >
            <Container>{textFields}</Container>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ProfileEditForm;
