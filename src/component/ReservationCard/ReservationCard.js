import React from 'react';
import styles from './ReservationCard.module.scss';

const ReservationCard = ({ info, isForReserved = false }) => {
  const bookReservation = () => {};
  const cancelReservation = () => {};
  return (
    <div className={styles.reservationCard}>
      <img src={info.image} alt={info.location} />
      {isForReserved ? (
        <>
          <ul>
            <li className={styles.reservationCard__location}>
              {info.location}
            </li>
            <li className={styles.reservationCard__date}>{info.date}</li>
            <li className={styles.reservationCard__duration}>
              {info.duration}
            </li>
          </ul>
          <button onClick={cancelReservation}>Cancel</button>
        </>
      ) : (
        <>
          <ul>
            <li className={styles.reservationCard__location}>
              {info.location}
            </li>
            <li className={styles.reservationCard__description}>
              {info.description}
            </li>
          </ul>
          {/* show button only for classrooms */}
          {info.type === 'classroom' && (
            <button onClick={bookReservation}>Reserve</button>
          )}
        </>
      )}
    </div>
  );
};

export default ReservationCard;
