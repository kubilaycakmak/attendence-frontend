import logo from './logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Nav.module.scss';

function Nav2() {
  return (
    <Navbar expand="lg" className={styles.Nav}>
      <Container>
        <Navbar.Brand href="#logo"><img src={logo} alt='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className={styles.mobileNav}>
            <br></br>
            <Nav.Link href="#location" className={styles.navlink}>Find Location</Nav.Link>
            <Nav.Link href="#calendar" className={styles.navlink}>Calendar</Nav.Link>
            <Nav.Link href="#appointment" className={styles.navlink}>Appointment</Nav.Link>
            <br></br>
            <Nav.Link href="#bttn" className={styles.navLinkButton}>Get started</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav2;