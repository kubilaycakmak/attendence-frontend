import React from 'react'
import image from './resim.png'
import image2 from './resim2.png'
import styles from './ReservationCart.module.scss'
const ReservationCart = () => {
  return (
    <div>
      <h3 className={styles.title}>Reservations</h3>
      <div className={styles.cartContainer}>
        <img src={image} alt='image' className={styles.classImage} />
        <div className={styles.infoContainer}>
          <img src={image2} alt='image2' className={styles.teacherImage} />
          <div className={styles.info}>
            <h5 className={styles.subtitle}>Kubilay Cakmak</h5>
            <h5 className={styles.subtitle2}>Teacher</h5>
          </div>
        </div>
        <h6 className={styles.dateRange}>
          <strong>Date range: </strong>8:30 AM to 12:30 PM
        </h6>
        <h6 className={styles.text}>
          I occupaid this classroom for M2-0922 class.
        </h6>
      </div>
    </div>
  )
}

export default ReservationCart
