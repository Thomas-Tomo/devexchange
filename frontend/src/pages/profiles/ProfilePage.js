import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import btnStyles from "../../styles/Button.module.css";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import UserTypeInfo from "./UserTypeInfo";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showPosts, setShowPosts] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  const [showInfo, setShowInfo] = useState(false);

  const togglePosts = () => {
    setShowPosts((prev) => !prev); // Toggle the state
  };

  const toggleInfo = () => {
    setShowInfo((prev) => !prev); // Toggle the state
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/posts/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <p className="m-2">Account status: {profile?.user_type}</p>
          <Row className="justify-content-center no-gutters">
            <Col xd={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div>
            </Col>
            {profile?.user_type === "employer" && (
              <Col xd={3} className="my-2">
                <div>{profile?.job_posts_count}</div>
                <div>job posts</div>
              </Col>
            )}
            <Col xd={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xd={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} py-1`}
                onClick={() => handleUnfollow(profile)}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} py-1`}
                onClick={() => handleFollow(profile)}
              >
                follow
              </Button>
            ))}
        </Col>
        <Col className="p-3">{profile?.content}</Col>
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <Button className={`${btnStyles.Button} py-1`} onClick={togglePosts}>
        {showPosts ? "Hide Posts" : "Show Posts"}
      </Button>
      {showPosts && (
        <>
          <hr />
          <p className="text-center">{profile?.owner}'s posts</p>
          {profilePosts.results.length ? (
            <InfiniteScroll
              children={profilePosts.results.map((post) => (
                <Post key={post.id} {...post} setPosts={setProfilePosts} />
              ))}
              dataLength={profilePosts.results.length}
              loader={<Asset spinner />}
              hasMore={!!profilePosts.next}
              next={() => fetchMoreData(profilePosts, setProfilePosts)}
            />
          ) : (
            <Asset
              src={NoResults}
              message={`No results found, ${profile?.owner} hasn't posted yet.`}
            />
          )}
          <hr />
        </>
      )}
    </>
  );

  const mainProfileJobPosts = (
    <>
      <hr />
      <p className="text-center">Profile owner's job posts</p>
      <hr />
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={styles.ProfileCard}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {profile?.is_owner && (
                <>
                  <div>
                    <Button
                      className={`${btnStyles.Button} py-1`}
                      onClick={toggleInfo}
                    >
                      {showInfo ? "Hide Info" : "Show Info"}
                    </Button>
                    {showInfo && <UserTypeInfo />}
                  </div>
                </>
              )}
              {mainProfilePosts}
              {mainProfileJobPosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
