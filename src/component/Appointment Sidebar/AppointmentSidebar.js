import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './AppointmentSidebar.module.scss';
import logo from './logo.png';
import { SidebarData } from './SidebarData';

function AppointmentSidebar() {

  const { params } = useParams();

  useEffect(() => {
    console.log(params);
  }, [])
  
  // const title = params.title;

  return (
    <div className={styles.container}>
        <ul className={styles.sidebarList}>
            {SidebarData.map((val, key) => {
                return (
                     <li 
                        key={key}
                        className={styles.row}
                        //onClick={()=> {
                           // window.location.pathname = val.link
                      // } }
                      >

                     <div>{val.title}</div>
                     </li>
                )
            })}
            <img src={logo} className={styles.logo} alt='logo'></img>
       </ul>
    </div>
  )
}

export default AppointmentSidebar