import React, { useContext } from 'react';
import Alert from '@mui/material/Alert';
import { ErrorContext } from '../../contexts/ErrorContext';
import styles from './ErrorDisplay.module.scss';

const ErrorDisplay = () => {
  const { errorMessage, setErrorMessage } = useContext(ErrorContext);

  const closeDisplay = () => {
    setErrorMessage('');
  };

  return (
    <>
      {errorMessage && (
        <div className={styles.errorDisplay}>
          <button className={styles.closeBtn} onClick={closeDisplay}>
            ×
          </button>
          <Alert variant="filled" severity="error">
            {errorMessage}
          </Alert>
        </div>
      )}
    </>
  );
};

export default ErrorDisplay;
