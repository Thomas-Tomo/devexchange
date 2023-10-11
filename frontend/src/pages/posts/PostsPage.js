import React, { useEffect, useState } from "react";
import Post from "./Post";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    fetchPosts();
  }, [filter, pathname]);

  return (
    <Row>
      <Col lg={8}>
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
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <p>No results to display</p>
            )}
          </>
        ) : (
          <p>Loading spinner...</p>
        )}
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
  );
}

export default PostsPage;
