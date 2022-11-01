import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link, useLocation } from 'react-router-dom';
import styles from './LoginSignupForm.module.scss';

const LoginSignupForm = () => {
  const location = useLocation();

  const isLoginPage = location.pathname.includes('login');
  const handleLogin = (res) => {
    // logics for success and failure
    // console.log(res);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.formWrap}>
      <h1>{isLoginPage ? 'Login' : 'Register'}</h1>
      <div className={styles.googleBtnWrap}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter email addess" />
        <input type="password" placeholder="Enter password" />
        <button type="submit">SIGN IN</button>
      </form>
      <div className={styles.otherOptions}>
        {!isLoginPage ? (
          <>
            <Link to="/login">If you have an account already please login</Link>
          </>
        ) : (
          <>
            <Link to="/signup">If you don't have an account - register</Link>
            <Link to="/forgot-password">Forgot your password</Link>
            <Link to="/guest">Contiune as guest</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignupForm;
