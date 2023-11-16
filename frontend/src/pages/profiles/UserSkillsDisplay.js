import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/UserSkillsDisplay.module.css";
import btnStyles from "../../styles/Button.module.css";
import { UserSkillsEditDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

const UserSkillsDisplay = ({ userSkills, profile, currentUser }) => {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async (id) => {
    try {
      await axiosRes.delete(`/user-skills/${id}/`);
      setDeleted(true);
    } catch (err) {
      console.log(err);
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
                      <UserSkillsEditDropdown
                        id={skill.id} // Pass the skill.id here
                        handleDelete={() => handleDelete(skill.id)}
                      />
                    </div>
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
                    <p>
                      <strong>LinkedIn Profile:</strong>{" "}
                      {skill.linkedin_profile || "/"}
                    </p>
                    <p>
                      <strong>Github Profile:</strong>{" "}
                      {skill.github_profile || "/"}
                    </p>
                    <p>
                      <strong>Portfolio Website:</strong>{" "}
                      {skill.portfolio_website || "/"}
                    </p>
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
