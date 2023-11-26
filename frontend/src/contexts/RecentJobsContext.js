import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";

// Creating a context for recent job posts
const RecentJobsContext = createContext();

// Custom hook to access recent job posts from context
export const useRecentJobs = () => useContext(RecentJobsContext);

// Provider component managing recent job posts context
export const RecentJobsProvider = ({ children }) => {
  // State to store the fetched recent job posts
  const [recentJobs, setRecentJobs] = useState([]);

  useEffect(() => {
    const fetchRecentJobs = async () => {
      try {
        // Fetch recent job posts from API or database sorted by creation time
        const { data } = await axiosReq.get("/job-posts/?ordering=-created_at");

        setRecentJobs(data); // Set the fetched recent jobs into state
      } catch (error) {
        // console.error("Error fetching recent jobs:", error);
      }
    };

    fetchRecentJobs(); // Invoking the function to fetch recent jobs
  }, []);

  // Providing recent job posts to child components via context
  return (
    <RecentJobsContext.Provider value={recentJobs}>
      {children}
    </RecentJobsContext.Provider>
  );
};
