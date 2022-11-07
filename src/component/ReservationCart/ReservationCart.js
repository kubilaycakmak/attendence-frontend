import React from 'react'
import image from './resim.png'
import image2 from './resim2.png'
import styles from './ReservationCart.module.scss'
const ReservationCart = ({
  end_date,
  end_time,
  room_id,
  start_date,
  start_time,
  status,
  type,
  user,
}) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <img src={image} alt='image1' className={styles.classImage} />
        <div className={styles.infoContainer}>
          <img src={image2} alt='image2' className={styles.teacherImage} />
          {user && (
            <div className={styles.info} key={user.user_id}>
              <h5 className={styles.subtitle}>{user.full_name}</h5>
              <h5 className={styles.subtitle2}>{user.role}</h5>
            </div>
          )}
        </div>
        <h6 className={styles.dateRange}>
          <strong>Date range: </strong>
          {start_time} AM to {end_time} PM
        </h6>
        <h6 className={styles.text}>
          <strong>Status:</strong> {status}
        </h6>
      </div>
    </div>
  )
}

export default ReservationCart
