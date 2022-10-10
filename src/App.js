import React from 'react'

import './App.css'
import FullCalendar from './component/FullCalendar/FullCalendar'
import Sidebar from './component/Sidebar/Sidebar'
import Time from './component/Time/Time'
import Week from './component/Week/Week'
function App() {
  return (
    <div className='App'>
      <Sidebar />
      <FullCalendar />
      <Week />
      <Time />
    </div>
  )
}

export default App
