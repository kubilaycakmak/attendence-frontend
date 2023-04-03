import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.scss";
// import { authActions } from "../../reducers/auth";
import { useDispatch } from "react-redux";


function Header() {

  // const dispatch = useDispatch(authActions);

  // useEffect(() => {
  //   // let user = JSON.parse(localStorage.getItem("user"));
  //   // if (user) {
  //   //   // dispatch(authActions.login(user));
  //   // }
  // }, []);

  return (
    <Navbar expand="lg" className={styles.Nav}>
      {/* <Container> */}
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo"></img>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className={styles.mobileNav}>
          {/* <br></br> */}
          {/* <Link to="/location" className={styles.navlink}>
            Find Location
          </Link>
          <Link to="/calendar" className={styles.navlink}>
            Calendar
          </Link> */}
          <Link to="/login" className={styles.navlink}>
            Login
          </Link>
          <br></br>
          <Nav.Link href="/register" className={styles.navLinkButton}>
            Get started
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default Header;
