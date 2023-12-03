import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../styles/ConfirmationModal.module.css";
import btnStyles from "../styles/Button.module.css";

const ConfirmationModal = ({ show, onHide, onConfirm }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className={styles.ModalHeader}>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.ModalBody}>
        <p>Please confirm to delete</p>
      </Modal.Body>
      <Modal.Footer className={styles.ModalFooter}>
        <button
          variant="secondary"
          onClick={onHide}
          className={btnStyles.Button}
        >
          Cancel
        </button>
        <button
          variant="danger"
          onClick={onConfirm}
          className={btnStyles.Button}
        >
          Delete
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
