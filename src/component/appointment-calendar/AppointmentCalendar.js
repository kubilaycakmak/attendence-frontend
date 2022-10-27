import React, { useState, useEffect } from "react"
import AppointmentBtn from "./AppointmentBtn"
import CustomCalendar from "../calendar/CustomCalendar"
import styles from "./AppointmentCalendar.module.scss"
import axios from "axios"
import moment from "moment"

const AppointmentCalendar = (props) => {
  const [resData, setResData] = useState()
  const [date, setDate] = useState(null)

  useEffect(() => {
    const url = "https://jsonblob.com/api/jsonBlob/1031676754045190144"
    axios
      .get(url)
      .then((res) => {
        // console.log("res", res)
        // console.log("date", date)
        setResData(res.data)
      })
      .catch((error) => console.error(`Error:${error}`))
  }, [])

  useEffect(() => {
    // console.log(moment(date).format("DD/MM/YYYY"))
    // console.log(date)
  }, [date])

  return (
    <>
      <div className={styles.container}>
        <CustomCalendar resData={resData} date={date} setDate={setDate} />
        <div>
          {resData && date && <AppointmentBtn resData={resData} date={date} />}
        </div>
      </div>
    </>
  )
}

export default AppointmentCalendar
