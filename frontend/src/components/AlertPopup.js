import Alert from "react-bootstrap/Alert";
import useAlert from "../hooks/useAlert";

import styles from "../styles/AlertPopup.module.css";

const AlertPopup = () => {
  // Destructuring alertMessage and alertType from the useAlert custom hook
  const { alertMessage, alertType } = useAlert();

  // Checking if alertMessage and alertType exist
  if (alertMessage && alertType) {
    // If they exist, render an Alert component with provided message and type
    return (
      <div className={styles.Alert}>
        <Alert variant={alertType}>{alertMessage}</Alert>
      </div>
    );
  } else {
    // If either alertMessage or alertType is missing, return an empty fragment
    return <></>;
  }
};

export default AlertPopup;
