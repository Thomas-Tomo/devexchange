import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

function PostCreateForm() {
  const [image, setImage] = useState(null); // State to store the selected image
  const [content, setContent] = useState(""); // State to store post content
  const [errors, setErrors] = useState({});

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleCreatePost = (e) => {
    e.preventDefault();

    // Validate form fields (you can add your validation logic here)
    if (!image) {
      setErrors({ image: "Please select an image" });
      return;
    }
    if (!content.trim()) {
      setErrors({ content: "Please enter post content" });
      return;
    }

    // Reset errors
    setErrors({});

    // Add your logic for creating a post here
    // For example, you can send a POST request to your API
    // After creating the post, you can navigate to the post detail page
    // For now, let's just clear the form fields
    setImage(null);
    setContent("");
  };

  return (
    <Form>
      <Form.Group controlId="image">
        <Form.Label className={styles.FormLabel}>Upload an Image</Form.Label>
        <label htmlFor="file-input" className={styles.CustomFileInput}>
          Choose File
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.FileInput}
        />

        {errors.image && <div className="text-danger">{errors.image}</div>}
        {image && (
          <img
            src={URL.createObjectURL(image)} // Display the selected image
            alt="Selected"
            className={styles.SelectedImage}
          />
        )}
      </Form.Group>

      <Form.Group controlId="content">
        <Form.Label className={styles.FormLabel}>Post Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {errors.content && (
          <div className={`text-danger ${styles.FormControl}`}>
            {errors.content}
          </div>
        )}
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
