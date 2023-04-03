import React from 'react';
import styles from '../Profile/Profile.module.scss';
import ProfileHeader from '../../component/Profile-header/ProfileHeader';
import { useSelector } from 'react-redux';
import ProfileTabBtn from '../../component/Profile-tab-btn/ProfileTabBtn';

const Profile = () => {
  const userData = useSelector((state) => state.user);
  console.log('userData', userData);

  return (
    <>
      {userData && (
        <div className={styles.wrapper}>
          <div className={styles.mainContent}>
            <ProfileHeader profileData={userData.user} />
            <ProfileTabBtn userData={userData} />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
