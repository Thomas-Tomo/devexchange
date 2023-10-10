import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import SideBar from './components/SideBar';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Row>
          <SideBar />

          {/* Center Content */}
          <Col md={10}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home</h1>} />
              <Route exact path="/jobs" render={() => <h1>Jobs</h1>} />
              <Route exact path="/feed" render={() => <h1>Feed</h1>} />
              <Route exact path="/liked" render={() => <h1>Liked</h1>} />
              <Route exact path="/savedjobs" render={() => <h1>Saved Jobs</h1>} />
              <Route exact path="/profile" render={() => <h1>Profile</h1>} />
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signout" render={() => <h1>Sign Out</h1>} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage />} />
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
