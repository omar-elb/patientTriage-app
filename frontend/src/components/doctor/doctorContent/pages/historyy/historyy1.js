import React from 'react'
import './historyy1.css'

function Historyy1() {
  return (
    <div >
      <h2 id='history1'>History of Patients</h2>

      <form className="serchConsu1">
        <h4>Find consultations of patient:</h4>
        <div className="row2">
          <input type="text" name="cin" placeholder="CIN" required />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}

export default Historyy1