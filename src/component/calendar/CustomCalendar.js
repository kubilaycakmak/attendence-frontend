import React, { useState } from "react"
import Calendar from "react-calendar"
import "../appointment-calendar/CustomCalendar.css"

const CustomCalendar = ({ date, setDate }) => {
  // const [date, setDate] = useState(new Date())

  const onChange = (date) => {
    console.log(date)
    setDate(date)
  }

  return (
    <div className='div'>
      <h2 className='h2'>Select a Date & Time</h2>
      <Calendar onChange={onChange} value={date} />
    </div>
  )
}

export default CustomCalendar
