import React from 'react';
import Header from '../../component/Header/Header';
import Calendar from '../../component/Calendar/Calendar';
import AppointmentHeader from '../../component/Appointment-Header/AppointmentHeader';
import Footer from '../../component/Footer/Footer';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div>
      <Header className={styles.header} />
      <Calendar className={styles.calendar} />
      <AppointmentHeader className={styles.appointmentHeader} />
      <Footer className={styles.footer} />
    </div>
  );
};

export default Home;
