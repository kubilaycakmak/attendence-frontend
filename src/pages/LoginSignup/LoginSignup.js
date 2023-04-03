import React, { useEffect } from 'react';
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Header from '../../component/Header/Header';
import LoginSignupForm from '../../component/LoginSignupForm/LoginSignupForm';
import useModal from '../../hooks/useModal';
import PasswordForm from '../../component/PasswordForm/PasswordForm';
import styles from './LoginSignup.module.scss';

const LoginSignup = () => {
  const { Modal, openModal, closeModal } = useModal();
  return (
    <>
      <Header />
      <div className={styles.login}>
        <Modal isClosable={false}>
          <PasswordForm closeModal={closeModal} />
        </Modal>
        <div className={styles.container}>
          <div className={styles.loginInner}>
            <LoginSignupForm openModal={openModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
