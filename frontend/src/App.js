import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import SideBar from "./components/SideBar";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import PostEditForm from "./pages/posts/PostEditForm";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import JobPostCreateForm from "./pages/job_posts/JobPostCreateForm";
import JobPostPage from "./pages/job_posts/JobPostPage";
import JobPostsPage from "./pages/job_posts/JobPostsPage";
import JobPostEditForm from "./pages/job_posts/JobPostEditForm";
import UserSkillsCreateForm from "./pages/profiles/UserSkillsCreateForm";
import UserSkillsEditForm from "./pages/profiles/UserSkillsEditForm";
import CompanyBioCreateForm from "./pages/profiles/CompanyBioCreateForm";
import CompanyBioEditForm from "./pages/profiles/CompanyBioEditForm";
import NotFound from "./components/NotFound";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Row>
          <SideBar />

          {/* Center Content */}
          <Col>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <PostsPage message="No results found. Adjust the search keyword." />
                )}
              />
              <Route
                exact
                path="/jobs"
                render={() => (
                  <JobPostsPage message="No results found. Adjust the search keyword." />
                )}
              />
              <Route
                exact
                path="/feed"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or follow a user."
                    filter={`owner__followed__owner__profile=${profile_id}&`}
                  />
                )}
              />
              <Route
                exact
                path="/liked"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or like a post."
                    filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                  />
                )}
              />
              <Route
                exact
                path="/savedjobs"
                render={() => (
                  <JobPostsPage
                    message="No results found. Adjust the search keyword or save a job post."
                    filter={`saved__owner__profile=${profile_id}&ordering=-saved__created_at&`}
                  />
                )}
              />
              <Route exact path="/profile" render={() => <h1>Profile</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signout" render={() => <h1>Sign Out</h1>} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/edit" render={() => <NotFound />} />
              <Route
                exact
                path="/posts/create"
                render={() => <PostCreateForm />}
              />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route
                exact
                path="/posts/:id/edit"
                render={() => <PostEditForm />}
              />
              <Route exact path="/job-posts/edit" render={() => <NotFound />} />
              <Route
                exact
                path="/job-posts/create"
                render={() => <JobPostCreateForm />}
              />
              <Route
                exact
                path="/job-posts/:id/edit"
                render={() => <JobPostEditForm />}
              />
              <Route
                exact
                path="/job-posts/:id"
                render={() => <JobPostPage />}
              />
              <Route
                exact
                path="/user-skills/"
                render={() => <UserSkillsCreateForm />}
              />
              <Route
                exact
                path="/user-skills/:id/edit"
                render={() => <UserSkillsEditForm />}
              />
              <Route
                exact
                path="/company-bio/"
                render={() => <CompanyBioCreateForm />}
              />
              <Route
                exact
                path="/company-bio/:id/edit"
                render={() => <CompanyBioEditForm />}
              />
              <Route exact path="/profiles/edit" render={() => <NotFound />} />
              <Route
                exact
                path="/profiles/:id"
                render={() => <ProfilePage />}
              />
              <Route
                exact
                path="/profiles/:id/edit/username"
                render={() => <UsernameForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit/password"
                render={() => <UserPasswordForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit"
                render={() => <ProfileEditForm />}
              />
              <Route render={() => <NotFound />} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
