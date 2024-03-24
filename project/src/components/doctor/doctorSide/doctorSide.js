import React from 'react'
import { HeartPulse, Radiation, CircleUser } from 'lucide-react';
import { Link } from "react-router-dom";
import './doctorSide.css'

function DoctorSide(props) {
    return (
        <div className='side2'>
            <ul>
                <li className='elm2'><HeartPulse /> <button onClick={()=>props.disp('1')} className='l2'>Treatment</button></li>
                <li className='elm2'><Radiation /> <button onClick={()=>props.disp('2')} className='l2'>Radiography</button></li>
                <li className='elm2'><CircleUser /> <button onClick={()=>props.disp('3')} className='l2'>Profile</button></li>
            </ul>
        </div>
    )
}

export default DoctorSide