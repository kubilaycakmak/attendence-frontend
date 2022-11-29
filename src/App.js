import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './component/ProtectedRoutes/ProtectedRoutes';
import Home from './pages/Home/Home';
import Loading from './component/Loading/Loading';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import Profile from './pages/Profile/Profile';
import MakeAppointments from './pages/MakeAppointments/MakeAppointments';
import MakeRoomReservations from './pages/MakeRoomReservations/MakeRoomReservations';
import AppointmentConfirmation from './pages/AppointmentConfirmation/AppointmentConfirmation';
import ReservationPage from './pages/ReservationPage/ReservationPage';
import './App.css';
import ClassroomAdd from './pages/ClassromAddPage/ClassroomAdd';

function App() {
  // TODO: temp data
  const user = {};
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
      <Loading />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<LoginSignup />} />
          <Route path="/login" element={<LoginSignup />} />
          {/* Protected routes */}
          <Route element={<ProtectedRoutes user={user} />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/add-new-room" element={<ClassroomAdd />} />
            <Route
              path="/make-room-reservations"
              element={<MakeRoomReservations />}
            />
            <Route path="/make-appointments" element={<MakeAppointments />} />
            <Route
              path="/appointment/confirm"
              element={<AppointmentConfirmation {...data} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
