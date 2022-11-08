import React, { useEffect, useState } from 'react'
import './App.css'
import FullCalendar from './component/FullCalendar/FullCalendar'
import Sidebar from './component/Sidebar/Sidebar'
import Time from './component/Time/Time'
import Week from './component/Week/Week'
import axios from 'axios'
import RoomCart from './component/RoomCart/RoomCart'

const ReservationPage = () => {
  const [data, setData] = useState([])
  const [roomData, setRoomData] = useState({})
  useEffect(() => {
    getReservationsById('6335e24c64e8a6df4ed2223f')
    getRoomById('6335e24c64e8a6df4ed2223f')
  }, [])
  const callBackForWeeklyInfomation = (val) => {
    // console.log('App.java', val)
  }

  const weeklyInput = (weeklyValue) => {
    // console.log('weekly input', weeklyValue)
  }

  const startTime = (startTime) => {
    // console.log('start time:', startTime)
  }

  const endTime = (endTime) => {
    // console.log('endTime:', endTime)
  }
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
        setData(data.data)
      })
  }
  const getRoomById = async (id) => {
    await axios
      .get(`https://attendance-backend-dev.herokuapp.com/api/rooms/${id}`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5Y2FAdGVzdC5jb20iLCJ1c2VySWQiOiI2MzYwNDFkZWRkZmEwOWU3NGZlZTQyMjkiLCJpYXQiOjE2NjcyNTMwMjAsImV4cCI6MTY4NDUzMzAyMH0.sT3AWJn_ksza4veEPKqwdMFmVbfcDRZABqjFwsjfdXw',
        },
      })
      .then((data) => {
        console.log('Room data: ', data.data)
        setRoomData(data.data.room)
      })
  }
  return (
    <div>
      <Sidebar />
      <RoomCart data={data} room={roomData} />
      <FullCalendar data={data} />
      <Week callback={callBackForWeeklyInfomation} weeklyInput={weeklyInput} />
      <Time startTimeProps={startTime} endTimeProps={endTime} />
    </div>
  )
}

export default ReservationPage
