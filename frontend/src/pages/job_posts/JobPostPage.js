import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import JobPost from "./JobPost";
import JobCommentCreateForm from "../job_comments/JobCommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import styles from "../../styles/Post.module.css";
import JobComment from "../job_comments/JobComment";

function JobPostPage() {
  const { id } = useParams();
  const [job_post, setJobPost] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [job_post_comments, setJobComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: job_post }, { data: job_post_comments }] =
          await Promise.all([
            axiosReq.get(`/job-posts/${id}`),
            axiosReq.get(`/job-post-comments/?job_post=${id}`),
          ]);
        setJobPost({ results: [job_post] });
        setJobComments(job_post_comments);
      } catch (err) {
        // console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <Container className="pb-5">
      <Row className="justify-content-center">
        <Col md={8} className="p-0">
          {/* Job Post Component */}
          <JobPost
            {...job_post.results[0]}
            setJobPosts={setJobPost}
            jobPostPage
          />
          <Container className={styles.CommentCard}>
            {currentUser ? (
              <JobCommentCreateForm
                profile_id={currentUser.profile_id}
                profileImage={profile_image}
                job_post={id}
                setJobPost={setJobPost}
                setJobComments={setJobComments}
              />
            ) : job_post_comments.results.length ? (
              "Comments"
            ) : null}
            {job_post_comments.results.length ? (
              <InfiniteScroll
                children={job_post_comments.results.map((job_post_comments) => (
                  <JobComment
                    key={job_post_comments.id}
                    {...job_post_comments}
                    setJobPost={setJobPost}
                    job_post_comments={job_post_comments}
                    setJobComments={setJobComments}
                  />
                ))}
                dataLength={job_post_comments.results.length}
                loader={<Asset spinner />}
                hasMore={!!job_post_comments.next}
                next={() => fetchMoreData(job_post_comments, setJobComments)}
              />
            ) : currentUser ? (
              <span>No comments yet, be first to comment!</span>
            ) : (
              <span>No comments... yet</span>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default JobPostPage;
