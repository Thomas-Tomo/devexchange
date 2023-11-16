import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

function UserSkillsEditForm() {
  const [userSkills, setUserSkills] = useState({
    education: "",
    work_experience: "",
    skills: "",
    certifications: "",
    languages: "",
    linkedin_profile: "",
    github_profile: "",
    portfolio_website: "",
  });

  const {
    education,
    work_experience,
    skills,
    certifications,
    languages,
    linkedin_profile,
    github_profile,
    portfolio_website,
  } = userSkills;

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/user-skills/${id}/`);
        const {
          education,
          work_experience,
          skills,
          certifications,
          languages,
          linkedin_profile,
          github_profile,
          portfolio_website,
          is_owner,
        } = data;
        is_owner
          ? setUserSkills({
              education,
              work_experience,
              skills,
              certifications,
              languages,
              linkedin_profile,
              github_profile,
              portfolio_website,
            })
          : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setUserSkills({
      ...userSkills,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("education", education);
    formData.append("work_experience", work_experience);
    formData.append("skills", skills);
    formData.append("certifications", certifications);
    formData.append("languages", languages);
    formData.append("linkedin_profile", linkedin_profile);
    formData.append("github_profile", github_profile);
    formData.append("portfolio_website", portfolio_website);

    try {
      await axiosReq.put(`/user-skills/${id}/`, formData);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center mb-5 mt-4">
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <Container className={`d-flex flex-column justify-content-center`}>
          <Form.Group controlId="education">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>Education</Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add your education"
              type="text"
              name="education"
              value={education}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="work_experience">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Work Experience
              </Form.Label>
            </div>
            <Form.Control
              as="textarea"
              className={styles.FormControl}
              placeholder="Add work experience"
              type="text"
              name="work_experience"
              value={work_experience}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="skills">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>Skills</Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add skills"
              type="text"
              name="skills"
              value={skills}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="certifications">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Certifications
              </Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add certifications"
              type="text"
              name="certifications"
              value={certifications}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="languages">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>Languages</Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add languages"
              type="text"
              name="languages"
              value={languages}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="linkedin_profile">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                LinkedIn Profile
              </Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add LinkedIn profile"
              type="url"
              name="linkedin_profile"
              value={linkedin_profile}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="github_profile">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Github Profile
              </Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add Github profile"
              type="url"
              name="github_profile"
              value={github_profile}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="portfolio_website">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Portfolio Website
              </Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add portfolio website"
              type="url"
              name="portfolio_website"
              value={portfolio_website}
              onChange={handleChange}
            />
          </Form.Group>
        </Container>
        <div className="d-flex justify-content-center">
          <Button className={`${btnStyles.Button} mr-2`} type="submit">
            Update
          </Button>
          <Button className={btnStyles.Button} onClick={() => history.goBack()}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default UserSkillsEditForm;
