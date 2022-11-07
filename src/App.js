import React, { useEffect, useState } from 'react';
import ProfileTabBtn from './component/Profile-tab-btn/ProfileTabBtn';
import Form from './component/Profile-tab-btn/Form/Form';
import AppointmentCalendar from './component/appointment-calendar/AppointmentCalendar';
import FilterView from './component/Staff-filter/FilterView';
import AppointmentCard from './component/AppointmentCard/AppointmentCard';
import userDatas from './component/AppointmentCard/userData.json';
import Sidebar from './component/Sidebar/Sidebar'
import Time from './component/Time/Time'
import Week from './component/Week/Week'
import './reset.scss';
import './App.css';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [filtered, setFiltered] = useState(['All']);
  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    if (filtered.length == 0) setFiltered(['All']);

    if (filtered.includes('All')) {
      setUsers(userDatas);
    } else {
      let unique = [];
      let arr = [];

      for (let i = 0; i < userDatas.length; i++) {
        for (let j = 0; j < userDatas[i].role.length; j++) {
          if (filtered.includes(userDatas[i].role[j])) {
            arr.push(userDatas[i]);
            unique = [...new Set(arr)];
          }
        }
      }
      setUsers(unique);
    }
  }, [filtered]);

  return (
    <div className="App">
            <Sidebar />
      <Week />
      <Time />
      <FilterView
        userData={users}
        filteredRole={filtered}
        onClickFunction={onClickFunction}
      />
    </div>
  )
}

export default App
