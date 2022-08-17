import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App"></div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
