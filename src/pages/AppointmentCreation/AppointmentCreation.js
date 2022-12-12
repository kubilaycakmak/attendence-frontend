import React, { useEffect, useState } from 'react';
import AppointmentCalendar from '../../component/appointment-calendar/AppointmentCalendar';
import ProfileHeader from '../../component/Profile-header/ProfileHeader';
import styles from './AppointmentCreation.module.scss';

// page component for creating appointment
const AppointmentCreation = () => {
  // TODO: temp data
  const userData = {
    social: {
      discord: 'mydsiscordaccount',
      linkedin: 'mylinkedInaccount',
    },
    _id: '638e736783266435c2e5b684',
    email: 'john@test.com',
    role: ['Coodinator', 'Student'],
    __v: 0,
    username: 'john',
    photo:
      'http://res.cloudinary.com/ditucvfmr/image/upload/v1664495063/attendance/users/6335fe50ee26feba6c20f4e6.png',
    full_name: 'john doe',
    current_program: 'WMAD',
  };
  return (
    <>
      <div className={styles.mainContent}>
        <h1>Make an appointment with:</h1>
        <ProfileHeader profileData={userData} />
        <section className={styles.calendarSection}>
          <h2>Select a Date & Time</h2>
          <AppointmentCalendar />
        </section>
      </div>
    </>
  );
};

export default AppointmentCreation;
