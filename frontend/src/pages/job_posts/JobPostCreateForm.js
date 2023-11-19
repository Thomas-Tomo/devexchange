import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useRedirect } from "../../hooks/useRedirect";

function JobPostCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const today = new Date().toISOString().split('T')[0];

  const [jobPostData, setjobPostData] = useState({
    title: "",
    description: "",
    location: "",
    job_type: "",
    salary: "",
    application_deadline: "",
    experience_level: "",
    company_name: "",
    company_description: "",
    is_active: true,
    application_instructions: "",
    allows_remote_work: false,
    benefits: "",
  });

  const {
    title,
    description,
    location,
    job_type,
    salary,
    application_deadline,
    experience_level,
    company_name,
    company_description,
    is_active,
    application_instructions,
    allows_remote_work,
    benefits,
  } = jobPostData;

  const history = useHistory();

  const handleChange = (event) => {
    setjobPostData({
      ...jobPostData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("job_type", job_type);
    formData.append("salary", salary);
    formData.append("application_deadline", application_deadline);
    formData.append("experience_level", experience_level);
    formData.append("company_name", company_name);
    formData.append("company_description", company_description);
    formData.append("is_active", is_active);
    formData.append("application_instructions", application_instructions);
    formData.append("benefits", benefits);

    try {
      const { data } = await axiosReq.post("/job-posts/", formData);
      history.push(`/job-posts/${data.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center mb-5 mt-4">
      <Form onSubmit={handleSubmit} className={styles.Form}>
        <Container className={`d-flex flex-column justify-content-center`}>
          <Form.Group controlId="title">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Job Post Title
              </Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add your job post title"
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Form.Group controlId="description">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>Description</Form.Label>
            </div>
            <Form.Control
              as="textarea"
              className={styles.FormControl}
              placeholder="Add description"
              type="text"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.description?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="location">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>Location</Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add location"
              type="text"
              name="location"
              value={location}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.location?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="job_type">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>Job Type</Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add job type"
              type="text"
              name="job_type"
              value={job_type}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.job_type?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="salary">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>Salary</Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add salary"
              type="number"
              name="salary"
              value={salary}
              onChange={handleChange}
              min="0"
            />
          </Form.Group>
          {errors?.salary?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="application_deadline">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Application Deadline
              </Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add application deadline"
              type="date"
              name="application_deadline"
              value={application_deadline}
              onChange={handleChange}
              min={today}
            />
          </Form.Group>
          {errors?.application_deadline?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="experience_level">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Experience Level
              </Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add experience level"
              type="text"
              name="experience_level"
              value={experience_level}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.experience_level?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="company_name">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>Company Name</Form.Label>
            </div>
            <Form.Control
              className={styles.FormControl}
              placeholder="Add company name"
              type="text"
              name="company_name"
              value={company_name}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.company_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="company_description">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Company Description
              </Form.Label>
            </div>
            <Form.Control
              as="textarea"
              className={styles.FormControl}
              placeholder="Add company description"
              type="text"
              name="company_description"
              value={company_description}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.company_description?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="is_active">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>Is Active</Form.Label>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Form.Check
                type="checkbox"
                id="is_active"
                label="Is Active"
                checked={is_active}
                onChange={(e) =>
                  setjobPostData({
                    ...jobPostData,
                    is_active: e.target.checked,
                  })
                }
              />
            </div>
          </Form.Group>
          {errors?.is_active?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="application_instructions">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Application Instructions
              </Form.Label>
            </div>
            <Form.Control
              as="textarea"
              className={styles.FormControl}
              placeholder="Add application instructions"
              type="text"
              name="application_instructions"
              value={application_instructions}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.application_instructions?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="allows_remote_work">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>
                Allows Remote Work
              </Form.Label>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Form.Check
                type="checkbox"
                id="allows_remote_work"
                label="Allows Remote Work"
                checked={allows_remote_work}
                onChange={(e) =>
                  setjobPostData({
                    ...jobPostData,
                    allows_remote_work: e.target.checked,
                  })
                }
              />
            </div>
          </Form.Group>
          {errors?.allows_remote_work?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="benefits">
            <div className="d-flex justify-content-center">
              <Form.Label className={styles.FormLabel}>Benefits</Form.Label>
            </div>
            <Form.Control
              as="textarea"
              className={styles.FormControl}
              placeholder="Add benefits"
              type="text"
              name="benefits"
              value={benefits}
              onChange={handleChange}
            />
          </Form.Group>
          {errors?.benefits?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Container>

        <div className="d-flex justify-content-center">
          <button className={`${btnStyles.Button} mr-2`} type="submit">
            Create
          </button>
          <button className={btnStyles.Button} onClick={() => history.goBack()}>
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
}

export default JobPostCreateForm;
