import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
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

  const imageInput = useRef(null);
  const history = useHistory();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (<div className={styles.PostCreateEditForm}>
    <Form onSubmit={handleSubmit} className={styles.Form}>
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
            ref={imageInput}
            style={{ display: "none" }}
          />
        </Form.Group>
        {errors?.image?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
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
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

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
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button className={`${btnStyles.Button}`} type="submit">
        Create
      </Button>
      <Button
        className={`${btnStyles.Button}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
    </Form>
    </div>
  );
}

export default PostCreateForm;
