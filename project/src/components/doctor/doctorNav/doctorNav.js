import React from 'react'
import { LogOut } from 'lucide-react';
import './doctorNav.css'

function DoctorNav() {
    return (
        <nav className='doctorNav'>
            <div><img src="./logo.png" alt="logo" className='logo2' /><span className='title2'>Health</span></div>
            <div id='per2'>Hello Health</div>
            <button className='Logout2'><LogOut /> Logout</button>
        </nav>

    )
}

export default DoctorNav