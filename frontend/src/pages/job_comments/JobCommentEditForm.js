import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/CommentCreateEditForm.module.css";

function JobCommentEditForm(props) {
  const { id, content, setShowEditForm, setJobComments } = props;

  const [formContent, setFormContent] = useState(content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/job-post-comments/${id}/`, {
        content: formContent.trim(),
      });
      setJobComments((prevjobComments) => ({
        ...prevjobComments,
        results: prevjobComments.results.map((job_post_comment) => {
          return job_post_comment.id === id
            ? {
                ...job_post_comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : job_post_comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!content.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default JobCommentEditForm;
