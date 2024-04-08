import React from 'react'
import digital from '/Users/SNAKE/react-app/patientTriage-app/frontend/src/images/digital.png'
import './about.css'

function About() {
    return (
        <div id='about'>
            <img src={digital} alt="digital" className='digital' />
            <div className='para'>
                <span><h1>About us</h1></span>
                Lorem ipsum is a placeholder text commonly
                used to demonstrate the visual form of a
                document or a typeface without relying on
                meaningful content. Lorem ipsum may be
                used as a placeholder before the final copy is
                available
            </div>
        </div>
    )
}

export default About