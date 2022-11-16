import React from 'react';
import styles from '../Profile/Profile.module.scss';
import Sidebar from '../../component/Sidebar/Sidebar';
import ProfileHeader from '../../component/Profile-header/ProfileHeader';
import Video from '../../component/Video/Video';

const Profile = () => {
  // TODO: temp data
  const videos = [
    'https://www.youtube.com/embed/1Q8fG0TtVAY',
    'https://www.youtube.com/watch?v=Kl7Ip3Yw9Fg',
  ];
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.mainContent}>
        <ProfileHeader />
        <div className={styles.videoList}>
          {videos.map((src) => (
            <Video src={src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
