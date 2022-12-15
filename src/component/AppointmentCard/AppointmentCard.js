import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import RoleTag from '../Role-tag/Roletag';
//import userData from "./userData.json";
import classes from './AppointmentCard.module.scss';
import SecondaryBtn from '../ui/Modal/Btn/SecondaryBtn';
import styles from './AppointmentCard.module.scss';

const AppointmentCard = ({
  id,
  photo,
  full_name,
  // role,
  description,
  // filteredRole,
  status,
  buttonText,
  clickHandler,
}) => {
  return (
    <>
      <div className={styles.card_wrapper} key={id}>
        {status === 'Canceled' && (
          <div className={styles.canceledOverlay}>
            <p>Appointment Canceled</p>
          </div>
        )}
        <div className={styles.card_body}>
          <div className={styles.img_wrapper}>
            <img className={styles.prof_img} src={photo ?? "https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51"} alt={'sample_img'} />
          </div>
          <div className={styles.name_wrapper}>
            <h1>{full_name}</h1>
          </div>
          {/* <div className={classes.tag_wrapper}>
            {role.map((el) => {
              return (
                <RoleTag
                  role={el}
                  activeList={filteredRole}
                  style={{ opacity: 1 }}
                />
              );
            })}
          </div> */}
          <div className={styles.description_wrapper}>
            <p className={styles.desc_text}>{description}</p>
          </div>
          <div className={styles.btn_wrapper}>
            {clickHandler ? (
              <button onClick={clickHandler} className={styles.card_btn}>
                {buttonText}
              </button>
            ) : (
              <Link to={`./${id}`} className={styles.card_btn}>
                See Availability
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentCard;
