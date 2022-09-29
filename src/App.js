import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import AppointmentSidebar from './component/Appointment Sidebar/AppointmentSidebar';

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
