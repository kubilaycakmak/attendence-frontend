import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import TextField from '@mui/material/TextField'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import styles from './Time.module.scss'

const Time = () => {
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)

  console.log(startTime, endTime)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form className={styles.container}>
        <h3 className={styles.title}>2 - Select Hour</h3>
        <div className={styles.wrapper}>
          <label>Start Time</label>
          <br />
          <TimePicker
            label='Start Time'
            value={startTime}
            onChange={setStartTime}
            renderInput={(params) => <TextField {...params} />}
            className={styles.input}
          />
        </div>
        <div className={styles.wrapper}>
          <label>End Time</label>
          <br />
          <TimePicker
            label='End Time'
            value={endTime}
            onChange={setEndTime}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <button className={styles.button}>Next</button>
      </form>
    </LocalizationProvider>
  )
}

export default Time
