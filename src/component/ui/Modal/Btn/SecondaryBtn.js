import React from 'react';
import styles from './SecondaryBtn.module.scss';

export default function SecondaryBtn(props) {

  return (
    <button className={styles.white} onClick={props.action}>
      {props.children}
    </button>
  );
}
