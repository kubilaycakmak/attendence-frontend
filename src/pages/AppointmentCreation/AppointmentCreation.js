import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleUserInfo } from '../../services/userService';
import AppointmentCalendar from '../../component/appointment-calendar/AppointmentCalendar';
import ProfileHeader from '../../component/Profile-header/ProfileHeader';
import styles from './AppointmentCreation.module.scss';
import { getInformationsUserById } from '../../services/userService';

// page component for creating appointment
const AppointmentCreation = () => {
  const { userId } = useParams();
  const [targetUser, setTargetUser] = useState(null);
  useEffect(() => {
    fetchSingleUserInfo(userId).then(({ data }) => {
      setTargetUser(data);
    });
  }, []);

  return (
    <>
      {targetUser && (
        <div className={styles.mainContent}>
          <h1>Make an appointment with:</h1>
          <ProfileHeader profileData={targetUser} />
          <section className={styles.calendarSection}>
            <h2>Select a Date & Time</h2>
            <AppointmentCalendar userId={targetUser._id} />
          </section>
        </div>
      )}
    </>
  );
};

export default AppointmentCreation;
