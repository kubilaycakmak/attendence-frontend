import React from 'react'

import './App.css'
import Sidebar from './component/Sidebar/Sidebar'
import Time from './component/Time/Time'
import Week from './component/Week/Week'
function App() {
  return (
    <div className='App'>
      <Sidebar />
      <Week />
      <Time />
    </div>
  )
}

export default App
