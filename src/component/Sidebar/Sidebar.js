import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { SidebarData } from './SidebarData';
import attendance from './attendance.png';

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <ul className={styles.SidebarList}>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === val.link ? 'active' : ''}
              className={styles.row}
            >
              <Link to={val.link}>{val.title}</Link>
            </li>
          );
        })}
      </ul>
      <p className={styles.Logo}>attendance</p>
    </div>
  );
};

export default Sidebar;
