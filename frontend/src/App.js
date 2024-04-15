import React, { useState } from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/home";
import Nurse from "./components/nurse/nurse";
import Doctor from "./components/doctor/doctor";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nurse" element={<Nurse />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
