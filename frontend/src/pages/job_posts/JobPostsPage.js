import React, { useEffect, useState } from "react";
import JobPost from "./JobPost";
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
import MostRecentJobs from "./MostRecentJobs";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function JobPostsPage({ message, filter = "" }) {
  const [jobPosts, setJobPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch job posts based on the filter and search query
        const { data } = await axiosReq.get(
          `/job-posts/?${filter}search=${query}`
        );
        setJobPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <Row className="mb-4">
      <Col lg={8}>
        <Col lg={4} className="d-lg-none">
          {/* Popular Profiles for Mobile (Visible on Mobile) */}
          <Row>
            <Col className="p-0 p-lg-2">
              <PopularProfiles mobile />
            </Col>
          </Row>
        </Col>
        <Col lg={4} className="d-lg-none">
          {/* Popular Job Posts for Mobile (Visible on Mobile) */}
          <Row>
            <Col className="p-0">
              <MostRecentJobs />
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
            placeholder="Search job posts"
          />
        </Form>
        {hasLoaded ? (
          <>
            {jobPosts.results.length ? (
              <InfiniteScroll
                children={jobPosts.results.map((job_post) => (
                  <JobPost
                    key={job_post.id}
                    {...job_post}
                    setJobPosts={setJobPosts}
                  />
                ))}
                dataLength={jobPosts.results.length}
                loader={<Asset spinner />}
                hasMore={!!jobPosts.next}
                next={() => fetchMoreData(jobPosts, setJobPosts)}
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
            <MostRecentJobs />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default JobPostsPage;
