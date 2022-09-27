import React from "react"
import styles from "../Profile/Profile.module.scss"
import Sidebar from "../../component/Sidebar/Sidebar"
import ProfileHeader from "../../component/Profile-header/ProfileHeader"

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <ProfileHeader className={styles.header} />
    </div>
  )
}

export default Profile