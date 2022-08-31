import React from 'react';
import styles from './ReservationCardList.module.scss';
import ReservationCard from '../ReservationCard/ReservationCard';

const ReservationCardList = ({ list, isForReserved = false }) => {
  return (
    <div className={styles.reservationCardList}>
      {list.map((info) => (
        <ReservationCard info={info} isForReserved={isForReserved} />
      ))}
    </div>
  );
};

export default ReservationCardList;
