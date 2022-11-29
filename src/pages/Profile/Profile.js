import React, { useEffect, useState } from 'react';
import { fetchProfileInfo } from '../../services/user-service';
import styles from '../Profile/Profile.module.scss';
import ProfileHeader from '../../component/Profile-header/ProfileHeader';
import Video from '../../component/Video/Video';
import ProfileForm from '../../component/ProfileForm/ProfileForm';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetchProfileInfo().then((data) => {
      setUserData(data);
    });
  }, []);

  return (
    <>
      {userData && (
        <div className={styles.wrapper}>
          <div className={styles.mainContent}>
            <ProfileHeader />
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
