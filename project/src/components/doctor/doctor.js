import React, { useState } from 'react'
import DoctorNav from './doctorNav/doctorNav'
import DoctorSide from './doctorSide/doctorSide'
import DoctorContent from './doctorContent/doctorContent'
import './doctor.css'

function Doctor() {
    const [elm, setElm] = useState('1')

    function displayElm(x) {
        setElm(x)
        console.log(x)
    }

    return (
        <div className='do'>
            <DoctorNav />
            <div className='sAndC2'>
                <DoctorSide disp={displayElm} />
                <DoctorContent elm1={elm} />
            </div>
        </div>
    )
}

export default Doctor