import React from "react"
import { useState } from "react"
import styles from "./ProfileTabBtn.module.scss"

const ProfileTabBtn = () => {
  const [isActive, setIsActive] = useState(1)

  const data = [
    { id: 1, text: "Information", msg: "msg", read: true },
    { id: 2, text: "Appointments", msg: "msg", read: true },
    { id: 3, text: "Reservations", msg: "msg", read: true },
    { id: 4, text: "Videos", msg: "msg", read: false },
    ,
  ]

  const handleClick = (id) => {
    setIsActive(id)
  }

  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return (
          <div className={styles.notification}>
            <button
              id={item.id}
              key={item.id}
              className={isActive === item.id ? styles.active : styles.inActive}
              onClick={() => handleClick(item.id)}>
              {item.text}
            </button>
            {!item.read && <div className={styles.badge}>NEW</div>}
          </div>
        )
      })}
    </div>
  )
}

export default ProfileTabBtn
