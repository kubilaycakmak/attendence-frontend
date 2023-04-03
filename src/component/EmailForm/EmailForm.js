import React from 'react';
import axios from 'axios';
import styles from './EmailForm.module.scss';

const EmailForm = ({ className }) => {
  const handleClick = async (e) => {
    // submit to endpoint
    // try {
    //   const res = await axios({
    //     url,
    //     method: 'post',
    //   });
    //   console.log(res);
    // } catch (error) {
    //   console.log();
    // }
  };
  return (
    <form className={`${styles.emailForm} ${className}`}>
      <input type="email" placeholder="asd@gmail.com" required />
      <button onClick={handleClick}>send</button>
    </form>
  );
};

export default EmailForm;
