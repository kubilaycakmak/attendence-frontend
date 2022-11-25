import React, { useState } from 'react';
import { sendVideoLike } from '../../services/user-service';
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
    <div className={styles.videoMainWrap}>
      <div className={styles.videoContainer}>
        <h2 className={styles.title}>Subject: {title}</h2>
        <button className={styles.button} onClick={handleLike}>
          😍
        </button>
        <span className={styles.para}>{likesCount} people loved it</span>
      </div>
      <div className={styles.video}>
        <iframe
          src={url}
          title={title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
