import React from "react"
import Profile from "../Profile-header/profile.svg"
import ProfileTag from "./UI/ProfileTag"
import styles from "../Profile-header/ProfileHeader.module.scss"
import { data } from "../Profile-header/Data/data"
import RollTag from '../Rolltag/RollTag'

const ProfileHeader = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.img}>
        <img src={Profile} alt='profile-img' />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>John Doe</h3>
          <h3>Web & Mobile Development</h3>
        </div>
        <div className={styles.tagContainer}>
          {data.map((role, index) => (
            <RollTag key={index} role={role} />
          ))}
        </div>
        <div className={styles.linkContainer}>
          <a href='/'>@slack</a>
          <a href='/'>@discord</a>
          <a href='/'>@linkedin</a>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
