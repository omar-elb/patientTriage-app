import React from 'react'
import linkdin from '/Users/SNAKE/react-app/project/src/images/linkdin.png'
import facebook from '/Users/SNAKE/react-app/project/src/images/facebook.png'
import instagram from '/Users/SNAKE/react-app/project/src/images/instagram.png'
import './contact.css'
function Contact() {
    return (
        <div id='contact'>
            <div className='tex'>
                <div className='we'>
                    WE HELP YOU CHECK
                    ON YOUR <span style={{ color: 'rgb(0, 242, 255)', textDecoration: 'underline' }}>HEALTH</span> AND
                    THOSE AROUND YOU
                </div>
                <br />
                <br />
                <div className='lien'>
                    <a href="+">Terms & Condition</a>
                    <a href="+">Privacy Policy</a>
                </div>
            </div>
            <div className='info'>
                <div className='social'>
                    <a href="+"><img src={linkdin} alt="linkdin" className='soc1' /></a>
                    <a href="+"><img src={facebook} alt="facebook" className='soc2' /></a>
                    <a href="+"><img src={instagram} alt="instagram" className='soc3' /></a>
                </div>
                <br />
                <div>
                    Phone: +212600000000 <br />
                    Emai: example@gmail.com
                </div>
            </div>
        </div>
    )
}

export default Contact