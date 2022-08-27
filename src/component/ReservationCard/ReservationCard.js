import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ReservationCard.module.scss';

const ReservationCard = ({ info }) => {
  // TODO: temp data
  info = {
    image: '/location-sample.jpg',
    location: 'Microsoft Room ~ 4.Flor',
    date: 'Date: Thursday, 23, 2022 11:15am',
    duration: 'Duration: 45 minutes',
  };
  const cancelReservation = () => {};
  return (
    <div className={styles.reservationCard}>
      <img src={info.image} alt={info.location} />
      <ul>
        <li className={styles.reservationCard__location}>{info.location}</li>
        <li className={styles.reservationCard__date}>{info.date}</li>
        <li className={styles.reservationCard__duration}>{info.duration}</li>
      </ul>
      <button onClick={cancelReservation}>Cancel</button>
    </div>
  );
};

export default ReservationCard;
