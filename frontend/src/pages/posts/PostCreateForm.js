import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import appStyles from "../../App.module.css";
import { useRedirect } from "../../hooks/useRedirect";
import useAlert from "../../hooks/useAlert";

function PostCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const { setAlert } = useAlert();

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
      setAlert("Post Created!", "success");
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div
      className={`${styles.PostCreateEditForm} d-flex justify-content-center mb-5`}
    >
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <Container className={`d-flex flex-column justify-content-center`}>
          <Form.Group controlId="title">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>Post Title</Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add your post title"
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
                className={`d-flex justify-content-center ${styles.FormImageUpload}`}
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

        <Form.Group controlId="content">
          <div className="d-flex justify-content-center">
            <Form.Label className={styles.FormLabel}>Post Content</Form.Label>
          </div>
          <Form.Control
            className={styles.FormControl}
            placeholder="Add your post content here"
            as="textarea"
            rows={3}
            name="content"
            value={content}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <button className={`${btnStyles.Button} mr-2`} type="submit">
            Create
          </button>
          <button className={btnStyles.Button} onClick={() => history.goBack()}>
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
}

export default PostCreateForm;
