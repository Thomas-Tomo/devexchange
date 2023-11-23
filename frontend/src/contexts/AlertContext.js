import { createContext, useState } from "react";

const initialAlertState = {
  alertMessage: "",
  alertType: "",
};

const AlertPopupContext = createContext({
  ...initialAlertState,
  setAlert: () => {},
});

export const AlertProvider = ({ children }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const setAlert = (alertMessage, alertType) => {
    setAlertMessage(alertMessage);
    setAlertType(alertType);

    setTimeout(() => {
      setAlertMessage("");
      setAlertType("");
    }, 4000);
  };
  return (
    <AlertPopupContext.Provider value={{ alertMessage, alertType, setAlert }}>
      {children}
    </AlertPopupContext.Provider>
  );
};

export default AlertPopupContext;