// UserTypeContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useCurrentUser } from "../contexts/CurrentUserContext";

// Creating a context for user types
const UserTypeContext = createContext();

// Custom hook to access user type from context
export const useUserType = () => useContext(UserTypeContext);

// Provider component managing user type context
export const UserTypeProvider = ({ children }) => {
  // State to store the user type
  const [userType, setUserType] = useState(null);
  const currentUser = useCurrentUser();

  useEffect(() => {
    // Function to fetch profile data and extract user type
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          `/profiles/${currentUser?.profile_id}/`,
        );
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

  // Providing user type to child components via context
  return (
    <UserTypeContext.Provider value={userType}>
      {children}
    </UserTypeContext.Provider>
  );
};
