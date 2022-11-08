import React, { useState, useRef } from 'react';
import styles from '../component/ui/Modal/Modal.module.scss';

const useModal = () => {
  const [isShown, setIsShown] = useState(false);
  const modalOverlay = useRef();

  const openModal = () => {
    setIsShown(true);
  };
  const closeModal = (e) => {
    if (e.target === modalOverlay.current) setIsShown(false);
  };
  /**
   * usage example:
   *   <Modal isClosable={false}>
   *     <PasswordForm />
   *   </Modal>
   */
  const Modal = ({ children, isClosable = true }) =>
    isShown && (
      <div className={styles.modal}>
        <div
          ref={modalOverlay}
          className={styles.modalOverlay}
          onClick={(e) => {
            if (isClosable) closeModal(e);
          }}
        >
          <div className={styles.modalInner}>{children}</div>
        </div>
      </div>
    );

  return { Modal, openModal, closeModal };
};

export default useModal;
