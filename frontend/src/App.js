import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import SideBar from './components/SideBar';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Row>
          <SideBar />

          {/* Center Content */}
          <Col md={7}>
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
              <Route render={() => <p>Page not found!</p>} />
            </Switch>
          </Col>

          {/* Right Column */}
          <Col md={3}>
            <Card className="mb-3">
              <Card.Header style={{ color: 'red' }}>Most Recent Jobs</Card.Header>
              <Card.Body>
                {/* Add content for Most Recent Jobs */}
              </Card.Body>
            </Card>
            <Card>
            <Card.Header style={{ color: 'red' }}>Most Followed Profiles</Card.Header>
              <Card.Body>
                {/* Add content for Most Followed Profiles */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
