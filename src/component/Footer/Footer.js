import React from 'react';
import { Link } from 'react-router-dom';
import EmailForm from '../EmailForm/EmailForm';
import logo from '../../assets/imgs/attendance.png';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <Link to="/" className={styles.footerLink}>
            <img src={logo} alt="attendance" />
          </Link>
          <Link to="/" className={styles.footerLink}>
            Find Location
          </Link>
          <Link to="/" className={styles.footerLink}>
            Calendar
          </Link>
          <Link to="/" className={styles.footerLink}>
            Appointment
          </Link>
          <p className={styles.copyright}>by @workexperiences-team</p>
        </div>
        <div>
          <section className={styles.footerSection}>
            <h3>About.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum
              reprehenderit dolores aut ut facilis officiis ad fuga minima
              velit!
            </p>
          </section>
          <section className={styles.footerSection}>
            <h3>Work with us.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum
              reprehenderit dolores aut ut facilis officiis ad fuga minima
              velit!
            </p>
          </section>
        </div>
        <div>
          <section className={styles.footerSection}>
            <h3>Who we are.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum
              reprehenderit dolores aut ut facilis officiis ad fuga minima
              velit!
            </p>
          </section>
          <section className={styles.footerSection}>
            <h3>Get more information</h3>
            <EmailForm className={styles.emailForm} />
          </section>
        </div>
        <div className={styles.schoolLogo}>
          <img src="/school-logo.jpg" alt="school logo" />
        </div>
        <p className={styles.copyright}>by @workexperiences-team</p>
      </div>
    </footer>
  );
};

export default Footer;
