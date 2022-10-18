import React, { useState } from "react"
import Calendar from "react-calendar"
import "../appointment-calendar/CustomCalendar.css"

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState()
  const data = {
    month: 10,
    date: 1,
    options: [
      {
        time: "9:00 AM",
        isAvailable: true,
      },
      {
        time: "10:00 AM",
        isAvailable: true,
      },
      {
        time: "11:00 AM",
        isAvailable: true,
      },
      {
        time: "12:00 PM",
        isAvailable: true,
      },
      {
        time: "1:00 PM",
        isAvailable: true,
      },
      {
        time: "2:00 PM",
        isAvailable: true,
      },
      {
        time: "3:00 PM",
        isAvailable: true,
      },
      {
        time: "4:00 PM",
        isAvailable: false,
      },
    ],
  }

  const onChange = (date) => {
    setDate(date)
  }

  const clickHandler = (e) => {
    // console.log("e>>", e.target.textContent)
    setTime(e.target.textContent)
  }

  return (
      <div className="div">
        <h2 className="h2">Select a Date & Time</h2>
        <Calendar onChange={onChange} value={date} />
      </div>
  )
}

export default CustomCalendar
