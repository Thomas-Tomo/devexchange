import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Post.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import useAlert from "../../hooks/useAlert";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();
  const { setAlert } = useAlert();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
      setAlert("Post Deleted!", "danger");
    } catch (err) {
      // console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
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
          {is_owner && postPage && (
            <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
          )}
        </div>
      </Media>
      <Card.Body className={styles.PostContent}>
        {title && <Card.Title className={styles.PostTitle}>{title}</Card.Title>}
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} className={styles.PostImage} />
      </Link>
      <Card.Body className={styles.PostContent}>
        {content && (
          <Card.Text className={styles.PostText}>{content}</Card.Text>
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
              overlay={<Tooltip>Log in to like posts</Tooltip>}
            >
              <i className="far fa-thumbs-up" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className="fas fa-comment"></i>
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
