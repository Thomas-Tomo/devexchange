import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";
import useAlert from "../hooks/useAlert";

// Creating context for profile data and setting profile data
const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

// Custom hooks for accessing profile data and setting profile data
export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

// Provider component managing profile data context
export const ProfileDataProvider = ({ children }) => {
  const { setAlert } = useAlert();

  const [profileData, setProfileData] = useState({
    // Initializing pageProfile and popularProfiles
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  const currentUser = useCurrentUser(); // Accessing current user from context

  const handleUnfollow = async (clickedProfile) => {
    try {
      await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);
      // Updating profileData after unfollowing
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) =>
            unfollowHelper(profile, clickedProfile),
          ),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) =>
            unfollowHelper(profile, clickedProfile),
          ),
        },
      }));
      setAlert("User Unfollowed!", "danger");
    } catch (err) {
      // console.log(err);
    }
  };

  const handleFollow = async (clickedProfile) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedProfile.id,
      });
      // Updating profileData after following
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id),
          ),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id),
          ),
        },
      }));
      setAlert("User Followed!", "success");
    } catch (err) {
      // console.log(err);
    }
  };

  // Fetching popular profiles on mount or when currentUser changes
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count",
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        // console.log(err);
      }
    };
    handleMount();
  }, [currentUser]);

  // Providing profileData, setProfileData, handleFollow, and handleUnfollow to child components
  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider
        value={{ setProfileData, handleFollow, handleUnfollow }}
      >
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
