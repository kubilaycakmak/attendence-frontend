import React from 'react';
import styles from '../Profile/Profile.module.scss';
import Sidebar from '../../component/Sidebar/Sidebar';
import ProfileHeader from '../../component/Profile-header/ProfileHeader';
import Video from '../../component/Video/Video';

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.mainContent}>
        <ProfileHeader className={styles.header} />
        <Video />
      </div>
    </div>
  );
};

export default Profile;
