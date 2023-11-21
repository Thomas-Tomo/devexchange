import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/JobPost.module.css";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

const JobPost = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    saved_count,
    saved_id,
    title,
    description,
    location,
    job_type,
    salary,
    application_deadline,
    experience_level,
    company_name,
    company_description,
    is_active,
    application_instructions,
    allows_remote_work,
    benefits,
    updated_at,
    jobPostPage,
    setJobPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/job-posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/job-posts/${id}/`);
      history.goBack();
    } catch (err) {
      // console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/job-post-likes/", {
        job_post: id,
      });
      setJobPosts((prevJobPosts) => ({
        ...prevJobPosts,
        results: prevJobPosts.results.map((jobPost) => {
          return jobPost.id === id
            ? {
                ...jobPost,
                likes_count: jobPost.likes_count + 1,
                like_id: data.id,
              }
            : jobPost;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/job-post-likes/${like_id}/`);
      setJobPosts((prevJobPosts) => ({
        ...prevJobPosts,
        results: prevJobPosts.results.map((jobPost) => {
          return jobPost.id === id
            ? {
                ...jobPost,
                likes_count: jobPost.likes_count - 1,
                like_id: null,
              }
            : jobPost;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleSave = async () => {
    try {
      const { data } = await axiosRes.post("/job-post-saved/", {
        job_post: id,
      });
      setJobPosts((prevJobPosts) => ({
        ...prevJobPosts,
        results: prevJobPosts.results.map((jobPost) => {
          return jobPost.id === id
            ? {
                ...jobPost,
                saved_count: jobPost.saved_count + 1,
                saved_id: data.id,
              }
            : jobPost;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnsave = async () => {
    try {
      await axiosRes.delete(`/job-post-saved/${saved_id}/`);
      setJobPosts((prevJobPosts) => ({
        ...prevJobPosts,
        results: prevJobPosts.results.map((jobPost) => {
          return jobPost.id === id
            ? {
                ...jobPost,
                saved_count: jobPost.saved_count - 1,
                saved_id: null,
              }
            : jobPost;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Card className={styles.PostCard}>
      <Media className="d-flex justify-content-between align-items-center mr-2">
        <Link to={`/profiles/${profile_id}`} className={styles.ProfileLink}>
          <div className="d-flex align-items-center">
            <Avatar
              src={profile_image}
              height={50}
              className={styles.ProfileImage}
            />
            <Media.Body className={styles.ProfileInfo}>
              <h6>{owner}</h6>
              <span>{updated_at}</span>
            </Media.Body>
          </div>
        </Link>
        <div>
          {is_owner && jobPostPage && (
            <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
          )}
        </div>
      </Media>
      <Card.Body className={styles.PostContent}>
        <Link to={`/job-posts/${id}`}>
          {title && (
            <Card.Title className={styles.PostTitle}>{title}</Card.Title>
          )}
        </Link>
      </Card.Body>

      <Card.Body className={styles.PostContent}>
        {description && (
          <div className={styles.PostItem}>
            <span className={styles.PostItemTitle}>Description:</span>
            <span className={styles.PostItemValue}>{description}</span>
          </div>
        )}
        {job_type && (
          <div className={styles.PostItem}>
            <span className={styles.PostItemTitle}>Job Type:</span>
            <span className={styles.PostItemValue}>{job_type}</span>
          </div>
        )}
        {location && (
          <div className={styles.PostItem}>
            <span className={styles.PostItemTitle}>Location:</span>
            <span className={styles.PostItemValue}>{location}</span>
          </div>
        )}
        {salary && (
          <div className={styles.PostItem}>
            <span className={styles.PostItemTitle}>Monthly Salary:</span>
            <span className={styles.PostItemValue}>{salary} €</span>
          </div>
        )}
        {application_deadline && (
          <div className={styles.PostItem}>
            <span className={styles.PostItemTitle}>Application Deadline:</span>
            <span className={styles.PostItemValue}>{application_deadline}</span>
          </div>
        )}
        {application_instructions && (
          <div className={styles.PostItem}>
            <span className={styles.PostItemTitle}>
              Application Instructions:
            </span>
            <span className={styles.PostItemValue}>
              {application_instructions}
            </span>
          </div>
        )}
        {experience_level && (
          <div className={styles.PostItem}>
            <span className={styles.PostItemTitle}>Experience Level:</span>
            <span className={styles.PostItemValue}>{experience_level}</span>
          </div>
        )}
        {company_name && (
          <div className={styles.PostItem}>
            <span className={styles.PostItemTitle}>Company:</span>
            <span className={styles.PostItemValue}>{company_name}</span>
          </div>
        )}
        {company_description && (
          <div className={styles.PostItem}>
            <span className={styles.PostItemTitle}>Company Description:</span>
            <span className={styles.PostItemValue}>{company_description}</span>
          </div>
        )}
        {is_active !== undefined && (
          <div className={styles.PostItem}>
            <span className={styles.PostItemTitle}>Active Job Post:</span>
            <span className={styles.PostItemValue}>
              {is_active ? <span>Active</span> : <span>Inactive</span>}
            </span>
          </div>
        )}
        {allows_remote_work !== undefined && (
          <div className={styles.PostItem}>
            <span className={styles.PostItemTitle}>Allows Remote Work:</span>
            <span className={styles.PostItemValue}>
              {allows_remote_work ? <span>Yes</span> : <span>No</span>}
            </span>
          </div>
        )}
        {benefits && (
          <div className={styles.PostItem}>
            <span className={styles.PostItemTitle}>Benefits:</span>
            <span className={styles.PostItemValue}>{benefits}</span>
          </div>
        )}

        <div className={styles.iconContainer}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Can't like your own post</Tooltip>}
            >
              <i className="far fa-thumbs-up" />
            </OverlayTrigger>
          ) : like_id ? (
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
              overlay={<Tooltip>Log in to like job posts</Tooltip>}
            >
              <i className="far fa-thumbs-up" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/job-posts/${id}`}>
            <i className="fas fa-comment"></i>
          </Link>
          {comments_count}

          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Can't save your own post</Tooltip>}
            >
              <i className="far fa-bookmark" />
            </OverlayTrigger>
          ) : saved_id ? (
            <span onClick={handleUnsave}>
              <i className="fas fa-bookmark" />
            </span>
          ) : currentUser ? (
            <span onClick={handleSave}>
              <i className="far fa-bookmark" />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to save job posts</Tooltip>}
            >
              <i className="far fa-bookmark" />
            </OverlayTrigger>
          )}
          {saved_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobPost;
