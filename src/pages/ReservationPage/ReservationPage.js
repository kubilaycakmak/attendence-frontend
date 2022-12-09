import React, { useEffect, useState } from 'react';
import '../../App.css';
import FullCalendar from '../../component/FullCalendar/FullCalendar';
import Sidebar from '../../component/Sidebar/Sidebar';
import Time from '../../component/Time/Time';
import Week from '../../component/Week/Week';
import axios from 'axios';
import RoomCart from '../../component/RoomCart/RoomCart';
import moment from 'moment';
import style from './ReservationPage.module.scss';

const ReservationPage = () => {
  const [data, setData] = useState([]);
  const [roomData, setRoomData] = useState({});
  const [duration, setDuration] = useState('');
  const [weekly, setWeekly] = useState(false);
  const [startingTime, setStartingTime] = useState('');
  const [endingTime, setEndingTime] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');

  useEffect(() => {
    getReservationsById('6335e24c64e8a6df4ed2223f');
    getRoomById('6335e24c64e8a6df4ed2223f');
  }, []);

  const callBackForWeeklyInfomation = (val) => {
    setDuration(val);

    // console.log('App.java', val)
    // let duration = {
    //   duration: val,
    // }
    // setData((prev) => [...prev, duration])

    // console.log(data)
  };

  const weeklyInput = (weeklyValue) => {
    setWeekly(weeklyValue);
    // console.log('weekly input', weeklyValue)
  };

  const startTime = (startTime) => {
    let tempTime = moment(startTime).format('LT');
    setStartingTime(tempTime);
    //     "start_time": "12:00",
    // console.log('start time:', startTime)
  };

  const endTime = (endTime) => {
    let tempTime = moment(endTime).format('LT');
    setEndingTime(tempTime);
    // console.log('endTime:', endTime)
  };

  const startDate = (startDate) => {
    let tempDate = moment(startDate).format('L');
    setStartingDate(tempDate);
    // console.log('startDate:', startDate)
  };

  const endDate = (endDate) => {
    let tempDate = moment(endDate).subtract(1, 'days').format('L');
    setEndingDate(tempDate);
    // console.log('enddate:', endDate)
  };

  const getReservationsById = async (id) => {
    await axios
      .get(
        `https://attendance-backend-dev.herokuapp.com/api/rooms/${id}/reservations`,
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5Y2FAdGVzdC5jb20iLCJ1c2VySWQiOiI2MzYwNDFkZWRkZmEwOWU3NGZlZTQyMjkiLCJpYXQiOjE2NjcyNTMwMjAsImV4cCI6MTY4NDUzMzAyMH0.sT3AWJn_ksza4veEPKqwdMFmVbfcDRZABqjFwsjfdXw',
          },
        }
      )
      .then((data) => {
        // console.log(data.data)
        setData(data.data);
      });
  };
  const getRoomById = async (id) => {
    await axios
      .get(`https://attendance-backend-dev.herokuapp.com/api/rooms/${id}`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5Y2FAdGVzdC5jb20iLCJ1c2VySWQiOiI2MzYwNDFkZWRkZmEwOWU3NGZlZTQyMjkiLCJpYXQiOjE2NjcyNTMwMjAsImV4cCI6MTY4NDUzMzAyMH0.sT3AWJn_ksza4veEPKqwdMFmVbfcDRZABqjFwsjfdXw',
        },
      })
      .then((data) => {
        console.log('Room data: ', data.data);
        setRoomData(data.data.room);
      });
  };
  const postData = async (e) => {
    const requestBody = {
      room_id: '6335e24c64e8a6df4ed2223f',
      type: duration ? 'weekly' : 'non_weekly',
      start_date: startingDate,
      end_date: endingDate,
      start_time: startingTime,
      end_time: endingTime,
      duration: weekly ? weekly : null,
    };
    console.log(requestBody);
    e.preventDefault();
    await axios
      .post(
        `https://attendance-backend-dev.herokuapp.com/api/rooms/reservations`,
        requestBody,
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5Y2FAdGVzdC5jb20iLCJ1c2VySWQiOiI2MzYwNDFkZWRkZmEwOWU3NGZlZTQyMjkiLCJpYXQiOjE2NjcyNTMwMjAsImV4cCI6MTY4NDUzMzAyMH0.sT3AWJn_ksza4veEPKqwdMFmVbfcDRZABqjFwsjfdXw',
          },
          // room_id: null,
        }
      )
      .then((res) => {
        if (res.status === 201) {
          // navigate client to confirm
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <RoomCart data={data} room={roomData} />
      <FullCalendar data={data} startDateF={startDate} endDateF={endDate} />
      <Week callback={callBackForWeeklyInfomation} weeklyInput={weeklyInput} />
      <Time startTimeProps={startTime} endTimeProps={endTime} />
      <button className={style.button} onClick={postData}>
        Continue{' '}
      </button>
    </div>
  );
};

export default ReservationPage;
