import React, { useContext } from 'react';
import { LoadingContext } from '../../contexts/LoadingContext';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Loading.module.scss';

const Loading = () => {
  const { isLoadingShown } = useContext(LoadingContext);

  return (
    <>
      {isLoadingShown && (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Loading;
