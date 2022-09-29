import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './AppointmentSidebar.module.scss';
import logo from './logo.png';

function AppointmentSidebar() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [isConfirmPage, setIsConfirmPage] = useState(false);
  const [isConfirmedPage, setIsConfirmedPage] = useState(false);

  useEffect(() => {
    console.log("search params",searchParams.getAll("status"));
    if(searchParams.getAll("status")[0] === "confirm") {
      setIsConfirmPage(true);
    } else if(searchParams.getAll("status")[0] === "confirmed"){
      setIsConfirmedPage(true);
    }
  }, [searchParams])
  
  useEffect (() =>{
    console.log(isConfirmedPage)
  },[isConfirmedPage]
  )
  return (
    <div className={styles.container}>
        <ul className={styles.sidebarList}>
          <li className={styles.l1}> 👈🏻 Back To List </li>   
          <li  className={isConfirmPage  || isConfirmedPage ? styles.isConfirmPage : ""}> '1 - Select Date and Hour' </li>
          <li className={isConfirmPage  || isConfirmedPage ? styles.isConfirmPage : ""}> 2 - Confirm </li>
          <li className={isConfirmedPage ? styles.isConfirmedPage  : ""}> 👍🏼 Done</li>
          <img src={logo} className={styles.logo} alt='logo'></img>
       </ul>
    </div>
  )
}

export default AppointmentSidebar;

