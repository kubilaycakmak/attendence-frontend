import React from 'react';
import AppointmentCard from "./component/AppointmentCard/AppointmentCard";
import userDatas from "./component/AppointmentCard/userData.json";
import "./reset.scss";
import './App.css';

function App() {
 
  return (
    <>
    <div className="App">
    {
     userDatas.map((userData)=>
      (
      <AppointmentCard
        id={userData.id}
        photo={userData.photo}
        full_name={userData.full_name}
        role={userData.role}
        description={userData.description}
        />
        )
        
          )
    }
    </div>
    </>
  );
}

export default App;
