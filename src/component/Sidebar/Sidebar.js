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
      {window.innerWidth > 768 ? <p className='logo'>attendance</p> : ""}
    </div>
  )
}

export default Sidebar
