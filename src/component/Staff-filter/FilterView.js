import {React, useEffect, useState} from "react";
import { useStore } from "react-redux";
import RoleTag from "../Role-tag/Roletag";
import classes from './FilterView.module.scss';

const FilterView = ({userData, onClickFunction, filteredRole}) => {
    const [filtered, setFiltered] = useState(["All"])
    
    const roleName = ["All","TA","Teacher","Co-op Manager"];

    return (
        <>
            <h1 className={classes.filterText}>Filter with:</h1>
            {roleName.map((el,index)=>{
                return(
                    <RoleTag
                    onClickHandler={() => onClickFunction(roleName[index])}
                    role={roleName[index]}
                    activeList={filteredRole}
                    />
                    
            )
            })}
            {userData?.map((user, id) => {
                let text = "hello";
                text.toUpperCase()
                return (<p className={classes[`user:${id}`]}>{user.role}</p>)
            })}
        </>
    )
}

export default FilterView;