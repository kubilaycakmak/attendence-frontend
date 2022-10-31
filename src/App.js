import React, { useEffect, useState } from 'react'

import './App.css'
import FullCalendar from './component/FullCalendar/FullCalendar'
import Sidebar from './component/Sidebar/Sidebar'
import Time from './component/Time/Time'
import Week from './component/Week/Week'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    getReservationsById('6335e24c64e8a6df4ed2223f')
  }, [])

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
      <FullCalendar data={data} />
      <Week />
      <Time />
    </div>
  )
}

export default App
