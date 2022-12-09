import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Link, useLocation } from 'react-router-dom';
import styles from './LoginSignupForm.module.scss';
import { register } from '../../services/auth-service';
import { login } from '../../services/auth-service';
import { useDispatch } from 'react-redux';
import { authActions } from '../../reducers/auth';
import { useNavigate } from 'react-router-dom';
import GoogleLoginSignUpButton from '../GoogleLoginSignUpButton/GoogleLoginSignUpButton';

import localStorageHelper from '../../helpers/localStorageHelper';

const LoginSignupForm = ({ openModal }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const location = useLocation();

  const isLoginPage = location.pathname.includes('login');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, fullName, password, email, 'student').then(
        (res) => {
          if (res.status === 401) {
            throw new Error('user already existed');
          }
          if (res.status === 201) {
            setMessage('user added successfully');
          }
        }
      );
    } catch (error) {
      setMessage(error.message);
    }
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password).then((res) => {
        console.log('res', res);
        if (res.token) {
          localStorageHelper('set', 'token', res.token);
          navigate('/');
        }
      });
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
        <p className={styles.message}>{message}</p>
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
