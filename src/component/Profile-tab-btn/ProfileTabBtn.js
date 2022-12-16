import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ProfileTabBtn.module.scss';
import UserProfileForm from '../UserProfileForm/UserProfileForm';
import UserAppointments from '../UserAppointments/UserAppointments';
import UserVideos from '../UserVideos/UserVideos';
import queryString from 'query-string';
import { useSearchParams } from 'react-router-dom';
import { fetchProfileInfo } from '../../services/userService';
import { SAVE_USER_DATA } from '../../store/user/userActionTypes';

const ProfileTabBtn = ({ userData }) => {
  const [isActive, setIsActive] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const data = [
    { id: 1, text: 'Information', msg: 'msg', read: true },
    { id: 2, text: 'Appointments', msg: 'msg', read: true },
    { id: 3, text: 'Reservations', msg: 'msg', read: true },
    { id: 4, text: 'Videos', msg: 'msg', read: false },
    ,
  ];

  useEffect(() => {
    let tab = searchParams.get('tab') || 'Information';

    data.forEach((item) => {
      if (item.text.toLowerCase() == tab.toLowerCase()) {
        setIsActive(item.id);
      }
    });
  }, [searchParams.get('tab')]);

  const handleClick = (id) => {
    console.log('hey');
    fetchProfileInfo().then(({ data }) => {
      dispatch({ type: SAVE_USER_DATA, payload: data });
    });
    setIsActive(id);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.tabContainer}>
          {data.map((item, index) => {
            return (
              <div key={index} className={styles.notification}>
                <button
                  id={item.id}
                  key={item.id}
                  className={
                    isActive === item.id ? styles.active : styles.inActive
                  }
                  onClick={() => handleClick(item.id)}
                >
                  {item.text}
                </button>
                {!item.read && <div className={styles.badge}>NEW</div>}
              </div>
            );
          })}
        </div>
        <div className={styles.formWrap}>
          {isActive == 1 && <UserProfileForm profileData={userData} />}
          {isActive == 2 && <UserAppointments userData={userData} />}
          {isActive == 3 && 'this is reservation section'}
          {isActive == 4 && <UserVideos videos={userData.videos} />}
        </div>
      </div>
    </>
  );
};

export default ProfileTabBtn;
