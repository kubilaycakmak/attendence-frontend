import React, { useState } from 'react';
import { DefaultPlayer as VideoPlayer } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import styles from './Video.module.scss';

const Video = ({ url, likes, title }) => {
  const [like, setLike] = useState(likes.length);
  const [toggled, setToggled] = useState(false);

  const handleLike = () => {
    if (toggled) {
      setToggled(false);
      setLike(like - 1);
    } else {
      setToggled(true);
      setLike(like + 1);
    }
  };

  return (
    <div className={styles.videoColumn}>
      <div className={styles.videoContainer}>
        <h2 className={styles.title}>Subject: {title}</h2>
        <button className={styles.button} onClick={handleLike}>
          😍
        </button>
        <span className={styles.para}>{like} people loved it</span>
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
