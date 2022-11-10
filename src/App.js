import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import Profile from './pages/Profile/Profile';
import StaffList from './pages/StaffList/StaffList';
import AppointmentConfirmation from './pages/AppointmentConfirmation/AppointmentConfirmation';
import './App.css';

function App() {
  // TODO: temp data
  const data = {
    user: {
      fullName: 'Joe Doe',
      roles: ['TA', 'Teacher'],
      department: 'WMAD Co-op Manager',
    },
    id: '1293193ahsdhsadh1238183',
    date: 1660546800,
    duration: '30m',
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          {/* <AvatarMenu />
          <ReservationCardList list={list1} isForReserved={true} />
          <ReservationCardList list={list2} /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<LoginSignup />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/staff-list" element={<StaffList />}></Route>
            <Route
              path="/appointment/confirm"
              element={<AppointmentConfirmation {...data} />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
