import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import AvatarMenu from "./component/AvatarMenu/AvatarMenu";
import ForgetPassword from './component/ForgetPassword/ForgetPassword'
import NewPassword from './component/NewPassword/NewPassword'
import Profile from "./pages/Profile/Profile"
import NotFoundPage from './pages/NotFoundPage'
import Header from "./component/Header/Header"

function App() {
  const state = useSelector(state=>state)
  // TODO: temp data
  // Profile page
  const list1 = [
    {
      image: "/location-sample.jpg",
      location: "Microsoft Room ~ 4.Flor",
      date: "Date: Thursday, 23, 2022 11:15am",
      duration: "Duration: 45 minutes",
    },
    {
      image: "/location-sample.jpg",
      location: "Microsoft Room ~ 4.Flor",
      date: "Date: Thursday, 23, 2022 11:15am",
      duration: "Duration: 45 minutes",
    },
    {
      image: "/location-sample.jpg",
      location: "Microsoft Room ~ 4.Flor",
      date: "Date: Thursday, 23, 2022 11:15am",
      duration: "Duration: 45 minutes",
    },
    {
      image: "/location-sample.jpg",
      location: "Microsoft Room ~ 4.Flor",
      date: "Date: Thursday, 23, 2022 11:15am",
      duration: "Duration: 45 minutes",
    },
  ]
  // Location & Direction page
  const list2 = [
    {
      type: "classroom",
      image: "/location-sample.jpg",
      location: "Microsoft Room ~ 4.Flor",
      description:
        "This class location is at first floor and next to elevator.",
    },
    {
      type: "classroom",
      image: "/location-sample.jpg",
      location: "Microsoft Room ~ 4.Flor",
      description:
        "This class location is at first floor and next to elevator. This class location is at first floor and next to elevator. This class location is at first floor and next to elevator.",
    },
    {
      type: "amenity",
      image: "/location-sample.jpg",
      location: "Restroom ~ 1st Floor",
      description:
        "This class location is at first floor and next to elevator.",
    },
    {
      type: "amenity",
      image: "/location-sample.jpg",
      location: "Restroom ~ 1st Floor",
      description:
        "This class location is at first floor and next to elevator.",
    },
  ]

  return (
    <>
      <BrowserRouter>
        <div className='App'>
          
          {state.auth.isAuth ? <AvatarMenu /> : <Header />}
          {/* <AvatarMenu />
          <ReservationCardList list={list1} isForReserved={true} />
          <ReservationCardList list={list2} /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<LoginSignup />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/forgot-password" element={<ForgetPassword />}/>
            <Route path="/new-password/:id" element={<NewPassword />}/>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path="*" element={<NotFoundPage />} />
              {/* <Route path="guest" element={<Home/>}/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
