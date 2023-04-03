import React from 'react';
import Header from '../../component/Header/Header';
import FindLocationHero from '../../component/LandingPage/FindLocationHero/FindLocationHero';
import CalendarHero from '../../component/LandingPage/CalendarHero/CalendarHero';
import Footer from '../../component/Footer/Footer';
import styles from './Home.module.scss';
import AppointmentHero from '../../component/LandingPage/AppointmentHero/AppointmentHero';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header className={styles.nav} />
      <FindLocationHero className={styles.findLocationHero} />
      <CalendarHero className={styles.calendarHero} />
      <AppointmentHero className={styles.appointmentHero}/>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Home;
