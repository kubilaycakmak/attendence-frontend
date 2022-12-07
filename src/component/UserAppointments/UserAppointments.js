import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import styles from './UserAppointments.module.scss';

const UserAppointments = ({ userData }) => {
  console.log('userData', userData);
  return (
    <>
      {userData ? (
        <div className={styles.userAppointments}>
          {userData.appointments.map((appointment) => (
            <AppointmentCard
              id={appointment._id}
              photo={userData.user.photo}
              full_name={appointment.target_user}
              // role={role}
              description={appointment.datetime}
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
