import React, { useState } from "react"
import Calendar from "react-calendar"
import './AppointmentCalendar.css'
// import "react-calendar/dist/Calendar.css"
// import "./AppointmentCalendar.module.scss"


const AppointmentCalendar = () => {
  const [value, onChange] = useState(new Date())

  return (
    <div className="div">
      <h2 className="h2">Select a Date & Time</h2>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default AppointmentCalendar
