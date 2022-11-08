import React from 'react';
import Header from '../../component/Header/Header';
import LoginSignupForm from '../../component/LoginSignupForm/LoginSignupForm';
import useModal from '../../hooks/useModal';
import PasswordForm from '../../component/PasswordForm/PasswordForm';
import styles from './LoginSignup.module.scss';

const LoginSignup = () => {
  const { Modal, openModal } = useModal();
  return (
    <>
      <Header />
      <div className={styles.login}>
        <Modal isClosable={false}>
          <PasswordForm />
        </Modal>
        <div className={styles.container}>
          <div className={styles.loginInner}>
            <LoginSignupForm googleSignupCallback={openModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
