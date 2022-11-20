import React, { useEffect, useState } from "react"
import ProfileTabBtn from "./component/Profile-tab-btn/ProfileTabBtn"
import Form from "./component/Profile-tab-btn/Form/Form"
import AppointmentCalendar from "./component/appointment-calendar/AppointmentCalendar"
import "./App.css"
import "react-calendar/dist/Calendar.css"
import LoginSignup from "./component/pages/LoginSignup/LoginSignup"
import AvatarMenu from "./component/AvatarMenu/AvatarMenu"
import ReservationCardList from "./component/ReservationCardList/ReservationCardList"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./component/Footer/Footer"
import axios from "axios"

function App() {
  const [roomData, setRoomData] = useState()

  useEffect(() => {
    const url = "https://attendance-backend-dev.herokuapp.com/api/rooms/"
    axios
      .get(url)
      .then((res) => {
        // console.log("res", res)
        setRoomData(res.data)
      })
      .catch((error) => console.error(`Error:${error}`))
  }, [])

  // const roomDetail = [
  //   {
  //     _id: "6334eaf064e8a6df4ed2221c",
  //     name: "Amazon Room",
  //     type: "classroom",
  //     floor: 3,
  //     description: "This room has AC",
  //     picture_url:
  //       "http://res.cloudinary.com/ditucvfmr/image/upload/v1664919008/attendance/rooms/6334eaf064e8a6df4ed2221c.png",
  //     total_seats: 30,
  //   },
  //   {
  //     _id: "6334eaf064e8a6df4ed2221c",
  //     name: "Amazon Room",
  //     type: "classroom",
  //     floor: 3,
  //     description: "This room has AC",
  //     picture_url:
  //       "http://res.cloudinary.com/ditucvfmr/image/upload/v1664919008/attendance/rooms/6334eaf064e8a6df4ed2221c.png",
  //     total_seats: 30,
  //   },
  //   {
  //     _id: "6335e24c64e8a6df4ed2223f",
  //     name: "Facebook Room",
  //     type: "classroom",
  //     floor: 3,
  //     description: "This room has a projector",
  //     picture_url: "https://trtrtewfergregertyuifghj.jpg",
  //     total_seats: 20,
  //   },
  //   {
  //     _id: "6335f9fc3ae83c2f014f3127",
  //     name: "Amazon room ~ 1st Floor",
  //     type: "classroom",
  //     floor: 1,
  //     description:
  //       "This class location is at first floor and next to elevator.",
  //     picture_url: "",
  //     total_seats: 30,
  //     __v: 0,
  //   },
  //   {
  //     _id: "6335f9fc3ae83c2f014f3127",
  //     name: "Amazon room ~ 1st Floor",
  //     type: "classroom",
  //     floor: 1,
  //     description:
  //       "This class location is at first floor and next to elevator.",
  //     picture_url: "",
  //     total_seats: 30,
  //     __v: 0,
  //   },
  //   {
  //     _id: "6335fe33ee26feba6c20f4e3",
  //     name: "Amazon room ~ 1st Floor 10 seats",
  //     type: "washroom",
  //     floor: 2,
  //     description:
  //       "This class location is at second floor and next to elevator.",
  //     picture_url: "",
  //     total_seats: 10,
  //     __v: 0,
  //   },
  // ]

  return (
    <div>
      {/* <ProfileTabBtn /> */}
      {/* <AppointmentCalendar /> */}
      <BrowserRouter>
        <div>
          {/* <AvatarMenu /> */}
          {/* <LocationDirectionFilter /> */}
          {/* <ReservationCardList
            // list={list1}
            roomDetail={roomDetail}
            isForReserved={true}
          /> */}
          {roomData && <ReservationCardList roomData={roomData} />}
          <Routes>
            <Route path='/register' element={<LoginSignup />} />
            <Route path='/login' element={<LoginSignup />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
