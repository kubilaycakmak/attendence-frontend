import React, { useState } from 'react';
import profileImg from './profileImg.svg';
import styles from './AppointmentConfirmation.module.scss';

const AppointmentConfirmation = ({ user, id, date, duration }) => {
  // dummy date
  const timestamp = new Date().getTime();
  const testDate = new Date(timestamp);
  const [success, setSuccess] = useState('');

  const clickHandler = () => {
    setSuccess(!success);
  };

  return (
    <>
      {id ? (
        <div className={styles.container}>
          {success ? <h3>Your Appointment Successful!</h3> : <h3>Confirm</h3>}
          <div className={styles.imgTitleContainer}>
            {success ? '' : <img src={profileImg} alt="profileImg" />}
            <div className={styles.titleWrap}>
              <p>
                <b>{user.fullName}</b>
              </p>
              <p>
                <b>{user.department}</b>
              </p>
              <p>
                <b>{user.roles}</b>
              </p>
            </div>
          </div>
          <div className={styles.detailBtnWrap}>
            {success ? '' : <h3>Review Appointment</h3>}
            <p>
              <b>Date</b>: {testDate.toString('en-CA')}
            </p>
            <p>
              <b>Duration</b>: {duration}
            </p>
            {success ? (
              <button>Home</button>
            ) : (
              <button onClick={clickHandler}>Submit</button>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.errorWrap}>
          <h1>404</h1>
          <h4>Page Not Found</h4>
          <h4>Please Login First</h4>
          <button>LOGIN</button>
        </div>
      )}
    </>
  );
};

export default AppointmentConfirmation;
