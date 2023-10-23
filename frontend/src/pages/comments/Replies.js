import React, { useState, useEffect } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/Comment.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import RepliesEditForm from "./RepliesEditForm";

const Replies = (props) => {
  const { parentCommentId } = props;

  const [replies, setReplies] = useState([]);
  const [content, setContent] = useState("");
  const [showReplies, setShowReplies] = useState(false); // State to handle the visibility of replies
  const [showAddReplyForm, setShowAddReplyForm] = useState(false); // State to handle the visibility of the add reply form

  const currentUser = useCurrentUser();
  const [editReplyId, setEditReplyId] = useState(false);

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const { data } = await axiosRes.get(`/replies/${parentCommentId}/`);
        setReplies(data);
      } catch (error) {
        console.error("Error fetching replies:", error);
      }
    };
    fetchReplies();
  }, [parentCommentId]);

  const handleAddReply = async () => {
    try {
      const response = await axiosRes.post(`/replies/${parentCommentId}/`, {
        content,
        parent_comment: parentCommentId,
      });
      const newReply = response.data;
      setReplies((prevReplies) => [...prevReplies, newReply]);
      setContent("");
      setShowAddReplyForm(false);
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  const handleDelete = async (replyId) => {
    try {
      await axiosRes.delete(`/replies/${parentCommentId}/${replyId}/`);
      setReplies((prevReplies) =>
        prevReplies.filter((reply) => reply.id !== replyId)
      );
    } catch (error) {
      console.error("Error deleting reply:", error);
    }
  };

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
          className={styles.Button}
        >
          {showReplies
            ? `Hide Replies (${replies.length})`
            : `View Replies (${replies.length})`}
        </button>
      )}
      {!showAddReplyForm && (
        <button
          onClick={() => setShowAddReplyForm(true)}
          className={styles.Button}
        >
          Add Reply
        </button>
      )}
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
          <button onClick={handleAddReply} className={styles.Button}>
            Submit Reply
          </button>
          <button
            onClick={() => setShowAddReplyForm(false)}
            className={styles.Button}
          >
            Cancel
          </button>
        </Form>
      )}
    </div>
  );
};

export default Replies;
