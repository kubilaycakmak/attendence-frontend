import React from 'react'
import calendar from './calendar.png'
import styles from './CalendarImage.module.scss'

const CalendarImage = () => {
  return <img src={calendar} alt='calendar' className={styles.image} />
}

export default CalendarImage
