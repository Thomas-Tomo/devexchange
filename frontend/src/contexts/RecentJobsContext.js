import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";

const RecentJobsContext = createContext();

export const useRecentJobs = () => useContext(RecentJobsContext);

export const RecentJobsProvider = ({ children }) => {
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

    fetchRecentJobs();
  }, []);

  return (
    <RecentJobsContext.Provider value={recentJobs}>
      {children}
    </RecentJobsContext.Provider>
  );
};
