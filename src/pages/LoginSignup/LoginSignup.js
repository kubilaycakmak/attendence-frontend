import React, { useEffect } from 'react';
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Header from '../../component/Header/Header';
import LoginSignupForm from '../../component/LoginSignupForm/LoginSignupForm';
import useModal from '../../hooks/useModal';
import PasswordForm from '../../component/PasswordForm/PasswordForm';
import styles from './LoginSignup.module.scss';

const LoginSignup = () => {
  const state = useSelector(state=>state)
  // const navigate = useNavigate();
  const { Modal, openModal } = useModal();

  // useEffect(() => {
  //   if(state.auth.isAuth){
  //     navigate("/profile")
  //   }
  // }, [])
  
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
