import React, { useEffect } from 'react'
import roomImage from './roomimage.png'
import styles from './RoomCart.module.scss'
const RoomCart = (data, room) => {
  useEffect(() => {
    console.log('roomData: ', data)
  }, [data])

  // console.log(
  //   'my data',
  //   data.data.map((item) => item.end_date)
  // )

  return (
    <div className={styles.roomCartContainer}>
      <div className={styles.roomImageContainer}>
        <img src={roomImage} alt='roomImage' className={styles.roomImage} />
      </div>
      <div className={styles.roomDesc}>
        {data.room && <h3 className={styles.roomName}>{data.room.name}</h3>}
        {data.room && (
          <h3 className={styles.roomDirection}>
            {data.room.floor}.Floor, {data.room.description}
          </h3>
        )}
        {data.room && (
          <h3 className={styles.roomAvailable}>
            <bold>Next Available Date:</bold>
            {data.room.nextAvailableTime}
          </h3>
        )}
      </div>
    </div>
  )
}

export default RoomCart
