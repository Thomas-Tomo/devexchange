import { createContext, useState } from "react";

// Initial state for alert message and type
const initialAlertState = {
  alertMessage: "",
  alertType: "",
};

// Creating a context for AlertPopup
const AlertPopupContext = createContext({
  ...initialAlertState,
  setAlert: () => {},
});

// Provider component for managing alerts
export const AlertProvider = ({ children }) => {
  // State variables for alert message and type
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const setAlert = (alertMessage, alertType) => {
    setAlertMessage(alertMessage);
    setAlertType(alertType);

    // Clearing alert after 4 seconds (4000 milliseconds)
    setTimeout(() => {
      setAlertMessage("");
      setAlertType("");
    }, 4000);
  };
  // Providing the alert message, type, and setAlert function to children components
  return (
    <AlertPopupContext.Provider value={{ alertMessage, alertType, setAlert }}>
      {children}
    </AlertPopupContext.Provider>
  );
};

export default AlertPopupContext;
