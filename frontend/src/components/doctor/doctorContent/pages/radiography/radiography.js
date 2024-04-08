import React from 'react'
import './radiography.css'

function Radiography() {
  return (
    <div>
      <h2 id='Radiography'>Radiography</h2>
      <form className='rad'>
        <h4>Select the file you want a report of it:</h4>
        <input type="file" accept="image/*" />
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default Radiography