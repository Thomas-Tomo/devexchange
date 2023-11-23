import Alert from "react-bootstrap/Alert";
import useAlert from "../hooks/useAlert";

import styles from "../styles/AlertPopup.module.css";

const AlertPopup = () => {
  const { alertMessage, alertType } = useAlert();

  if (alertMessage && alertType) {
    return (
      <div className={styles.Alert}>
        <Alert variant={alertType}>{alertMessage}</Alert>
      </div>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;
