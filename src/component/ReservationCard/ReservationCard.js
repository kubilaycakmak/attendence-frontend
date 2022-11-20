import React from "react"
import styles from "./ReservationCard.module.scss"

const ReservationCard = ({ info, isForReserved = false }) => {
  // console.log("info", info)
  const bookReservation = () => {}
  const cancelReservation = () => {}
  return (
    <>
      <div className={styles.reservationCard}>
        <img src={info.picture_url} alt={info.location} />
        {isForReserved ? (
          <>
            <ul>
              <li className={styles.reservationCard__location}>{info.name}</li>

              <li className={styles.reservationCard__date}>
                {info.description}
              </li>
            </ul>
            <button onClick={cancelReservation}>Cancel</button>
          </>
        ) : (
          <>
            <ul>
              <li className={styles.reservationCard__location}>{info.name}</li>
              <li className={styles.reservationCard__description}>
                {info.description}
              </li>
              <p>{info.total_seats}</p>
            </ul>
            {/* show button only for classrooms */}
            {info.type === "classroom" && (
              <button onClick={bookReservation}>Reserve</button>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default ReservationCard
