import React, { useState } from 'react';
import { sendVideoLike } from '../../services/user-service';
import { DefaultPlayer as VideoPlayer } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import styles from './Video.module.scss';

const Video = ({ _id, url, likes, title }) => {
  const [likesCount, setLikesCount] = useState(likes.length);
  const [toggled, setToggled] = useState(false);

  const handleLike = async () => {
    sendVideoLike(_id, !toggled);
    if (toggled) {
      setToggled(false);
      setLikesCount(likesCount - 1);
    } else {
      setToggled(true);
      setLikesCount(likesCount + 1);
    }
  };

  return (
    <div className={styles.videoColumn}>
      <div className={styles.videoContainer}>
        <h2 className={styles.title}>Subject: {title}</h2>
        <button className={styles.button} onClick={handleLike}>
          😍
        </button>
        <span className={styles.para}>{likesCount} people loved it</span>
      </div>
      <div className={styles.video}>
        <VideoPlayer autoPlay loop className={styles.videoSource}>
          <source src={url} type="video/mp4" />
        </VideoPlayer>
      </div>
    </div>
  );
};

export default Video;
