import React from 'react';
import moment from 'moment';
import styles from './AppointmentBtn.module.scss';

const AppointmentBtn = ({ resData, date, time, onTimeChange, onSubmit }) => {
  const handleTimeChange = (e) => onTimeChange(e.target.textContent);

  return (
    <div>
      {resData.map((data) => {
        return data.map((item) => {
          let selectedDate = moment(item.month + '/' + item.date).format(
            'DD/MM'
          );
          let convertedDate = moment(date).format('DD/MM');

          if (selectedDate == convertedDate) {
            return item.options.map((i, index) => {
              return (
                <li key={index} className={styles.li}>
                  <button
                    disabled={!i.isAvailable}
                    onClick={handleTimeChange}
                    className={
                      i.time === time ? styles.active : styles.inActive
                    }
                  >
                    {i.time}
                  </button>
                </li>
              );
            });
          }
        });
      })}
      <li className={styles.li}>
        <button className={styles.submitBtn} onClick={onSubmit}>
          Submit
        </button>
      </li>
    </div>
  );
};

export default AppointmentBtn;
