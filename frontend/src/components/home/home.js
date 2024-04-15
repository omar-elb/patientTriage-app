import React, { useState } from "react";
import Navbar from "./NavBar/navbar";
import Intro from "./intro/intro";
import Model from "./intro/model/model";
import './home.css'
import About from "./about/about";
import Contact from "./contact/contact";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.value);
  if (user != {}) {
    if (user.personnel_type == 'nurse') {
      navigate('/nurse');
    } else {
      navigate('/doctor');
    }
  }

  const [model, setModel] = useState(false);

  const toggleModel = () => {
    setModel(!model);
  };
  if (model) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  return (
    <div className="App">
      <Navbar show={toggleModel} />
      <Intro />
      {model && <Model show={toggleModel} />}
      <About />
      <Contact />
    </div>
  );
}

export default Home;