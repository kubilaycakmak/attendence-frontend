import React from 'react'
import roomImage from './roomimage.png'
import styles from './RoomCart.module.scss'
const RoomCart = (data) => {
  console.log(
    'my data',
    data.data.map((item) => item.end_date)
  )
  return (
    <div className={styles.roomCartContainer}>
      <div className={styles.roomImageContainer}>
        <img src={roomImage} alt='roomImage' className={styles.roomImage} />
      </div>
      <div className={styles.roomDesc}>
        <h3 className={styles.roomName}>Google Room</h3>
        <h3 className={styles.roomDirection}>1.Floor, left side from stairs</h3>
        <h3 className={styles.roomAvailable}>
          <bold>Next Available Date:</bold>12,Monday,Oct 12:30 PM
        </h3>
      </div>
    </div>
  )
}

export default RoomCart
