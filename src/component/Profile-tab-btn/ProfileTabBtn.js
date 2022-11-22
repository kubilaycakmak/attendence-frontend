import React from 'react';
import { useState } from 'react';
import styles from './ProfileTabBtn.module.scss';
import ProfileForm from '../ProfileForm/ProfileForm';

const ProfileTabBtn = () => {
  const [isActive, setIsActive] = useState(1);

  const data = [
    { id: 1, text: 'Information', msg: 'msg', read: true },
    { id: 2, text: 'Appointments', msg: 'msg', read: true },
    { id: 3, text: 'Reservations', msg: 'msg', read: true },
    { id: 4, text: 'Videos', msg: 'msg', read: false },
    ,
  ];

  const handleClick = (id) => {
    // setIsActive(e.target.id)
    setIsActive(id);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.tabContainer}>
          {data.map((item, index) => {
            return (
              <div className={styles.notification}>
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
          {isActive == 1 && <ProfileForm />}
          {isActive == 2 && <p>this is 2</p>}
          {isActive == 3 && <p>this is 3</p>}
          {isActive == 4 && <p>this is 4</p>}
        </div>
      </div>
    </>
  );
};

export default ProfileTabBtn;
