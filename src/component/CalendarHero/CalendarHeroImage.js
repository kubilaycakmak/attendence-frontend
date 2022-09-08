import React from 'react';
import calendar from '../../assets/imgs/calendar.png';
import styles from './CalendarHeroImage.module.scss';

const CalendarHeroImage = () => {
  return <img src={calendar} alt="calendar" className={styles.image} />;
};

export default CalendarHeroImage;
