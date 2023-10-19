import React, { useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { axiosRes } from "../../api/axiosDefaults";

const Comment = (props) => {
  const {
    id,
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    comment_like_id,
    comment_likes_count,
  } = props;
  const [likesCount, setLikesCount] = useState(comment_likes_count);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleLike = async () => {
    try {
      await axiosRes.post("/comment-likes/", { comment: id });
      setLikesCount(likesCount + 1);
    } catch (error) {
      console.error("Error liking comment:", error);
    }
  };

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
          <div className={styles.CommentContainer}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Can't like your own comment</Tooltip>}
            >
              <i className="fas fa-thumbs-up" />
            </OverlayTrigger>
          ) : comment_like_id ? (
            <span onClick={() => {}}>
              <i className="fas fa-thumbs-up" />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className="fas fa-thumbs-up" />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like comments</Tooltip>}
            >
              <i className="fas fa-thumbs-up" />
            </OverlayTrigger>
          )}
          {likesCount}
        </div>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
