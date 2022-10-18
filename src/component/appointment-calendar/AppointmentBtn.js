import React, { useState } from "react"
// import styles from "./AppointmentBtn.scss"
import styles from "./AppointmentCalendar.module.scss"
const AppointmentBtn = () => {
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

  const submitHandler = () => {
    const timeStamp = date.getTime()
    console.log(timeStamp)
    console.log(time)
  }
  return (
    <div>
      {data.options.map((i, index) => {
        return (
          <li key={index} className={styles.li}>
            <button
              disabled={!i.isAvailable}
              onClick={clickHandler}
              className={i.time === time ? styles.active : styles.inActive}>
              {i.time}
            </button>
          </li>
        )
      })}
      <li className={styles.li}>
        <button onClick={submitHandler} className={styles.submitBtn}>
          Continue
        </button>
      </li>
    </div>
  )
}

export default AppointmentBtn
