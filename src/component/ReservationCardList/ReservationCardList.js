import React from 'react';
import styles from './ReservationCardList.module.scss';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationCardList = ({ info }) => {
  // TODO: temp data
  info = {
    image: '/location-sample.jpg',
    location: 'Microsoft Room ~ 4.Flor',
    date: 'Date: Thursday, 23, 2022 11:15am',
    duration: 'Duration: 45 minutes',
  };
  return (
    <div className={styles.reservationCardList}>
      <ReservationCard info={info} />
      <ReservationCard info={info} />
      <ReservationCard info={info} />
      <ReservationCard info={info} />
      <ReservationCard info={info} />
      <ReservationCard info={info} />
    </div>
  );
};

export default ReservationCardList;
