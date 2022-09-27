import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AvatarMenu.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../reducers/auth";

const AvatarMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(authActions);
  // TODO: temp data
  const tempUserInfo = {
    user_name: "johndoe",
    profile_image: "/profile.png",
  };
  const [isMenuShown, setIsMenuShown] = useState(false);
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
    dispatch(authActions.logout());
    console.log("logout");
    navigate("/");
  };

  return (
    <div className={styles.avatarMenu} ref={menu}>
      <div className={styles.avatarMenu__icon} onClick={showMenu}>
        <img src={tempUserInfo.profile_image} alt="profile image" />
        <p>@{tempUserInfo.user_name}</p>
      </div>
      <div
        className={`${styles.avatarMenu__menuWrap} ${
          isMenuShown ? styles.isShown : ""
        }`}
      >
        <ul className={styles.avatarMenu__menu}>
          <li>
            <Link to="/location">Location & Direction</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/appointments">My Appointments</Link>
          </li>
          <li>
            <Link to="/reservations">My Reservations</Link>
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
