import React, { useState, useEffect } from "react"
import AppointmentBtn from "./AppointmentBtn"
import CustomCalendar from "../calendar/CustomCalendar"
import axios from "axios"

const AppointmentCalendar = (props) => {
  const [resData, setResData] = useState()
  const [date, setDate] = useState(null)

  useEffect(() => {
    const url = "https://jsonblob.com/api/jsonBlob/1031676754045190144"
    axios
      .get(url)
      .then((res) => {
        console.log("res", res)
        setResData(res.data)
      })
      .catch((error) => console.error(`Error:${error}`))
  }, [])

  return (
    <>
      <div>
        <CustomCalendar resData={resData} date={date} setDate={setDate} />
        <div>{resData && <AppointmentBtn resData={resData} date={date} />}</div>
      </div>
    </>
  )
}

export default AppointmentCalendar
