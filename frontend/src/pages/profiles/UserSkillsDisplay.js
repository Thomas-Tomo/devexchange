import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/UserSkillsDisplay.module.css";
import btnStyles from "../../styles/Button.module.css";
import { UserSkillsEditDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";
import useAlert from "../../hooks/useAlert";

const UserSkillsDisplay = ({ userSkills, profile, currentUser }) => {
  const [deleted, setDeleted] = useState(false);
  const { setAlert } = useAlert();

  // Function to render a clickable link or display a text placeholder
  const renderClickableLink = (url, label) => {
    if (!url || url === "/") {
      return "/";
    }
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  };

  // Function to handle deletion of a user skill
  const handleDelete = async (id) => {
    try {
      await axiosRes.delete(`/user-skills/${id}/`);
      setDeleted(true);
      setAlert("Skills Deleted!", "danger");
    } catch (err) {
      // console.log(err);
    }
  };

  if (deleted) {
    return (
      <>
        {profile?.is_owner &&
          currentUser?.username === profile?.owner &&
          profile?.user_type !== "employer" && (
            <Link to="/user-skills/">
              <button className={`${btnStyles.Button} py-1`}>
                Add My Skills
              </button>
            </Link>
          )}
      </>
    );
  }
  return (
    <>
      {(userSkills.length > 0 ||
        (profile?.is_owner && currentUser?.username === profile?.owner)) && (
        <div className={styles.SkillsContainer}>
          <ul>
            {userSkills.map(
              (skill) =>
                // Check if the user skill belongs to the current profile
                skill.owner === profile?.owner && (
                  <li key={skill.id}>
                    <div className="d-flex">
                      {profile?.user_type !== "employer" && <h4>My Skills:</h4>}
                      {profile?.is_owner && (
                        <UserSkillsEditDropdown
                          id={skill.id} // Pass the bio.id here
                          handleDelete={() => handleDelete(skill.id)}
                        />
                      )}
                    </div>
                    <div className="d-flex flex-column">
                      <p>
                        <strong>Education:</strong> {skill.education || "/"}
                      </p>
                      <p>
                        <strong>Work Experience:</strong>{" "}
                        {skill.work_experience || "/"}
                      </p>
                      <p>
                        <strong>Skills:</strong> {skill.skills || "/"}
                      </p>
                      <p>
                        <strong>Certifications:</strong>{" "}
                        {skill.certifications || "/"}
                      </p>
                      <p>
                        <strong>Languages:</strong> {skill.languages || "/"}
                      </p>

                      <div>
                        <p>
                          <strong>LinkedIn Profile:</strong>{" "}
                          {renderClickableLink(
                            skill.linkedin_profile,
                            skill.linkedin_profile
                          )}
                        </p>
                        <p>
                          <strong>Github Profile:</strong>{" "}
                          {renderClickableLink(
                            skill.github_profile,
                            skill.github_profile
                          )}
                        </p>
                        <p>
                          <strong>Portfolio Website:</strong>{" "}
                          {renderClickableLink(
                            skill.portfolio_website,
                            skill.portfolio_website
                          )}
                        </p>
                      </div>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      )}

      {!userSkills.some((skill) => skill.owner === profile?.owner) &&
        profile?.is_owner &&
        currentUser?.username === profile?.owner &&
        profile?.user_type !== "employer" && (
          <Link to="/user-skills/">
            <button className={`${btnStyles.Button} py-1`}>
              Add My Skills
            </button>
          </Link>
        )}
    </>
  );
};

export default UserSkillsDisplay;
