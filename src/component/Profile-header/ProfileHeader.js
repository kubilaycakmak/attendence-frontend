import React from 'react';
import ProfileTag from './UI/ProfileTag';
import styles from '../Profile-header/ProfileHeader.module.scss';

const ProfileHeader = ({ profileData }) => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.img}>
        <img src={profileData.photo} alt="profile-img" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{profileData.full_name}</h3>
          <h3>{profileData.current_program}</h3>
        </div>
        <div className={styles.tagContainer}>
          {profileData.role?.map((item, index) => (
            <ProfileTag key={index} item={item} />
          ))}
        </div>
        <div className={styles.linkContainer}>
          <a href={profileData.social?.slack} target="_blank">
            @slack
          </a>
          <a href={profileData.social?.discord} target="_blank">
            @discord
          </a>
          <a href={profileData.social?.linkedin} target="_blank">
            @linkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
