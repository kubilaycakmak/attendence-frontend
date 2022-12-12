import React from 'react';
import Video from '../../component/Video/Video';
import NoItemResult from '../NoItemResult/NoItemResult';
import styles from './UserVideos.module.scss';

const UserVideos = ({ videos }) => {
  return (
    <div className={styles.videoList}>
      {videos?.length ? (
        videos?.map((video) => <Video {...video} />)
      ) : (
        <NoItemResult name="videos" />
      )}
    </div>
  );
};

export default UserVideos;
