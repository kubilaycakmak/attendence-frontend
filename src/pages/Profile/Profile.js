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
      // TODO: temp video data
      data.user.videos = [
        {
          url: 'https://www.youtube.com/embed/1Q8fG0TtVAY',
          title: 'This is the title 1',
          likes: ['userid1', 'userid2', 'userid3'],
          _id: 'videoid1videoid1videoid1videoid1',
        },
        {
          url: 'https://www.youtube.com/embed/1Q8fG0TtVAY',
          title: 'This is the title 2',
          likes: ['userid4', 'userid5'],
          _id: 'videoid2videoid2videoid2videoid2',
        },
      ];
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
              {userData.user.videos?.map((video) => (
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
