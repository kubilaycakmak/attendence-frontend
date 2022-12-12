import React from 'react';
import classes from './AppointmentHero.module.scss';
import imageMob from '../../images/img_for_appointment_mob.png';
import imageWeb from '../../images/img_for_appointment_web.png';
import PrimaryBtn from '../ui/Modal/Btn/PrimaryBtn';
//import image from "../../images/img_for_appointment.svg"

export const AppointmentHero = ({ className }) => {
  return (
    <div className={`${classes.global_container} ${className}`}>
      <div>
        <div className={classes.appointment_wrapper}>
          <p>Appointment</p>
        </div>
        <div className={classes.sentence_wrapper}>
          <h1>Request a meeting from our professional team.</h1>
        </div>
        <div className={classes.button_wrapper_web}>
          <button className={classes.button}>Get started</button>
        </div>
      </div>
      <div>
        <div className={classes.image_wrapper}>
          <img className={classes.image_mob} src={imageMob} alt="header-pic" />
          <img className={classes.image_web} src={imageWeb} alt="header-pic" />
        </div>
        <div className={classes.button_wrapper_mob}>
          <button className={classes.button}>Get started</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHero;
