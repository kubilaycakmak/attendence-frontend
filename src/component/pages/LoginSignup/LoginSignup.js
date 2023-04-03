import React from 'react';
import LoginSignupForm from '../../LoginSignupForm/LoginSignupForm';
import styles from './LoginSignup.module.scss';

const LoginSignup = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.loginInner}>
          <LoginSignupForm />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
