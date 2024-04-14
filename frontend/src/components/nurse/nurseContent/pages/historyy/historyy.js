import React from 'react'
import './historyy.css'

function Historyy() {
  return (
    <div >
      <h2 id='history'>History of Patients</h2>

      <form className="serchConsu">
        <h4>Find consultations of patient:</h4>
        <div className="row1">
          <input type="text" name="cin" placeholder="CIN" required />
          <button type="submit">Search</button>
        </div>
        
      </form>
    </div>
  )
}

export default Historyy