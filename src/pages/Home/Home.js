import React from 'react';
import Header from '../../component/Header/Header';
import FindLocationHero from '../../component/FindLocationHero/FindLocationHero';
import CalendarHero from '../../component/CalendarHero/CalendarHero';
import AppointmentHero from '../../component/AppointmentHero/AppointmentHero';
import Footer from '../../component/Footer/Footer';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header className={styles.nav} />
      <FindLocationHero className={styles.findLocationHero} />
      <CalendarHero className={styles.calendarHero} />
      <AppointmentHero className={styles.appointmentHero} />
      <Footer className={styles.footer} />
    </div>
  );
};

export default Home;
