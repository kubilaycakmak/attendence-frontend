import React from 'react';
import styles from '../Profile/Profile.module.scss';
import ProfileHeader from '../../component/Profile-header/ProfileHeader';
import Video from '../../component/Video/Video';
import ProfileForm from '../../component/ProfileForm/ProfileForm';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userData = useSelector((state) => state.user);

  return (
    <>
      {userData && (
        <div className={styles.wrapper}>
          <div className={styles.mainContent}>
            <ProfileHeader profileData={userData.user} />
            <div className={styles.videoList}>
              {userData.videos?.map((video) => (
                <Video {...video} />
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
