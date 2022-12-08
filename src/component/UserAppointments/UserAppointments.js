import React from 'react';
import { cancelAppointment } from '../../services/user-service';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import styles from './UserAppointments.module.scss';

const UserAppointments = ({ userData }) => {
  console.log('userData', userData);

  const handleClick = async (id) => {
    const result = await cancelAppointment(id);
  };

  return (
    <>
      {userData ? (
        <div className={styles.userAppointments}>
          {userData.appointments.map((appointment) => (
            <AppointmentCard
              id={appointment._id}
              photo={userData.user.photo}
              full_name={appointment.target_user}
              description={appointment.datetime}
              buttonText="Cancel Appointment"
              clickHandler={() => handleClick(appointment._id)}
            />
          ))}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default UserAppointments;
