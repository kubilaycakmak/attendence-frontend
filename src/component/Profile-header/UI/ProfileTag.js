import React from 'react';
import styles from '../UI/ProfileTag.module.scss';

const ProfileTag = ({ item }) => {
  return <p className={styles.color}>{item}</p>;
};

export default ProfileTag;
