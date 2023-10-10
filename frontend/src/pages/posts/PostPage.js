import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import appStyles from "../../App.module.css";

function PostPage() {
  // Add your logic here

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
          <p>Post component content</p>
          <Container>
            Comments
          </Container>
          <Container>
            Replies to comments
          </Container>
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
