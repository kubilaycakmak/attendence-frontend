import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './component/ProtectedRoutes/ProtectedRoutes';
import Home from './pages/Home/Home';
import ErrorDisplay from './component/ErrorDisplay/ErrorDisplay';
import Loading from './component/Loading/Loading';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import Profile from './pages/Profile/Profile';
import MakeAppointments from './pages/MakeAppointments/MakeAppointments';
import MakeRoomReservations from './pages/MakeRoomReservations/MakeRoomReservations';
import AppointmentConfirmation from './pages/AppointmentConfirmation/AppointmentConfirmation';
import ReservationPage from './pages/ReservationPage/ReservationPage';
import './App.css';
import ClassroomAdd from './pages/ClassroomAddPage/ClassroomAdd';
import AppointmentCreation from './pages/AppointmentCreation/AppointmentCreation';

function App() {
  return (
    <div className="App">
      <ErrorDisplay />
      <Loading />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<LoginSignup />} />
          <Route path="/login" element={<LoginSignup />} />
          {/* Protected routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/add-new-room" element={<ClassroomAdd />} />
            <Route
              path="/make-room-reservations"
              element={<MakeRoomReservations />}
            />
            <Route path="/make-appointments" element={<MakeAppointments />} />
            <Route
              path="/make-appointments/:userId"
              element={<AppointmentCreation />}
            />
            <Route
              path="/make-appointments/:userId/confirm"
              element={<AppointmentConfirmation />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
