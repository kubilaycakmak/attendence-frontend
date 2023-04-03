import React, { useContext } from 'react';
import MuiAlert from '@mui/material/Alert';
import { AlertContext } from '../../contexts/AlertContext';
import styles from './Alert.module.scss';

const Alert = () => {
  const { alert, setAlert } = useContext(AlertContext);

  const closeDisplay = () => {
    setAlert({});
  };

  return (
    <>
      {alert.message && (
        <div className={styles.alert}>
          <button
            className={`${styles.closeBtn} ${styles[alert.type]}`}
            onClick={closeDisplay}
          >
            ×
          </button>
          <MuiAlert variant="filled" severity={alert.type}>
            {alert.message}
          </MuiAlert>
        </div>
      )}
    </>
  );
};

export default Alert;
