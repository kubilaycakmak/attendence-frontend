import React, { useEffect, useState } from 'react';
import FilterView from "./component/Staff-filter/FilterView";
import AppointmentCard from "./component/AppointmentCard/AppointmentCard";
import userDatas from "./component/AppointmentCard/userData.json";
import "./reset.scss";
import './App.css';

export function App() {
  const [filtered, setFiltered] = useState(["All"])
  const [users, setUsers] = useState([])

  const data = [
    {
        id: 1,
        full_name: "aaa aaa",
        role:["TA", "Teacher"]
    },
    {
        id: 2,
        full_name: "bbb bbb",
        role:["Co-op Manager"]
    },
    {
        id: 3,
        full_name: "ccc ccc",
        role:["TA", "Co-op Manager"]
    },
    {
        id: 4,
        full_name: "ddd ddd",
        role:["Teacher"]   
    },
    {
        id: 5,
        full_name: "eee eee",
        role:["TA"]
    },
    {
        id: 6,
        full_name: "fff fff",
        role:["Teacher", "Co-op Manager"]
    }
  ]

  const onClickFunction = (role) => {
    if(role === "All" || filtered.length == 0){
      return setFiltered(["All"])
    }
    if(role !== "All"){
      let newArray = filtered.filter((item) => {
          if(item !== "All"){
              return item
          }
      })
      setFiltered(newArray)
    }
  if(!filtered.includes(role)){
      setFiltered(prev => [...prev, role])
  }else {
      let newArr = filtered.filter(item =>{
          if(item !== role){
              return item
          }
      })

       setFiltered(newArr)
   }
  }

  useEffect(() => {
    
    if(filtered.length == 0) setFiltered(["All"])

    if(filtered.includes("All")){
      setUsers(data);
    }else{
      
      let unique = [];
      let arr = [];
      
      for(let i = 0; i < data.length; i++){
        for(let j = 0; j < data[i].role.length; j++) {
          if(filtered.includes(data[i].role[j])){
            arr.push(data[i])
            unique = [...new Set(arr)];
          }
        }
      }
      setUsers(unique);
    }
    
    // console.log(filtered);
    // if(filtered.includes("All")){
    //   newArray.push(...users);
    // }else if(!filtered.includes("All")) {
    //   setUsers([]);
    //   let arr = users.map((item, index) => {
    //       item.role.forEach((role, index) => {
    //           if(filtered.includes(role)){
    //               // setUsers(item)
    //               //return item
    //               newArray.push(item)
    //               // setUsers((prev) => [...prev, item])
    //           }
    //       })
    //   })
      // setUsers(arr);
    // }
  }, [filtered])

 
  return (
    <>
    <>
    <div className="App">
      <FilterView 
        userData = {users}
        filteredRole={filtered}
        onClickFunction={onClickFunction}
      />
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
    </>
  );
}

export default  App;
