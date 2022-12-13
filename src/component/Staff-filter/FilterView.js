import React, { useState } from 'react';
import { useStore } from 'react-redux';
import RoleTag from '../Role-tag/Roletag';
import classes from './FilterView.module.scss';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

const FilterView = ({ userData, onClickFunction, filteredRole }) => {
  const [filtered, setFiltered] = useState(['All']);
  const roleName = ['All', 'TA', 'Teacher', 'Co-op Manager'];
  console.log('userData', userData);

  return (
    <>
      <div className={classes.upperContainer}>
        <div className={classes.titleWrapper}>
          <h1 className={classes.filterTitle}>Make Appointments</h1>
        </div>
        <div className={classes.tagsWrapper}>
          <h1 className={classes.filterText}>Filter with:</h1>
          {roleName.map((el, index) => {
            return (
              <RoleTag
                onClickHandler={() => onClickFunction(roleName[index])}
                role={roleName[index]}
                activeList={filteredRole}
              />
            );
          })}
        </div>
      </div>
      <div className={classes.cardsWrapper}>
        {userData?.map((user) => {
          let text = 'hello';
          text.toUpperCase();
          return (
            <AppointmentCard
              id={user._id}
              photo={user.photo}
              full_name={user.full_name}
              role={user.role}
              description={user.description}
              filteredRole={filtered}
            />
          );
        })}
      </div>
    </>
  );
};

export default FilterView;
