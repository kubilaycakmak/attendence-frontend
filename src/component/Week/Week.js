import React, { useState } from 'react';
import styles from './Week.module.scss';
import SecondaryBtn from '../../component/ui/Modal/Btn/SecondaryBtn';

const Week = ({ callback, duration, weekly, weeklyInput }) => {
  const [input, setInput] = useState(0);
  //   const [selected, setSelected] = useState(0)

  const handleClick = (week) => {
    console.log(week);
    weeklyInput(week);
    callback(week);
  };

  const handleInput = (val) => {
    callback(val);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <h3 className={styles.title}> 2 - Weekly or Non-Weekly</h3>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${
              weekly === 'weekly' && styles.activeButton
            }`}
            onClick={() => weeklyInput('weekly')}
          >
            Weekly
          </button>
          <button
            className={`${styles.button} ${
              weekly === 'non_weekly' && styles.activeButton
            }`}
            onClick={() => weeklyInput('non_weekly')}
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
              type="number"
              max="52"
              className={styles.input}
              placeholder="up to 52"
              value={duration}
              onChange={(e) => handleInput(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Week;
