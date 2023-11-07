import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
// import styles from "../../styles/Post.module.css";
// import { Link } from "react-router-dom";
// import Avatar from "../../components/Avatar";

const JobPost = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
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

  return (
    <div>
        <h2>{owner}</h2>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Location: {location}</p>
      <p>Job Type: {job_type}</p>
      <p>Salary: {salary}</p>
      <p>Application Deadline: {application_deadline}</p>
      <p>Experience Level: {experience_level}</p>
      <p>Company Name: {company_name}</p>
      <p>Company Description: {company_description}</p>
      <p>Active: {is_active}</p>
      <p>Application Instructions: {application_instructions}</p>
      <p>Allows Remote Work: {allows_remote_work}</p>
      <p>Benefits: {benefits}</p>
      <p>Last Updated: {updated_at}</p>
    </div>
  );
};

export default JobPost;
