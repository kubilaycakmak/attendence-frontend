import React, { useEffect, useState } from 'react';
import { fetchStaffUsers } from '../../services/userService';
import FilterView from '../../component/Staff-filter/FilterView';
import styles from './MakeAppointments.module.scss';

const MakeAppointments = () => {
  const [initialUsers, setInitialUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState(['All']);

  useEffect(() => {
    fetchStaffUsers().then((data) => {
      console.log(data);
      setInitialUsers(data.data.users);
    });
  }, []);

  useEffect(() => {
    if (!initialUsers.length) return;
    if (filtered.length == 0) setFiltered(['All']);

    if (filtered.includes('All')) {
      setUsers(initialUsers);
    } else {
      let unique = [];
      let arr = [];

      for (let i = 0; i < initialUsers.length; i++) {
        for (let j = 0; j < initialUsers[i].role.length; j++) {
          if (filtered.includes(initialUsers[i].role[j])) {
            arr.push(initialUsers[i]);
            unique = [...new Set(arr)];
          }
        }
      }
      setUsers(unique);
    }
  }, [initialUsers, filtered]);

  const onClickFunction = (role) => {
    if (role === 'All' || filtered.length == 0) {
      return setFiltered(['All']);
    }
    if (role !== 'All') {
      let newArray = filtered.filter((item) => {
        if (item !== 'All') {
          return item;
        }
      });
      setFiltered(newArray);
    }
    if (!filtered.includes(role)) {
      setFiltered((prev) => [...prev, role]);
    } else {
      let newArr = filtered.filter((item) => {
        if (item !== role) {
          return item;
        }
      });
      setFiltered(newArr);
    }
  };

  return (
    <>
      {initialUsers.length && (
        <div className={styles.wrapper}>
          <div className={styles.mainContent}>
            <FilterView
              userData={users}
              filteredRole={filtered}
              onClickFunction={onClickFunction}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MakeAppointments;
