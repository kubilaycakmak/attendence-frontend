import React from 'react';
import ManReadBook from '../../assets/imgs/man-reading-book.svg';
import styles from './FindLocation.module.scss';

const FindLocation = ({ className }) => {
  return (
    <section className={`${styles.container} ${className}`}>
      <div className={styles.titleContainer}>
        <p>Find Location</p>
        <h1>
          Find what you looking for could be an empty space to work or
          amenities.
        </h1>
        {/* btn for desktop */}
        <button className={styles.desktopBtn}>Get started</button>
      </div>
      <div className={styles.imgContainer}>
        <img src={ManReadBook} alt="Man-read-book"></img>
        {/* btn for mobile */}
        <button className={styles.mobileBtn}>Get started</button>
      </div>
    </section>
  );
};

export default FindLocation;
