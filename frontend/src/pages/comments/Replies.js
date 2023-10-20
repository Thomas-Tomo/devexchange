import React, { useState, useEffect } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/Comment.module.css";

const CombinedComponent = ({ parentCommentId, profileImage }) => {
  const [replies, setReplies] = useState([]);
  const [content, setContent] = useState("");

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
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  return (
    <div className={styles.Replies}>
      {replies.map((reply) => (
        <div className={styles.ReplyContainer} key={reply.id}>
          <hr />
          <Media>
            <Link to={`/profiles/${reply.profile_id}`}>
              <Avatar src={profileImage} />
            </Link>
            <Media.Body className="align-self-center ml-2">
              <span className={styles.Owner}>{reply.owner}</span>
              <span className={styles.Date}>{reply.updated_at}</span>
              <p>{reply.content}</p>
            </Media.Body>
          </Media>
        </div>
      ))}
      <div className={styles.AddReplyForm}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a reply..."
          className={styles.TextArea}
        />
        <button onClick={handleAddReply} className={styles.Button}>
          Add Reply
        </button>
      </div>
    </div>
  );
};

export default CombinedComponent;
