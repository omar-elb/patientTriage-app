import React from 'react'
import { LogOut } from 'lucide-react';
import './nurseNave.css'

function NurseNave() {
    return (
        <nav className='nurseNav'>
            <div><img src="./logo.png" alt="logo" className='logo1' /><span className='title1'>Health</span></div>
            <div id='per1'>Hello Health</div>
            <button className='Logout1'><LogOut /> Logout</button>
        </nav>

    )
}

export default NurseNave