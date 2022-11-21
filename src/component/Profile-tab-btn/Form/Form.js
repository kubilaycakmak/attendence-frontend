import React from 'react';
import styles from './Form.module.scss';

const Form = () => {
  return (
    <div>
      <form action="" className={styles.container}>
        <div className={styles.input}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className={styles.input}>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" />
        </div>
        <div className={styles.input}>
          <label htmlFor="discord">Discord</label>
          <input type="text" id="discord" name="discord" />
        </div>
        <div className={styles.input}>
          <label htmlFor="slack">Slack</label>
          <input type="text" id="slack" name="slack" />
        </div>
        <div className={styles.input}>
          <label htmlFor="linkedIn">LinkedIn</label>
          <input type="text" id="linkedIn" name="linkedIn" />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className={styles.input}>
          <label htmlFor="currentProgram">Current Program</label>
          <input type="text" id="currentProgram" name="currentProgram" />
        </div>
      </form>
    </div>
  );
};

export default Form;
