import React from 'react'
import styles from './Sidebar.module.scss'
import { SidebarData } from './SidebarData'
import attendance from './attendance.png'

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <ul className={styles.SidebarList}>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === val.link ? 'active' : ''}
              onClick={() => {
                window.location.pathname = val.link
              }}
              className={styles.row}
            >
              <div>{val.title}</div>
            </li>
          )
        })}
      </ul>
      <div className={styles.image}>
        <img src={attendance} alt='attendance' />
      </div>
    </div>
  )
}

export default Sidebar
