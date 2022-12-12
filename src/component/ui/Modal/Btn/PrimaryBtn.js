import React from 'react';
import styles from './PrimaryBtn.module.scss';

export default function Primary(props) {
  return (
    <button className={`${styles.default}`} onClick={props.action}>
      {/* <button className={styles.default} onClick={props.action}> */}
      {props.children}
    </button>
    // className={`${styles.calendarHero} ${className}`}
  );
}
