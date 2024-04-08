import React from 'react'
import './patients.css'

function Patients() {
  return (
    <div>
      <h2 id='patients'>Patients</h2>

      <form className="form1">
        <h4>Find a patient:</h4>
        <div className="row">
          <input type="text" name="cin" placeholder="CIN" required />
          <button type="submit">Search</button>
        </div>
      </form>


      <form className="form1" style={{borderTop:'0.5px solid rgba(0, 0, 0, 0.15)'}}>
      <h4>Add a patient:</h4>
        <div className="row">
          <input type="text" name="cin" placeholder="CIN" required />
          <input type="text" name="name" placeholder="Full Name" required />
        </div>
        <div className="row">
          <label htmlFor="date">Date of birth:
            <input type="date" name="date" required />
          </label>
          <label htmlFor="sex">Sex:
            <select name="sex" id="sex">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div className="row">
          <input type="tel" name="tel" placeholder="Phone number" required />
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <input type="text" name="adress" placeholder="Adress" required />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Patients