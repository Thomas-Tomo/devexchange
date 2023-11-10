import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";

function JobRepliesEditForm(props) {
  const { replyId, parentCommentId, content, setShowEditForm, setReplies } =
    props;

  const [formContent, setFormContent] = useState(content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(
        `/job-post-comment-replies/${parentCommentId}/${replyId}/`,
        {
          content: formContent.trim(),
          parent_comment: parentCommentId,
        }
      );
      setReplies((prevReplies) =>
        prevReplies.map((reply) =>
          reply.id === replyId
            ? { ...reply, content: formContent.trim(), updated_at: "now" }
            : reply
        )
      );
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
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
          Cancel
        </button>
        <button
          className={styles.Button}
          disabled={!formContent.trim()}
          type="submit"
        >
          Save
        </button>
      </div>
    </Form>
  );
}

export default JobRepliesEditForm;
