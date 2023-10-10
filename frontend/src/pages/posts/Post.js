import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Post.module.css";

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

  return (
    <Card className={styles.PostCard}>
      <Media>
        <Link to={`/profiles/${profile_id}`} className={styles.ProfileLink}>
          <Avatar src={profile_image} height={50} className={styles.ProfileImage} />
          <Media.Body className={styles.ProfileInfo}>
            <h6>{owner}</h6>
            <span>{updated_at}</span>
          </Media.Body>
        </Link>
      </Media>
      <Card.Body className={styles.PostContent}>
        {title && <Card.Title className={styles.PostTitle}>{title}</Card.Title>}
      </Card.Body>
      <Link>
        <Card.Img src={image} alt={title} className={styles.PostImage} />
      </Link>
      <Card.Body className={styles.PostContent}>
        {content && <Card.Text className={styles.PostText}>{content}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Post;
