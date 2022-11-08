import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import AvatarMenu from './component/AvatarMenu/AvatarMenu';
import ReservationCardList from './component/ReservationCardList/ReservationCardList';
import Profile from "./pages/Profile/Profile"
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
   // TODO: temp data
  // Profile page
  const list1 = [
    {
      image: "/location-sample.jpg",
      location: "Microsoft Room ~ 4.Flor",
      date: "Date: Thursday, 23, 2022 11:15am",
      duration: "Duration: 45 minutes",
    },
    {
      image: "/location-sample.jpg",
      location: "Microsoft Room ~ 4.Flor",
      date: "Date: Thursday, 23, 2022 11:15am",
      duration: "Duration: 45 minutes",
    },
    {
      image: "/location-sample.jpg",
      location: "Microsoft Room ~ 4.Flor",
      date: "Date: Thursday, 23, 2022 11:15am",
      duration: "Duration: 45 minutes",
    },
    {
      image: "/location-sample.jpg",
      location: "Microsoft Room ~ 4.Flor",
      date: "Date: Thursday, 23, 2022 11:15am",
      duration: "Duration: 45 minutes",
    },
  ]
  // Location & Direction page
  const list2 = [
    {
      type: "classroom",
      image: "/location-sample.jpg",
      location: "Microsoft Room ~ 4.Flor",
      description:
        "This class location is at first floor and next to elevator.",
    },
    {
      type: "classroom",
      image: "/location-sample.jpg",
      location: "Microsoft Room ~ 4.Flor",
      description:
        "This class location is at first floor and next to elevator. This class location is at first floor and next to elevator. This class location is at first floor and next to elevator.",
    },
    {
      type: "amenity",
      image: "/location-sample.jpg",
      location: "Restroom ~ 1st Floor",
      description:
        "This class location is at first floor and next to elevator.",
    },
    {
      type: "amenity",
      image: "/location-sample.jpg",
      location: "Restroom ~ 1st Floor",
      description:
        "This class location is at first floor and next to elevator.",
    },
  ];

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
      <BrowserRouter>
        <div className='App'>
          {/* <AvatarMenu />
          <ReservationCardList list={list1} isForReserved={true} />
          <ReservationCardList list={list2} /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<LoginSignup />} />
            <Route path='/login' element={<LoginSignup />} />
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>
          <Sidebar />
            <Week />
            <Time />
            <FilterView
              userData={users}
              filteredRole={filtered}
              onClickFunction={onClickFunction}
            />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
