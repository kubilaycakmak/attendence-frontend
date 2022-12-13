import React, { useContext } from 'react';
import { cancelAppointment } from '../../services/userService';
import { LoadingContext } from '../../contexts/LoadingContext';
import { AlertContext } from '../../contexts/AlertContext';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import NoItemResult from '../NoItemResult/NoItemResult';
import styles from './UserAppointments.module.scss';

const UserAppointments = ({ userData }) => {
  const { setAlert } = useContext(AlertContext);
  const { setIsLoadingShown } = useContext(LoadingContext);

  const handleClick = async (id) => {
    setIsLoadingShown(true);
    const {
      data: { message },
      resultType,
    } = await cancelAppointment(id);
    setAlert({ message, type: resultType });
    setIsLoadingShown(false);
  };

  return (
    <>
      {userData ? (
        <div className={styles.userAppointments}>
          {userData.appointments?.length ? (
            userData.appointments.map((appointment) => (
              <AppointmentCard
                id={appointment._id}
                photo={userData.user.photo}
                full_name={appointment.target_user}
                description={appointment.datetime}
                buttonText="Cancel Appointment"
                clickHandler={() => handleClick(appointment._id)}
              />
            ))
          ) : (
            <NoItemResult name="appointments" />
          )}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default UserAppointments;
