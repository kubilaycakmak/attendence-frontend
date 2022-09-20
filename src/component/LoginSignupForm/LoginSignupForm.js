import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { Link, useLocation } from "react-router-dom";
import styles from "./LoginSignupForm.module.scss";
import { register } from "../../services/auth-service";

const LoginSignupForm = ({ googleSignupCallback }) => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    try {
      e.preventDefault();
      await register(username, fullName, password, email, "student").then(
        (res) => {
          if (res.status === 401) {
            // add a failure modal later
            throw new Error("user already existed");
          }
          if (res.status === 201) {
            // add a success modal later
            console.log("user added successfully");
          }
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const loginSubmit = (e) => {};
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
      <form onSubmit={isLoginPage ? handleSubmit : loginSubmit}>
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
        <button type="submit">{isLoginPage ? "SIGN IN" : "SIGN UP"}</button>
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
            <Link to="/guest">Continue as guest</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignupForm;
