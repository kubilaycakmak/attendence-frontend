import React from 'react';
import styles from './Calendar.module.scss';
import CalendarImage from './CalendarImage';
const Calendar = ({ className }) => {
  return (
    <div>
      <div className={`${styles.calendar} ${className}`}>
        <div>
          <CalendarImage />
          {/* btn for mobile */}
          <button className={styles.button}>Get Started</button>
        </div>
        <div>
          <h2 className={styles.title}>Calendar</h2>
          <p className={styles.description}>
            See Class’s availability for work in empty space also you can
            request an event.
          </p>
          <button className={styles.button}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
