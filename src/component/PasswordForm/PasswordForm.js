import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { setFirstPassword } from '../../services/auth-service';
import styles from './PasswordForm.module.scss';
import { AlertContext } from '../../contexts/AlertContext';

const PasswordForm = ({ closeModal }) => {
  const [newPassword, setNewPassword] = useState('');
  const { setAlert } = useContext(AlertContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      resultType,
      data: { message },
    } = await setFirstPassword(newPassword);

    if (resultType === 'error') {
      setAlert({ message, type: resultType });
      return;
    }
    closeModal(e);
    setAlert({});
    navigate('/profile');
  };

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };
  return (
    <div className={styles.passwordForm}>
      <h2>Please set your password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordForm;
