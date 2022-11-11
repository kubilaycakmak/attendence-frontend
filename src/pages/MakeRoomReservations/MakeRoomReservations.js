import React from 'react';
import styles from './MakeRoomReservations.module.scss';
import Sidebar from '../../component/Sidebar/Sidebar';

const MakeRoomReservations = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.mainContent}>
        <p>MakeRoomReservations component here</p>
        {/* MakeRoomReservations component here */}
      </div>
    </div>
  );
};

export default MakeRoomReservations;
