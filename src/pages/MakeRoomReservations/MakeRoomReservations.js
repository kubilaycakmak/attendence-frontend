import React, { useEffect,useState } from 'react';
import ReservationCardList from '../../component/ReservationCardList/ReservationCardList';
import styles from './MakeRoomReservations.module.scss';
import { getAllRooms } from '../../services/roomService';
const MakeRoomReservations = () => {
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    getRoomsandSetState();
  }, []);

  const getRoomsandSetState = async () => {
    await getAllRooms().then((res) => {
      setRoomData(res.data);
    }
    ).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContent}>
        {roomData && <ReservationCardList roomData={roomData} />}
      </div>
    </div>
  );
};

export default MakeRoomReservations;
