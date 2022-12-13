import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from './AppointmentBtn.module.scss';
import PrimaryBtn from '../ui/Modal/Btn/PrimaryBtn';

const AppointmentBtn = ({ resData, date }) => {
  const [time, setTime] = useState();
  const [year, setYear] = useState(moment().year());

  const clickHandler = (e) => {
    setTime(e.target.textContent);
  };

  const submitHandler = () => {
    const timeStamp = date.getTime();
    // console.log(timeStamp)
    // console.log(time)
  };

  return (
    <div>
      {resData.map((data, index) => {
        return data.map((item, index) => {
          let selectedDate = moment(
            item.month + '/' + item.date + '/' + year
          ).format('DD/MM/YYYY');
          let convertedDate = moment(date).format('DD/MM/YYYY');

          if (selectedDate == convertedDate) {
            return item.options.map((i, index) => {
              return (
                <li key={index} className={styles.li}>
                  <button
                    disabled={!i.isAvailable}
                    onClick={clickHandler}
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
        {/* <PrimaryBtn className={styles.submitBtn} onClick={submitHandler}>
          Submit
        </PrimaryBtn> */}
        <button className={styles.submitBtn} onClick={submitHandler}>
          Submit
        </button>
      </li>
    </div>
  );
};

export default AppointmentBtn;
