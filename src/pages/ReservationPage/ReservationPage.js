import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  getRoomById,
  getReservationsByRoomId,
  createRoomReservation,
} from '../../services/roomService';
import { LoadingContext } from '../../contexts/LoadingContext';
import { AlertContext } from '../../contexts/AlertContext';
import FullCalendar from '../../component/FullCalendar/FullCalendar';
import Time from '../../component/Time/Time';
import Week from '../../component/Week/Week';
import RoomCart from '../../component/RoomCart/RoomCart';
import moment from 'moment';
import styles from './ReservationPage.module.scss';

const ReservationPage = () => {
  const { roomId } = useParams();
  const { setAlert } = useContext(AlertContext);
  const { setIsLoadingShown } = useContext(LoadingContext);
  const [data, setData] = useState([]);
  const [roomData, setRoomData] = useState(null);
  const [reservationData, setReservationData] = useState(null);
  const [duration, setDuration] = useState('');
  const [weekly, setWeekly] = useState('weekly');
  const [startingTime, setStartingTime] = useState('');
  const [endingTime, setEndingTime] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');

  useEffect(() => {
    getReservationsByRoomId(roomId).then(({ data }) =>
      setReservationData(data)
    );
    getRoomById(roomId).then(({ data }) => setRoomData(data));
  }, []);

  const callBackForWeeklyInformation = (val) => {
    setDuration(val);
  };

  const weeklyInput = (weeklyValue) => {
    setWeekly(weeklyValue);
  };

  const startTime = (startTime) => {
    let tempTime = moment(startTime).format('LT');
    setStartingTime(tempTime);
  };

  const endTime = (endTime) => {
    let tempTime = moment(endTime).format('LT');
    setEndingTime(tempTime);
  };

  const startDate = (startDate) => {
    let tempDate = moment(startDate).format('L');
    setStartingDate(tempDate);
  };

  const endDate = (endDate) => {
    let tempDate = moment(endDate).subtract(1, 'days').format('L');
    setEndingDate(tempDate);
  };

  const postData = async (e) => {
    e.preventDefault();
    const reqBody = {
      room_id: roomId,
      type: weekly,
      start_date: startingDate,
      end_date: endingDate,
      start_time: startingTime,
      end_time: endingTime,
      duration: duration,
    };
    setIsLoadingShown(true);
    const res = await createRoomReservation(reqBody);
    console.log('res', res);
    setAlert({
      message: 'Reservation is successfully created!',
      type: 'success',
    });
    setIsLoadingShown(false);
  };
  return (
    <>
      {roomData && (
        <div className={styles.mainContent}>
          <h1>Make a reservation for:</h1>
          <RoomCart roomData={roomData.room} />
          <FullCalendar data={data} startDateF={startDate} endDateF={endDate} />
          <Week
            callback={callBackForWeeklyInformation}
            weekly={weekly}
            duration={duration}
            weeklyInput={setWeekly}
          />
          <Time startTimeProps={startTime} endTimeProps={endTime} />
          <button className={styles.button} onClick={postData}>
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default ReservationPage;
