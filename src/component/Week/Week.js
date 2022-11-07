import React, { useState } from 'react'
import styles from './Week.module.scss'
const Week = () => {
  const [weekly, setWeekly] = useState(false)
  //   const [selected, setSelected] = useState(0)

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <h3 className={styles.title}> 2 - Weekly or Non-Weekly</h3>
        <div className={styles.buttonContainer}>
          <button
            className={weekly ? styles.activeButton : styles.button}
            onClick={() => setWeekly(true)}
          >
            Weekly
          </button>
          <button
            className={!weekly ? styles.activeButton : styles.button}
            onClick={() => setWeekly(false)}
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
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Week
