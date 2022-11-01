import React, { useEffect, useState } from 'react'

import './App.css'
import FullCalendar from './component/FullCalendar/FullCalendar'
import Sidebar from './component/Sidebar/Sidebar'
import Time from './component/Time/Time'
import Week from './component/Week/Week'
import axios from 'axios'
import RoomCart from './component/RoomCart/RoomCart'
import ReservationCart from './component/ReservationCart/ReservationCart'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getReservationsById('6335e24c64e8a6df4ed2223f')
  }, [])

  const callBackForWeeklyInfomation = (val) => {
    console.log('App.java', val)
  }

  const weeklyInput = (weeklyValue) => {
    console.log('weekly input', weeklyValue)
  }

  const startTime = (startTime) => {
    console.log('start time:', startTime)
  }

  const endTime = (endTime) => {
    console.log('endTime:', endTime)
  }

  const getReservationsById = (id) => {
    axios
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

  return (
    <div className='App'>
      <Sidebar />
      <RoomCart data={data} />
      <FullCalendar data={data} />
      <Week callback={callBackForWeeklyInfomation} weeklyInput={weeklyInput} />
      <Time startTimeProps={startTime} endTimeProps={endTime} />
    </div>
  )
}

export default App
