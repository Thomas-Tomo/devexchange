import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import appStyles from "../../App.module.css";

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const { title, content, image } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  return (
    <Form className={styles.Form}>
      <Container className={`d-flex flex-column justify-content-center`}>
        <Form.Group className="text-center cursor">
          {image ? (
            <>
              <figure>
                <Image className={appStyles.Image} src={image} rounded />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Pointer}`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
            </>
          ) : (
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            >
              <Asset src={Upload} message="Click here to upload an image" />
            </Form.Label>
          )}

          <Form.File
            id="image-upload"
            accept="image/*"
            onChange={handleChangeImage}
            style={{ display: 'none' }}
          />
        </Form.Group>
      </Container>

      <Form.Group controlId="title">
        <Form.Label className={styles.FormLabel}>Post Title</Form.Label>
        <Form.Control
          className={styles.FormControl}
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="content">
        <Form.Label className={styles.FormLabel}>Post Content</Form.Label>
        <Form.Control
          className={styles.FormControl}
          as="textarea"
          rows={3}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>

      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`}>
        Cancel
      </Button>
    </Form>
  );
}

export default PostCreateForm;
