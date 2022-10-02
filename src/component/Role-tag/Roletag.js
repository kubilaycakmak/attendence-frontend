import {React, useEffect, useState} from "react";
import classes from './RoleTag.module.scss';
import AppointmentCard from "../AppointmentCard/AppointmentCard";

const RoleTag = ({role, onClickHandler, activeList}) => {
const [roleName,setRoleName] = useState([]);


useEffect(()=>{
    console.log(role);
    console.log(activeList)
    if(role === "Co-op Manager"){
        return setRoleName("Co-opManager");
    }else{
        return setRoleName(role); 
    }

},[])

    return (
        <>
            <div style={activeList.includes(role) ? {opacity: 1} : {opacity: 0.6}} 
                  className={classes[`${roleName}_tag_body`]}  onClick={()=>onClickHandler(role)}>
                <p>{role}</p>
            </div>
        </>
    )
}

export default RoleTag;