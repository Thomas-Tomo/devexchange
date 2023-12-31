import React, { useState, useEffect } from "react";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/Comment.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import RepliesEditForm from "./RepliesEditForm";
import useAlert from "../../hooks/useAlert";

const Replies = (props) => {
  const { parentCommentId } = props;

  // State to manage replies and input content for new reply
  const [replies, setReplies] = useState([]);
  const [content, setContent] = useState("");
  const [showReplies, setShowReplies] = useState(false); // State to handle the visibility of replies
  const [showAddReplyForm, setShowAddReplyForm] = useState(false); // State to handle the visibility of the add reply form

  const currentUser = useCurrentUser();
  // State to manage edited reply ID
  const [editReplyId, setEditReplyId] = useState(false);
  const { setAlert } = useAlert();

  // Fetching replies based on the parent comment ID
  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const { data } = await axiosRes.get(`/replies/${parentCommentId}/`);
        setReplies(data);
      } catch (error) {
        // console.error("Error fetching replies:", error);
      }
    };
    fetchReplies();
  }, [parentCommentId]);

  // Function to add a new reply
  const handleAddReply = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosRes.post(`/replies/${parentCommentId}/`, {
        content,
        parent_comment: parentCommentId,
      });
      const newReply = response.data;
      setReplies((prevReplies) => [...prevReplies, newReply]);
      setContent("");
      setShowAddReplyForm(false);
      setAlert("Reply Created!", "success");
    } catch (error) {
      // console.error("Error adding reply:", error);
    }
  };

  // Function to delete a reply
  const handleDelete = async (replyId) => {
    try {
      await axiosRes.delete(`/replies/${parentCommentId}/${replyId}/`);
      setReplies((prevReplies) =>
        prevReplies.filter((reply) => reply.id !== replyId),
      );
      setAlert("Reply Deleted!", "danger");
    } catch (error) {
      // console.error("Error deleting reply:", error);
    }
  };

  // Render replies and the form to add a reply
  return (
    <div>
      {showReplies &&
        replies.map((reply) => (
          <div key={reply.id}>
            <hr />
            <Media>
              <Link to={`/profiles/${reply.profile_id}`}>
                <Avatar src={reply.profile_image} />
              </Link>
              <Media.Body className="align-self-center ml-2">
                <span className={styles.Owner}>{reply.owner}</span>
                <span className={styles.Date}>{reply.updated_at}</span>
                {editReplyId === reply.id ? (
                  <RepliesEditForm
                    replyId={reply.id}
                    parentCommentId={parentCommentId}
                    content={reply.content}
                    setShowEditForm={setEditReplyId}
                    setReplies={setReplies}
                  />
                ) : (
                  <p>{reply.content}</p>
                )}
              </Media.Body>
              {currentUser?.username === reply.owner && (
                <MoreDropdown
                  handleEdit={() => setEditReplyId(reply.id)}
                  handleDelete={() => handleDelete(reply.id)}
                />
              )}
            </Media>
          </div>
        ))}
      {replies.length > 0 && (
        <button
          onClick={() => setShowReplies(!showReplies)}
          className={`${styles.Button} py-0`}
        >
          {showReplies
            ? `Hide Replies (${replies.length})`
            : `View Replies (${replies.length})`}
        </button>
      )}
      {!showAddReplyForm && currentUser ? (
        <button
          onClick={() => setShowAddReplyForm(true)}
          className={`${styles.Button} py-0`}
        >
          Add Reply
        </button>
      ) : !currentUser ? (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Log in to add a reply</Tooltip>}
        >
          <button className={`${styles.Button} py-0`} disabled>
            Add Reply
          </button>
        </OverlayTrigger>
      ) : null}
      {showAddReplyForm && (
        <Form className="pr-1">
          <Form.Group>
            <InputGroup>
              <Form.Control
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write a reply..."
                rows={2}
              />
            </InputGroup>
          </Form.Group>
          <button onClick={handleAddReply} className={`${styles.Button} py-0`}>
            Submit Reply
          </button>
          <button
            onClick={() => setShowAddReplyForm(false)}
            className={`${styles.Button} py-0`}
          >
            Cancel
          </button>
        </Form>
      )}
    </div>
  );
};

export default Replies;
