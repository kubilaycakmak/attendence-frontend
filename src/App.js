import React from "react"
import ProfileTabBtn from "./component/Profile-tab-btn/ProfileTabBtn"
import Form from "./component/Profile-tab-btn/Form/Form"
import AppointmentCalendar from "./component/appointment-calendar/AppointmentCalendar"
import "./App.css"
import "react-calendar/dist/Calendar.css"

function App() {
  return (
    <div className='App'>
      {/* <ProfileTabBtn /> */}
      <AppointmentCalendar />
    </div>
  )
}

export default App
