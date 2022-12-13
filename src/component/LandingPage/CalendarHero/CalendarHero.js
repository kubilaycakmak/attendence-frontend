import React from 'react';
import styles from './CalendarHero.module.scss';
import CalendarHeroImage from './CalendarHeroImage';
// import PrimaryBtn from '../ui/Modal/Btn/PrimaryBtn';

const CalendarHero = ({ className }) => {
  return (
    <div>
      <div className={`${styles.calendarHero} ${className}`}>
        <div>
          <CalendarHeroImage />
          {/* btn for mobile */}
          <button className={styles.button}>Get Started</button>
        </div>
        <div>
          <h2 className={styles.title}>Calendar</h2>
          <p className={styles.description}>
            See Class’s availability for work in empty space also you can
            request an event.
          </p>
          <button className={styles.PrimaryBtn}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHero;
