import React, { useState } from 'react'
import styles from './Week.module.scss'
const Week = ({ callback, weeklyInput }) => {
  const [weekly, setWeekly] = useState(false)
  const [input, setInput] = useState(0)
  //   const [selected, setSelected] = useState(0)

  const handleClick = (week) => {
    console.log(week)
    // eslint-disable-next-line no-unused-expressions
    callback(week)
    setWeekly(week)
  }

  const handleInput = (val) => {
    setInput(val)
    weeklyInput(val)
  }

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <h3 className={styles.title}> 2 - Weekly or Non-Weekly</h3>
        <div className={styles.buttonContainer}>
          <button
            className={weekly ? styles.activeButton : styles.button}
            onClick={() => handleClick(true)}
          >
            Weekly
          </button>
          <button
            className={!weekly ? styles.activeButton : styles.button}
            onClick={() => handleClick(false)}
          >
            Non-Weekly
          </button>
        </div>
      </div>

      <div className={styles.duration}>
        {weekly && (
          <div className={styles.inputContainer}>
            <label className={styles.label}>Duration (How many weeks)</label>
            <input
              type='number'
              max='52'
              className={styles.input}
              placeholder='up to 52'
              value={input}
              onChange={(e) => handleInput(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Week
