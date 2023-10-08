import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

function PostCreateForm() {
  return (
    <Form className={styles.Form}>
      <Form.Group controlId="image">
        <Form.Label className={styles.FormLabel}>Upload an Image</Form.Label>
        <label htmlFor="file-input" className={styles.CustomFileInput}>
          Choose File
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          className={styles.FileInput}
        />
      </Form.Group>

      <Form.Group controlId="content">
        <Form.Label className={styles.FormLabel}>Post Title</Form.Label>
        <Form.Control className={styles.FormControl} as="textarea" rows={1} />
      </Form.Group>

      <Form.Group controlId="content">
        <Form.Label className={styles.FormLabel}>Post Content</Form.Label>
        <Form.Control as="textarea" rows={3} />
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
