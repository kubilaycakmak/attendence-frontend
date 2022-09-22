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
         
           <Route exact path="/" element={<AppointmentSidebar/>}>
           </Route>
           <Route exact path="/appointment" element={<Appointment/>}>
           </Route>
          <Route exact path="/appointment?status=confirm" element={<Confirm/>}>
          </Route>
           {/* Do I NEED THE COMPONENTS SEPERATELY. AND TO LOCATE THEM IN THE EXACT PATH. BC THE WARNING SAYS NO ROUTES MATCHED LOCATION FOR, FOR EXAMPLE /appointment%3Fstatus=confirm?statu <Route  exact path="/appointment/:status". How to navigate from component buttons to these links? element={<AppointmentSidebar/>}>
           </Route> */}
           
        </Routes>
      
  
    </div>
  );
}

export default App;
