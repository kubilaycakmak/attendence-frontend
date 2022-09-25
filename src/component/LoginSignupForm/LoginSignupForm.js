import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { Link, useLocation, BrowserRouter, Path, Routes, Route } from "react-router-dom";
import styles from "./LoginSignupForm.module.scss";
import { register } from "../../services/auth-service";
import { login } from "../../services/auth-service";
import { useDispatch } from "react-redux";
import { authActions } from "../../reducers/auth";
import { useNavigate } from "react-router-dom";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import NewPassword from "../NewPassword/NewPassword";
//import Home from "../../pages/Home";

const LoginSignupForm = ({ googleSignupCallback }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch(authActions);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();

  const isLoginPage = location.pathname.includes("login");
  const handleGoogleSuccess = (res) => {
    if (!isLoginPage) googleSignupCallback();
    // logics for success
    // console.log(res);
  };
  const handleGoogleFailure = (res) => {
    // logics for failure
    // console.log(res);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, fullName, password, email, "student").then(
        (res) => {
          if (res.status === 401) {
            throw new Error("user already existed");
          }
          if (res.status === 201) {
            // setMessage("* Please check your email!");
            navigate("/login")
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
        if (res.status === 200) {
          dispatch(authActions.login());
          navigate("/profile");
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={styles.formWrap}>
      <h1>{isLoginPage ? "Login" : "Register"}</h1>
      <div className={styles.googleBtnWrap}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText={
            isLoginPage ? "Sign in with Google" : "Sign up with Google"
          }
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <hr />
      <form onSubmit={!isLoginPage ? handleSubmit : loginSubmit}>
        {!isLoginPage && (
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        {!isLoginPage && (
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLoginPage ? "Sign In" : "Sign Up"}</button>
        <p className={styles.message}>{message}</p>
      </form>
      {/* <BrowserRouter> */}
      <div className={styles.otherOptions}>
        {!isLoginPage ? (
          <>
            <Link to="/login">If you have an account already please login</Link>
          </>
        ) : (
          <>
            <Link to="/signup">If you don't have an account - register</Link>
            <Link to="/forgot-password">Forgot your password</Link>
            <Link to="/guest">Continue as guest</Link>
          </>
        )}
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default LoginSignupForm;
