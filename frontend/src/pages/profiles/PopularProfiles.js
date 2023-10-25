import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/Post.module.css";

const PopularProfiles = () => {
  const [profileData, setProfileData] = useState({
    // use the pageProfile later
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  const { popularProfiles } = profileData;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    handleMount()
  });

  return (
    <Container className={styles.PostCard}>
      <p>Most followed profiles</p>
    </Container>
  );
};

export default PopularProfiles;
