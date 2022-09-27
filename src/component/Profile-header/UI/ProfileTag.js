import React from "react"
import styles from "../UI/ProfileTag.module.scss"

const ProfileTag = (props) => {
  return <p className={styles.color}>{props.children}</p>
}

export default ProfileTag
