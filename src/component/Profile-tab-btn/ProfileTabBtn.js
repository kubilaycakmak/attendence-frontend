import React from "react"
import { useState, useEffect } from "react"
import styles from "./ProfileTabBtn.module.scss"

const ProfileTabBtn = () => {
  const [isActive, setIsActive] = useState("")
  const [notifs, setNotifs] = useState(false)

  const data = [{ id: 1, msg: "msg", read: true }]

  const handleClick = (e) => {
    setIsActive(e.target.id)
  }

  useEffect(() => {
    if (data[0].read) {
      setNotifs(!notifs)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.notification}>
        <button
          id={"1"}
          key={1}
          className={isActive === "1" ? styles.active : styles.inActive}
          onClick={handleClick}>
          Information
        </button>
        {notifs && <div className={styles.badge}>NEW</div>}
      </div>

      <div className={styles.notification}>
        <button
          id={"2"}
          key={2}
          className={isActive === "2" ? styles.active : styles.inActive}
          onClick={handleClick}>
          Appointments
        </button>
        {notifs && <div className={styles.badge}>NEW</div>}{" "}
      </div>

      <div className={styles.notification}>
        <button
          id={"3"}
          key={3}
          className={isActive === "3" ? styles.active : styles.inActive}
          onClick={handleClick}>
          Reservations
        </button>
        {notifs && <div className={styles.badge}>NEW</div>}{" "}
      </div>

      <div className={styles.notification}>
        <button
          id={"4"}
          key={4}
          className={isActive === "4" ? styles.active : styles.inActive}
          onClick={handleClick}>
          Videos
        </button>
        {notifs && <div className={styles.badge}>NEW</div>}{" "}
      </div>
    </div>
  )
}

export default ProfileTabBtn
