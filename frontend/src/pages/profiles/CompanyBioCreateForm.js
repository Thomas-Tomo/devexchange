import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useRedirect } from "../../hooks/useRedirect";
import useAlert from "../../hooks/useAlert";

function CompanyBioCreateForm() {
  useRedirect("loggedOut");
  const { setAlert } = useAlert();

  const [companyBio, setCompanyBio] = useState({
    company_name: "",
    employees_count: 0,
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

  // Handle changes in form inputs
  const handleChange = (event) => {
    setCompanyBio({
      ...companyBio,
      [event.target.name]: event.target.value,
    });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    history.goBack(); // Navigate back to the previous page in history
  };

  // Handle form submission
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
      setAlert("Company Bio Created!", "success");
    } catch (err) {
      // console.log(err);
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
                Employees Count
              </Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add employees number"
              type="number"
              name="employees_count"
              value={employees_count}
              onChange={handleChange}
              min="0"
            />
          </Form.Group>

          <Form.Group controlId="recruitment_status">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Recruitment Status
              </Form.Label>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Form.Check
                type="checkbox"
                id="recruitment_status"
                label="IsActive"
                checked={!!recruiting_status} // Ensure it's always a boolean value
                onChange={(e) =>
                  setCompanyBio({
                    ...companyBio,
                    recruiting_status: e.target.checked,
                  })
                }
              />
            </div>
          </Form.Group>

          <Form.Group controlId="technologies_used">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Technologies Used
              </Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              as="textarea"
              placeholder="Add technologies used"
              type="text"
              name="technologies_used"
              value={technologies_used}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="company_description">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Company Description
              </Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              as="textarea"
              placeholder="Add company description"
              type="text"
              name="company_description"
              value={company_description}
              onChange={handleChange}
            />
          </Form.Group>
        </Container>

        <div className="d-flex justify-content-center">
          <button className={`${btnStyles.Button} mr-2`} type="submit">
            Create
          </button>
          <button className={btnStyles.Button} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CompanyBioCreateForm;
