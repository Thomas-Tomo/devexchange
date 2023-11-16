import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useRedirect } from "../../hooks/useRedirect";

function CompanyBioCreateForm() {
  useRedirect("loggedOut");

  const [companyBio, setCompanyBio] = useState({
    company_name: "",
    employees_count: "",
    recruiting_status: "",
    technologies_used: "",
    company_description: "",
  });

  const {
    company_name,
    employees_count,
    recruiting_status,
    technologies_used,
    company_description,
  } = companyBio;
  const history = useHistory();

  const handleChange = (event) => {
    setCompanyBio({
      ...companyBio,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("company_name", company_name);
    formData.append("employees_count", employees_count);
    formData.append("recruiting_status", recruiting_status);
    formData.append("technologies_used", technologies_used);
    formData.append("company_description", company_description);

    try {
      await axiosReq.post("/company-bio/", formData);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`${styles.PostCreateEditForm} d-flex justify-content-center mb-5`}
    >
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <Container className={`d-flex flex-column justify-content-center`}>
          <Form.Group controlId="company_name">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>Company Name</Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add your company name"
              type="text"
              name="company_name"
              value={company_name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="employees_count">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Employes Count
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
              as="textarea"
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
              as="textarea"
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
              as="textarea"
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
            Create
          </Button>
          <Button className={btnStyles.Button} onClick={() => history.goBack()}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default UserSkillsCreateForm;
