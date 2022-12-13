import React from 'react';
import ProfileTag from './UI/ProfileTag';
import styles from '../Profile-header/ProfileHeader.module.scss';

const ProfileHeader = ({ profileData }) => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.img}>
        <img 
          alt="profile-img"
          referrerpolicy="no-referrer" 
          src={profileData.photo ?? "https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51"} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{profileData.full_name}</h3>
          <h3 className={styles.program}>
            Program: <span>{profileData.current_program}</span>
          </h3>
        </div>
        <div className={styles.tagContainer}>
          {profileData.role?.map((item, index) => (
            <ProfileTag key={index} item={item} />
          ))}
        </div>
        <div className={styles.linkContainer}>
          <a
            href={profileData.social?.slack}
            className={!profileData.social?.slack ? styles.isDisabled : ''}
            target="_blank"
          >
            @slack
          </a>
          <a
            href={profileData.social?.discord}
            className={!profileData.social?.discord ? styles.isDisabled : ''}
            target="_blank"
          >
            @discord
          </a>
          <a
            href={profileData.social?.linkedin}
            className={!profileData.social?.linkedin ? styles.isDisabled : ''}
            target="_blank"
          >
            @linkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
