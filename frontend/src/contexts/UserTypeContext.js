// UserTypeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useCurrentUser } from "../contexts/CurrentUserContext";

const UserTypeContext = createContext();

export const useUserType = () => useContext(UserTypeContext);

export const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`/profiles/${currentUser?.profile_id}/`);
        const profileData = response.data;
        const fetchedUserType = profileData.user_type;
        setUserType(fetchedUserType);
      } catch (error) {
        // console.error('Error fetching profile data:', error);
      }
    };

    if (currentUser && currentUser.profile_id) {
      fetchProfileData();
    }
  }, [currentUser, currentUser?.profile_id]);

  return (
    <UserTypeContext.Provider value={userType}>
      {children}
    </UserTypeContext.Provider>
  );
};
