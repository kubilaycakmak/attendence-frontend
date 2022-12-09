import React from 'react';
import styles from './NoItemResult.module.scss';

const NoItemResult = ({ name }) => {
  return <p className={styles.noResult}>No {name} found.. &#128531;</p>;
};

export default NoItemResult;
