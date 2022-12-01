import React from 'react';
import Profile from '../Profile-header/profile.svg';
import ProfileTag from './UI/ProfileTag';
import styles from '../Profile-header/ProfileHeader.module.scss';
import { data } from '../Profile-header/Data/data';
<<<<<<< HEAD

const ProfileHeader = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.img}>
        <img src={Profile} alt="profile-img" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>Kubilay Cakmak</h3>
          <h3>Web & Mobile Development</h3>
        </div>
        <div className={styles.tagContainer}>
          {data.map((data) => (
            <ProfileTag key={data.id}>{data.tag}</ProfileTag>
          ))}
        </div>
        <div className={styles.linkContainer}>
          <a href="/">@slack</a>
          <a href="/">@discord</a>
          <a href="/">@linkedin</a>
        </div>
      </div>
    </div>
  );
};

=======
import PrimaryBtn from '../ui/Modal/Btn/PrimaryBtn';
import SecondaryBtn from '../ui/Modal/Btn/SecondaryBtn';
import TertiaryBtn from '../ui/Modal/Btn/TertiaryBtn';

const ProfileHeader = () => {
  const testHandler = () => {
    console.log('hello from secondary btn');
  };

  return (
    <>
      <PrimaryBtn action={() => console.log('hello from Primary btn')}>
        Test
      </PrimaryBtn>
      <p>-------------------------</p>
      <SecondaryBtn action={testHandler}>Test</SecondaryBtn>
      <p>-------------------------</p>
      <TertiaryBtn disabled>Test</TertiaryBtn>
      <div className={styles.bigContainer}>
        <div className={styles.img}>
          <img src={Profile} alt="profile-img" />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>Kubilay Cakmak</h3>
            <h3>Web & Mobile Development</h3>
          </div>
          <div className={styles.tagContainer}>
            {data.map((data) => (
              <>
                <ProfileTag key={data.id}>{data.tag}</ProfileTag>
              </>
            ))}
          </div>
          <div className={styles.linkContainer}>
            <a href="/">@slack</a>
            <a href="/">@discord</a>
            <a href="/">@linkedin</a>
          </div>
        </div>
      </div>
    </>
  );
};

>>>>>>> custom-btn
export default ProfileHeader;
