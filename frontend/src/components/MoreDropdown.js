import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router-dom";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-h"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className={`text-center ${styles.DropdownMenu}`}
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="far fa-edit" title="Edit" />
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash" title="Delete" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu className={`d-flex flex-column ${styles.DropdownMenu}`}>
  <Dropdown.Item
    className={styles.DropdownItem}
    onClick={() => history.push(`/profiles/${id}/edit`)}
    aria-label="edit-profile"
  >
    <i className="fas fa-edit px-2" /> edit profile
  </Dropdown.Item>
  <Dropdown.Item
    className={styles.DropdownItem}
    onClick={() => history.push(`/profiles/${id}/edit/username`)}
    aria-label="edit-username"
  >
    <i className="far fa-id-card px-2" />
    change username
  </Dropdown.Item>
  <Dropdown.Item
    className={styles.DropdownItem}
    onClick={() => history.push(`/profiles/${id}/edit/password`)}
    aria-label="edit-password"
  >
    <i className="fas fa-key px-2" />
    change password
  </Dropdown.Item>
</Dropdown.Menu>
    </Dropdown>
  );
}
