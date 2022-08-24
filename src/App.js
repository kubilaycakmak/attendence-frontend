import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import './App.css';
import LoginSignup from './component/pages/LoginSignup/LoginSignup';
import AvatarMenu from './component/AvatarMenu/AvatarMenu';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <AvatarMenu />
          <Routes>
            <Route path="/register" element={<LoginSignup />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
