import React, { useEffect, useState } from "react"
import moment from "moment"
import styles from "./AppointmentBtn.module.scss"

const AppointmentBtn = ({ resData, date }) => {
  const [time, setTime] = useState()
  const [year, setYear] = useState(moment().year())

  useEffect(() => {
    console.log(moment(date).format("DD/MM/YYYY"))
  }, [date])

  const clickHandler = (e) => {
    setTime(e.target.textContent)
  }

  const submitHandler = () => {
    const timeStamp = date.getTime()
    console.log(timeStamp)
    console.log(time)
  }

  return (
    <div>
      {resData.map((data, index) => {
        return data.map((item, index) => {
          let selectedDate = moment(
            item.month + "/" + item.date + "/" + year
          ).format("DD/MM/YYYY")
          let convertedDate = moment(date).format("DD/MM/YYYY")

          console.log("find", selectedDate == convertedDate)
          if (selectedDate == convertedDate) {
            console.log("options", typeof item.options)
            return item.options.map((i, index) => {
              console.log("i>>>", i.time)
              return (
                <li key={index} className={styles.li}>
                  <button
                    disabled={!i.isAvailable}
                    onClick={clickHandler}
                    className={
                      i.time === time ? styles.active : styles.inActive
                    }>
                    {i.time}
                  </button>
                </li>
              )
            })
          }
        })
      })}
      <li className={styles.li}>
        <button className={styles.submitBtn} onClick={submitHandler}>
          Submit
        </button>
      </li>
    </div>
  )
}

export default AppointmentBtn
