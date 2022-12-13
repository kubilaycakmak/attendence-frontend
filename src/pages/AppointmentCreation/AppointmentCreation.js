import React, { useEffect } from 'react';
import AppointmentCalendar from '../../component/appointment-calendar/AppointmentCalendar';
import ProfileHeader from '../../component/Profile-header/ProfileHeader';
import styles from './AppointmentCreation.module.scss';
import { getInformationsUserById } from '../../services/user-service';

// page component for creating appointment
const AppointmentCreation = () => {

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

  // how to get id from url params in react router dom
  
  const id = window.location.pathname.split('/')[2];
  console.log(id);
  useEffect(() => {
    callUserInformationById(id);
  }, [])
  

  const callUserInformationById = async (id) => {
    getInformationsUserById(id).then((res) => {
      console.log('res', res);
    });
    // console.log(userInformations);
  };

  return (
    <>
      <div className={styles.mainContent}>
        <h1>Make an appointment with:</h1>
        <ProfileHeader profileData={userData} />
        <section className={styles.calendarSection}>
          <h2>Select a Date & Time</h2>
          <AppointmentCalendar userId={userData._id} />
        </section>
      </div>
    </>
  );
};

export default AppointmentCreation;
