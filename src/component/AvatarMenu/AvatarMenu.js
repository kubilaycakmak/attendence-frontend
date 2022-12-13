import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AvatarMenu.module.scss";
import { useNavigate } from "react-router-dom";
import localStorageHelper from "../../helpers/localStorageHelper";

const AvatarMenu = ({ username, photo }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const navigate = useNavigate();
  const menu = useRef();
  const showMenu = () => {
    setIsMenuShown((prev) => !prev);
  };
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!menu.current.contains(e.target)) {
        setIsMenuShown(false);
      }
    });
  }, []);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorageHelper("remove", "token");
    navigate("/login");
  };

  return (
    <div className={styles.avatarMenu} ref={menu}>
      <div className={styles.avatarMenu__icon} onClick={showMenu}>
        <img src={photo ?? "https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51"} alt="profile image" />
        <p>@{username}</p>
      </div>
      <div
        className={`${styles.avatarMenu__menuWrap} ${
          isMenuShown ? styles.isShown : ""
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
          <li>
            <Link onClick={logoutHandler}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AvatarMenu;
