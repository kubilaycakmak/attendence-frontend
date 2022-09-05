import React from "react"
import { useState } from "react"
import styles from "./ProfileTabBtn.module.scss"

const ProfileTabBtn = () => {
  const [isActive, setIsActive] = useState("")

  const handleClick = (e) => {
    setIsActive(e.target.id)
  }

  return (
    <>
      <button
        id={"1"}
        key={1}
        className={isActive === "1" ? styles.active : styles.inActive}
        onClick={handleClick}>
        Information
      </button>
      <button
        id={"2"}
        key={2}
        className={isActive === "2" ? styles.active : styles.inActive}
        onClick={handleClick}>
        Appointments
      </button>
      <button
        id={"3"}
        key={3}
        className={isActive === "3" ? styles.active : styles.inActive}
        onClick={handleClick}>
        Reservations
      </button>
    </>
  )
}

export default ProfileTabBtn
