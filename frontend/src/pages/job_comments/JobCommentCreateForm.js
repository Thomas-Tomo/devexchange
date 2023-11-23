import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import useAlert from "../../hooks/useAlert";

function JobCommentCreateForm(props) {
  const { job_post, setJobPost, setJobComments, profileImage, profile_id } =
    props;
  const [content, setContent] = useState("");
  const { setAlert } = useAlert();

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/job-post-comments/", {
        content,
        job_post,
      });
      setJobComments((prevJobComments) => ({
        ...prevJobComments,
        results: [data, ...prevJobComments.results],
      }));
      setJobPost((prevJobPost) => ({
        results: [
          {
            ...prevJobPost.results[0],
            comments_count: prevJobPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
      setAlert("Comment posted!", "success");
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default JobCommentCreateForm;
