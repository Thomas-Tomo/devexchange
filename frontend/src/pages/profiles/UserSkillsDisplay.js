import React from "react";
import { Link } from "react-router-dom";

const UserSkillsDisplay = ({ userSkills, profile, currentUser }) => (
  <>
    {(userSkills.length > 0 ||
      (profile?.is_owner && currentUser?.username === profile?.owner)) && (
      <div>
        {profile?.user_type !== "employer" && <h4>My Skills</h4>}
        <ul>
          {userSkills.map(
            (skill) =>
              // Check if the user skill belongs to the current profile
              skill.owner === profile?.owner && (
                <li key={skill.id}>
                  <p>Education: {skill.education || "/"}</p>
                  <p>Work Experience: {skill.work_experience || "/"}</p>
                  <p>Skills: {skill.skills || "/"}</p>
                  <p>Certifications: {skill.certifications || "/"}</p>
                  <p>Languages: {skill.languages || "/"}</p>
                  <p>LinkedIn Profile: {skill.linkedin_profile || "/"}</p>
                  <p>Github Profile: {skill.github_profile || "/"}</p>
                  <p>Portfolio Website: {skill.portfolio_website || "/"}</p>
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
