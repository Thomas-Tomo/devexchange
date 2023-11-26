import React from "react";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";
import { useHistory } from "react-router-dom";
import btnStyles from "../styles/Button.module.css";

const NotFound = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className={styles.NotFound}>
      <Asset
        src={NoResults}
        message={`Sorry, the page you're looking for doesn't exist`}
      />
      {/* Adding a button to allow the user to go back */}
      <div className="d-flex justify-content-center mb-4">
        <button className={`${btnStyles.Button}`} onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
