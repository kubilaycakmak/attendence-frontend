import React, { useState, useEffect } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import TextField from '@mui/material/TextField'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import styles from './Time.module.scss'
import moment from 'moment'

const Time = () => {
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [error, setError] = useState('')

  const handleDate = (e) => {
    console.log(e)
    e.preventDefault()
    let start = moment(startTime)
    let end = moment(endTime)

    if (!startTime && !endTime) {
      return setError('You should select a start and end time')
    }
    if (start === end) {
      return setError('Start and End time cannot be equal.')
    }
    if (start.isAfter(end)) {
      return setError('Start time cannot be after End time')
    } else {
      return setError('')
    }
  }

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
        {error && <div>{error}</div>}
        <button className={styles.button} onClick={(e) => handleDate(e)}>
          Next
        </button>
      </form>
    </LocalizationProvider>
  )
}

export default Time
