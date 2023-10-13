import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <Container className={appStyles.Content}>
      <Row>
        <Col lg={4} className="d-lg-none">
          {/* Popular Profiles for Mobile (Visible on Mobile) */}
          <Row>
            <Col className="p-0 p-lg-2">
              <p>Popular profiles for mobile</p>
            </Col>
          </Row>
        </Col>
        <Col lg={4} className="d-lg-none">
          {/* Popular Profiles for Mobile (Visible on Mobile) */}
          <Row>
            <Col className="p-0 p-lg-2">
              <p>Recent Jobs for mobile</p>
            </Col>
          </Row>
        </Col>
        <Col md={8}>
          {/* Post Component */}
          <Post {...post.results[0]} setPosts={setPost} postPage />
          <Container>Comments</Container>
          <Container>Replies to comments</Container>
        </Col>
        <Col lg={4} className="d-none d-lg-block">
          {/* Right Sidebar */}
          <Row>
            <Col className="p-0 p-lg-2">
              <p>Popular profiles for desktop</p>
            </Col>
          </Row>
          <Row>
            <Col className="p-0 p-lg-2">
              <p>Most recent Jobs for desktop</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default PostPage;
