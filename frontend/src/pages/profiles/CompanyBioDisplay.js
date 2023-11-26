import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/UserSkillsDisplay.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { CompanyBioEditDropdown } from "../../components/MoreDropdown";
import useAlert from "../../hooks/useAlert";

const CompanyBioDisplay = ({ companyBio, profile, currentUser }) => {
  const [deleted, setDeleted] = useState(false);
  const { setAlert } = useAlert();

  // Function to handle deletion of the company bio
  const handleDelete = async (id) => {
    try {
      await axiosRes.delete(`/company-bio/${id}/`);
      setDeleted(true);
      setAlert("Company Bio Deleted!", "danger");
    } catch (err) {
      // console.log(err);
    }
  };

  // If the company bio has been deleted, display appropriate content
  if (deleted) {
    return (
      <>
        {profile?.is_owner &&
          currentUser?.username === profile?.owner &&
          profile?.user_type === "employer" && (
            <Link to="/company-bio/">
              <button className={`${btnStyles.Button} py-1`}>
                Add My Company Bio
              </button>
            </Link>
          )}
      </>
    );
  }
  return (
    <>
      {/* Display company bio information if it exists */}
      {(companyBio.length > 0 ||
        (profile?.is_owner && currentUser?.username === profile?.owner)) && (
        <div className={styles.SkillsContainer}>
          <ul>
            {companyBio.map(
              (bio) =>
                // Check if the company bio belongs to the current profile
                bio.owner === profile?.owner && (
                  <li key={bio.id}>
                    <div className="d-flex">
                      {profile?.user_type === "employer" && (
                        <h4>My Company Bio:</h4>
                      )}
                      {profile?.is_owner && (
                        <CompanyBioEditDropdown
                          id={bio.id} // Pass the bio.id here
                          handleDelete={() => handleDelete(bio.id)}
                        />
                      )}
                    </div>
                    <div className="d-flex flex-column">
                      <p>
                        <strong>Company Name:</strong> {bio.company_name || "/"}
                      </p>
                      <p>
                        <strong>Employees Count:</strong>{" "}
                        {bio.employees_count || "/"}
                      </p>
                      <p>
                        <strong>Recruiting Status:</strong>{" "}
                        {bio.recruiting_status ? (
                          bio.recruiting_status ? (
                            <span>Active</span>
                          ) : (
                            <span>Inactive</span>
                          )
                        ) : (
                          "/"
                        )}
                      </p>
                      <p>
                        <strong>Technologies Used:</strong>{" "}
                        {bio.technologies_used || "/"}
                      </p>
                      <p>
                        <strong>Company Description:</strong>{" "}
                        {bio.company_description || "/"}
                      </p>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      )}

      {!companyBio.some((bio) => bio.owner === profile?.owner) &&
        profile?.is_owner &&
        currentUser?.username === profile?.owner &&
        profile?.user_type === "employer" && (
          <Link to="/company-bio/">
            <button className={`${btnStyles.Button} py-1`}>
              Add My Company Bio
            </button>
          </Link>
        )}
    </>
  );
};

export default CompanyBioDisplay;
