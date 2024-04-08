import React, { useState } from 'react'
import './intro.css'
import pers from '/Users/SNAKE/react-app/patientTriage-app/frontend/src/images/pers.png'
import Signin from './sign/signin.js'


function Intro() {

    return (
        <div id="intro">
            <div className="introContent">
                <span className="introText">YOUR HEALTH <br />IS OUR <br /><span className="priority">PRIORITY</span></span>
                <p className="parag">WE HELP YOU CHECK ON YOUR HEALTH AND THOSE AROUND YOU</p>
            </div>
            <div className='form'>
                <Signin />
            </div>
            <img src={pers} alt="personne" className='pers' />
        </div>
    )
}

export default Intro