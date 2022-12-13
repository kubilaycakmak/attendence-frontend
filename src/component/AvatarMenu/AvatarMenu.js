import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AvatarMenu.module.scss';

const AvatarMenu = ({ username, photo }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const menu = useRef();
  const showMenu = () => {
    setIsMenuShown((prev) => !prev);
  };
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (!menu.current.contains(e.target)) {
        setIsMenuShown(false);
      }
    });
  }, []);

  return (
    <div className={styles.avatarMenu} ref={menu}>
      <div className={styles.avatarMenu__icon} onClick={showMenu}>
        <img src={photo} alt="profile image" referrerpolicy="no-referrer" />
        <p>@{username}</p>
      </div>
      <div
        className={`${styles.avatarMenu__menuWrap} ${
          isMenuShown ? styles.isShown : ''
        }`}
      >
        <ul className={styles.avatarMenu__menu}>
          <li>
            <Link to="/make-room-reservations">Make Room Reservations</Link>
          </li>
          <li>
            <Link to="/profile?tab=information">Profile</Link>
          </li>
          <li>
            <Link to="/profile?tab=appointments">My Appointments</Link>
          </li>
          <li>
            <Link to="/profile?tab=reservations">My Reservations</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AvatarMenu;
