import React from 'react';
import styles from './PasswordForm.module.scss';

const PasswordForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.passwordForm}>
      <h2>Please set your password</h2>
      <form onSubmit={handleSubmit}>
        <input type="password" placeholder="Enter password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordForm;
