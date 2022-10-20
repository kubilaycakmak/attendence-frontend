import React,{ useState } from "react"
import AppointmentBtn from "./AppointmentBtn"
import CustomCalendar from "../Calendar/CustomCalendar"

const AppointmentCalendar = () => {
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

  const submitHandler = () => {
    const timeStamp = date.getTime()
    console.log(timeStamp)
    console.log(time)
  }

  return (
    <>
      <div>
          <CustomCalendar />
        <div>
          {/* <AppointmentBtn /> */}
        </div>
      </div>
    </>
  )
}

export default AppointmentCalendar
