import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/MostRecentJobs.module.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Asset from "../../components/Asset";

const MostRecentJobs = () => {
  const [recentJobs, setRecentJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentJobs = async () => {
      try {
        const response = await axios.get("/job-posts/");

        // Ensure response.data.results is an array
        if (Array.isArray(response.data.results)) {
          setRecentJobs(response.data.results);
        } else {
          console.error("Invalid response format - results array not found");
        }
      } catch (error) {
        console.error("Error fetching recent jobs:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data (success or error)
      }
    };

    fetchRecentJobs();
  }, []);

  return (
    <Container className={styles.MostRecentJobs}>
      <div>
        <p className="d-flex justify-content-center">Most Recent Jobs</p>
        {loading ? (
          <Asset spinner /> // Display spinner while loading
        ) : (
          <ul>
            {recentJobs.slice(0, 4).map(
              (
                job // Limit to the first four jobs
              ) => (
                <Link to={`/job-posts/${job.id}`} key={job.id}>
                  <li key={job.id}>{job.title}</li>
                  <li>Location: {job.location}</li>
                  <hr></hr>
                </Link>
              )
            )}
          </ul>
        )}
      </div>
    </Container>
  );
};

export default MostRecentJobs;
