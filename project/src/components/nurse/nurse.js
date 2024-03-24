import React, { useState } from 'react'
import NurseNave from './nurseNav/nurseNave'
import NurseContent from './nurseContent/nurseContent'
import NurseSide from './nurseSide/nurseSide'
import './nurse.css'

function Nurse() {
  const [elm, setElm] = useState('1')

    function displayElm(x) {
        setElm(x)
        console.log(x)
    }
  return (
    <div className='nu'>
      <NurseNave />
      <div className='sAndC1'>
        <NurseSide disp={displayElm}/>
        <NurseContent elm1={elm}/>
      </div>
    </div>
  )
}

export default Nurse