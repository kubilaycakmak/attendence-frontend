import React, { useEffect, useMemo, useState } from 'react';
import { fetchProfileInfo } from '../../services/user-service';
import styles from '../Profile/Profile.module.scss';
import ProfileHeader from '../../component/Profile-header/ProfileHeader';
import Video from '../../component/Video/Video';
import ProfileForm from '../../component/ProfileForm/ProfileForm';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetchProfileInfo().then((data) => {
      console.log('data', data);
      setUserData(data);
    });
  }, []);

  // TODO: temp data
  const videos = [
    'https://www.youtube.com/embed/1Q8fG0TtVAY',
    'https://www.youtube.com/watch?v=Kl7Ip3Yw9Fg',
  ];
  return (
    <>
      {userData && (
        <div className={styles.wrapper}>
          <div className={styles.mainContent}>
            <ProfileHeader />
            <div className={styles.videoList}>
              {videos.map((src, i) => (
                <Video src={src} key={i} />
              ))}
            </div>
            <ProfileForm profileData={userData} />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
