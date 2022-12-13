import React, { useState, useContext } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Link, useLocation } from 'react-router-dom';
import styles from './LoginSignupForm.module.scss';
import { register } from '../../services/auth-service';
import { login } from '../../services/auth-service';
import { useNavigate } from 'react-router-dom';
import GoogleLoginSignUpButton from '../GoogleLoginSignUpButton/GoogleLoginSignUpButton';
import { AlertContext } from '../../contexts/AlertContext';

import localStorageHelper from '../../helpers/localStorageHelper';

const LoginSignupForm = ({ openModal }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();

  const { setAlert } = useContext(AlertContext);

  const isLoginPage = location.pathname.includes('login');
  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(username, fullName, password, email, 'student').then(
      ({ data: { message, token }, resultType }) => {
        if (resultType === 'error') {
          setAlert({ message, type: resultType });
          return;
        }
        localStorageHelper('set', 'token', token);
        setAlert({});
        navigate('/profile');
      }
    );
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password).then(
        ({ data: { message, token }, resultType }) => {
          if (resultType === 'error') {
            setAlert({ message, type: resultType });
            return;
          }
          localStorageHelper('set', 'token', token);
          setAlert({});
          navigate('/profile');
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.formWrap}>
      <h1>{isLoginPage ? 'Login' : 'Register'}</h1>
      <div className={styles.googleBtnWrap}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <GoogleLoginSignUpButton
            isLoginPage={isLoginPage}
            openModal={openModal}
          />
        </GoogleOAuthProvider>
      </div>
      <hr />
      <form onSubmit={!isLoginPage ? handleSubmit : loginSubmit}>
        {!isLoginPage && (
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        {!isLoginPage && (
          <input
            type="text"
            placeholder="Enter full name"
            onChange={(e) => setFullName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Enter email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLoginPage ? 'SIGN IN' : 'SIGN UP'}</button>
      </form>
      <div className={styles.otherOptions}>
        {!isLoginPage ? (
          <>
            <Link to="/login">If you have an account already please login</Link>
          </>
        ) : (
          <>
            <Link to="/register">If you don't have an account - register</Link>
            <Link to="/forgot-password">Forgot your password</Link>
            <Link to="/guest">Continue as guest</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignupForm;
