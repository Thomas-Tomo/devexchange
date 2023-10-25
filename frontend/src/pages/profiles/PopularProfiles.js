import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";

const PopularProfiles = () => {
  const [profileData, setProfileData] = useState({
    // use the pageProfile later
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  const { popularProfiles } = profileData;
  const currentUser = useCurrentUser();

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
    handleMount();
  }, [currentUser]);

  return (
    <Container className={styles.PostCard}>
      {popularProfiles.results.length ? (
        <>
          <p>Most followed profiles</p>
          {popularProfiles.results.map((profile) => (
            <p key={profile.id}>{profile.owner}</p>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
