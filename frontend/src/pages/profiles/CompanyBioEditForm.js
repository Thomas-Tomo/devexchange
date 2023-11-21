import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useRedirect } from "../../hooks/useRedirect";

function CompanyBioEditForm() {
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
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/company-bio/${id}/`);
        const {
          company_name,
          employees_count,
          recruiting_status,
          technologies_used,
          company_description,
          is_owner,
        } = data;
        is_owner
          ? setCompanyBio({
              company_name,
              employees_count,
              recruiting_status,
              technologies_used,
              company_description,
            })
          : history.push("/");
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [history, id]);

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
      await axiosReq.put(`/company-bio/${id}/`, formData);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex justify-content-center mb-5 mt-4">
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
              placeholder="Add employees count"
              type="number"
              name="employees_count"
              value={employees_count}
              onChange={handleChange}
              min="0"
            />
          </Form.Group>

          <Form.Group controlId="recruiting_status">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Recruiting Status
              </Form.Label>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Form.Check
                type="checkbox"
                id="recruiting_status"
                label="Is Active"
                checked={!!recruiting_status}
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

export default CompanyBioEditForm;
