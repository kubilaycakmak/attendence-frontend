import { Button } from "bootstrap"
import React, { useEffect, useState } from "react"
import Calendar from "react-calendar"
import AppointmentBtn from "../appointment-calendar/AppointmentBtn"
import "../appointment-calendar/CustomCalendar.css"

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(false)
 
  const data = {
    month: 10,
    date: 3,
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

  const dummyMonth = data.month;
  const dummyDay = data.date;
  const disabledDays = [0, 6];
  //const x = data.options.isAvailable;

  const onChange = (date) => {
    setDate(date)
  }

 
  const dayClicked = (value) => {
    
  if(dummyDay === value.getDate() && dummyMonth === value.getMonth()){
  <AppointmentBtn/>
  }   
  
  }

  const clickHandler = (e) => {
    // console.log("e>>", e.target.textContent)
    setTime(e.target.textContent)
  }

  return (
      <div className="div">
        <h2 className="h2">Select a Date & Time</h2>
        <Calendar 
        tileDisabled={({activeStartDate, date, view }) => disabledDays.includes(date.getDay()) }
        onClickDay={dayClicked} 
        onChange={onChange} 
        value={date} />
      </div>
  )
}

export default CustomCalendar
