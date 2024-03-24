import React, { useState } from 'react'
import Treatment from './pages/treatment/treatment'
import Radiography from './pages/radiography/radiography'
import DoctorProfile from './pages/doctorProfile/doctorProfile';
import './doctorContent.css'

function DoctorContent(props) {


    return (
        <div className='doctorContent'>
            {props.elm1 === '1' ? <Treatment /> : props.elm1 === '2' ? <Radiography /> : <DoctorProfile />}
        </div>
    )
}

export default DoctorContent