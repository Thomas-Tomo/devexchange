import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import JobPost from "./JobPost";

function JobPostPage() {
  const { id } = useParams();
  const [jobPost, setJobPost] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: jobPost }] = await Promise.all([
          axiosReq.get(`/job-posts/${id}`),
        ]);
        setJobPost({ results: [jobPost] });
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <JobPost {...jobPost.results[0]} setJobPosts={setJobPost} jobPostPage />
        <Container>Comments</Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default JobPostPage;
