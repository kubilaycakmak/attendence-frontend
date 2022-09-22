import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.scss";

function Header() {
  return (
    <Navbar expand="lg" className={styles.Nav}>
      {/* <Container> */}
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className={styles.mobileNav}>
          <br></br>
          {/* <Link to="/location" className={styles.navlink}>
            Find Location
          </Link> */}
          {/* <Link to="/calendar" className={styles.navlink}>
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
