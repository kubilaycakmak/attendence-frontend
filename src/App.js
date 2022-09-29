import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import AppointmentSidebar from './component/Appointment Sidebar/AppointmentSidebar';
import Appointment from './component/Appointment Sidebar/Appointment.js'
import Confirm from './component/Appointment Sidebar/Confirm.js'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/appointment" element={<AppointmentSidebar/>}>
          </Route>
        </Routes>
      
  
    </div>
  );
}

export default App;
