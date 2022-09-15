import React from "react";
import { GoogleLogin } from "react-google-login";
import { Link, useLocation } from "react-router-dom";
import styles from "./LoginSignupForm.module.scss";
import { register } from "../../services/auth-service";

const LoginSignupForm = ({ googleSignupCallback }) => {
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
    await register(
      "azar.b",
      "azar barfi",
      "123",
      "azar@gmail.com",
      "student"
    ).then((res) => {
      if (res.status === 200) {
        // update redux
      }
    });
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
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter email addess" />
        <input type="password" placeholder="Enter password" />
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
            <Link to="/guest">Contiune as guest</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignupForm;
