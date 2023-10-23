import React, { useEffect, useState } from "react";
import Post from "./Post";
import Asset from "../../components/Asset";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

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
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                children={posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col lg={4} className="d-none d-lg-block">
        {/* Right Sidebar */}
        <Row>
          <Col className="p-0 p-lg-2">
            <PopularProfiles />
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
