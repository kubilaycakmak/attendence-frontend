import React from "react"
import "./App.css"
import AppointmentConfirmation from "./component/Appointment-confirmation/AppointmentConfirmation"

function App() {
  const data = {
    user: {
      fullName: "Joe Doe",
      roles: ["TA", "Teacher"],
      department: "WMAD Co-op Manager",
    },
    id: "1293193ahsdhsadh1238183",
    date: 1660546800,
    duration: "30m",
  }

  return (
    <div className='App'>
      <AppointmentConfirmation {...data} />
    </div>
  )
}

export default App
