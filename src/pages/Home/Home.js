import React from 'react';
import Header from '../../component/Header/Header';
import FindLocation from '../../component/FindLocation/FindLocation';
import Calendar from '../../component/Calendar/Calendar';
import AppointmentHeader from '../../component/Appointment-Header/AppointmentHeader';
import Footer from '../../component/Footer/Footer';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header className={styles.nav} />
      <FindLocation className={styles.findLocation} />
      <Calendar className={styles.calendar} />
      <AppointmentHeader className={styles.appointmentHeader} />
      <Footer className={styles.footer} />
    </div>
  );
};

export default Home;
