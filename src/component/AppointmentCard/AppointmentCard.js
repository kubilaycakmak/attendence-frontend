import {React, useState} from "react";
import RollTag from "../Role-tag/Roletag";
//import userData from "./userData.json";
import classes from './AppointmentCard.module.scss';

 const AppointmentCard = ({id,photo,full_name,role,description}) => {
    console.log(classes)
    console.log("ri",role)
    return (
        <>
            <div className={classes.card_wrapper} key={id}>
                <div className={classes.card_body}>
                    <div className={classes.img_wrapper}>
                        <img className={classes.prof_img} src={photo} alt={"sample_img"}/>
                    </div>
                    <div className={classes.name_wrapper}>
                        <h1>{full_name}</h1>
                    </div>
                    <div className={classes.tag_wrapper}>
                    {role.map(el =>{
                        return( 
                        <RollTag 
                            role={el}
                        />
                        )
                    })
                }
                    
                    
                       </div>
                    <div className={classes.description_wrapper}>
                        <p className={classes.desc_text}>{description}</p>
                    </div>
                    <div className={classes.btn_wrapper}>
                        <button className={classes.card_btn}>See Available</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentCard;