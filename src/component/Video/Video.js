import React from 'react'
import { DefaultPlayer as VideoPlayer } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import styles from './Video.module.scss'
import sampleVideo from './video.mp4'

const Video = () => {
  const date = '29th August of 2022'
  const like = 12

  return (
    <div className='column'>
      <div className='container'>
        <h2 className={styles.title}>Subject: {date}</h2>
        <button className={styles.button}>😍</button>
        <span className={styles.para}>{like} people loved it</span>
      </div>
      <div className={styles.video}>
        <VideoPlayer autoPlay loop>
          <source src={sampleVideo} type='video/mp4' />
        </VideoPlayer>
      </div>
    </div>
  )
}

export default Video
