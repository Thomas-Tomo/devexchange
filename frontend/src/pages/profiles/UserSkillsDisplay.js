import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/UserSkillsDisplay.module.css";

const UserSkillsDisplay = ({ userSkills, profile, currentUser }) => (
  <>
    {(userSkills.length > 0 ||
      (profile?.is_owner && currentUser?.username === profile?.owner)) && (
      <div className={styles.SkillsContainer}>
        {profile?.user_type !== "employer" && <h4>My Skills:</h4>}
        <ul>
          {userSkills.map(
            (skill) =>
              // Check if the user skill belongs to the current profile
              skill.owner === profile?.owner && (
                <li key={skill.id}>
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
                  <Link to={`/user-skills/${id}`}>
    <button>Edit User Skills</button>
  </Link>
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
          <button>Create User Skills</button>
        </Link>
      )}
  </>
);

export default UserSkillsDisplay;
