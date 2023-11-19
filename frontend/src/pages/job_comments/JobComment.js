import React, { useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import JobCommentEditForm from "./JobCommentEditForm";
import JobReplies from "./JobReplies";

const JobComment = (props) => {
  const {
    id,
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    comment_like_id,
    comment_likes_count,
    setJobComments,
    setJobPost,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/job-post-comments/${id}/`);
      setJobPost((prevJobPost) => ({
        results: [
          {
            ...prevJobPost.results[0],
            comments_count: prevJobPost.results[0].comments_count - 1,
          },
        ],
      }));
      setJobComments((prevJobComments) => ({
        ...prevJobComments,
        results: prevJobComments.results.filter(
          (job_post_comment) => job_post_comment.id !== id
        ),
      }));
    } catch (err) {}
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/job-post-comment-likes/", {
        job_post_comment: id,
      });
      setJobComments((prevJobComments) => ({
        ...prevJobComments,
        results: prevJobComments.results.map((job_post_comment) => {
          return job_post_comment.id === id
            ? {
                ...job_post_comment,
                comment_likes_count: job_post_comment.comment_likes_count + 1,
                comment_like_id: data.id,
              }
            : job_post_comment;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/job-post-comment-likes/${comment_like_id}/`);
      setJobComments((prevJobComments) => ({
        ...prevJobComments,
        results: prevJobComments.results.map((job_post_comment) => {
          return job_post_comment.id === id
            ? {
                ...job_post_comment,
                comment_likes_count: job_post_comment.comment_likes_count - 1,
                comment_like_id: null,
              }
            : job_post_comment;
        }),
      }));
    } catch (err) {
      console.log(err);
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
            <JobCommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setJobComments={setJobComments}
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
          <JobReplies parentCommentId={id} />
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

export default JobComment;
