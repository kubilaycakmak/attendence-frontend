import React from 'react';
import Video from '../../component/Video/Video';
import styles from './UserVideos.module.scss';

const UserVideos = ({ videos }) => {
  return (
    <div className={styles.videoList}>
      {videos?.map((video) => (
        <Video {...video} />
      ))}
    </div>
  );
};

export default UserVideos;
