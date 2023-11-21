import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "./contexts/CurrentUserContext";
import { ProfileDataProvider } from "./contexts/ProfileDataContext";
import { UserTypeProvider } from "./contexts/UserTypeContext";
import { RecentJobsProvider } from "./contexts/RecentJobsContext";

ReactDOM.render(
    <Router>
      <CurrentUserProvider>
        <UserTypeProvider>
          <ProfileDataProvider>
            <RecentJobsProvider>
              <App />
            </RecentJobsProvider>
          </ProfileDataProvider>
        </UserTypeProvider>
      </CurrentUserProvider>
    </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
