import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ title, onModalSubmit }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalOverlay}></div>
      <div className={styles.modalInner}>
        <p className={styles.modalTitle}>{title}</p>
        <button onClick={onModalSubmit} className={styles.modalButton}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
