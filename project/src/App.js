import React, { useState } from "react";
import './App.css'
import Home from "./components/home/home";
import Nurse from "./components/nurse/nurse";
import Doctor from "./components/doctor/doctor";

function App() {

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Nurse /> */}
      <Doctor />
    </div>
  );
}

export default App;
