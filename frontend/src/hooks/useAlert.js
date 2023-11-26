import { useContext } from "react";
import AlertContext from "../contexts/AlertContext";

// Custom hook to access the alert functionality from the AlertContext
const useAlert = () => useContext(AlertContext);

export default useAlert;
