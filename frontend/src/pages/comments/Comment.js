import React, { useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import CommentEditForm from "./CommentEditForm";
import Replies from "./Replies";

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
    setComments,
    setPost,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/comment-likes/", { comment: id });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                comment_likes_count: comment.comment_likes_count + 1,
                comment_like_id: data.id,
              }
            : comment;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/comment-likes/${comment_like_id}/`);
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                comment_likes_count: comment.comment_likes_count - 1,
                comment_like_id: null,
              }
            : comment;
        }),
      }));
    } catch (err) {
      // console.log(err);
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
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
          <div className={styles.CommentContainer}>
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Can't like your own comment</Tooltip>}
              >
                <i className="far fa-thumbs-up" />
              </OverlayTrigger>
            ) : comment_like_id ? (
              <span onClick={handleUnlike}>
                <i className="fas fa-thumbs-up" />
              </span>
            ) : currentUser ? (
              <span onClick={handleLike}>
                <i className="far fa-thumbs-up" />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to like comments</Tooltip>}
              >
                <i className="far fa-thumbs-up" />
              </OverlayTrigger>
            )}
            {comment_likes_count}
          </div>
          <Replies parentCommentId={id} />
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </div>
  );
};

export default Comment;
