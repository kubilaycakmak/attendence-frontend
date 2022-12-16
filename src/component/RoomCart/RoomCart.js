import React, { useEffect } from 'react';
import roomImage from './roomimage.png';
import styles from './RoomCart.module.scss';
const RoomCart = ({ roomData }) => {
  useEffect(() => {
    console.log('roomData: ', roomData);
  }, [roomData]);

  return (
    <>
      {roomData && (
        <div className={styles.roomCartContainer}>
          <div className={styles.roomImageContainer}>
            <img src={roomImage} alt="roomImage" className={styles.roomImage} />
          </div>
          <div className={styles.roomDesc}>
            {roomData && <h3 className={styles.roomName}>{roomData.name}</h3>}
            {roomData && (
              <h3 className={styles.roomDirection}>
                {roomData.floor}.Floor, {roomData.description}
              </h3>
            )}
            {roomData && (
              <h3 className={styles.roomAvailable}>
                <bold>Next Available Date: </bold>
                <span className={styles.text}>
                  {roomData.nextAvailableTime}
                </span>
              </h3>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RoomCart;
