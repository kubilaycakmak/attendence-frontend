import React from 'react'
import styles from './Calendar.module.scss'
import CalendarImage from './CalendarImage'
const Calendar = () => {
  return (
    <div>
      <div className={styles.calendar}>
        <CalendarImage />
        <div>
          <h2 className={styles.title}>Calendar</h2>
          <p className={styles.description}>
            See Class’s availability for work in empty space also you can
            request an event.
          </p>
        </div>
      </div>
      <button className={styles.button}>Get Started</button>
    </div>
  )
}

export default Calendar
