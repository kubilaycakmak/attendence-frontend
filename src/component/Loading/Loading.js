import React, { useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Loading.module.scss';

const Loading = ({ isFull }) => {
  return (
    <div className={`${styles.loading} ${isFull && styles.isFull}`}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
